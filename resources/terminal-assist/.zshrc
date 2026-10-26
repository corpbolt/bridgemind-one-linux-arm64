# BridgeMind terminal integration loader
USER_ZDOTDIR="${__BMONE_ORIG_ZDOTDIR:-$HOME}"
BMONE_INTEGRATION_DIR="${BMONE_SHELL_INTEGRATION_DIR:-\\?\C:\Users\saido\AppData\Local\ai.bridgemind.one\terminal-assist}"
[[ "$HISTFILE" == "$ZDOTDIR/.zsh_history" ]] && HISTFILE="$USER_ZDOTDIR/.zsh_history"
ZDOTDIR="$USER_ZDOTDIR"
[[ -f "$USER_ZDOTDIR/.zshrc" ]] && source "$USER_ZDOTDIR/.zshrc"
source "$BMONE_INTEGRATION_DIR/integration.zsh"
