#!/usr/bin/env bash
# ============================================================================
# BridgeMind One v0.3.4 — Native Linux ARM64 (aarch64) .deb Package Builder
# Assembles and compiles BridgeMind-One_0.3.4_arm64.deb using dpkg-deb
# ============================================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${SCRIPT_DIR}"

echo "============================================================"
echo "  Building BridgeMind One v0.3.4 Debian Package (arm64)"
echo "============================================================"

STAGE_DIR="$(mktemp -d)"
trap 'rm -rf "${STAGE_DIR}"' EXIT

mkdir -p \
  "${STAGE_DIR}/DEBIAN" \
  "${STAGE_DIR}/usr/bin" \
  "${STAGE_DIR}/usr/lib/BridgeMind One/icons" \
  "${STAGE_DIR}/usr/lib/BridgeMind One/licenses" \
  "${STAGE_DIR}/usr/lib/BridgeMind One/terminal-assist" \
  "${STAGE_DIR}/usr/share/applications" \
  "${STAGE_DIR}/usr/share/metainfo" \
  "${STAGE_DIR}/usr/share/pixmaps"

# 1. Install native aarch64 binaries & launcher wrapper
install -Dm755 "${SCRIPT_DIR}/bin/bridgemind-one-rust" "${STAGE_DIR}/usr/bin/bridgemind-one-rust"
install -Dm755 "${SCRIPT_DIR}/bin/bridgemind-pty-host" "${STAGE_DIR}/usr/bin/bridgemind-pty-host"
install -Dm755 "${SCRIPT_DIR}/bin/bridgemind-tickets" "${STAGE_DIR}/usr/bin/bridgemind-tickets"

cat > "${STAGE_DIR}/usr/bin/bridgemind-one" <<'EOF'
#!/usr/bin/env bash
export WEBKIT_DISABLE_DMABUF_RENDERER="${WEBKIT_DISABLE_DMABUF_RENDERER:-1}"
export WEBKIT_DISABLE_COMPOSITING_MODE="${WEBKIT_DISABLE_COMPOSITING_MODE:-1}"

if command -v gnome-keyring-daemon >/dev/null 2>&1; then
  if ! pgrep -u "${USER:-$(id -un)}" -x gnome-keyring-d >/dev/null 2>&1 && \
     ! pgrep -u "${USER:-$(id -un)}" -f gnome-keyring-daemon >/dev/null 2>&1; then
    eval "$(printf '' | gnome-keyring-daemon --unlock --components=secrets 2>/dev/null || true)"
  fi
fi

exec /usr/bin/bridgemind-one-rust "$@"
EOF
chmod 755 "${STAGE_DIR}/usr/bin/bridgemind-one"

# 2. Copy resources, audio cues, licenses, and terminal-assist scripts
cp -f "${SCRIPT_DIR}/resources/audio-cues/"*.wav "${STAGE_DIR}/usr/lib/BridgeMind One/icons/"
cp -f "${SCRIPT_DIR}/resources/licenses/"*.txt "${STAGE_DIR}/usr/lib/BridgeMind One/licenses/"
cp -f "${SCRIPT_DIR}/resources/terminal-assist/"* "${STAGE_DIR}/usr/lib/BridgeMind One/terminal-assist/" 2>/dev/null || true
cp -f "${SCRIPT_DIR}/resources/terminal-assist/".z* "${STAGE_DIR}/usr/lib/BridgeMind One/terminal-assist/" 2>/dev/null || true

# 3. Install icons across hicolor and pixmaps
for SIZE in 32x32 128x128 256x256 512x512; do
  install -Dm644 "${SCRIPT_DIR}/resources/icons/${SIZE}.png" "${STAGE_DIR}/usr/share/icons/hicolor/${SIZE}/apps/bridgemind-one-rust.png"
  install -Dm644 "${SCRIPT_DIR}/resources/icons/${SIZE}.png" "${STAGE_DIR}/usr/share/icons/hicolor/${SIZE}/apps/ai.bridgemind.one.png"
done
install -Dm644 "${SCRIPT_DIR}/resources/icons/256x256.png" "${STAGE_DIR}/usr/share/pixmaps/bridgemind-one-rust.png"
install -Dm644 "${SCRIPT_DIR}/resources/icons/256x256.png" "${STAGE_DIR}/usr/share/pixmaps/ai.bridgemind.one.png"

# 4. Create .desktop entries
cat > "${STAGE_DIR}/usr/share/applications/ai.bridgemind.one.desktop" <<'EOF'
[Desktop Entry]
Categories=Development;
Comment=Your agentic workspace for shipping software.
Exec=/usr/bin/bridgemind-one
Icon=ai.bridgemind.one
Name=BridgeMind One
Terminal=false
Type=Application
StartupWMClass=ai.bridgemind.one
StartupNotify=true
Keywords=Agent;Developer;Terminal;Workspace;
EOF
cp "${STAGE_DIR}/usr/share/applications/ai.bridgemind.one.desktop" "${STAGE_DIR}/usr/share/applications/BridgeMind One.desktop"

# 5. Create DEBIAN/control and DEBIAN/postinst
cat > "${STAGE_DIR}/DEBIAN/control" <<'EOF'
Package: bridgemind-one
Version: 0.3.4
Architecture: arm64
Installed-Size: 47600
Maintainer: BridgeMind
Provides: bridge-mind-one
Conflicts: bridge-mind-one
Replaces: bridge-mind-one
Section: devel
Priority: optional
Homepage: https://bridgemind.ai
Depends: libwebkit2gtk-4.1-0, libgtk-3-0t64 | libgtk-3-0, libayatana-appindicator3-1, librsvg2-2, xdg-utils, procps, gnome-keyring, libsecret-1-0
Description: Your agentic workspace for shipping software.
 BridgeMind brings agents, chats, workspaces, terminals, and browser threads into one secure desktop workspace.
EOF

cat > "${STAGE_DIR}/DEBIAN/postinst" <<'EOF'
#!/bin/sh
set -e
if command -v gtk-update-icon-cache >/dev/null 2>&1; then
  gtk-update-icon-cache -f -t /usr/share/icons/hicolor >/dev/null 2>&1 || true
fi
if command -v update-desktop-database >/dev/null 2>&1; then
  update-desktop-database /usr/share/applications >/dev/null 2>&1 || true
fi
exit 0
EOF
chmod 755 "${STAGE_DIR}/DEBIAN/postinst"

OUT_DEB="${SCRIPT_DIR}/bridgemind-one_0.3.4_arm64.deb"
dpkg-deb --root-owner-group -Zgzip --build "${STAGE_DIR}" "${OUT_DEB}"

echo "============================================================"
echo "  Build Complete!"
echo "  Debian Package (.deb):"
ls -lh "${OUT_DEB}"
echo ""
echo "  Install with:"
echo "    sudo apt install ./bridgemind-one_0.3.4_arm64.deb"
echo "  Then launch:"
echo "    bridgemind-one"
echo "============================================================"
