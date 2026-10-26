
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="8c371ff7-9a78-538f-83a2-f9439becf8e8")}catch(e){}}();
var e=[[1,``],[1e3,`k`],[1e6,`M`],[1e9,`B`]];function t(t){let n=Math.max(0,t),r=0;for(;r+1<e.length&&n>=(e[r+1]?.[0]??1/0);)r+=1;for(;;){let[t,i]=e[r]??e[0]??[1,``],a=n/t,o=t===1||a>=100?Math.round(a):Math.round(a*10)/10;if(o>=1e3&&r+1<e.length){r+=1;continue}return`${o}${i}`}}export{t};
//# debugId=8c371ff7-9a78-538f-83a2-f9439becf8e8
