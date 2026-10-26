
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7caf3198-5269-5a6b-b30e-ab1afea2bfed")}catch(e){}}();
var e=new TextEncoder,t=/[\s\p{Cc}]/u;function n(n){if(typeof n!=`string`||n.length===0||t.test(n)||e.encode(n).byteLength>2048)return!1;let r;try{r=new URL(n)}catch{return!1}return r.protocol===`https:`&&r.hostname.length>0&&r.username===``&&r.password===``}export{n as t};
//# debugId=7caf3198-5269-5a6b-b30e-ab1afea2bfed
