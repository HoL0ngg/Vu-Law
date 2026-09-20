// Font audit for the IVL site. Paste into the browser console, or run with
// Playwright: `await page.evaluate(<contents of this file>)`.
//
// Prints one row per primary font family used by visible text (and form
// controls), with element counts and samples, then lists font faces that
// actually finished loading. Expected result: exactly one family.
(() => {
  const CONTROLS = new Set(['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT']);
  const families = new Map();

  for (const el of document.querySelectorAll('body, body *')) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') continue;
    const ownText = [...el.childNodes].some(
      (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim()
    );
    if (!ownText && !CONTROLS.has(el.tagName)) continue;

    const primary = cs.fontFamily.split(',')[0].trim().replace(/["']/g, '');
    if (!families.has(primary)) families.set(primary, { count: 0, samples: [] });
    const entry = families.get(primary);
    entry.count += 1;
    if (entry.samples.length < 3) {
      const cls = el.className && typeof el.className === 'string' ? '.' + el.className.split(' ')[0] : '';
      entry.samples.push(`${el.tagName.toLowerCase()}${cls}: ${el.textContent.trim().slice(0, 28)}`);
    }
  }

  const rows = [...families].map(([family, v]) => ({
    family,
    count: v.count,
    samples: v.samples.join(' | '),
  }));
  console.table(rows);

  const loaded = [...document.fonts]
    .filter((f) => f.status === 'loaded')
    .map((f) => `${f.family} ${f.weight} ${f.style}`);
  console.log('Loaded font faces:', loaded);

  const verdict = families.size === 1 ? 'PASS: one primary family' : `FAIL: ${families.size} primary families`;
  console.log(verdict);
  return { verdict, rows, loaded };
})();
