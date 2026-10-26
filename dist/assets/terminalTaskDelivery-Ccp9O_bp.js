
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f2d96946-8e31-54ee-8d28-7c8962ed7426")}catch(e){}}();
import{i as e,r as t}from"./taskHandoff-q7WaH2yb.js";import{t as n}from"./promptDelivery-D4au0jIx.js";var r=1500;async function i(i){let a=await n({surface:i.surface,engine:i.engine,text:t(i.task),now:()=>Date.now(),sleep:e=>new Promise(t=>window.setTimeout(t,e)),alive:i.alive,readyCapMs:r,capture:i.capture}).catch(()=>({kind:`write_failed`}));return e(a,i.task,i.name)}export{i as deliverTaskToTerminal};
//# debugId=f2d96946-8e31-54ee-8d28-7c8962ed7426
