
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5e79d975-7414-521c-8ccc-a4fd4c722ec8")}catch(e){}}();
function e(e){let t=e.trim();if(t.length===0||/\s/u.test(t))return!1;try{let e=new URL(t);return e.protocol===`http:`||e.protocol===`https:`}catch{return!1}}function t(t){let n=Array.from(t.files);if(n.length===0)return null;let r=t.getData(`text/plain`).trim();return r.length===0||e(r)?n:null}export{e as n,t};
//# debugId=5e79d975-7414-521c-8ccc-a4fd4c722ec8
