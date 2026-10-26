# BridgeMind terminal integration — user env chain-load
USER_ZDOTDIR="${__BMONE_ORIG_ZDOTDIR:-$HOME}"
[[ -f "$USER_ZDOTDIR/.zshenv" ]] && source "$USER_ZDOTDIR/.zshenv"
