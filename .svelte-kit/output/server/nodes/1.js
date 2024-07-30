

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.igBn6sHg.js","_app/immutable/chunks/scheduler.DMUGxSNz.js","_app/immutable/chunks/index.C4PchQHZ.js","_app/immutable/chunks/entry.X1k9ZWtY.js"];
export const stylesheets = [];
export const fonts = [];
