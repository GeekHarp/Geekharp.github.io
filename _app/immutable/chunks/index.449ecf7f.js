import{s as p,N as b,f as g,g as x,h as k,d as m,j as h,k as c,i as y,P as w,Q as v,R as T}from"./scheduler.e19cab95.js";import{S,i as E,a as M,t as $}from"./index.1e193559.js";function j(e){let n,i,a;const l=e[2].default,s=b(l,e,e[1],null);return{c(){n=g("h1"),s&&s.c(),this.h()},l(t){n=x(t,"H1",{class:!0,style:!0});var o=k(n);s&&s.l(o),o.forEach(m),this.h()},h(){h(n,"class",i=`font-[var(--title-f)] font-black tracking-[4px] text-center text-2.5em sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${e[0]}`),c(n,"background","linear-gradient(var(--main-text), var(--accent-text-hover))"),c(n,"-webkit-background-clip","text"),c(n,"background-clip","text"),c(n,"-webkit-text-fill-color","transparent")},m(t,o){y(t,n,o),s&&s.m(n,null),a=!0},p(t,[o]){s&&s.p&&(!a||o&2)&&w(s,l,t,t[1],a?T(l,t[1],o,null):v(t[1]),null),(!a||o&1&&i!==(i=`font-[var(--title-f)] font-black tracking-[4px] text-center text-2.5em sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${t[0]}`))&&h(n,"class",i)},i(t){a||(M(s,t),a=!0)},o(t){$(s,t),a=!1},d(t){t&&m(n),s&&s.d(t)}}}function q(e,n,i){let{$$slots:a={},$$scope:l}=n,{classes:s=""}=n;return e.$$set=t=>{"classes"in t&&i(0,s=t.classes),"$$scope"in t&&i(1,l=t.$$scope)},[s,l,a]}class Q extends S{constructor(n){super(),E(this,n,q,j,p,{classes:0})}}function B(e){return!_(e)||e.length===0}function R(e){return!_(e)||B(e.trim())}function C(e){if(typeof e=="boolean")return e;if(typeof e!="function")throw"(condition) should be a boolean or a function";const n=e();if(typeof n!="boolean")throw"(condition) result is not a boolean.";return n}function _(e){return C(typeof e=="string")}globalThis&&globalThis.__awaiter;export{Q as M,R as i};
