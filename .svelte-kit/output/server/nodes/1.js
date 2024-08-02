

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.FBTuA5Jm.js","_app/immutable/chunks/scheduler.DMUGxSNz.js","_app/immutable/chunks/index.C4PchQHZ.js","_app/immutable/chunks/entry.CNgcHVFj.js"];
export const stylesheets = [];
export const fonts = [];
