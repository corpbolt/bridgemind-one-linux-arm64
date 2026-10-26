# Maintainer: BridgeMind Linux ARM64 Port
pkgname=bridgemind-one-bin
pkgver=0.3.4
pkgrel=1
pkgdesc="BridgeMind One — Your agentic workspace for shipping software (Native Linux aarch64)"
arch=('aarch64')
url="https://bridgemind.ai"
license=('custom:Proprietary')
depends=(
  'webkit2gtk-4.1'
  'gtk3'
  'libayatana-appindicator'
  'librsvg'
  'xdg-utils'
  'procps-ng'
  'gnome-keyring'
  'libsecret'
)
provides=('bridgemind-one')
conflicts=('bridgemind-one')
options=('!strip')

package() {
  cd "${startdir}"

  install -Dm755 "bin/bridgemind-one-rust" "${pkgdir}/usr/bin/bridgemind-one-rust"
  install -Dm755 "bin/bridgemind-pty-host" "${pkgdir}/usr/bin/bridgemind-pty-host"
  install -Dm755 "bin/bridgemind-tickets" "${pkgdir}/usr/bin/bridgemind-tickets"
  install -Dm755 "run-bridgemind-one-arm64.sh" "${pkgdir}/usr/bin/bridgemind-one"

  install -dm755 "${pkgdir}/usr/lib/BridgeMind One/icons"
  install -dm755 "${pkgdir}/usr/lib/BridgeMind One/licenses"
  install -Dm644 resources/audio-cues/*.wav "${pkgdir}/usr/lib/BridgeMind One/icons/"
  install -Dm644 resources/licenses/*.txt "${pkgdir}/usr/lib/BridgeMind One/licenses/"

  for size in 32x32 128x128 256x256 512x512; do
    install -Dm644 "resources/icons/${size}.png" "${pkgdir}/usr/share/icons/hicolor/${size}/apps/bridgemind-one-rust.png"
    install -Dm644 "resources/icons/${size}.png" "${pkgdir}/usr/share/icons/hicolor/${size}/apps/ai.bridgemind.one.png"
  done
  install -Dm644 "resources/icons/256x256.png" "${pkgdir}/usr/share/pixmaps/bridgemind-one-rust.png"
  install -Dm644 "resources/icons/256x256.png" "${pkgdir}/usr/share/pixmaps/ai.bridgemind.one.png"

  install -dm755 "${pkgdir}/usr/share/applications"
  cat > "${pkgdir}/usr/share/applications/ai.bridgemind.one.desktop" <<EOF
[Desktop Entry]
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
EOF
  cp "${pkgdir}/usr/share/applications/ai.bridgemind.one.desktop" "${pkgdir}/usr/share/applications/BridgeMind One.desktop"
}
