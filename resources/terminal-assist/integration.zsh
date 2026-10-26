# BridgeMind — OSC 133 prompt marks + OSC 9;9 cwd
export BMONE_SHELL_INTEGRATION=1
typeset -g __bmone_token="${BMONE_ASSIST_TOKEN-}"
unset BMONE_ASSIST_TOKEN
__bmone_osc() { printf '\e]133;%s;%s\e\\' "$1" "$__bmone_token"; }
__bmone_oscp() { printf '\e]133;%s;%s;%s\e\\' "$1" "$2" "$__bmone_token"; }
__bmone_cwd() { printf '\e]9;9;%s;%s\e\\' "$__bmone_token" "$PWD"; }
__bmone_precmd() {
  local ec=$?
  [[ -n "$__bmone_cmd" ]] && { __bmone_oscp D $ec; unset __bmone_cmd; }
  __bmone_cwd
  __bmone_osc A
}
__bmone_preexec() { __bmone_cmd=1; __bmone_osc B; __bmone_osc C; }
precmd_functions+=(__bmone_precmd)
preexec_functions+=(__bmone_preexec)
__bmone_cwd
__bmone_osc A
