#!/usr/bin/env bash
# ============================================================================
# BridgeMind One v0.3.4 — Native Linux ARM64 (aarch64) Launcher
# ============================================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

export WEBKIT_DISABLE_DMABUF_RENDERER="${WEBKIT_DISABLE_DMABUF_RENDERER:-1}"
export WEBKIT_DISABLE_COMPOSITING_MODE="${WEBKIT_DISABLE_COMPOSITING_MODE:-1}"

# Ensure D-Bus Secret Service (gnome-keyring) is active so BridgeMind One
# persists your paid account sign-in across restarts
if command -v gnome-keyring-daemon >/dev/null 2>&1; then
  if ! pgrep -u "${USER:-$(id -un)}" -x gnome-keyring-d >/dev/null 2>&1 && \
     ! pgrep -u "${USER:-$(id -un)}" -f gnome-keyring-daemon >/dev/null 2>&1; then
    eval "$(printf '' | gnome-keyring-daemon --unlock --components=secrets 2>/dev/null || true)"
  fi
fi

# Prefer system-installed binary if present, otherwise run directly from ./bin/
if [[ -x "/usr/bin/bridgemind-one-rust" ]]; then
  exec "/usr/bin/bridgemind-one-rust" "$@"
else
  chmod +x "${SCRIPT_DIR}/bin/bridgemind-one-rust" "${SCRIPT_DIR}/bin/bridgemind-pty-host" "${SCRIPT_DIR}/bin/bridgemind-tickets" 2>/dev/null || true
  export PATH="${SCRIPT_DIR}/bin:${PATH}"
  exec "${SCRIPT_DIR}/bin/bridgemind-one-rust" "$@"
fi
