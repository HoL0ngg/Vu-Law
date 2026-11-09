/**
 * Integritas Vu Legal - tells GitHub when the Insights folder in Google Drive changes.
 *
 * Paste this into a new project at https://script.google.com (signed in as the Drive owner),
 * set the Script Properties listed below, run `installTrigger` once and approve the access
 * prompt. From then on `checkDrive` runs every 5 minutes.
 *
 * Script Properties (Project Settings > Script Properties):
 *   FOLDER_ID     the id of the "IVL Insights" folder (the part after /folders/ in its link)
 *   GITHUB_REPO   HoL0ngg/Vu-Law
 *   GITHUB_TOKEN  a fine-grained token for that repository only, with "Contents: Read and write"
 *
 * It sends no file contents anywhere: it only asks GitHub to run the sync, which then reads
 * the folder itself with its own read-only access.
 */

const PROPS = PropertiesService.getScriptProperties();

function checkDrive() {
  const root = DriveApp.getFolderById(PROPS.getProperty('FOLDER_ID'));
  const parts = [];
  const folders = root.getFolders();
  while (folders.hasNext()) {
    const folder = folders.next();
    parts.push(folder.getId() + ':' + folder.getName());
    const files = folder.getFiles();
    while (files.hasNext()) {
      const file = files.next();
      parts.push(file.getId() + ':' + file.getName() + ':' + file.getLastUpdated().getTime() + ':' + file.getSize());
    }
  }
  parts.sort();
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, parts.join('|'));
  const signature = Utilities.base64Encode(digest);

  if (signature === PROPS.getProperty('SENT_SIGNATURE')) return; // nothing new
  if (signature !== PROPS.getProperty('PENDING_SIGNATURE')) {
    // Something changed. Wait one more round, so a folder still being uploaded is not sent half-done.
    PROPS.setProperty('PENDING_SIGNATURE', signature);
    return;
  }

  const response = UrlFetchApp.fetch('https://api.github.com/repos/' + PROPS.getProperty('GITHUB_REPO') + '/dispatches', {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + PROPS.getProperty('GITHUB_TOKEN'),
      Accept: 'application/vnd.github+json',
    },
    payload: JSON.stringify({ event_type: 'drive-sync' }),
    muteHttpExceptions: true,
  });
  if (response.getResponseCode() === 204) {
    PROPS.setProperty('SENT_SIGNATURE', signature);
  } else {
    console.error('GitHub answered ' + response.getResponseCode() + ': ' + response.getContentText());
  }
}

/** Run once by hand: replaces any earlier trigger with one every 5 minutes. */
function installTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (trigger) {
    ScriptApp.deleteTrigger(trigger);
  });
  ScriptApp.newTrigger('checkDrive').timeBased().everyMinutes(5).create();
  checkDrive();
}
