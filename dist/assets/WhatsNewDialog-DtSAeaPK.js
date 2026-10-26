
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2b56054c-7a04-54d8-8f30-cb9356846b66")}catch(e){}}();
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/whatsNewScene-CttxPVFF.js","assets/three.module-DKRjkKHb.js"])))=>i.map(i=>d[i]);
import{i as e,t}from"./react-SIfiwpqq.js";import{t as n}from"./preload-helper-Czpn1I53.js";import{t as r}from"./jsx-runtime-0vZSBttN.js";import{t as i}from"./minus-rA8iI851.js";import{t as a}from"./shield-check-C4-MUqmt.js";import{t as o}from"./sparkles-DN-WBKJF.js";import{t as s}from"./wrench-B01UWpds.js";import{Ct as c,Rt as l,U as u,Ut as d,dn as f,pn as p}from"./index-C4vX1IEp.js";var m=d(`arrow-up-right`,[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]),h=[`windows`,`macos`,`linux`],g=[`added`,`changed`,`fixed`,`removed`,`security`],_={added:`New`,changed:`Improved`,fixed:`Fixed`,removed:`Removed`,security:`Security`},v=/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/u,y=/^##\s+(\d+\.\d+\.\d+)(?:\s+[—–-]\s+(\d{4}-\d{2}-\d{2}))?\s*$/u,b=/<!--\s*release-platforms:\s*([^>]*?)\s*-->/u;function x(e){return h.includes(e)}function S(e){let t=b.exec(e)?.[1];return t===void 0?null:[...new Set(t.split(/[\s,]+/u))].filter(x)}function C(e){return typeof e==`string`&&v.test(e)}function w(e,t){let n=e.split(`.`).map(Number),r=t.split(`.`).map(Number);for(let e=0;e<3;e+=1){let t=(n[e]??0)-(r[e]??0);if(t!==0)return t}return 0}function T(){return{added:[],changed:[],fixed:[],removed:[],security:[]}}function E(e){return e.replace(/\[([^\]]+)\]\([^)]*\)/gu,`$1`).replace(/`([^`]+)`/gu,`$1`).replace(/\*\*([^*]+)\*\*/gu,`$1`).replace(/\s+/gu,` `).trim()}function D(e){let t=[],n=null,r=null,i=null,a=()=>{if(n&&r&&i){let e=E(i.join(` `));e&&n.sections[r].push(e)}i=null};for(let o of e.split(/\r?\n/u)){if(o.startsWith(`## `)){a();let e=y.exec(o);n=e?.[1]?{version:e[1],date:e[2]??null,platforms:null,sections:T()}:null,n&&t.push(n),r=null;continue}let e=n&&o.startsWith(`<!--`)?S(o):null;if(n&&e){a(),n.platforms=e;continue}if(o.startsWith(`### `)){a();let e=o.slice(4).trim().toLowerCase();r=g.includes(e)?e:null;continue}if(/^[-*]\s+/u.test(o)){a(),i=[o.replace(/^[-*]\s+/u,``)];continue}if(i&&/^\s+\S/u.test(o)){i.push(o.trim());continue}a()}return a(),t.filter(e=>g.some(t=>e.sections[t].length>0)).sort((e,t)=>w(t.version,e.version))}function O(e){return g.reduce((t,n)=>t+e.sections[n].length,0)}function k(e,t){return t===`unknown`?[...e]:e.filter(e=>e.platforms===null||e.platforms.includes(t))}function A(e,t,n){if(!C(t))return[];let r=C(n)?n:null;return r&&w(r,t)>=0?[]:e.filter(e=>r?w(e.version,r)>0&&w(e.version,t)<=0:e.version===t).slice(0,5)}var j=`bmone.releaseNotes.acknowledgedVersion`;function M(){try{let e=globalThis.localStorage?.getItem(`bmone.releaseNotes.acknowledgedVersion`)??null;return C(e)?e:null}catch{return null}}function N(e){if(C(e))try{globalThis.localStorage?.setItem(j,e)}catch{}}function P(e){if(!e)return null;let[t,n,r]=e.split(`-`).map(Number);return!t||!n||!r?null:new Date(Date.UTC(t,n-1,r)).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`,timeZone:`UTC`})}var F=k(D(`# Changelog — BridgeMind One

Every pull request adds a bullet under **Unreleased** describing what changed
for a builder. At release the bullets move into
\`bridgemind-website/public/changelog/bridgemind-one.json\` (the public page at
<https://bridgemind.ai/changelog>), this heading becomes the version, and a new
Unreleased section is opened. A platform-only release keeps other platforms'
pending notes, with disjoint \`pending-platforms\` and \`release-platforms\` HTML
markers. Editorial corrections name the original in a \`replaces-note\` HTML
comment immediately before its replacement bullet. Rules and the release procedure are in
\`../.cursor/rules/bridgemind-one-changelog.mdc\`; CI enforces the bullet via
\`.github/workflows/changelog.yml\` (bypass only with the \`skip-changelog\` label,
for changes a builder cannot observe).

Headings match the website's section kinds: Added, Changed, Fixed, Removed,
Security. Write one sentence per change, present tense, for the builder — no
PR numbers, file names, or internal type names. Prefix is not needed: the
release entry identifies the platforms actually shipped in its \`audience\`.

## Unreleased

## 0.3.4 — 2026-10-05

<!-- release-platforms: macos, windows, linux -->

### Security

- Updated the bundled HTML sanitizer to close a reported DOMPurify vulnerability.

- Pairing a phone shows a QR code carrying a one-time secret the BridgeMind relay never sees, so the phone checks this computer's keys itself; the 8-character code waits behind Show code, and phone names lose characters that hide or reverse text.

- Turning off phone approvals waits for an accepted decision to finish and blocks queued decisions before reporting success.

- Signing out, or losing access to BridgeMind One, now also ends every terminal and agent running in the background, including ones whose panes you never reopened.

### Added

- Drag a task card onto an agent's terminal, a thread or an Agent chat to send it as the agent's next prompt (a To Do task moves to In Progress once the agent has it), pick an agent on screen from the card's Send to menu, or Dispatch it to a saved Claude Code or Codex Agent that works in its own branch while a second session reviews the result.

- A Prompts tab in the right sidebar keeps your saved prompts: create, edit and search them, then drag one onto a coding agent, a thread or an agent chat to drop it into the input, where it waits until you press Enter.

- A paired phone can approve or deny an agent's tool requests on this computer: turn on Allow tool approvals when pairing, and phone approvals stay on for 24 hours at a time, with a banner while they're on and a note when a phone answers.

- When you approve a phone in Settings → Remote, you can now let its agents edit files and run commands; it starts off and turns on chat control and file editing where you can see them.

- Quitting while agents keep running in the background says so: a short banner such as "3 agents keep running" whenever your computer allows BridgeMind notifications, and a note that they kept running once you reopen BridgeMind.

- The terminal host now ships inside every BridgeMind One download, signed like the app, and uninstalling on Windows stops it and deletes its saved scrollback. Updates leave it running.

- Settings ▸ Terminal lists every terminal running in the background with its workspace, lets you end one or restart the terminal host, turns saved scrollback on or off or clears it, and holds the quit choice; BridgeMind also says when terminals will close on quit and when an update or crash brought your sessions back.

- A new Quit and End All Sessions item (⌥⌘Q on Mac) closes every terminal and agent on the way out, and Settings ▸ Terminal picks what a plain Quit does.

- Every restored pane says in one line how it came back, including why a new conversation or shell started, and Resume Previous Conversation in a Claude Code or Codex pane's menu reopens a conversation it left; a pane whose conversation can't reopen offers Resume or Start fresh right there.

- One Resume agents? question at launch covers every agent across your workspaces that would reopen a conversation — Resume all or Start fresh, with Always resume automatically there and in Settings ▸ Terminal — while agents that kept running come back without asking.

- Claude Code and Codex panes reopen their exact conversation in the folder they ran in after BridgeMind restarts, and closed panes' conversations stay reopenable from the + menu.

- Restart to update saves your workspaces before the installer starts and, with the beta on, hands terminals to the terminal host first, so running agents keep going through the update and pick up where they left off; the Mac shows Restart to update too.

- With that beta on, workspace terminals and agent panes keep running after you quit and come back live, screen and all, when you reopen BridgeMind — a pane whose session was lost replays its saved scrollback first, and one whose terminal host is slow to answer waits for it instead of starting a second copy.

- Settings ▸ Terminal has a Keep agents running while BridgeMind is closed beta, off by default on every platform; BridgeMind can also pause it remotely, and turning it off never strands an agent that's already running in the background.

### Changed

- Session approvals appear beside tool approvals when pairing a phone, turn on their required permission together, and turn off when tool approvals are disabled.

- Decorative sign-in animations pause on Linux to keep the app light while you sign in.

- Remote and session banners load when needed, keeping startup within the production bundle budget.

- The "Are you sure you want to quit BridgeMind?" and "Update and restart?" questions now count only the work that would actually stop, so terminals and agents that keep running in the terminal host no longer make Quit or Update ask.

- Terminals on macOS and Linux keep up better with fast, heavy output such as long build logs, sending it to the screen in fewer, larger pieces while keystroke echo stays instant.

- Typing to an agent and watching its reply stream in no longer redraws the sidebar, the chat tab strip or your workspace panes and terminals on every keystroke and update, so long sessions stay responsive.

- BridgeMind One does less background work while it sits idle or minimized: Auto skips re-reading a terminal that has printed nothing new, and the BridgeVerse agent console and terminal, Dashboard clock, Discord, Remote, Plugins and Mac app carry-over status pause while the window is hidden and refresh the moment you come back.

- Importing the local Whisper dictation model uses far less memory, and drafting an agent with a local coding agent starts faster because it reuses the recent agent check instead of re-scanning your shell every time.

- When the Remote service can't be reached, BridgeMind One now waits a little longer between reconnect attempts (up to about a minute) instead of retrying every 15 seconds, and turning Remote on or approving a phone still reconnects right away.

- Long agent chats keep streaming smoothly as their transcripts grow: each new burst of a reply no longer rechecks the whole conversation, and the agent roster's last-said line no longer copies every running chat to refresh.

- Saving Bridge's memory, revealing its folder and opening notification settings no longer stall the rest of the app while the disk or Finder catches up, and a pending call review now sits idle instead of checking in twenty times a second.

- Settings has a cleaner layout: a centred, wider column, a page heading with each section's icon, larger row text, a grouped sidebar, a separate icon for Voice, and a credits bar under This cycle on Account.
- Import moves from Settings → General to its own Settings page, with a summary of what came over from the Mac app, accounts to sign in again, the items that need a look, a checklist of everything else, and a clearer review before importing a folder.
- The app's local database keeps a larger in-memory cache, reuses its common queries, caps the journal it leaves on disk and clears old unsaved Files drafts without scanning every saved document.
- Terminal command suggestions open faster: their history store skips its full integrity scan when a clean one ran in the last day, and still sets a damaged store aside and starts fresh if a later read finds damage.
- The window shows its first screen without waiting for diagnostics to load; errors from those first moments are still reported once your saved diagnostics choice is known, and never when diagnostics are off.
- Streaming Chat and Agent replies render in small batches instead of one token at a time, and while the window is hidden a running turn is followed about once a second and drawn once when you come back.
- The sidebar's Files tab checks git less often while a repository is quiet (every 5 seconds, easing to every 30), and a file open in the side panel re-reads less often while it is unchanged (every 4 seconds, easing to every 16); a change, Refresh, switching folders or returning to the window checks at once.
- When diagnostics are on, a report of a desktop error that has no message now says which kind of error it was, which desktop command produced it and which operating system you use, and still never includes the error text.
- Remote writes to the system keychain far less often while it keeps a phone up to date, and the copy of this computer’s state a phone opens while the computer is offline remains available after five minutes.


### Fixed

- Fixed a crash that could happen while quitting BridgeMind One 0.3.3 on macOS and Windows.

- Pressing a key just as a terminal shell or agent exits no longer reports a false terminal failure, and agent panes hand back to their shell without replaying the stray input.

- Selecting text next to a terminal, such as triple-clicking a transcript paragraph just above one, no longer raises an error from the terminal.

- Dashboard cards now show each pane's agent name — the one in its header, or the name you gave it with Rename Pane… — so idle agents no longer all read "Claude Code" or "Codex", and an agent whose first message was a long paste is titled by what you typed or the start of the paste instead of a \`pasted_content\` placeholder.

- If a task cannot be typed into an agent terminal, its status stays unchanged and the message asks you to inspect any partial input before resending.

- Privacy and Terms links on the sign-in screen show a clear message if your browser cannot open.

- Notification preferences save in order, cancelled transcript searches release their slots, and deleting old file drafts preserves the database’s secure-delete setting even if cleanup fails.

- Rapid sends cannot submit the same Agent message twice, and a delayed refresh no longer overwrites a newer rename or model selection.

- Usage totals recover from temporary provider read errors, keep up with active OpenCode sessions and resume after cancelled refreshes without piling up background saves.

- BridgeVerse waits before answering moved Board questions, confirms voice instructions and relayed launch prompts, hides more credential formats, and reports terminal write failures accurately.

- If 0.3.1 brought your data over from the earlier Mac app, Routines it left paused now turn back on in their workspace or wait for the Claude or Codex account they ran on, Chat mode gets back each provider's model and access (such as Full access) unless you already chose one here, and an open agent shows its carried skills without being reopened (ticket-0155).

- The Browser pane's address bar now follows you around sites that switch pages without a full reload, like BridgeBench, instead of staying on the first page you opened, and Back returns to the page you came from.

- Mac carry-over repairs retry after an interrupted launch, task dispatch stays visible until it finishes, and the browser address follows routes that return between updates.

- Remote accepts what the phone app sends: a new chat starts with its first message, Thread settings can rename a chat, Files and Git serve the phone's larger pages and a whole-workspace diff, long threads load older messages, and a permission above what the phone was paired with is lowered instead of refused.

- When this computer won't run something a phone sent (it expired, the phone isn't allowed to, or this version doesn't support it yet), the phone now hears why right away instead of waiting for the action to time out.

- Remote no longer rejects a phone's command as unverified when a newer phone app includes details this version doesn't use, or leaves out one it fills in itself.

- Remote keeps reaching a paired phone after its daily key rotation; updates sent to the phone were refused once the first rotation ran.

- The "Terminals will close when BridgeMind quits" warning now shows even when the terminal host fails before the window has finished opening, and stays away when keeping agents running is simply off.

- After an update BridgeMind says your sessions are back only when they actually reattached or resumed, never when terminals that ran inside BridgeMind closed for it, and it now notes the panes that came back after your computer restarted.

- Claude Code and Codex panes reopen a conversation only on the account and in the folder it ran in, and a resume that fails — signed out, offline or mid CLI update — keeps the conversation and asks instead of quietly starting a new one.

- Agents still running in the background when you reopen BridgeMind notify you when they finish or need you even before you open their pane, and a /clear or a new conversation there is remembered.

- An agent pane that BridgeVerse or Live Bridge reconnects after a restart keeps tracking its conversation, so a later /clear sticks and reopening the pane never brings back the conversation from before it.

- Background terminals keep retrying cleanup when sign-out or a stop fails, and saved scrollback stays off while terminals reconnect.

- The sidebar lights only the session or thread you have open; its folder above it reads as a heading instead of a second highlighted row fused to it.

- Remote stays connected when your sign-in renews or the Remote service turns down a single update, reconnects within moments when the service restarts, no longer cancels a chat a phone started when it reconnects, and sends a phone the latest state as soon as it asks; if the service removed this computer, Remote turns off and asks you to reset it.
- Unpairing a phone is retried until the Remote service confirms it, instead of counting an unexpected "not found" as done, and a failed attempt no longer drops the connection.
- BridgeVerse voice calls ask before a key goes into an agent's question, show the command an approval covers and the words sent to an agent, and hand the microphone to Bridge without a busy error.
- BridgeVerse refuses a message or task over 8 KB instead of cutting it short, and one stuck read no longer freezes the campus or a launch.
- BridgeVerse approval buttons wait a beat after the question changes, a double-click no longer closes an agent, and a room prompt or launch closed partway still reports what happened.
- Agents past a room's 40 desks take the first desk that frees up.
- BridgeMind no longer refuses to start when it cannot rotate or start its local performance log; that log records nothing for the session instead.
- BridgeVerse lobby sounds play from their own spots, silent music and ambience stop using CPU, and holding Esc in the arcade pauses without closing it.
- Switching back to a terminal tab whose size has not changed no longer makes a Windows terminal redraw its whole screen.
- Changing the diagnostics and analytics setting no longer waits on a disk write on the app's main thread, and quick successive changes are always saved in the order you made them.
- Files no longer rewrites its unsaved-draft backup on every keystroke: typing is saved once you pause, and right away when you switch tabs, leave the window or quit.
- Reopening Files after a restart no longer fails to back up drafts when a file was open twice in the recovered tabs, and a tab with no unsaved text is no longer kept as a lost draft.
- Dragging the window's edge on Windows and Linux no longer asks the system whether the window is maximized on every resize step; the title bar's maximize button still updates as soon as the drag rests.
- In BridgeVerse, clicking an agent seated behind their desk now calls them instead of opening the desk, and the planets' edges can no longer flash black blocks.
- The pin button on a sidebar folder row now looks centred and matches the weight of the new-session plus beside it.
- Account sync no longer reports "BridgeMind returned an unexpected response" when the entitlement service answers without a readable entitlement block; your account details decide access, as they already did.
- Pressing Esc to close Settings or notifications no longer fails when the key press reaches the window with nothing focused.
- A saved sign-in the app can no longer read now asks you to sign in once instead of failing to restore on every launch; a damaged offline-access receipt no longer signs you out, and a sign-in saved by a newer version is kept for that version.

## 0.3.3 — 2026-10-02

<!-- release-platforms: macos, windows, linux -->

[Public release notes](https://bridgemind.ai/changelog/bridgemind-one/v0-3-3). Release order: macOS production, Windows, then Linux. Version 0.3.2 failed release preflight and was never published.

### Changed

- Tasks in the sidebar is now a board with four statuses — To Do, In Progress, Review and Done — where you drag a card (or press Alt+Shift+←/→) to move it; Backlog tasks show under To Do, canceled and duplicate tasks appear under Show archived, cancelling an agent run returns its task to To Do, and the list is still one click away under View as list.
- Agent messaging, Routines, worktree checks and Discord presence read saved state without waiting behind background saves, and switching tabs, panes or windows no longer rewrites your notification history when nothing in it changed.

### Fixed

- Moving from the earlier Mac app now brings over your Scratchpad note, dictation vocabulary, trusted SSH hosts and Files auto-save, sidebar and Dashboard choices, and lists anything that stays behind in Settings → Import.
- Routines from the earlier Mac app keep their workspace and turn back on once the Claude or Codex account they ran on signs in again here, Chat mode remembers each provider's last model and access, chats pinned to an unfinished account wait for its sign-in, and Settings → Import now names what stays behind — unfinished accounts, Chat and Aider files with their folder, and Blender scripting and Remote approvals reset to off.
- Mac update tests now check microphone permission and recovery after interrupted installations and staged updates.
- Opening BridgeVerse downloads less code without changing its prompt and approval checks.
- BridgeVerse shows scene recovery after a graphics-context loss and labels agent selection separately from voice calls.

- BridgeVerse's sidebar tab shows how many agents need you, even while another tab is open.
- BridgeVerse shows stuck agents in red — a turn that errored, a question waiting 20 minutes, or a chat that went quiet mid-turn — in the tally, on room chips, on the tower's windows and on the sidebar tab.
- Press B in BridgeVerse for the Board: every agent on every floor in one list, most urgent first, with each one's task, state and how long, and their questions answered right there.
- BridgeVerse's launcher starts up to six agents at once, with one task for all or a role and task each, and saves setups you reuse as presets.
- BridgeVerse rests when nothing is happening: it slows to 5 frames a second after ten quiet seconds, stops drawing while you work in another pane or app, and no longer runs at full speed just because agents are working.
- BridgeVerse sound costs only what you hear: with sound off it prepares no audio at all, music that is turned down is never played silently, and reopening BridgeVerse reuses the sounds it already made instead of making them again on your first click.
- Clicking an agent in BridgeVerse now opens them instead of starting a voice call; talk to an AI voice for an agent with the Talk button beside them, in their console, or T.
- BridgeVerse starts on the Focus sound mix, and its footsteps, keyboards and room noise go quiet while you work outside it; the chime when an agent needs you always plays.
- BridgeVerse opens on the floor of the agent that needs you, or the floor you were last on, instead of the plaza.
- With an agent's terminal or console open in BridgeVerse, every other agent's question stays on a strip under the top bar, answered with a click or its number.
- BridgeVerse says Start everywhere you create an agent, starts your rank at Builder instead of Intern, announces agents that need you ahead of rewards, and names each top-bar button's shortcut for screen readers.
- BridgeVerse no longer pays XP for starting agents; you earn it for unblocking agents (more within two minutes), reviewing finished turns and shipping, the daily quest to start agents is now Review 3 finished turns, and only days you ship keep your streak.
- BridgeVerse celebrates only real ships: an agent finishing a turn no longer pops a toast, a chime or a combo, and arcade games no longer earn badges.
- In BridgeVerse the camera dives into an agent's monitor only the first time each session (switch it on for every open in Controls), the plaza's espresso, ping-pong, roomba and snoring stay out of the default sound mix, and talking to an agent is clearly an AI voice for that agent.
- In BridgeVerse an agent finishing a turn no longer counts as shipping: ships, ship XP and your streak now come from tasks that pass their review.
- BridgeVerse draws the campus again when the browser gives back a lost graphics context, such as after a driver reset, and stops working in the background while the campus is blank.
- On a computer without graphics acceleration, BridgeVerse opens in its lighter view straight away instead of freezing for a few seconds first, and reopening it keeps the quality it settled on.
- A BridgeVerse voice call or open terminal window keeps reading your agents while the window is minimized, so "wait for it to finish" and approval checks no longer act on a frozen roster.
- Stopping a BridgeVerse agent now only interrupts one that is working, and uses Esc for Claude Code and Codex, so a stop can no longer make those CLIs exit or answer a question on screen.
- Answering a terminal agent's question from BridgeVerse now checks the question went away and says so when it didn't, and a menu with more than nine choices is answered in the terminal instead of picking the wrong option.
- BridgeVerse no longer reports a message to a busy agent as started: it says the message was queued or couldn't be confirmed, and voice calls wait for an agent's turn to end before messaging it.
- BridgeVerse checks the screen again right before pressing Enter on a prompt, and never sends a second Enter after anything was drawn, so a permission or trust dialog that appears mid-send is never answered by accident.
- Switching workspaces or one slow read no longer makes BridgeVerse agents blink off the campus, ending their voice calls and closing their terminal windows; a terminal window follows its agent after a restart and stops taking keystrokes as soon as the workspace turns read-only.
- A BridgeVerse voice call can no longer press Enter or an arrow into an agent's permission menu: it must answer by naming the option, which you confirm on screen, and any other key into a question asks you first.
- When a BridgeVerse office assistant has just read one agent's output and then messages a different agent, it shows you the message and asks before sending, so instructions planted in one agent's output can't be relayed to another unseen.

- Renamed session tabs keep Unicode names within the saved-layout limit and remove terminal control characters.

- Rename a Code session from its sidebar row or any pane's menu with Rename Session…, or ask Bridge to rename a tab; the new name is kept with your layout.
- On Mac, Ctrl+V in a terminal reaches the running program again, so Claude Code can paste a copied image, while Cmd+V still pastes text.
- A Claude agent asked to message its teammates now reaches the named agents you set up, instead of listing and messaging anonymous Claude sessions that never woke them.
- A Claude thread that starts or resumes a background agent now shows that agent running and how it ended, and if Claude exits before the agent reports back the thread says so instead of reporting success.
- A turn that stops at Claude Code's max-turns or output cap now says which limit it hit and to send “continue”, instead of a generic error.

- Signing into another account leaves dictation shortcuts off until that account’s saved preference loads.

- Asking an agent to remember or forget something now always runs its after-reply memory pass, so the note is saved to its memory even when the agent didn't save it while answering.

- Scrolling up a little while an agent is replying now stays put, instead of the next streamed update snapping the conversation back to the bottom.

- Right-click a terminal or agent pane's header and choose Rename Pane… to label it with the task at hand; the name shows in the header, stays with the pane when you swap or move it, and is still there after a restart.

- When OpenRouter or another provider rejects Claude Code's key, chats now say the key was rejected and where chats read it from, instead of asking you to sign in to Claude, and the Claude and Codex sign-in messages explain that chats ignore provider keys set in environment variables.

- Agents in panes you are not looking at, such as another workspace's, keep running instead of freezing mid-turn until you return, which also stops Claude Code reporting "The response stopped arriving" when several sessions are open.

- The Browser pane now acts like a normal browser for games and drag-and-drop on macOS: pages can lock the mouse pointer (so buttons like "Click to fight" start the game), the first click into an inactive window reaches the page, and in-page dragging works while Finder file drops stay blocked.

- Start and finish dictation from the keyboard with a dictation shortcut — ⇧⌘Space on a Mac, Ctrl+Shift+Space on Windows and Linux — in the composer you're working in, and change or turn it off in Settings → Voice; Bridge now points you there instead of to an Fn key or the system keyboard settings.

- Reconnecting a Claude or Codex account now tells you when your browser signed in as a different account, and how to switch, instead of a generic "sign-in wasn't completed".
- A Codex reconnect that signs in as the wrong account no longer leaves that login's credentials behind, and the account menu no longer offers a Reconnect that could never succeed.

- On Linux, you can sign in even when no system keyring is available or the keyring prompt is dismissed; BridgeMind says it won't remember that sign-in after it quits, and no longer repeats failure reports while signed out.

- On Windows, Claude Code and Codex agents start in your project folder with the same plain folder and program paths your terminals use.
- Agents use your proxy and custom certificate settings, as your terminals do, without passing on proxy passwords or sending local BridgeMind connections through the proxy.
- When Claude Code can't connect to its API, the agent now points you to your proxy, VPN, or antivirus HTTPS scanning settings instead of a generic error.

- Arrange Code panes freely — say four agents across the top and the rest below — by dragging a pane's header onto another pane's edge to dock it there, or with Move Left, Right, Up and Down in the pane's ⋯ menu; dropping on a pane's middle still swaps the two.
- Click the Bridge Game portal on the BridgeVerse lobby plaza to play Bridge Game in your browser, or jump straight to its Poker or Zombies lobby.
- On Linux, coding agents installed through mise, nvm, fnm or npm start even when BridgeMind is opened from a launcher whose PATH lacks Node.js, the AppImage no longer passes its bundled libraries to terminals and agents, and an agent whose runtime is missing tells you which one to install.
- Scrolling, typing and highlight animations no longer stall about once a second while Codex, Claude Code or another full-screen agent redraws its terminal.
- Text typed quickly into a busy terminal goes out together instead of waiting one round trip per key, so what you type keeps up.
- Typing into a terminal no longer pauses while BridgeMind records an agent's notification.
- Terminals no longer cut off their bottom row or hide their last column under the scrollbar, so agent prompts and status lines stay fully visible.
- Dim terminal text on Windows and Linux, such as the descriptions and hints in agent model pickers, stays readable against the terminal background.
- Opening BridgeMind again on Linux brings the running window forward instead of crashing it along with every open terminal and agent.
- Commands run in Linux AppImage terminals and agents no longer see the AppImage's own launch details, so a Python environment created there uses the real Python instead of relaunching BridgeMind.
- If BridgeMind's window cannot open at launch, it shows the "BridgeMind could not start" message instead of closing without explanation.

- Keep running Claude Code and Codex agents marked Working during quiet tools and subagent waits, and clear their status when cancelled or exited.
- Close idle dashboard panes without changing the active tab or closing an agent that starts work while the action is waiting.
- Input and resize requests after a coding agent has exited no longer interrupt its return to a shell. Live agent transport failures still report an error.
- Option-drag at a plain terminal prompt on Mac makes a rectangular selection again, while it still selects text inside apps that capture the mouse, and a failed update check no longer hides an earlier install error.
- The Bridge orb can use your microphone on Linux instead of being silently refused, the orb now says whether a microphone is missing, busy, refused or unsupported by the web runtime, and Linux dictation names the audio tools it needs.
- The Linux AppImage opens a rendered window instead of a white one on NVIDIA's proprietary driver, and Linux windows identify as BridgeMind on Wayland and X11, so docks show its icon and can pin it.
- Error reports now name the failed step and the code that reported it, instead of filing unrelated terminal, startup, WebView and sign-in failures under the crash reporter's own code.
- With Error reports on, a report of an unexpected interface failure names what kind of failure it was and the desktop command, error code and code path behind it — never its message — and harmless browser layout notices are no longer reported.
- Opening the Terms of Service or Privacy Policy from Settings when your system can't open the link shows an error instead of failing silently.
- Choosing your whole user folder as a workspace now explains why it isn't allowed and reopens the folder picker inside it to choose or create a project folder, and a drive BridgeMind can't read or a sign-in or plan problem gets its own message instead of "Try again".
- Open a new terminal tab with Ctrl+N on Windows and Linux even while a terminal has focus, and show the New shortcut on the Thread and New Tab controls.
- Show agents and threads as idle once their turn ends, including a teammate that finishes in the background and chats left mid-turn by a quit, crash, or lost update stream.
- Land on the neighboring Agent chat tab, or a thread from the same folder, after archiving the open one, and open a fresh thread instead of an empty pane when the last is archived.
- Rename a Code session again from its row menu in the sidebar (right-click › Rename…); leaving the name empty restores the session's own name.
- Clicking the check mark while renaming a folder in the sidebar saves the new name instead of discarding it.
- What's New and Settings → Changelog show only releases that shipped to your platform, instead of presenting another platform's update as yours.
- On Windows, Claude Code and Codex panes in a split start even when a neighbouring pane is slow to launch, instead of showing "The terminal did not become ready in time." and stopping the agent that had started.
- Open BridgeMind signed out, with no saved plugin connections, when the system credential vault cannot be opened at launch instead of refusing to start (ticket-0030).
- Browser sign-in finishes in a normal browser window, not only a private one, when a local development site has saved cookies containing accented or other non-English characters.
- On Windows, agents installed as native programs, such as Claude Code's own installer, start in your workspace with an ordinary folder path instead of the long form that Command Prompt and PowerShell refuse.
- Dragging a file from the Files tab onto a Chat or Code thread's message box inserts its @path mention again.
- On Windows, Cursor, Grok and OpenCode chats receive the workspace folder as an ordinary \`C:\\…\` path instead of the long \`\\\\?\\C:\\…\` form that Command Prompt and Windows PowerShell refuse.
- On Windows, SSH workspaces also work with Microsoft's OpenSSH installed in Program Files and with SSH configurations that run \`Match exec\` or ProxyCommand helpers, and a rejected sign-in explains that BridgeMind uses SSH keys or your SSH agent, not passwords.
- Pasting text copied from Notes, Pages, Word, Excel and other Mac apps with ⌘V into a thread or agent message inserts the text instead of turning it into an image attachment or an "Attachments require…" error.
- On Windows, BridgeVoice dictation pastes into terminals and coding agents with Russian, Greek and other non-Latin keyboard layouts too, instead of reaching the agent as a bare Ctrl+V and staying on the clipboard.
- An agent keeps working when you switch to another workspace, instead of freezing until you come back, and the Dashboard and sidebar keep showing it as Working rather than Done.

- Agents on Windows can work in the folders you add as their Places instead of replying that they have no access to the repository.
- Chat history that fails to open retries when you reopen Chat or Code instead of staying broken until restart, and stopping a turn that just finished no longer leaves the thread stuck as running.
- Sign Out works while the app is refreshing your plan in the background, a downloaded update stays ready to install if a later check fails, and your credit balance refreshes when your plan changes.
- Renaming an agent or changing its face shows in the sidebar even if you switch agents before the save finishes.
- Dragging a sidebar tab follows the pointer at any zoom level, the BridgeVerse terminal resizes its text with zoom, and the first card on the Tasks board shows its full focus ring.
- Selecting, double-clicking and copying in terminals now lands exactly on the text under the pointer when the app is zoomed in or out, and the terminal no longer sizes itself a column or two wider than it shows.
- Option-drag selects text in terminal apps that capture the mouse on Mac, such as Claude Code, vim and tmux, and Ctrl+Shift+C copies a terminal selection on Windows and Linux.
- Dragging sessions and folders in the sidebar is smoother: the carried row stays solid, glides into place when you let go, and the list scrolls when you hold it near an edge.
- SSH workspaces now find Claude Code and Codex when the remote machine adds them to PATH in \`~/.bashrc\` or \`~/.zshrc\` (nvm, npm, the native installers), and when no agent is found the launcher names the remote machine and explains that sign-ins in Settings → Agents stay on this computer.
- Dropping images and files from Finder or the file manager onto any terminal or chat composer in a workspace now inserts them there on macOS and Linux, not only into the first terminal.
- BridgeVerse no longer shows large black blocks over the scene when the tower's searchlights or the plaza's fireflies catch the camera at certain angles.
- Voice calls with your assistant and agents in BridgeVerse connect on Mac instead of failing with "Safe microphone processing is unavailable".
- Stopping a task the moment its agent starts now cancels the agent's turn instead of letting it run to the end, and task progress always reaches the task board.
- Removing a phone from Remote now revokes its access on the relay, and plans without Remote no longer show a Remote plan error while Remote is off.
- Retrying the Mac app carry-over leaves folders you added, renamed or hid here since exactly as you left them.
- Folders the Mac app carry-over adds keep their Mac app name, pin and sidebar order even when the app quits partway through carrying them over.
- Clicking Update on Windows and Linux asks before restarting while agents, terminals or tasks are still running, and Cancel keeps the update ready to install.
- Quitting or restarting to update right after a change keeps your latest pane layout, thread layout, window settings, Scratchpad note and BridgeVerse look.
- Quitting on Mac from the Dock, at logout or through an update's Install and Relaunch now shuts down tasks, Remote and background work as cleanly as Quit in the app.
<!-- ticket-0147 -->
- Agents remember what they learn after a turn, instead of most reflection passes failing when the model answers in a code block or says there is nothing to save.
- Claude Code panes on Windows no longer leave an empty file named NUL in the project folder.
- The dictation microphone shows at full size beside Send in Agent chats, instead of as a shrunken icon in the middle of the toolbar.
- Tile or shrink the window to a quarter of a laptop screen and the sidebar's account row and the chat prompt stay on screen instead of being cut off at the bottom; very short windows scroll the agent pane as a whole, with a single scrollbar, rather than clipping it.

## 0.3.1 — 2026-10-02

<!-- release-platforms: macos, windows, linux -->

[Public release notes](https://bridgemind.ai/changelog/bridgemind-one/v0-3-1). Published to macOS production, Windows and Linux, in that order.

### Changed

- Basic plans open the BridgeMind One workspace — agents, terminals, threads, autopilot and Create with AI — while dictation, the Bridge voice assistant, BridgeVerse and Remote stay with Pro and Ultra and show an upgrade path where they sit.
- Credits show what's left of your plan's monthly allowance this cycle, with the next step that fits: Pro from Basic, Ultra when Pro runs low, a top-up on Ultra.
- Moving from Pro to Basic mid-session ends dictation, Bridge calls and Remote without touching your terminals or chats.

### Fixed

- Dragging a pane divider or the sidebar edge no longer makes Claude Code, vim and other full-screen terminal apps flicker; they redraw once the drag stops.
- Scrolling up in a streaming chat stays where you put it instead of snapping back to the bottom, and new text never shows cut off for a frame.
- The sidebar edge follows the pointer without lag and never flashes back to its old width on release.
- Tooltips stay open while a chat streams or a terminal prints elsewhere, and the Thread composer grows in the same frame you type.
- Returning to Agent mode no longer slides the chat tab strip sideways.

## 0.3.0 — 2026-10-01

<!-- release-platforms: windows, linux, macos -->

[Public release notes](https://bridgemind.ai/changelog/bridgemind-one/v0-3-0). Windows and Linux, plus the signed Mac preview on the preview channel; includes every change pending since Windows 0.2.1 and Linux 0.1.68.

### Added

- Quitting BridgeMind while agents, terminals or tasks are still running now asks "Are you sure you want to quit BridgeMind?" first, so a stray ⌘Q or window close no longer stops your work.
- BridgeVerse is now a skyscraper: every project is a floor of the BridgeMind tower, each new project adds a floor on top, and you ride the elevator to any floor by clicking the tower, pressing E at its door or a floor's lifts, or pressing F.
- Play four arcade games on the BridgeVerse plaza — Token Snake, Legacy Breaker, Bug Squash and Deploy Dash — with your best scores kept and a little XP for each run.
- BridgeVerse now has sound — footsteps, keyboards under working agents, a chime when an agent needs you, room ambience and an optional score — silent during voice calls and set from the speaker in the top bar or K.
- Talk by voice with the office assistant at each BridgeVerse doorway or with any agent you click: the assistant launches up to six agents with their own prompts and messages, approves or stops them once you confirm, and an agent answers in the first person about its work.
- Celebrate progress in BridgeVerse with an XP ring and level-up on your player card, combo pops, reward banners, and a livelier plaza and lobby, and adopt Big T, a German shepherd in sunglasses, as your pet.
- Press ↑ on an empty prompt in Thread and Agent chats to bring back your earlier messages, and Backspace to take back the last attachment.
- Measure renderer performance with repeatable correctness checks and baseline comparisons, and sample native Windows CPU and memory use.
- Hear the Linux desktop bell for terminal attention even when notification banners are unavailable.
- Open isolated native Browser tabs on Linux with HTTP(S) navigation and blocked downloads, popups, and media capture; installed X11 and Wayland verification remains pending.
- Connect Unity on Linux through an installed Unity CLI MCP server.
- Open Routines from View ▸ Open Routines in the Mac menu bar, or from the new Open Routines button under Routines in an agent's settings on every platform.

### Changed

- BridgeVerse rooms are roomier, and customizing your character opens a studio with your character full height beside the wardrobe, a camera that moves to your face or pet, and drag to spin and scroll to zoom.
- Agent chats use the Thread composer's layout: the provider shows as its mark, files drop onto the whole composer, and the toolbar steps down instead of clipping in narrow panes.
- Reuse unchanged syntax-highlighted lines after edits near the top of large files, and defer voice audio code until a call needs it.

### Fixed

- Zoom the app with ⌘+ / ⌘− / ⌘0 on macOS and Ctrl+= / Ctrl+− / Ctrl+0 on Windows and Linux while typing in a terminal or prompt, not only when nothing has focus.
- BridgeVerse launches and follow-up messages now submit: the prompt is typed once the agent is ready and Enter is sent separately, and an agent waiting on a question is never typed into.
- BridgeVerse agents no longer sit or stand inside each other, new hires appear side by side instead of in one heap at the door, and rooms add desks as you launch more agents so every agent sits at its own computer.
- Scrolling a mouse wheel over BridgeVerse zooms the camera a clear step per click on macOS, whichever way natural scrolling is set.
- The teammate inbox no longer squeezes an Agent chat until the composer's toolbar is cut off.
- Connecting an SSH workspace on Windows no longer fails every time with a generic connection error while \`ssh\` works in a terminal.
- Keep the app responsive with BridgeVerse open on a computer without graphics acceleration by switching the campus to a lighter half-resolution view when it can't keep up.
- Count streamed emoji and incomplete Unicode characters correctly at text-rendering size limits.
- Keep ended voice calls from writing memory after cancellation and preserve the selected voice when starting a call.
- Edit and save local text files again when opening Files from the desktop sidebar.
- Show Ctrl+N for new agent chats on Windows and Linux while keeping the Mac shortcut on macOS.
- Keep terminal cancellation responsive when a Linux coding agent stops reading a full input queue.
- Terminals and agents on macOS and Linux show full color again when BridgeMind One is started from a shell that disables color.
- Close macOS and Linux terminal jobs without hanging behind a full input queue or leaving ordinary background jobs running.
- Keep the app from crashing when a key event arrives without a key name, such as when picking an autofill suggestion.
- Claude Code agents running inside WSL on Windows now update Plan usage and send turn notifications, instead of Plan usage staying on "Updates after the first response."
- Terminal apps that choose light or dark colors from the terminal, such as Claude Code's automatic theme, now follow BridgeMind's appearance, so dark-mode question prompts no longer show black, unreadable text.
- With a full Teammate inbox open in the smallest window, the Agent chat message box keeps its rounded bottom edge instead of having it clipped flat.
- Keep keyboard focus where you moved it when the empty Code home finishes loading after a mode switch.

### Security

- Separate Linux development credentials from production while preserving existing production sign-ins and connections.
- Check signed Linux updates against the exact installer type and architecture before offering an install or recovery download.

## 0.2.8 — 2026-10-01

<!-- release-platforms: macos -->

macOS only; the signed Mac preview on the preview channel only, following 0.2.7.

### Added

- Press ↑ on an empty prompt in Thread and Agent chats to bring back your earlier messages, and Backspace to take back the last attachment.

### Changed

- Agent chats use the Thread composer's layout: the provider shows as its mark, files drop onto the whole composer, and the toolbar steps down instead of clipping in narrow panes.

### Fixed

- Typing in a Mac terminal no longer re-inserts everything typed since the last Enter when macOS suggests or corrects a word.
- The teammate inbox no longer squeezes an Agent chat until the composer's toolbar is cut off.

## 0.2.7 — 2026-10-01

<!-- release-platforms: macos -->

macOS only; the signed Mac preview candidate on the preview channel only, replacing the unpublished 0.2.6 candidate, which still stopped at code signing, and including every change listed under 0.2.6, 0.2.5, 0.2.4 and 0.2.3.

### Changed

- The Mac release credential check now signs and verifies a small test app with the Developer ID certificate, so a code signing problem appears before the signing step runs.
- A failed Mac release signing step now names the part of the app it was signing and recognizes many more causes, still without printing signing details.

### Fixed

- Mac release signing now signs the bundled tickets helper before sealing the app around it, which stopped the 0.2.6 candidate at code signing.

## 0.2.6 — 2026-10-01

<!-- release-platforms: macos -->

macOS only; the signed Mac preview candidate on the preview channel only, replacing the unpublished 0.2.5 candidate, which stopped at code signing, and including every change listed under 0.2.5, 0.2.4 and 0.2.3.

### Changed

- A failed Mac release signing step now names the likely cause, such as a locked keychain, an incomplete certificate chain or an unavailable timestamp service, without printing signing details.

### Fixed

- Mac release signing now puts its temporary signing keychain first on the keychain search list, so code signing can build the Developer ID certificate chain that stopped the 0.2.5 candidate.

## 0.2.5 — 2026-10-01

<!-- release-platforms: macos -->

macOS only; the signed Mac preview candidate on the preview channel only, replacing the unpublished 0.2.4 candidate and including every change listed under 0.2.4 and 0.2.3.

### Fixed

- Mac release builds now receive their Developer ID, notarization, Sparkle update and crash-report symbol keys, which reached the 0.2.4 candidate build empty.

## 0.2.4 — 2026-09-30

<!-- release-platforms: macos -->

macOS only; the signed Mac preview candidate on the preview channel only, replacing the unpublished 0.2.3 candidate and including every change listed under 0.2.3.

### Fixed

- Mac release signing reads Developer ID and Sparkle keys from the production-release environment again instead of empty workflow placeholders.
- Keep the app responsive with BridgeVerse open on a computer without graphics acceleration by switching the campus to a lighter half-resolution view when it can't keep up.
- Keep the app from crashing when a key event arrives without a key name, such as when picking an autofill suggestion.

## 0.2.3 — 2026-09-29

<!-- release-platforms: macos -->

macOS only; the first signed Mac preview candidate, on the preview channel only and not offered to the earlier BridgeMind One Mac app.

### Added

- On Mac, closing the window keeps your agents running, and Keep running when the window closes in Settings → Remote tucks BridgeMind into the menu bar with a running-agent count, Open and Quit.
- With Keep running when the window closes on, your Mac stays awake while agents work or Remote is on, and can sleep again once they finish.
- Stay signed in when your Mac updates from the earlier BridgeMind One app to this one.
- Review and import agents, Places, routines and chat summaries from the earlier BridgeMind One Mac app on the same computer from Settings → Import, without choosing a folder.
- Bring your agents, workspaces, routines, chats, agent memory, layouts, preferences, Claude and Codex accounts and plugin connections over from the earlier BridgeMind One Mac app automatically on first launch, with a per-item report and Retry in Settings → Import; the Mac app's own files stay untouched.
- Your Keep running when the window closes setting carries over from the earlier BridgeMind One Mac app, unless you've already set it here.
- Turning off automatic installs in the earlier BridgeMind One Mac app's update window carries over too, until you change Automatic updates in Settings.
- With Error reports on, a Mac updater that fails to start sends a report naming only the failed step and its error code, so a Mac that stops getting updates doesn't go unnoticed.
- Agent panes from the earlier BridgeMind One Mac app reopen their exact Claude Code, Codex or other agent conversation, in the folder it ran in and on the account it used — a signed-out account holds the pane until you sign that account back in.
- Reopen conversations the earlier Mac app saved from a workspace's + menu, under From the Mac app.
- SSH workspaces carry over from the earlier Mac app with their connections, tabs, chats and routines; no SSH keys are copied.
- Thread panes from the earlier Mac app open their conversation, and your launch presets and workspace order carry over too.
- Workspaces, tabs and chats that finish carrying over after BridgeMind opens show up without a restart.
- Add projects inside iCloud Drive, Dropbox, Google Drive and other cloud folders under ~/Library as workspaces; the rest of ~/Library stays off-limits.
- After the Mac app's data carries over, a one-time notice says what came over and what needs a look, and Settings → Import lists the Claude and Codex accounts to sign in to again.
- Tasks, saved prompts, archived chats, Bridge's persona and memory, voice and notification settings, the thread grid and terminal text size also carry over from the earlier BridgeMind One Mac app wherever you haven't set them up here.
- Your default, per-agent and per-workspace Claude and Codex account choices from the Mac app apply again once you sign in to each account here; until then, new chats for that agent or workspace wait for the sign-in instead of running on another account.
- Claude and Codex account folders from the Mac app come over as APFS clones that take no extra disk space, and a copy that would leave your Mac with under 2 GB free is skipped rather than fill the disk.
- Measure renderer performance with repeatable correctness checks and baseline comparisons, and sample native Windows CPU and memory use.
- Check for Mac updates through the native updater, preserving your automatic-update choice and keeping update access available if the interface fails to load.
- Capture Mac dictation with system permission, stable microphone selection, and cancellation-safe recording.
- Add experimental Apple silicon and Intel Mac verification packages for testing the shared desktop app under a separate app identity.
<!-- replaces-note: Add tooling for signed universal Mac installers, update verification, native installation checks, and preview downloads; hosted signed acceptance remains pending ahead of the Swift app migration. -->
- Add tooling for signed universal Mac installers, update verification, native installation checks, and preview downloads.
- Opt in to preview builds of the Mac app from Settings → Updates; turning it off keeps your current build until a regular release passes it.

### Changed

- Check both signed-in and signed-out Mac upgrades on every supported test platform before allowing the Swift-to-Rust replacement.
- Check the Mac update feed, website download and signed installer daily once a Rust release channel is published.
- Require every supported desktop platform to pass verification before shared changes merge, and verify the universal Mac update package before preparing a Mac release.
- Reuse unchanged syntax-highlighted lines after edits near the top of large files, and defer voice audio code until a call needs it.
- Prepare signed Mac updates using the same Apple app-specific-password setup as BridgeSpace and BridgeVoice.
- Terminals that print a lot of output at once, such as builds and long logs, draw it with far fewer round trips on macOS.
- Mac update prompts show that release's notes from the changelog.
- Mac builders who skip the update to the new BridgeMind One app are offered it again with each later release.

### Fixed

- Carrying over the earlier Mac app's layouts and settings preserves changes you make here while migration runs, including existing thread grids and theme choices.
- Mac terminals start as login shells with a UTF-8 locale, so Homebrew and other tools from your shell profile are on PATH even when BridgeMind is opened from the Dock or Finder.
- Mac zsh terminals save command history to your own history file instead of the app's data folder.
- AppleScript and \`osascript\` commands in Mac terminals can ask to control other apps instead of failing with error -1743, and BridgeMind explains why it asks before opening removable or network drives.
- The Mac Browser opens a file picker for upload buttons, keeps you signed in to websites after BridgeMind restarts, and identifies as Safari so sites serve their full pages.
- Bridge names macOS, Finder and System Settings on the Mac when it explains a feature that isn't available yet, instead of talking about Windows.
- Confirming a Japanese, Chinese or Korean input-method candidate with Enter no longer sends the message or submits the field early on the Mac.
- Text that should not be selectable stays unselectable on the Mac, and frosted menus keep their blur in Safari 17's engine.
- On the Mac, the menu bar starts with the BridgeMind menu (About, Settings ⌘,, Hide, Quit), Edit includes working Undo and Redo, and a Window menu is available.
- Count streamed emoji and incomplete Unicode characters correctly at text-rendering size limits.
- Keep ended voice calls from writing memory after cancellation and preserve the selected voice when starting a call.
- Letting go after holding the Bridge orb to talk no longer hangs up the call, so Bridge hears what you said and answers.
- Edit and save local text files again when opening Files from the desktop sidebar.
- Show Ctrl+N for new agent chats on Windows and Linux while keeping the Mac shortcut on macOS.
- Use the existing organization Apple credentials and protected signing setup when preparing Mac updates.
- Terminals and agents on macOS and Linux show full color again when BridgeMind One is started from a shell that disables color.
- Keep verified Mac release candidates eligible for promotion and rollback after a later workflow rerun.
- Recover interrupted Mac download promotion from preserved artifacts and retain a recovery record when automatic restoration cannot finish.
- Close macOS and Linux terminal jobs without hanging behind a full input queue or leaving ordinary background jobs running.
- Stopping an agent on macOS also stops helper processes it moved into their own group.
- Withdrawing a Mac migration offer also puts the earlier app's installer back behind the website's Mac download link.
- Analytics and crash-report opt-outs from the earlier BridgeMind One Mac app apply from the first launch of this app, before anything is sent.
- The Open BridgeMind button on the sign-in success page brings the Mac app forward again.

### Security

- On the Mac, only BridgeMind's own interface can use the microphone, and no page in the app or the Browser can use the camera.
- Keep Mac sign-ins, installation identity, Remote state, and plugin connections in the system Keychain across app restarts.
- Credentials saved to the macOS Keychain are wiped from memory afterwards.
- The Mac app installs only its own updates, never a build of the earlier BridgeMind One Mac app that shares its name and signing.

## 0.2.1 — 2026-09-28

<!-- release-platforms: windows -->

[Public release notes](https://bridgemind.ai/changelog/bridgemind-one/v0-2-1). Windows only; replaces the withdrawn 0.2.0 candidate.

### Added

- Measure renderer performance with repeatable correctness checks and baseline comparisons, and sample native Windows CPU and memory use.

### Changed

- Reuse unchanged syntax-highlighted lines after edits near the top of large files, and defer voice audio code until a call needs it.

### Fixed

- Count streamed emoji and incomplete Unicode characters correctly at text-rendering size limits.
- Keep ended voice calls from writing memory after cancellation and preserve the selected voice when starting a call.
- Edit and save local text files again when opening Files from the desktop sidebar.
- Show Ctrl+N for new agent chats on Windows and Linux while keeping the Mac shortcut on macOS.
- Keep Windows development checks compatible with native file paths and clipboard line endings.
- Open the Windows app reliably when its browser has not finished loading the first page, while preserving microphone permission prompts and blocking requests from other origins.
- Verify that installed Windows updates start successfully before making them available for download.

## 0.2.0 — 2026-09-27

<!-- release-platforms: windows -->

[Public release notes](https://bridgemind.ai/changelog/bridgemind-one/v0-2-0). Windows only.

### Added

- Pick a theme in Settings → Customizations: Tokyo Night, Catppuccin Mocha, Nord and Dracula for dark mode, Catppuccin Latte, Solarized Light and GitHub Light for light mode, each shown as a live preview, with dark and light each remembering their own pick and terminals following along.
- Drag a file from the Files tree onto the editor to open it as a tab exactly where the preview chip shows, and drag tabs to reorder them.
- See what changed after every update in a one-time What’s New overview, and browse every release in Settings → Changelog.
- Use BridgeVerse computers and nearby desk controls to manage agents or start one in a room, and teleport to valid destinations from the campus map.
- Switch BridgeVerse to a first-person view from the top bar's eye button or with V, then drag to look around and walk where you look.
- Walk between BridgeVerse desks through wider aisles, and see what E will do (manage an agent, start one at an empty desk, or launch from a kiosk) in a chip you can also click.
- Open a BridgeVerse agent to work in its real terminal in a window you can move, resize and maximize over the campus, and launch new agents straight into their terminal instead of filling in a prompt form.
- Click an agent's computer in BridgeVerse to be pulled over their shoulder and into their monitor, reading what they see, before their live terminal fills the view.
- Launch an agent from an empty BridgeVerse computer and it sits right down at that desk instead of walking in and taking whichever desk is free.
- Answer coding-agent approvals from anywhere in BridgeVerse: any agent blocked on a permission menu, trust prompt or chat approval (Claude Code, Codex, Gemini and other CLIs) now shows as Needs you and stays in a tray with its options until you answer.
- See Claude Code and Codex plan limits in the Chat and Agent headers as well as Code mode, with account-specific readings, reset times, and fresh Codex checks.
- Save named launch presets in the new-session wizard: pick agents and Terminal seats, give each one an opening prompt or command, then launch, edit or delete the lineup later.
- Native app menus provide context-aware New Terminal/Chat/Thread, Settings, sidebar, Files, zoom, and update actions; Code New Terminal uses the existing plain terminal tab path.
- Dictate into Agent and Code drafts with explicit cloud or verified local Whisper selection, private microphone controls, and a preview before importing legacy BridgeVoice vocabulary or history.
- Choose a verified on-device Whisper model for local dictation without enabling cloud transcription.
- Attach files, folder snapshots, or pasted screenshots to local Claude and Codex Thread and Agent conversations, including attachment-only messages.
- Create separate Git worktree lanes from a local workspace, recover interrupted enrollment, and remove clean unused lanes while keeping their branches.
- Review a finished Bridge call for suggested memories when you explicitly enable call review.
- Edit and save text files from the Files sidebar, with recoverable drafts and a warning when the file changes elsewhere.
- Choose whether Files edits save automatically from General Settings, with the same preference in every open editor.
- Archive conversations and restore them from a private shelf, or permanently delete an archived conversation after confirmation.
- Search saved conversations and use a personal prompt library from chat and Agent conversations.
- Find saved conversations by voice across unloaded transcripts, with owner-checked result handles.
- Open the conversation from a routine's last run and control whether each agent may create routines.
- Inspect safe operation details in chat transcripts without showing raw command output or private paths.
- Keep an agent's plugin opt-out visible in Settings after that plugin disconnects, so you can clear it before reconnecting.
- Continue a saved Code pane conversation in place, including its composer and approval requests.
- Review Discord activity-sharing controls in Settings, with separate consent for names once Discord integration is configured.
- Read bounded Git status and a changed file's diff from a paired phone when file-reading access is granted.
- Pause or resume teammate messaging in Agent Settings and review accepted messages in each agent's inbox.
- BridgeVerse comes to the sidebar (+ ▸ BridgeVerse): walk a 3D campus with a room for every workspace and a desk for every coding agent, launch agents with a prompt, read their feed, reply, answer their questions, stop or close them, dress your character, and earn XP, levels, quests and achievements as your agents ship.

### Changed

- Load optional theme palettes and tooltips after the initial shell so startup stays smaller with production diagnostics enabled.
- Long Chat and Agent conversations stream on less CPU: a streamed update no longer re-hashes the whole transcript, and hashing now uses the processor's SHA-256 instructions.
- An idle app no longer opens a database write every second to check for Agent messages; the check now reads first and only does work when mail is waiting.
- Show submodule commit changes in Git views without inspecting uncommitted files inside submodules.
- Ask Bridge to open a page and it opens in the sidebar browser.
- Reduce repeated compilation and unnecessary waiting while preparing desktop updates.
- A hidden or minimized window stops polling pane activity, the Dashboard, plugin connections and Remote status, Tasks no longer redraws for unchanged snapshots, and less code loads at startup.
- Light mode looks cleaner: Dashboard cards and search fields sit as white surfaces instead of grey wells, mode and segment switches use a white thumb, the focused pane's outline is softer, and hairlines are lighter.
- Drag a sidebar thread onto either half of a single conversation to split the screen, with labeled landing previews and independent conversations on each side.
- Drag a Code pane onto its workspace or nested session rows to move it into a new tab, with clear sidebar landing highlights.
- Reduce repeated work in large Tasks lists and paired-phone previews, quiet Chat timer activity, and initial loading for optional memory, archive and Auto features.
- Native New Chat follows the currently selected teammate and refuses stale creation after navigation, sign-out, or a blocking dialog.
- Reuse unchanged file highlighting, coalesce Dashboard reads and provider discovery, and reduce repeated work while streaming replies or preparing paired-phone snapshots.
- Reduce startup loading, repeated chat and plugin stream processing, and waiting behind Tasks refreshes or database reads.
- Prepare the sign-in connection while the signed-out screen is visible so Sign in can open the browser faster.
- Approval cards show the full command an agent wants to run, wrapped and scrollable, with hidden characters spelled out and only secret values masked.
- Opening BridgeMind One while it is already running brings the open window forward instead of starting a second copy that shares its data.
- Agent searches no longer wait behind other agents' tool calls, and account checks make one fewer request so profile and plan details always agree.

### Fixed

- Keep Remote controls responsive when its connection client changes, and ignore results from replaced Remote and plugin clients.
- Attach screenshots and files by dropping them from your file manager onto a Thread or Agent composer, and see why an attachment is refused in Cursor, Grok, and OpenCode conversations.
- Recover damaged command history on Windows while preserving its database and pending transactions.
- Drag files from the Files sidebar or its open tabs into coding-agent terminals to insert their paths, including files that cannot be previewed as text.
- Keep floating Bridge controls centered on the sphere while preserving the latest Files, launch, Thread, and theme improvements together.
- Treat a release feed that isn't published yet as "no update" instead of a failed check, so the update gate stops asking builders to retry a request that can't succeed until the release ships.
- Launching agents in BridgeVerse no longer sends your character running around on its own; you stay where you are and the new agent's console opens.
- BridgeVerse walks to a desk no longer stall against desk rows, the wardrobe shows your whole character, consoles leave the campus in view, and map labels and name tags are readable.
- Terminals and agent panes redraw their last screen after the app reloads instead of staying blank until the next output.
- Make the What’s New category counts and footer easier to read in both themes.
- Keep unsaved agent profile edits when switching between Settings, Memory, and Skills, and show task creation errors inside the open form so drafts can be retried.
- Preserve messages and attachments typed during a pending send, and keep workspace changes and task status tied to the selected workspace.
- Wait for workspace layouts to save before completing launches, prevent duplicate launches, and preserve existing sessions when a retry fails.
- Retain failed sign-out cleanup for retry, preserve chat recovery files, and keep attachment staging available in new Code threads.
- Keep exited terminals readable when their pane reconnects, preserving the exit status and ordered output.
- Stop background Git checks for unavailable workspace folders and show recovery guidance when a folder moves or becomes inaccessible.
- Handle native event-listener cleanup failures when terminal panes or window listeners close.
- Keep BridgeVerse shortcuts in the active panel, preserve unsent agent messages across desk switches, and offer a persistent retry when the campus cannot load.
- Keep BridgeVerse launches attached to the chosen workspace, stream live agent feeds without restarting saved sessions, preserve prompts across desk switches, and send room-wide tasks with clear per-agent results.
- Keep BridgeVerse approvals tied to the displayed request and recover scene controls, routes, and live feeds correctly after focus changes or agent restarts.
- Preserve Thread drafts and saved prompt inserts across window focus, navigation, failed sends, and creating another conversation.
- Keep Thread attachments usable when the development renderer replays component effects.
- Keep Files draft recovery available when many tabs are open, without discarding unsaved edits.
- Restore an explicitly selected microphone after restarting the app or reconnecting the device.
- Open the dedicated Voice settings page when Bridge is asked for Voice settings.
- Keep Codex signed in when BridgeMind starts from an existing managed Codex session.
- Files saves stay in the file's own folder even if it is moved or relinked mid-save, CRLF and CR files no longer open as edited, Tab, Shift-Tab and Return follow the file's indentation, and agent notification hooks ignore a builder's .curlrc and proxy settings.
<!-- replaces-note: Check signed updates against the exact Windows or Linux installer type and architecture before offering an install or recovery download. -->
- Check signed updates against the exact Windows installer type and architecture before offering an install or recovery download.
- The thread composer keeps its model and mode pickers on one row with the send button when the pane narrows, and only drops labels when there is no room for them.
- Changed files in the sidebar Files tree keep their status dot on the same row, and the Files tab keeps the sidebar's rounded bottom corners.
- Messages, titles and errors that mention words like "Asia" or "bearer" are no longer replaced with "Sensitive value omitted", while real keys and tokens stay hidden.
- Codex chats keep earlier replies and command rows when you send a follow-up instead of overwriting them.
- Chat no longer freezes when a provider is slow to start, when a worktree lane is removed during an agent-message wake, or when an agent's tabs are reordered mid-reply, and Stop works while a provider is still starting.
- Chats waiting for your approval show the prompt even after their updates fell behind, long Cursor, Grok and OpenCode histories no longer leave the next turn stuck, and one busy agent no longer delays other chats.
- New chats get an AI-generated title again, streaming a long chat uses much less CPU, and very long chats can be stopped from your phone.
- Attachments keep working after many sends, and files dropped into the composer while an agent works are no longer deleted when its turn ends.
- An Agent chat you leave mid-reply keeps streaming when you come back, with Stop, the finished reply and unsent drafts intact.
- Long teammate messages no longer block an agent's mailbox, and a failing message wake retries with a growing delay instead of every second.
- Agents see their newest memory notes, ordinary words, paths and IDs are no longer hidden as credentials, and one flagged note no longer fails a memory search.
- Create with AI keeps long generated briefs, cleans up its hosted draft after a cancel or error, and voice takes continue after a pause instead of reporting no microphone or staying on Listening.
- Deleting an agent fully removes its home folder, including read-only or deeply nested files, and never re-creates it.
- Managed Claude accounts keep working when Claude Code's own settings file grows large or is mid-write, plan readings survive restarts, and signing out one account no longer waits on sessions using another.
- Starting Claude and Codex chats and terminals no longer fails after long use, and a failed Add account no longer leaves an empty account row.
- OpenCode chats set to read only or plan explain that OpenCode has no plan mode available instead of showing a generic error.
- BridgeMind One opens normally after a routine is deleted mid-run, a routine chat goes missing, the clock moves backwards, or an agent or SSH workspace was saved by a newer build.
- A routine whose pinned folder moved or was unmounted runs from its agent's usual places, instead of stopping every other routine from firing.
- Chat history and agent rails keep working past 10,000 chats, and the Dashboard shows the newest live chats when more than 256 are running.
- The Usage panel finishes counting large logs instead of undercounting them, and OpenCode tokens are no longer counted twice.
- Local Tasks keeps saving in large libraries, and restoring a damaged Tasks file continues numbering just after the backup.
- Closing a Files tab with unsaved edits or choosing Discard and reload asks first, and your draft stays if you cancel.
- Files reopens nested files reliably, lists folders with up to 2,000 items, and stays responsive while another file is read or saved on a slow or network drive.
- Agent installer terminals keep focus while you answer their prompts, and restored Claude Code panes keep their notifications and usage meter.
- Prompts typed by Bridge voice, BridgeVerse and Auto into Claude Code and Codex now send, and plain shells no longer show stray paste markers.
- Committing or pushing from Files no longer times out when a hook leaves a background process running, and a timed-out command also stops the helpers it started.
- Stopping a chat turn on Windows stops the agent right away.
- SSH workspaces accept servers that show a login banner and run preset startup commands, and Bash terminals keep your own DEBUG trap and \`$_\`.
- Terminal autocomplete suggests your most-used commands first and no longer learns partial lines or text typed into a running program.
- Pane shortcuts, Escape and Ctrl+Enter no longer act on a hidden Handoff or New Session screen or from sidebar editors, and agents started from + or Handoff stop if their pane closes before they start.
- Signing out sticks even while an account check is saving, always finishes, and always stops voice create, Auto, presence, pending attachments and background chat agents.
- Sign-in gets the full five minutes however long the welcome screen was open, and other local connections can no longer delay or cancel it.
- Update checks give up after 30 seconds on a stalled connection instead of blocking download and restart, and Windows clears leftover update installers.
- Remote status, Disable, Revoke and Reset respond right away when the relay is slow, and Remote no longer asks you to re-pair after heavy phone use.
- Pinning, reordering and renaming workspaces no longer reports busy while a picker is open, and the SSH dialog explains when no workspace was added.
- Bridge voice follows restarted terminals, never starts terminals you haven't opened, stops launches that land after you switch workspace, and ends waits as soon as you hang up.
- Bridge requests to open a file that can't open in Files no longer stall the call, long voice calls no longer drop, and "working" or "done" no longer match inside other words.
- Dialogs, What's New and the floating sidebar hide the sidebar browser page while open, and a resize or drag cut short no longer leaves the page hidden.
- Long OAuth and SAML sign-in URLs load in Browser panes, Browser panes clean up their profile folders, and closing terminals or BridgeVerse frees graphics memory right away.
- Docs and Get links on agent install screens, and links in agent skill and SSH chat replies, open in your default browser.
- The Changes panel no longer sticks on "Reading changes…", streaming replies keep your selection, and BridgeVerse feeds keep output that follows a terminal link.
- Dictation and voice errors show clear messages, choosing a Whisper model no longer blocks sign-out, and chat search accepts 256-character queries in any script.

### Removed

<!-- replaces-note: Open a blank Canvas in a tab or split pane and restore it with the workspace layout. -->
- Remove the blank Canvas pane from Code mode.
<!-- replaces-note: Open Bomb Sprint and Scratchpad from the Code Apps pane in the right sidebar. -->
- Browser and Apps panes leave Code mode for the right sidebar: the New pane menu offers terminals and agents, Ctrl+Alt+B and Ctrl+Alt+A no longer split, and a saved Browser or Apps pane closes when its workspace opens.
- Remove the unused Grok Voice session and global dictation connections.

### Security

- Give each Browser surface a fresh private profile and finish accepted phone file writes before acknowledging access revocation.
- Keep automatic task worktrees inside the selected repository and reject redirected worktree directories before checkout.
- Disable repository-configured executable filters when reading Git status or diffs.
- Reject unrecognized fields in paired-phone resource requests before executing an action.
- Cursor, Grok and OpenCode agents ask before reading or editing files outside the workspace or environment files, can no longer write through a broken link out of the workspace, and OpenCode read only or plan refuses to start without a plan mode.
- File names dropped or inserted into terminals can no longer type or run commands, including through typographic quotes in PowerShell.
- Bridge asks before typing a saved prompt into a plain shell, letting a chat edit files, starting or resuming task agents, or turning off automatic updates.
- A signed-out Claude account reconnects only with the same Claude login, so another login can't pick up its earlier conversations.
- Terminal history no longer learns current API key formats, password flags or credentials in URLs, including imported BridgeSpace history, and deleting history clears it from disk.
- Folders that contain your home folder and system folders can't be added as workspaces, and a workspace folder replaced by a link shows as unavailable.
- Removing a worktree lane no longer runs the repository's own fsmonitor or filter commands.
- Unsaved Files drafts not reopened for 30 days are removed.
- Files, layout and terminal requests are refused from any surface other than the main window, and remote pairing codes are drawn evenly from their alphabet.

## 0.1.68 — 2026-09-25

[Public release notes](https://bridgemind.ai/changelog/bridgemind-one/v0-1-68).

### Added

- Manage separate Claude accounts in Settings and choose which account new chats and terminals use.
- Pin and reorder teammates in the sidebar by dragging or using the menu.
- Review and explicitly import older Mac app data, with recovery copies and Place re-enrollment.
- Track a focus session with a stopwatch or Pomodoro timer in the sidebar, with saved progress and a finish notice.
- Close idle agents from the Dashboard in one click while working agents and agents waiting for you remain open.
- Search Dashboard cards by title, agent, product, project, branch or recent output; Close idle applies to the cards shown by the search.
- Ctrl-click a file path in a workspace terminal — like the file an agent just wrote — to read it in its own sidebar tab at the printed line.
- Folders inside WSL now open terminals, Claude Code, Codex and other coding agents inside their Linux distribution, and Claude Code and Codex chats run there too.
- Coding agents installed only inside WSL now show as installed, name their distribution, and launch there — including npm and nvm installs.
- Files dropped or images pasted into a WSL pane now insert Linux paths.
- Turn on Select element in any browser to point at part of a page. Click an element (Shift adds more, Alt picks the parent), add a note, and copy an agent-ready brief with its HTML, selector, component, size, and key styles to paste into your coding agent.
- Work across up to six saved Thread panes side by side.
- See completed agent turns as Done on the Dashboard, separately from idle agents.
- The sidebar has a Files tab (+ ▸ Files, or Ctrl+Alt+F from any mode): the file tree and viewer for the folder you're working in, following you between Code workspaces and Thread folders, side by side when the sidebar is wide and one column at a time when it's narrow.
- The Files tab speaks git: changed files wear their status in the tree, the Changes view stages, unstages, discards and commits with a diff of every file, and the branch button shows how far you are ahead or behind and pulls, pushes or publishes the branch.
- Drag a file or folder from the Files tab onto a coding agent's terminal to type its path, or into a thread's message box to mention it.
- Review thread files, images and PDFs, or open a browser beside a conversation in its saved inspector.
- Browse preview catalog entries for PostHog, Zernio, and Paddle.

### Changed

- Bomb Sprint has a redesigned, realistic cast-iron bomb that grows to fill the sidebar, and its controls now follow the sprint: set it up and Start, then Pause or Resume, then Run it again when it goes off. Presets pick a length without starting, and the bomb's display previews it.
- Files lives in the sidebar now instead of a Code-mode pane: the pane menu's Files row and Ctrl+Alt+F open the sidebar's Files tab, and Bridge opens files there too.
- Open Tasks in a permanent sidebar tab from any work mode.
- Start restored terminals automatically in sequence and use a short startup overlay after the first launch.

### Fixed

- Give Ryze AI a mark that adapts to both themes and reject oversized gateway credentials without a crash.
- SSH workspace connection errors now explain whether the machine, host key, key file, sign-in, or remote folder needs attention.
- Let builders check, install, retry, and download a signed installer from the sign-in screen when account access or in-app updating is unavailable.
- Show only Automatic for Cursor and OpenCode until each installed agent supplies its model list, clear choices it later withdraws, and remove invented choices from the browser preview.
- Prevent secure Live voice and remote connections from crashing during initialization.
- Revoke workspace access when account checks explicitly report that the account is inactive.
- Keep a terminal's completed state and Restart action when pending input or resizing finishes after its process exits.
- Show a clear startup failure message before exiting instead of producing a second crash report.
- Open the selected notification reliably when notification updates arrive together.
- Keep expected account restrictions out of error reports and preserve distinct failure causes without including private data.
- Keep signed-in sessions available for retry when a temporary access challenge interrupts account refresh.
- Show retryable notification-setting errors without losing saved preferences or leaving actions unhandled.
- Include safe account-request categories in failure reports so recurring sign-in problems can be diagnosed.
- Release consumed background terminal output promptly to reduce retained memory.
- Keep the app running when its launcher's console output is no longer available.
- Retain safe operation labels in startup and terminal failure reports to make recurring problems diagnosable.
- Preserve microphone gain when starting and ending a Bridge call.

## 0.1.66 — 2026-09-25

[Public release notes](https://bridgemind.ai/changelog/bridgemind-one/v0-1-66).

### Added

- See your Claude Code and Codex plan usage and reset times in the title bar, plus how full each agent's context is in its pane header.
- Format Scratchpad notes with bold, italic, and underline using the toolbar or keyboard shortcuts; formatting is saved with the note.
- Open built-in apps from the sidebar’s + menu; each app keeps its state when its tab is closed.
- Jot notes beside your work in Scratchpad; they save as you type and remain on this PC after a restart.
- Time your work with Bomb Sprint, a sidebar countdown that keeps running with its tab closed and rings when it finishes.

### Fixed

- Usage history now counts tokens from every connected Codex account, not just your default sign-in.
- Windows: Claude Code installed with npm now reports task titles and approval waits to the Dashboard.

### Security

- Status reports from agent terminals now carry a secret made fresh for each launch, and BridgeMind rejects any report without it.

## 0.1.65 — 2026-09-25

[Public release notes](https://bridgemind.ai/changelog/bridgemind-one/v0-1-65).

### Changed

- BridgeMind now opens with the same launch animation as BridgeVoice on every launch: a swirl of particles assembles the bolt, it ignites with twin rings as the wordmark rises, then fades into the app. Click or press any key to skip; Reduce Motion shows a short fade instead.

### Fixed

- Give Codex terminal agents task titles on the Dashboard and clear “Waiting for you” after you answer an approval or the agent resumes.

## 0.1.62 — 2026-09-24

[Public release notes](https://bridgemind.ai/changelog/bridgemind-one/v0-1-62).

### Changed

- Keep streamed conversations and large task libraries responsive with less repeated parsing, hashing, discovery, and disk work.
- Clicking a Code-mode agent on the Dashboard now flashes its pane with a glowing, pulsing accent ring and a light that laps the border, so you can spot which pane it is at a glance (a steady ring with Reduce Motion).
- The Thread composer is cleaner: Plan, Agent and the agent’s permission level now live behind one icon dropdown instead of a Plan/Agent toggle and a separate permissions chip.

### Fixed

- Refresh a selected file’s Changes diff after its folder status finishes loading.
- Show the final output from a hidden terminal before its exit notice.
- Open each new thread on the provider, model, reasoning effort and access level you last picked, with each provider remembering its own choices.
- Keep background terminals answering CLI color and cursor capability checks when switching tabs or hiding panes.

## 0.1.61 — 2026-09-24

[Public release notes](https://bridgemind.ai/changelog/bridgemind-one/v0-1-61).

### Fixed

- Show a clear message when Claude reaches a session, usage, or rate limit.
- Keep Cursor sign-in and internal errors distinct from unavailable models when selecting a model.

## 0.1.60 — 2026-09-24

[Public release notes](https://bridgemind.ai/changelog/bridgemind-one/v0-1-60).

### Fixed

- Let BridgeVoice paste dictation into Windows coding terminals without sending a control character or submitting the prompt.
- Restore terminal colors, bold text, and monospace fonts in packaged Windows builds.
- Connect GPT Live through the app's signed-in native connection, and end the connection on hang-up, sign-out, or interface reload.
- Restore the Dashboard sidebar's tab styling, spacing, and resize controls.

## 0.1.58 — 2026-09-24

[Public release notes](https://bridgemind.ai/changelog/bridgemind-one/v0-1-58).

### Added

- Choose Claude Opus 5.5, GPT-6 Sol, or GPT-6 Luna for Agent and Thread conversations.

## 0.1.54 — 2026-09-23

### Added

- Open web pages in a window-wide browser sidebar with reorderable tabs, device previews, and a Dashboard showing current agent and workspace activity.
- Ask Bridge to find relevant sessions and workspaces by meaning, then jump directly to the result.

### Changed

- Keep the browser sidebar available while moving between workspaces and let it cover the window when more space is needed.

### Fixed

- Make SSH workspace setup require a project folder and report connection failures clearly.
- Keep agent activity and worktree branch details accurate in the Dashboard and workspace views.

## 0.1.53 — 2026-09-22

[Public release notes](https://bridgemind.ai/changelog/bridgemind-one/v0-1-53).

### Added

- Pin folders to the top of the sidebar from the pin on hover or the folder's menu, and drag folders (or use Move Up / Move Down) to put them in your own order.
- A folder's menu now offers Rename, Reveal in File Explorer and Copy Path.

### Changed

- The app looks and feels much closer to the Mac app: tighter controls and type, a brighter sidebar, and one consistent style for menus, popovers, tooltips and dialogs, with right-click menus on workspaces, agents and panes.
- Settings is cleaner and now includes Plugins, threads get a reasoning-effort slider and proper headings and code blocks in replies, and the Files pane shows a tree with syntax highlighting.
- Bridge calls now float as a draggable orb instead of a bar over the pane, window buttons show Restore when maximized, and the launch and sign-in screens open in your chosen light or dark theme.
- The sidebar keeps folders in a steady order instead of jumping the one you last opened to the top.
- Long folder and session names shorten in the middle, so similarly named folders stay tellable apart.
- A folder you collapse stays collapsed until you start a new session in it.
- A folder that was moved or deleted is shown in warning color.

### Fixed

- Narrow windows now keep a single title bar and float the sidebar over your work from the sidebar button instead of squeezing or clipping the layout, the window can snap to half of a laptop screen, and zooming in fits the window instead of pushing the window controls off-screen.
- Threads, Tasks, Usage, Plugins, Settings and split panes fit narrow windows and high zoom: composer pickers compact instead of scrolling out of sight, the Changes panel floats over a narrow thread, task details stack, every split pane stays reachable, the Agent terminal page is styled before Code mode has been opened, and changed-file paths keep their slashes.

## 0.1.52 — 2026-09-16

[Public release notes](https://bridgemind.ai/changelog/bridgemind-one/v0-1-52).

### Security

- Phone turns honor their granted permissions and stop when access ends; restored or older Remote security state requires a fresh pairing.

### Fixed

- Long conversations load on phones without exceeding the encrypted message size limit.

- Keep keyboard-focus release checks reliable when Code mode loads asynchronously.
- Keep agent creation and settings release checks responsive while preserving keyboard and saved-content coverage.
- Stop offering retired Cursor models such as Composer 2 and Composer 1.5 in Thread pickers; only Automatic and the models the installed Cursor Agent reports are selectable, and a thread saved with a model Cursor no longer offers now explains that instead of reporting an unreadable session.
- Show why a Bridge voice call could not start — microphone or echo-cancellation refusal, sign-in, credits or connection problems — instead of the orb lighting for a moment and returning to idle with no message.

## 0.1.50 — 2026-09-14

Prepared release **0.1.50**. Local integration and validation are recorded in [the release review](docs/reviews/2026-09-14-release-preparation.md).

### Added

- Search thread models and choose Cursor’s supported reasoning effort and context window, with selections saved for later turns.
- Connect supported services from Settings → Plugins, including Ryze AI, with connection checks, removal controls and tools discovered when an agent needs them.
- Choose which connected plugins each agent may use, with native permission checks, approval controls and secure credential storage.
- Add Codex accounts in Settings → Agents and select a default for new local Codex conversations and terminals while preserving existing account assignments.
- Pair the BridgeMind mobile app from Settings → Remote to view this computer’s agents and conversations, with optional chat control and revocable phone access.

### Changed

- Builder-started Full access agent turns execute granted plugin writes, paid tools and unclassified actions without individual approval prompts; unattended tasks, routines and message wakes retain native action review.

### Fixed

- Return agent panes to a working shell after Ctrl+C or normal exit, including managed Codex accounts, and discard delayed agent prompts during the handoff.
- Refuse an oversized Codex account registry update without replacing the last readable account settings.
- Let Windows agents finish reading private plugin configuration without an unexpected pipe-disconnection error.

### Security

- Keep plugin credentials in native storage and recheck connection and account authority before agent calls.
- Keep unattended coding permissions from silently granting paid plugin access, while preserving read-only, planning and blocked-operation restrictions.
- Reject exhausted Remote encryption counters and invalid rekey inputs before continuing encrypted phone communication.
- Update TLS handling to reject handshake messages sent at the wrong encryption level.

### Removed

- Remove the obsolete Dashboard screen and navigation target while preserving preferences saved by older builds.
### Fixed

- Keep live voice calls from requesting automatic microphone gain changes, and verify that gain control stays off while echo protection is negotiated.

## 0.1.49 — 2026-09-13

Release notes: <https://bridgemind.ai/changelog/bridgemind-one/v0-1-49>.

### Fixed

- Preserve the beginning of your spoken request while GPT Live connects, clear waiting audio when muted or the call ends, and keep task announcements queued until connected.
- Use Thread mode consistently in voice instructions for workspace conversations.
- Keep input-request notifications readable and handle failed read/review updates without an unhandled renderer rejection.
- Preserve safe filesystem and WebView process failure details to make production errors diagnosable without collecting private content.
- Review files, changes, and web pages in a resizable Thread sidebar with separate tabs remembered for each conversation.

## 0.1.47 — 2026-09-12

Prepared release notes: <https://bridgemind.ai/changelog/bridgemind-one/v0-1-47>. Windows publishes first; Linux follows after verification.

### Fixed

- Google sign-in on Windows accepts bounded large local-browser cookie headers and explains callback rejection categories without exposing request data.
- Verify speaker echo cancellation before voice calls and request system-wide cancellation when supported by WebView2.
- Keep unsaved task titles and properties when another writer updates a task, and edit existing descriptions with explicit save and cancel controls.
- Retry briefly when Windows temporarily locks a saved sign-in file, and improve private diagnostics when sign-in storage is unavailable.
- Preserve validated Windows executable paths containing reserved device names across Windows versions.
- Enforce the four-task execution limit, preserve retry instructions and make Stop reliable during concurrent progress updates.
- Preserve successful Codex responses after reconnecting, while keeping failed or incomplete turns marked unsuccessful.
- Keep the update version and Installing status visible while the installer starts, with a clear retry action on failure.

### Added

- Install supported coding agents from a confirmed command in a visible terminal, then check availability and sign in without leaving the app.
- Choose the provider and model directly in the Agent message composer while preserving conversation drafts.
- Find PostHog, Zernio, and Paddle in the plugin catalog with their official logos and account descriptions.

- Keep tasks, projects, labels, comments and history on your machine, and connect agents through the included local MCP server with revocable access.
- Open Tasks from the title bar: a row beside Usage in the workspace menu while a Code workspace is showing, and a Tasks button in the same spot in Agent and Thread mode.
- Tasks is a Linear-style issue list: tasks grouped by status with counts, one line per task with priority and status marks, labels, project, assignee and a relative date, and arrow-key navigation; open a task to a page with a properties column and an activity timeline, and create one from a compact composer.
- Signed out, "Open local tasks" is a button on the welcome screen and the offline page carries the app's own chrome.
- Ask Bridge to capture, find, read, revise, execute and control local tasks by voice: create_task, get_tasks, get_task, update_task, execute_task, create_and_execute_task and control_task, with the same tools, receipts and refusals as the Mac app.
- Bridge can run a task end to end: an isolated git worktree or marked task folder, the named agent's implementation turn, an independent read-only review, and a saved result on the task, with stop, resume and retry and a notification when it finishes; attempts that were running when the app closed are marked interrupted and wait for an explicit resume.
- A task that finishes after the call ends is announced on the next quiet call; the full report stays on the task, and the task page shows the latest attempt with Open workspace, Open agent session, Stop and Resume.
- Task completions appear in Notifications as "Task ONE-N" and open that task.
- Orchestrate workspace coding chats by voice: create distinct threads, preserve drafts, configure review or planning mode, and follow each agent by its thread.
- Manage local Tasks with projects, labels, comments, history and revocable MCP connections, including offline access.
- Ask Bridge to execute Tasks in dedicated workspaces with saved progress, independent review and stop/resume controls.
- Use voice to navigate app destinations, find panes, open saved agents, inspect settings and credits, and hand off work into a new Thread conversation.
- See distinct action icons for voice commands across workspaces, teammates and app controls.
- Choose Bridge’s GPT Live voice, tone and response length in Settings.
- Opt in to local Bridge memory for builder facts, notes and short call journals, with controls to edit or clear them.
- Keep bounded private local crash reports for diagnosing native startup and runtime failures.

### Security

- Require account access for task execution and stop its agents when access ends; local task records remain available offline.
- Preserve saved microphone permissions, deny requests from foreign webview origins, and stop delayed voice commands after a call ends.
- Refuse voice access to credential files and redact credential-shaped text in tool results and handoff transcripts.
- Keep Bridge memory off by default, reject credential-shaped notes, and preserve unreadable memory files without overwriting them.
- Omit panic payloads and private paths from local crash reports; reports are not uploaded.

### Changed

- Start listening while voice connections initialize, with bounded microphone buffering and clear mute behavior.
- Refresh the Bridge orb, simplify the voice strip, and improve contrast and keyboard navigation across controls.
- Rename Chat mode to Thread across navigation and accessibility, while preserving saved conversations, settings, and agent chats.

## 0.1.44 — 2026-09-11

Published: <https://bridgemind.ai/changelog/bridgemind-one/v0-1-44>.

### Added

- Share privacy-preserving error reports and product usage to help improve BridgeMind, with separate controls in Account settings.

- Talk with GPT Live in the Windows app, with full-duplex audio and workspace context bound to the intended coding agent.
- Mute your microphone while Bridge keeps speaking and working, then unmute to rejoin.

### Fixed

- Make Check again rescan coding agents after installation or a failed check, with clearer Windows CLI prerequisites.
- Linux: launch coding agents installed through mise (or any shim that picks the tool from its own name) instead of opening the mise CLI, also look in the mise and asdf shim folders, and tell you where BridgeMind searched and how to fix a missing CLI.

## 0.1.42 — 2026-09-11

Prepared release notes: <https://bridgemind.ai/changelog/bridgemind-one/v0-1-42>. Publish and verify Windows first; signed Linux release candidates follow from the same tag. macOS already occupies 0.1.41.

### Added

- Preview Windows browser panes in desktop, phone, or tablet layouts, rotate the viewport, and fit the page into a split pane without losing its CSS dimensions.

### Fixed

- Keep phone and tablet preview widths accurate in narrow Windows panes, including the smallest supported preview size.
- Prevent duplicate voice follow-up delivery and stop pending delivery when a call ends or its target changes.
- Keep Windows open with a retryable error when it cannot start an update installer.
- Provider failures explain the failing stage, and silent chat turns end with recovery guidance while active tools and approval waits stay running.
- Find the plugin catalog in Settings → General, with clear guidance that connections are not available in this build.
- Workspace restore and terminal startup fail with a retry option when a native operation stops responding.
- A terminal renderer that fails to load stays inside its pane and can be retried without losing the layout.
- Workspace and layout errors explain unavailable folders and save failures while protecting your user and credential folders.
- Code workspaces can be removed from the list with confirmation while keeping project files, sessions and history; adding the same folder restores the entry.
- Switching or closing a terminal pane releases pending output without writing to its disposed renderer, so returning to a live session can continue receiving output.
- Streamed chat text preserves spaces, headings, and closed code blocks as messages arrive.
- Choosing PowerShell under Settings → Terminal now starts Windows PowerShell instead of failing with "The terminal session could not start." on PCs without PowerShell 7.
- Linux sign-in opens the browser through the desktop portal and falls back to the system URL handler when the portal is missing or does not answer, so a portal error no longer strands a sign-in the browser can still finish.
- While waiting for the browser, the sign-in screen now says when the browser could not be opened, and a refused sign-in start explains why instead of a generic failure.

### Security

- Long malformed markdown cannot stall chat rendering through repeated link parsing.
- Automatic repository context for voice remains disabled while its source privacy checks and rollout validation are completed.

## 0.1.40 — 2026-09-08

Release notes: <https://bridgemind.ai/changelog/bridgemind-one/v0-1-40>. Windows publishes first; signed Linux release candidates follow after Windows verification.

### Added

- New chats receive concise automatic titles while preserving names you choose and the sender names of agent-mail conversations.

### Changed

- The BridgeMind launch logo now settles into place in 3D, with a still for Reduced Motion and the same fast startup handoff.
- Long chats now show their token count in millions or billions — "1.8M tokens" instead of "1811.8k tokens" — matching the usage dashboard.

### Fixed

- Explain when Claude rejects the selected access mode or blocks tools instead of treating those turns as successful.

- The Linux AppImage uses the host's systemd and udev libraries to avoid startup failures caused by mixed library versions.
- Linux windows use one in-app titlebar with working window controls and the BridgeMind name instead of an extra native titlebar.
- SSH key prompts open a native Linux dialog and follow the current desktop session.

## 0.1.37 — 2026-09-07

Release notes: <https://bridgemind.ai/changelog/bridgemind-one/v0-1-37>. Windows publishes first; Linux follows after Windows verification.

### Added

- Switch between Plan and Agent in chat, review saved plan revisions, and implement the chosen plan without losing an unsent message.

### Changed

- Settings now takes over the sidebar for its own General / Notifications / Account pages and hides the Agent / Code / Chat switch while open, instead of leaving the workspace list and mode pills on screen where clicking them did nothing.
- Sign-in troubleshooting offers a copy button for limited failure categories, with no sign-in links or credentials included.
- Chat mode opens with a message box even before you add a folder: a new thread runs on its own until you add one, and the draft offers Add a folder as the next step instead of blocking you behind it.
- The fullscreen toggle leaves the pane header when a pane is the only one in its tab; it returns as soon as there is a sibling to hide.

## 0.1.36 — 2026-09-06

Windows release candidate; publication is verified through the signed CI/CD lane. Includes the support fixes prepared in 0.1.32. Linux follows after Windows publication, using this same version.

Planned release notes: <https://bridgemind.ai/changelog/bridgemind-one/v0-1-36>.

### Added

- Connect a Linux or Mac machine over SSH from the Chat or Code plus menu, then use its folder with Claude Code, Codex, or a terminal.
- Switch providers between turns in an existing chat, carrying recent conversation context while preserving its history and token usage.

### Changed

- The sidebar account row no longer shows your name or email; it keeps the avatar, plan, and credits, and identity lives in Settings.
- The whole interface now follows the Mac app's design system: one type, spacing, and motion scale, switches instead of checkboxes, underline tabs on agent pages, owner-drawn tooltips, tinted scrollbars and selection, a sliding sidebar, rest-invisible pane dividers, and flat panes without glow.

### Fixed

- Arrow keys, Home, and End switch between agent tabs and skip unavailable tabs.
- Agent and Chat model menus consistently name Fable 5.1, and saved Fable selections run that exact model.

### Removed

### Security

## 0.1.32 — 2026-09-05

Prepared Windows candidate; not published. Planned release notes: <https://bridgemind.ai/changelog/bridgemind-one/v0-1-32>. Linux changes remain under Unreleased for their separate rollout.

### Added

- Choose GPT-6 Astra for Codex chats and saved agents, with Medium reasoning by default and effort controls through Ultra.
- Sign-in troubleshooting can distinguish browser callback failures without collecting sign-in links or credentials.

### Changed

### Fixed

- Settings scrolls on smaller windows, and Software update always shows the installed version.
- The Back button in Settings stays centred on its title and description.
- Refreshing a chat's file changes no longer opens brief console windows on Windows.
- Switching terminal focus, toggling pane fullscreen, and resizing splits preserve the terminal renderer and input focus.
- Bridge recognizes a terminal that is already working when its first activity query runs.
- Claude agents with large briefings start on Windows without exceeding the system command-line limit.
- Ctrl+C copies selected terminal text without interrupting the running command; with no selection it still interrupts normally.

### Removed

### Security

## 0.1.30 — 2026-09-04

Unpublished Windows preparation; its changes are included in the 0.1.32 candidate. Planned notes: <https://bridgemind.ai/changelog/bridgemind-one/v0-1-30>.

### Added

### Changed

### Fixed

### Removed

### Security

## 0.1.28 — 2026-09-04

Published: <https://bridgemind.ai/changelog/bridgemind-one/v0-1-28> (Windows).
The terminal fixes from the Windows beta tickets: PowerShell opens, Shift+Enter
adds a line in Claude Code, and split panes stop painting agents twice or
leaving one drawn in a corner. \`0.1.26\`–\`0.1.27\` are macOS releases of the
Swift app; the two trains share one numbering.

### Added

### Changed

### Fixed

- Choosing PowerShell as the terminal type now opens a working PowerShell pane instead of failing immediately.
- When a chosen shell cannot be launched, the terminal pane names the executable it tried instead of a generic start error.
- Shift+Enter in a terminal running Claude Code inserts a new line instead of submitting the prompt.
- Splitting a pane, pressing "+", or maximizing and restoring the window no longer paints a coding agent's screen twice, drops lines, or leaves a garbled copy behind; the terminal now follows Windows' own resize behaviour.
- Closing one of two terminal panes reflows the remaining agent to the full pane immediately, instead of leaving it drawn in the old corner until the pane is resized by hand.
- Ctrl+V and Shift+Insert paste into a terminal again instead of sending a control character to the running agent.

### Removed

### Security

## 0.1.25 — 2026-09-03

Published: <https://bridgemind.ai/changelog/bridgemind-one/v0-1-25> (Windows and
Linux). \`0.1.23\`–\`0.1.24\` and \`0.1.26\` are macOS releases of the Swift app; the
two trains share one numbering.

### Added

- Ask Bridge "where is the agent working on the login tests?" and it finds the session — a terminal pane in any workspace, a saved agent's chat or a Chat-mode thread — takes you there, highlights it, and tells you what it was last doing; when two fit it names them and asks. Bridge can also list every workspace, tab and pane at once.
- Chat mode is now threads in your workspaces, the way T3 Code works: the sidebar lists your folders, each thread underneath is one coding session in that folder, and a new thread starts from the folder's \`+\`, the header's \`+\`, or Ctrl+N.
- Cursor, Grok Build and OpenCode can run a thread alongside Claude Code and Codex, through each CLI's Agent Client Protocol; the model menu lists what the agent reports, and the agent's permission asks appear above the composer with Allow / Allow for session / Deny.
- Each thread's header names its folder, git branch, engine and model, and a Changes panel shows the workspace's changed files with a unified diff per file, refreshing when a turn finishes.
- Pin a thread to keep it above every folder, and a thread that finishes while you are elsewhere shows an unread dot until you open it.
- Muse Code by Meta can be launched as a coding agent in terminal panes and workspace lineups.

### Changed

- The browser tab that finishes sign-in now shows a BridgeMind card — "You're signed in" on success, a clear message when the sign-in link was stale or cancelled — instead of a bare line of text.
- Chats written before threads had folders still open and run; they list under "Other chats" at the bottom of the rail.
- A terminal handoff aimed at a chat engine now opens a Chat-mode thread in the workspace instead of a pane beside the terminal.
- The browser tab that finishes sign-in now shows a BridgeMind page saying you're signed in (or that sign-in didn't finish) instead of a bare line of text.

### Fixed

- When an update downloads but the installer cannot start, the title-bar pill now says the update failed and offers a retry instead of silently showing "Update" again, and Settings › Software update adds a Download installer button that opens the current signed Windows installer in your browser so you can finish by hand.

### Removed

- The Thread pane is gone from Code mode's \`+\` menu and Alt+T; a thread is a Chat-mode conversation in the folder now, and a saved layout that still holds one shows a card that opens Chat mode instead.

## 0.1.22 — 2026-09-02

Published: <https://bridgemind.ai/changelog/bridgemind-one/v0-1-22> (Windows and
Linux). \`0.1.19\`–\`0.1.21\` are macOS releases of the Swift app; the two trains
share one numbering.

### Added

- Bridge now takes real calls: click or hold the orb and talk — Bridge hears you, answers aloud, and works the workspace by voice (launch agents, hand an agent a refined prompt, read a pane, wait for it to finish, focus, tidy, close, or run a command — asking first before it closes or runs anything).
- The Bridge orb now has a seat in the title bar, left of the bell: hold it to talk, click it to start or end a call, and during a call the seat lights in the phase's colour — cyan while you or Bridge are speaking, violet while it thinks, amber on an error — with a glow that breathes while the line is live.
- While you are on a call with Bridge, a strip drops over the top of the pane — the orb, what Bridge is doing, the latest line said, a chip for each thing it did, Yes/No when it asks, and an end button — and lifts away when the call ends.
- The Bridge orb in the title bar is now the same living sphere as the Mac app: a lit plasma core with its halo and orbit rings, comets that stream around it on a call, ripples while the line is live, and a sweeping ring while it connects.

### Changed

- The Claude Code model menu now offers Claude Fable 5.1, Anthropic's newest frontier model, in place of Claude Fable 5.
- Pane headers no longer print a name that truncates to "Revie…" at split width: every pane leads with its liveness dot and mark, the full title sits in the identity's tooltip and at the top of the \`⋯\` menu, and flipping the terminals shows the work title large with the agent and role beneath it.
- A pane header's middle now reads on from the mark — a browser's address, a thread's provider or token count — and terminal, files, and apps panes leave it empty instead of repeating what their icon already says.
- The signed-out welcome screen is the Mac app's: the agent orbit with its bloom and comet, the BridgeMind wordmark, "The First Agent Super App" rising letter by letter with its rule, and Sign in beneath — flattened to a still frame under Reduce Motion.
- The sidebar is re-measured against the Mac app: a tighter header inset, 12.5px rows, a rotating chevron, quiet and live count capsules, two-line chat rows with the last line said, and a tier label in the plan's ink.
- Updates reach every signed-in builder: checking, downloading and restarting into a new build no longer requires an active plan, so a lapsed subscription still receives security fixes.
- Windows: F5, Ctrl+R, Ctrl+P, Ctrl+F, F3 and Ctrl+S no longer trigger the browser engine's reload, print, find bar or save page inside the app.
- A chat that is waiting on you says "Needs you" in the rail, and when you leave a chat for Settings only the chat you would return to dims.

### Fixed

- Dragging a pane onto another to swap them, and dragging an agent's chat tabs to reorder them, now work on Windows: a press becomes a drag after a few pixels, Escape cancels, and the pane under the pointer lights up as the target.
- Typing Ctrl+D, Ctrl+T, Ctrl+W, Ctrl+[ or Ctrl+] in a terminal reaches the shell instead of splitting, opening, closing or switching panes, and Escape in a full-screen terminal reaches the terminal.
- Dropping files from Explorer onto a terminal inserts their paths again; the app had been denying itself the drop events.
- A sent message no longer reappears in the chat or thread composer after you switch away and back, and a message that fails to send returns to the composer ahead of anything you typed since.
- Pressing Enter while composing with an IME no longer saves a half-typed memory note.
- An agent's chosen face survives opening Settings and saving other changes.
- Windows: after a Browser pane has been open, the window keeps resizing and moving its content correctly, focus comes back to the app when you return by Alt+Tab, the taskbar or a notification, and the window edge stays draggable under a full-screened Browser pane.
- Reading a Browser pane no longer counts as leaving the app, so notifications and attention behave as if you were in a terminal.
- The Browser pane's address bar shows the page that actually loaded; a navigation the page starts but never commits can no longer leave a different address over the document, and Back no longer leads to a page that was never shown.
- Cursor Agent launches with your prompt again; the launch command no longer inserts a \`chat\` subcommand.
- A terminal pane that reattaches after a reload, or a wizard-launched session's first pane, brings the shell to the pane's real size instead of leaving the TUI painting into a stale box.
- Adding a workspace no longer stalls sign-out and every other command while the folder picker is open.
- A chat left marked Running or Waiting by a crash or force-quit is settled when it is next opened, so a new message can be sent instead of refused.
- An oversize command or query in a Codex transcript is shortened to one line instead of dropping the whole transcript item.
- A Files pane entry that cannot be resolved inside the workspace is hidden instead of making its whole folder unlistable.
- Windows: OneDrive Files On-Demand folders, Dev Drive, and Store-app shims are no longer refused as links when you give an agent a place; only real symlinks and junctions are.
- The terminal history store waits for a sibling process (the Mac app, or another build of this one) to release the file instead of treating a lock as damage; only a truly damaged store is moved aside.
- The Usage dashboard no longer crashes on a date written with CJK characters.

### Removed

### Security

- The in-app updater accepts only a signed installer whose signature names \`BridgeMindOne-x64-setup.exe\` and was made after the running build, so an older release cannot be replayed as an update.
- Claude Code launched from Chat, an agent's chat, Code Thread or Create with AI reads only your own user-level Claude settings — a checked-in \`.claude/settings.json\` in a workspace can no longer grant permissions, set environment or point at an API-key helper — and Bash is denied in every mode below Full.
- Auto's turn limit is enforced natively: a run stops at its mode's limit even if the screen's counter disagrees.
- Paths dropped or pasted into a terminal are quoted for that pane's shell, and a path the shell could expand is refused instead of run.
- Shell-integration prompt marks carry a per-launch token, so a program you run, a remote host or pasted text cannot start or end a "command", relabel the folder, or teach ghost suggestions.
- Windows: agent launches that pass through cmd.exe resolve command names from PATH only, never from the workspace folder.
- An agent's memory and skills text is fenced in its briefing as data, never as instructions.
- What Bridge reads from a pane, or sends to the prompt refiner, has credentials redacted first; Bridge can type into agents but never straight into a shell, and every command it runs is one line you confirm.

## 0.1.18 — 2026-09-01

Published: <https://bridgemind.ai/changelog/bridgemind-one/v0-1-18> (Windows and
Linux; written after the fact from \`git log v0.1.16..v0.1.18\`). \`v0.1.17\` was
tagged but burned at release preflight; its changes shipped as 0.1.18.

## 0.1.16 — 2026-08-28

Published: <https://bridgemind.ai/changelog/bridgemind-one/v0-1-16>. Earlier
Windows releases are on the same page.
`),f),I=e(t(),1),L=e(p(),1),R=r(),z={added:`--status-running`,changed:`--brand-electric-blue`,fixed:`--brand-amber`,removed:`--text-secondary`,security:`--text-primary`},B={added:o,changed:m,fixed:s,removed:i,security:a};function V(e,t){return{"--kind-ink":`var(${z[e]})`,...t===void 0?{}:{"--reveal-index":String(Math.min(t,10))}}}function H(){return window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1}function U(){let e=document.querySelector(`.app-frame--scaled`);if(!e)return 1;let t=Number(window.getComputedStyle(e).getPropertyValue(`--ui-scale`));return Number.isFinite(t)&&t>0?t:1}function W(e){return u(!0,`whats-new`)?(0,R.jsx)(G,{...e}):null}function G({releases:e,onAcknowledge:t,required:r=!0}){let i=(0,I.useRef)(null),a=(0,I.useRef)(null),s=(0,I.useRef)(null),u=(0,I.useRef)(null),d=(0,I.useRef)(t);d.current=t;let[f,p]=(0,I.useState)(1),[m,h]=(0,I.useState)(!1),[v,y]=(0,I.useState)(!1),[b,x]=(0,I.useState)(!1),[S,C]=(0,I.useState)(`all`),w=(0,I.useRef)(!1),T=(0,I.useRef)(r);T.current=r;let E=(0,I.useId)(),D=e[0],k=g.map(t=>({kind:t,count:e.reduce((e,n)=>e+n.sections[t].length,0)})),A=e.reduce((e,t)=>e+O(t),0),j=k.map(e=>e.count).join(`,`),M=async()=>{if(w.current)return;w.current=!0,y(!0),await(u.current?.celebrate()??Promise.resolve()),x(!0);let e=Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--duration-overlay-out`));window.setTimeout(()=>d.current(),Number.isFinite(e)?e:0)},N=(0,I.useRef)(M);if(N.current=M,(0,I.useLayoutEffect)(()=>{let e=document.activeElement;p(U());let t=()=>a.current?.querySelector(`button`)?.focus({preventScroll:!0});t();let n=e=>{let n=i.current;if(n){if(e.key===`Escape`){e.preventDefault(),e.stopPropagation(),T.current||N.current();return}if(e.key===`Tab`){let t=[...n.querySelectorAll(`button:not(:disabled), [tabindex='0']`)],r=t.indexOf(document.activeElement),i=e.shiftKey?t[(r-1+t.length)%t.length]:t[(r+1)%t.length];e.preventDefault(),e.stopPropagation(),i?.focus({preventScroll:!0});return}(!(e.target instanceof Node)||!n.contains(e.target))&&(e.preventDefault(),e.stopPropagation(),t())}};return window.addEventListener(`keydown`,n,!0),()=>{window.removeEventListener(`keydown`,n,!0),e instanceof HTMLElement&&e.isConnected&&e.focus({preventScroll:!0})}},[]),(0,I.useEffect)(()=>{let e=s.current;if(!e)return;let t=!1,r=j.split(`,`).map(Number);return n(async()=>{let{mountWhatsNewScene:e}=await import(`./whatsNewScene-CttxPVFF.js`);return{mountWhatsNewScene:e}},__vite__mapDeps([0,1])).then(({mountWhatsNewScene:n})=>{if(t)return;let i=n(e,{orbits:g.map((e,t)=>({count:r[t]??0,colorRole:z[e]})),reducedMotion:H()});u.current=i,i&&h(!0)}).catch(()=>void 0),()=>{t=!0,u.current?.dispose(),u.current=null}},[j]),!D)return null;let F=P(D.date),W=e.length>1,G=[{id:`all`,label:`All`,count:A},...k.filter(e=>e.count>0).map(e=>({id:e.kind,label:_[e.kind],count:e.count}))],K=g.filter(e=>S===`all`||e===S);return(0,L.createPortal)((0,R.jsxs)(`div`,{className:`whats-new-layer`,"data-acknowledging":v||void 0,"data-leaving":b||void 0,style:{"--sheet-scale":String(f)},children:[(0,R.jsx)(`div`,{"aria-hidden":`true`,className:`whats-new-layer__scrim`}),(0,R.jsxs)(`section`,{"aria-labelledby":E,"aria-modal":`true`,className:`whats-new`,ref:i,role:`dialog`,children:[(0,R.jsxs)(`header`,{className:`whats-new__hero`,children:[(0,R.jsx)(`canvas`,{className:`whats-new__canvas`,"data-ready":m||void 0,ref:s}),(0,R.jsxs)(`div`,{className:`whats-new__hero-copy`,children:[(0,R.jsxs)(`p`,{className:`whats-new__badge`,children:[(0,R.jsx)(c,{icon:o,kind:`inline`}),`What’s new`]}),(0,R.jsxs)(`h2`,{className:`whats-new__title`,id:E,children:[`BridgeMind `,(0,R.jsx)(`span`,{className:`whats-new__version`,children:D.version})]}),(0,R.jsx)(`p`,{className:`whats-new__meta`,children:[F,W?`${e.length} updates`:null,`${A} ${A===1?`change`:`changes`}`].filter(Boolean).join(` · `)})]})]}),G.length>2?(0,R.jsx)(`div`,{"aria-label":`Filter changes`,className:`whats-new__tabs`,onKeyDown:e=>{if(e.key!==`ArrowRight`&&e.key!==`ArrowLeft`)return;e.preventDefault();let t=G.findIndex(e=>e.id===S),n=e.key===`ArrowRight`?1:-1,r=G[(t+n+G.length)%G.length];r&&(C(r.id),e.currentTarget.querySelector(`[data-tab="${r.id}"]`)?.focus({preventScroll:!0}))},role:`tablist`,children:G.map(e=>(0,R.jsxs)(`button`,{"aria-selected":S===e.id,className:`whats-new__tab`,"data-tab":e.id,onClick:()=>C(e.id),role:`tab`,style:e.id===`all`?void 0:V(e.id),tabIndex:S===e.id?0:-1,type:`button`,children:[e.id===`all`?null:(0,R.jsx)(`span`,{"aria-hidden":`true`,className:`whats-new__dot`}),e.label,(0,R.jsx)(`span`,{className:`whats-new__count`,children:e.count})]},e.id))}):null,(0,R.jsx)(`div`,{className:`whats-new__body scroll-quiet`,tabIndex:0,children:e.map(e=>{let t=0,n=K.flatMap(t=>e.sections[t].map(e=>({kind:t,text:e})));return n.length===0?null:(0,R.jsxs)(`section`,{"aria-label":`BridgeMind ${e.version}`,className:`whats-new__release`,children:[W?(0,R.jsxs)(`h3`,{className:`whats-new__release-title`,children:[(0,R.jsx)(`span`,{children:e.version}),e.date?(0,R.jsx)(`span`,{className:`whats-new__release-date`,children:P(e.date)}):null]}):null,(0,R.jsx)(`ul`,{className:`whats-new__items`,children:n.map(({kind:e,text:n})=>(0,R.jsxs)(`li`,{className:`whats-new__item`,style:V(e,t++),children:[(0,R.jsx)(`span`,{className:`whats-new__tile`,title:_[e],children:(0,R.jsx)(c,{icon:B[e],kind:`inline`,strong:!0})}),(0,R.jsx)(`span`,{className:`whats-new__text`,children:n})]},`${e}:${n}`))})]},e.version)})},S),(0,R.jsxs)(`footer`,{className:`whats-new__footer`,children:[(0,R.jsx)(`p`,{className:`whats-new__hint`,children:`Every release lives in Settings → Changelog`}),(0,R.jsx)(`div`,{ref:a,children:(0,R.jsxs)(l,{disabled:v,onClick:()=>void M(),variant:`primary`,children:[r?`Got it`:`Close`,(0,R.jsx)(`span`,{"aria-hidden":`true`,className:`whats-new__kbd`,children:`↵`})]})})]})]})]}),document.body)}export{w as a,M as c,N as d,A as f,F as i,_ as l,B as n,P as o,z as r,C as s,W as t,g as u};
//# debugId=2b56054c-7a04-54d8-8f30-cb9356846b66
