# BridgeMind — OSC 133 prompt marks + OSC 9;9 cwd
export BMONE_SHELL_INTEGRATION=1
__bmone_token="${BMONE_ASSIST_TOKEN-}"
unset BMONE_ASSIST_TOKEN
__bmone_osc() { printf '\e]133;%s;%s\e\\' "$1" "$__bmone_token"; }
__bmone_oscp() { printf '\e]133;%s;%s;%s\e\\' "$1" "$2" "$__bmone_token"; }
__bmone_cwd() { printf '\e]9;9;%s;%s\e\\' "$__bmone_token" "$PWD"; }
__bmone_prompt() {
  local ec=$?
  __bmone_in_prompt=1
  [[ -n "$__bmone_cmd" ]] && { __bmone_oscp D $ec; __bmone_cmd=; }
  __bmone_cwd
  __bmone_osc A
  __bmone_in_prompt=
}
__bmone_preexec() {
  [[ -n "$__bmone_in_prompt" || -n "$__bmone_cmd" || "$BASH_COMMAND" == *"__bmone_"* ]] && return
  __bmone_cmd=1
  __bmone_osc B
  __bmone_osc C
}
__bmone_status() { return "$1"; }
__bmone_debug() {
  local __bmone_ec=$? __bmone_arg=$1 __bmone_rc=0
  if [[ -n "${__bmone_prev_debug-}" ]]; then
    __bmone_status "$__bmone_ec" "$__bmone_arg"
    eval "$__bmone_prev_debug"
    __bmone_rc=$?
  fi
  __bmone_preexec
  __bmone_status "$__bmone_rc" "$__bmone_arg"
}
PROMPT_COMMAND="__bmone_prompt${PROMPT_COMMAND:+;}$PROMPT_COMMAND"
__bmone_cwd
__bmone_osc A
