
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8f67d43d-3312-57e4-9a2a-ae1da9a6551e")}catch(e){}}();
function e(e){if(`clientX`in e&&(e.clientX!==0||e.clientY!==0))return{x:e.clientX,y:e.clientY};let t=e.currentTarget.getBoundingClientRect();return{x:t.left,y:t.bottom}}function t(e){return e.key===`ContextMenu`||e.shiftKey&&e.key===`F10`}export{t as n,e as t};
//# debugId=8f67d43d-3312-57e4-9a2a-ae1da9a6551e
