
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f5574736-608d-51b6-b407-e29ceec59835")}catch(e){}}();
import{f as e}from"./agents-DucYuCae.js";var t=`
§
`,n=`What I know that outlives a single chat. One line each, newest last.`;function r(e){return e.map(e=>e.trim()).filter(e=>e.length>0)}function i(e){let t=/^(#{1,6})(?:\s(.*))?$/u.exec(e);return t?{level:t[1]?.length??0,title:(t[2]??``).trim()}:null}function a(e){let t=null,n=[];for(let r of e.split(/\r?\n/u)){let e=r.trim();if(e.length===0)continue;let a=i(e);if(a){a.level>=2&&(t=a.title);continue}let o=e.replace(/^[-*+]\s/u,``).trim();o.length!==0&&o!==`What I know that outlives a single chat. One line each, newest last.`&&n.push(t?`${t} — ${o}`:o)}return n}function o(e){return e.trim().length===0?[]:r(e.includes(`
§
`)?e.split(t):a(e))}function s(e){return r(e).join(t)}function c(t){for(let n of[` — `,` – `,` - `]){let r=t.indexOf(n);if(r<0)continue;let i=t.slice(0,r).trim(),a=t.slice(r+n.length).trim();if(!(i.length===0||a.length===0||e(i)>24||i.includes(`
`)||i.split(/\s+/u).length>4))return{heading:i,body:a}}return{heading:null,body:t}}function l(e){let t=[];for(let[n,r]of o(e).entries()){let{heading:e,body:i}=c(r),a={index:n,text:r,heading:e,body:i},o=t.at(-1);o?.heading===e?o.entries.push(a):t.push({heading:e,entries:[a]})}return t}function u(t){return e(s(o(t)))}export{o as a,l as i,n,s as o,u as r,t};
//# debugId=f5574736-608d-51b6-b407-e29ceec59835
