import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
if (!projectId) {
  throw new Error("Set SANITY_STUDIO_PROJECT_ID in studio/.env (see .env.example).");
}

/** Only these actions stay for everyone who is not an administrator. */
const EDITOR_ACTIONS = new Set(["discard", "duplicate", "restore"]);

export default defineConfig({
  name: "ivl",
  title: "Integritas Vu Legal - Insights",
  projectId,
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
  document: {
    /**
     * Approval step: people with the Editor role (the marketing account) can write and save
     * drafts but are given no Publish, Unpublish or Delete button. Only an Administrator
     * sees them, so nothing reaches the website until the administrator has reviewed it.
     * This is enforced on the Studio screen; keep Administrator access to as few people as possible.
     */
    actions: (previous, { currentUser }) => {
      const isAdministrator = currentUser?.roles.some((role) => role.name === "administrator");
      return isAdministrator ? previous : previous.filter(({ action }) => action && EDITOR_ACTIONS.has(action));
    },
  },
});
