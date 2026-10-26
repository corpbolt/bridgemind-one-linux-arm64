
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0215ec6c-f1ab-54cf-b01d-0ef6de701080")}catch(e){}}();
import{i as e}from"./submissionPlan-1ebKu05b.js";var t=10,n=32;function r(e,n){if(n.length===0)return!1;let r=e.replaceAll(`\r
`,`
`).replaceAll(`\r`,`
`).split(`
`),i=r.length;for(;i>0&&(r[i-1]??``).trim().length===0;)--i;let a=Math.max(0,i-t);return r.slice(a,i).some(e=>e.includes(n))}function i(t){return(e(t).split(`
`).find(e=>e.trim().length>0)??``).trim().slice(0,n)}export{i as n,r as t};
//# debugId=0215ec6c-f1ab-54cf-b01d-0ef6de701080
