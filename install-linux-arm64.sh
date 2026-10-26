#!/usr/bin/env bash
# ============================================================================
# BridgeMind One v0.3.4 — Native Linux ARM64 (aarch64) Installer
# Supports:
#   - Ubuntu / Debian / NVIDIA DGX Spark / Armbian / Raspberry Pi OS (apt)
#   - Arch Linux ARM / Asahi Linux (pacman)
#   - Fedora / RHEL / Rocky Linux ARM64 (dnf)
# ============================================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${SCRIPT_DIR}"

ARCH="$(uname -m)"
echo "============================================================"
echo "  Installing BridgeMind One v0.3.4 for Linux (${ARCH})"
echo "============================================================"

if [[ "${ARCH}" != "aarch64" && "${ARCH}" != "arm64" ]]; then
  echo "[WARN] Detected architecture '${ARCH}' (expected aarch64 / arm64)."
fi

# 1. Install system dependencies & package based on distro
if command -v apt-get >/dev/null 2>&1; then
  echo "[1/4] Detected Debian/Ubuntu (apt). Installing dependencies & .deb package..."
  sudo apt-get update -y
  sudo apt-get install -y \
    ./bridgemind-one_0.3.4_arm64.deb \
    gnome-keyring \
    libsecret-1-0 \
    libayatana-appindicator3-1 \
    librsvg2-2 \
    xdg-utils \
    procps
elif command -v pacman >/dev/null 2>&1; then
  echo "[1/4] Detected Arch Linux (pacman). Installing dependencies..."
  sudo pacman -Sy --needed --noconfirm \
    webkit2gtk-4.1 \
    gtk3 \
    libayatana-appindicator \
    librsvg \
    xdg-utils \
    procps-ng \
    gnome-keyring \
    libsecret
elif command -v dnf >/dev/null 2>&1; then
  echo "[1/4] Detected Fedora/RHEL (dnf). Installing dependencies..."
  sudo dnf install -y \
    webkit2gtk4.1 \
    gtk3 \
    libayatana-appindicator-gtk3 \
    librsvg2 \
    xdg-utils \
    procps-ng \
    gnome-keyring \
    libsecret
fi

# 2. Ensure native aarch64 binaries and resources are installed in /usr/bin and /usr/lib/BridgeMind One
echo "[2/4] Installing native aarch64 binaries and resources..."
sudo install -Dm755 "${SCRIPT_DIR}/bin/bridgemind-one-rust" "/usr/bin/bridgemind-one-rust"
sudo install -Dm755 "${SCRIPT_DIR}/bin/bridgemind-pty-host" "/usr/bin/bridgemind-pty-host"
sudo install -Dm755 "${SCRIPT_DIR}/bin/bridgemind-tickets" "/usr/bin/bridgemind-tickets"

sudo mkdir -p "/usr/lib/BridgeMind One/icons" "/usr/lib/BridgeMind One/licenses"
sudo cp -f "${SCRIPT_DIR}/resources/audio-cues/"*.wav "/usr/lib/BridgeMind One/icons/"
sudo cp -f "${SCRIPT_DIR}/resources/licenses/"*.txt "/usr/lib/BridgeMind One/licenses/"

# Install terminal-assist shell integration into user data directory
USER_DATA_DIR="${XDG_DATA_HOME:-${HOME}/.local/share}/ai.bridgemind.one"
mkdir -p "${USER_DATA_DIR}/terminal-assist"
cp -rf "${SCRIPT_DIR}/resources/terminal-assist/"* "${USER_DATA_DIR}/terminal-assist/"

# 3. Create /usr/bin/bridgemind-one wrapper with WebKit2GTK ARM64/NVIDIA fixes & keyring auto-start
echo "[3/4] Configuring /usr/bin/bridgemind-one launcher & desktop integration..."
sudo tee /usr/bin/bridgemind-one >/dev/null <<'EOF'
#!/usr/bin/env bash
export WEBKIT_DISABLE_DMABUF_RENDERER="${WEBKIT_DISABLE_DMABUF_RENDERER:-1}"
export WEBKIT_DISABLE_COMPOSITING_MODE="${WEBKIT_DISABLE_COMPOSITING_MODE:-1}"

# Ensure D-Bus Secret Service (gnome-keyring) is active so BridgeMind One
# persists account sign-in across restarts on Linux ARM64
if command -v gnome-keyring-daemon >/dev/null 2>&1; then
  if ! pgrep -u "${USER:-$(id -un)}" -x gnome-keyring-d >/dev/null 2>&1 && \
     ! pgrep -u "${USER:-$(id -un)}" -f gnome-keyring-daemon >/dev/null 2>&1; then
    eval "$(printf '' | gnome-keyring-daemon --unlock --components=secrets 2>/dev/null || true)"
  fi
fi

exec /usr/bin/bridgemind-one-rust "$@"
EOF
sudo chmod 755 /usr/bin/bridgemind-one

# 4. Install icons across all standard hicolor & pixmaps sizes and register .desktop entries
echo "[4/4] Installing application icons and .desktop launchers..."
for SIZE in 32x32 128x128 256x256 512x512; do
  sudo install -Dm644 "${SCRIPT_DIR}/resources/icons/${SIZE}.png" "/usr/share/icons/hicolor/${SIZE}/apps/bridgemind-one-rust.png"
  sudo install -Dm644 "${SCRIPT_DIR}/resources/icons/${SIZE}.png" "/usr/share/icons/hicolor/${SIZE}/apps/ai.bridgemind.one.png"
done
sudo install -Dm644 "${SCRIPT_DIR}/resources/icons/256x256.png" "/usr/share/pixmaps/bridgemind-one-rust.png"
sudo install -Dm644 "${SCRIPT_DIR}/resources/icons/256x256.png" "/usr/share/pixmaps/ai.bridgemind.one.png"

DESKTOP_CONTENT="[Desktop Entry]
Categories=Development;
Comment=Your agentic workspace for shipping software.
Exec=/usr/bin/bridgemind-one %U
Icon=ai.bridgemind.one
Name=BridgeMind One
Terminal=false
Type=Application
StartupWMClass=ai.bridgemind.one
StartupNotify=true
Keywords=Agent;Developer;Terminal;Workspace;
"
printf '%s' "${DESKTOP_CONTENT}" | sudo tee "/usr/share/applications/BridgeMind One.desktop" >/dev/null
printf '%s' "${DESKTOP_CONTENT}" | sudo tee "/usr/share/applications/ai.bridgemind.one.desktop" >/dev/null

if command -v gtk-update-icon-cache >/dev/null 2>&1; then
  sudo gtk-update-icon-cache -f -t /usr/share/icons/hicolor >/dev/null 2>&1 || true
fi
if command -v update-desktop-database >/dev/null 2>&1; then
  sudo update-desktop-database /usr/share/applications >/dev/null 2>&1 || true
fi

echo "============================================================"
echo "  BridgeMind One v0.3.4 Installed Successfully!"
echo "  Run from terminal:"
echo "    bridgemind-one"
echo "  Or launch 'BridgeMind One' from your Linux app menu."
echo "============================================================"
