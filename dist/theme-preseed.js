// Runs synchronously in <head>, before the first paint and before the bundle.
// It applies the builder's last appearance and theme so the startup frame, the launch
// splash and every gate paint in the right palette (Swift applies the stored
// appearance before its first window draws), and marks which launch this is
// so the static startup frame matches what the splash then draws: an empty
// canvas the intro's particles assemble on, or the routine overlay's still.
// The keys are written by src/domain/launchPresentation.ts; change both
// together. Blocked or empty storage keeps index.html's dark defaults.
(() => {
  const root = document.documentElement;
  // Theme ids per mode, from src/domain/themes.ts (display order kept; a test
  // holds the two lists together). The first of each is the mode's default.
  const palettes = {
    dark: ["bridgemind-dark", "tokyo-night", "catppuccin-mocha", "nord", "dracula"],
    light: ["bridgemind-light", "catppuccin-latte", "solarized-light", "github-light"],
  };
  try {
    const storage = window.localStorage;
    const appearance = storage.getItem("bmone.appearance");
    if (appearance === "light" || appearance === "dark") {
      root.dataset.theme = appearance;
      root.style.colorScheme = appearance;
      // Only a known id of this mode; anything else (a newer build's theme, a
      // hand edit) paints the mode's BridgeMind default.
      const stored = storage.getItem("bmone.palette");
      const known = palettes[appearance].includes(stored);
      const palette = known ? stored : palettes[appearance][0];
      root.dataset.palette = palette;
      let canvas = appearance === "light" ? "#e5e5e5" : "#0a0a0a";
      // boot.css knows only the BridgeMind canvases; a non-default theme's
      // frame takes the canvas the app mirrored for it. The shell removes
      // this inline colour once its own stylesheet paints.
      const mirrored = storage.getItem("bmone.canvas");
      if (
        known &&
        palette !== palettes[appearance][0] &&
        mirrored &&
        /^(#[0-9a-f]{3,8}|rgba?\([0-9.,%\s]+\))$/i.test(mirrored)
      ) {
        canvas = mirrored;
        root.style.backgroundColor = mirrored;
      }
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", canvas);
    }
  } catch {
    // Blocked storage keeps index.html's dark defaults.
  }
  // The intro plays once per install; the session flag covers blocked local
  // storage on a reload. Either flag means the routine overlay.
  const played = (storage) => {
    try {
      return window[storage].getItem("bmone.introSplashPlayed") === "1";
    } catch {
      return false;
    }
  };
  root.dataset.launch = played("localStorage") || played("sessionStorage") ? "routine" : "intro";
  // The host OS as `data-platform` on the root, for the few rules that differ
  // per platform before React mounts (foundations.css). Sources in order of
  // trust; an unrecognised host gets no attribute. The title bar carries its
  // own build-target `data-platform`, which this does not touch.
  const classify = (value) => {
    if (typeof value !== "string") return null;
    const host = value.toLowerCase();
    if (host.startsWith("win") || host.includes("windows")) return "windows";
    if (host.includes("mac")) return "macos";
    if (host.includes("linux") || host.includes("x11")) return "linux";
    return null;
  };
  try {
    const nav = window.navigator;
    const platform =
      classify(nav.userAgentData?.platform) ?? classify(nav.platform) ?? classify(nav.userAgent);
    if (platform) root.dataset.platform = platform;
  } catch {
    // A hostile or missing navigator leaves the attribute unset.
  }
})();
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0fdba7ca-a915-5e6b-802d-c70f5facebf3")}catch(e){}}();
//# debugId=0fdba7ca-a915-5e6b-802d-c70f5facebf3
