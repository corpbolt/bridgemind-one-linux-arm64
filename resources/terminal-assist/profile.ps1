# BridgeMind — OSC 133 prompt marks + OSC 9;9 cwd
if ($global:BMONE_SHELL_INTEGRATION) { return }
$global:BMONE_SHELL_INTEGRATION = 1
$global:__bmone_running = $false
$global:__bmone_esc = [char]27
$global:__bmone_token = if ($env:BMONE_ASSIST_TOKEN) { [string]$env:BMONE_ASSIST_TOKEN } else { '' }
Remove-Item Env:BMONE_ASSIST_TOKEN -ErrorAction SilentlyContinue
$global:__bmone_prev_prompt = $function:prompt
function global:__bmone_emit([string]$payload) {
  Write-Host -NoNewline ("{0}]{1}{0}\" -f $global:__bmone_esc, $payload)
}
function global:__bmone_mark([string]$code) {
  __bmone_emit ("133;{0};{1}" -f $code, $global:__bmone_token)
}
function global:__bmone_cwd() {
  try { __bmone_emit ("9;9;{0};{1}" -f $global:__bmone_token, (Get-Location).Path) } catch { }
}
if (Get-Command Set-PSReadLineKeyHandler -ErrorAction SilentlyContinue) {
  try {
    Set-PSReadLineKeyHandler -Key Enter -ScriptBlock {
      $global:__bmone_running = $true
      __bmone_mark 'B'
      __bmone_mark 'C'
      [Microsoft.PowerShell.PSConsoleReadLine]::AcceptLine()
    }
  } catch { }
}
function global:prompt {
  $lastSuccess = $global:?
  $exitCode = if ($null -ne $global:LASTEXITCODE) { [int]$global:LASTEXITCODE } elseif ($lastSuccess) { 0 } else { 1 }
  if ($global:__bmone_running) {
    __bmone_emit ("133;D;{0};{1}" -f $exitCode, $global:__bmone_token)
    $global:__bmone_running = $false
  }
  __bmone_cwd
  __bmone_mark 'A'
  $previous = $global:__bmone_prev_prompt
  if ($null -eq $previous) { $previous = { "PS $(Get-Location)> " } }
  # Write-Error with -ErrorAction Ignore resets $? to $false without touching $Error,
  # so the chained prompt reads the builder's real command status.
  if (-not $lastSuccess) { Write-Error 'bmone' -ErrorAction Ignore }
  & $previous
}
__bmone_cwd
__bmone_mark 'A'
