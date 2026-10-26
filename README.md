# BridgeMind One v0.3.4 — Native Linux ARM64 (`aarch64`)

Complete native **Linux ARM64 (`aarch64`)** distribution and extracted bundle of **BridgeMind One `v0.3.4`** (`ai.bridgemind.one`), configured for **Ubuntu/Debian ARM64** (including NVIDIA DGX Spark / Grace Blackwell / Jetson), **Arch Linux ARM (`aarch64`)**, and **Fedora/RHEL ARM64**.

## Included Components

1. **Native `aarch64` ELF Binaries (`bin/`)**:
   - `bin/bridgemind-one-rust` (`aarch64` 64-bit ELF main Tauri v2 desktop binary)
   - `bin/bridgemind-pty-host` (`aarch64` 64-bit ELF persistent PTY multiplexer daemon)
   - `bin/bridgemind-tickets` (`aarch64` 64-bit ELF local Tickets + MCP engine)
2. **Debian/Ubuntu ARM64 Package (`bridgemind-one_0.3.4_arm64.deb`)**:
   - Official native `arm64` Debian package.
3. **Arch Linux ARM64 `PKGBUILD`**:
   - Native `makepkg -si` package build for Arch Linux `aarch64`.
4. **Linux ARM64 / NVIDIA WebKit2GTK & Keyring Launcher (`install-linux-arm64.sh` & `run-bridgemind-one-arm64.sh`)**:
   - Automatically sets `WEBKIT_DISABLE_DMABUF_RENDERER=1` and `WEBKIT_DISABLE_COMPOSITING_MODE=1` so WebKit2GTK renders cleanly on NVIDIA ARM64 GPUs (avoiding empty grey windows).
   - Automatically starts/unlocks `gnome-keyring-daemon` (`org.freedesktop.secrets`) so your BridgeMind subscriber account stays signed in across restarts.
   - Installs full `32x32`–`512x512` `hicolor` and `pixmaps` application icons (`ai.bridgemind.one` & `bridgemind-one-rust`) and refreshes the desktop icon cache.
   - Includes native Linux custom window controls (Minimize, Maximize/Restore, Close) and header dragging out of the box.
5. **100% Extracted `v0.3.4` Frontend (`dist/`) & Resources (`resources/`)**:
   - All 484 Brotli-compressed assets extracted from the `phf::Map` table (`dist/index.html`, `dist/boot.css`, `dist/theme-preseed.js`, `dist/.vite/manifest.json`, and `dist/assets/*`).
   - Audio dictation cues (`resources/audio-cues/*.wav`) and `terminal-assist` shell integration scripts (`resources/terminal-assist/`).

---

## Quick Start on Linux ARM64 (`aarch64`)

### Option A: One-Command Install (Ubuntu / Debian / Arch Linux / Fedora ARM64)

```bash
git clone https://github.com/corpbolt/bridgemind-one-linux-arm64.git
cd bridgemind-one-linux-arm64
chmod +x install-linux-arm64.sh run-bridgemind-one-arm64.sh
./install-linux-arm64.sh
```

Then launch from your terminal or application menu:

```bash
bridgemind-one
```

---

### Option B: Arch Linux ARM (`aarch64`) via `makepkg`

```bash
git clone https://github.com/corpbolt/bridgemind-one-linux-arm64.git
cd bridgemind-one-linux-arm64
makepkg -si
bridgemind-one
```

---

### Option C: Run Directly Without System Installation

```bash
chmod +x run-bridgemind-one-arm64.sh
./run-bridgemind-one-arm64.sh
```
