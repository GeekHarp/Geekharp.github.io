import{s as I,a as $,W as L,d as f,c as v,i as u,f as k,g as y,h as S,j as b,e as m,l as P,m as A,J as D,n as j}from"../chunks/scheduler.e19cab95.js";import{S as q,i as B,b as x,d as w,m as C,a as h,t as _,e as E,g as H,c as J}from"../chunks/index.1e193559.js";import{e as p,u as K,S as M,g as N,f as R}from"../chunks/params.66770c33.js";import{S as U,C as V}from"../chunks/SearchPage.28a2ee8e.js";function d(c,s,e){const r=c.slice();return r[3]=s[e],r}function W(c){let s,e=c[3].name+"",r,a;return{c(){s=k("p"),r=P(e),a=$(),this.h()},l(t){s=y(t,"P",{class:!0});var n=S(s);r=A(n,e),n.forEach(f),a=v(t),this.h()},h(){b(s,"class","text-[var(--tertiary-text)]")},m(t,n){u(t,s,n),D(s,r),u(t,a,n)},p:j,d(t){t&&(f(s),f(a))}}}function g(c,s){let e,r,a;return r=new V({props:{classes:["decoration-none"],tiltDegree:1,bgImg:N(s[3].logo),$$slots:{default:[W]},$$scope:{ctx:s}}}),{key:c,first:null,c(){e=m(),x(r.$$.fragment),this.h()},l(t){e=m(),w(r.$$.fragment,t),this.h()},h(){this.first=e},m(t,n){u(t,e,n),C(r,t,n),a=!0},p(t,n){s=t;const l={};n&64&&(l.$$scope={dirty:n,ctx:s}),r.$set(l)},i(t){a||(h(r.$$.fragment,t),a=!0)},o(t){_(r.$$.fragment,t),a=!1},d(t){t&&f(e),E(r,t)}}}function z(c){let s,e=[],r=new Map,a,t=p(c[1]);const n=l=>l[3].slug;for(let l=0;l<t.length;l+=1){let o=d(c,t,l),i=n(o);r.set(i,e[l]=g(i,o))}return{c(){s=k("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){s=y(l,"DIV",{class:!0});var o=S(s);for(let i=0;i<e.length;i+=1)e[i].l(o);o.forEach(f),this.h()},h(){b(s,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10")},m(l,o){u(l,s,o);for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(s,null);a=!0},p(l,o){o&2&&(t=p(l[1]),H(),e=K(e,o,n,1,l,t,r,s,R,g,null,d),J())},i(l){if(!a){for(let o=0;o<t.length;o+=1)h(e[o]);a=!0}},o(l){for(let o=0;o<e.length;o+=1)_(e[o]);a=!1},d(l){l&&f(s);for(let o=0;o<e.length;o+=1)e[o].d()}}}function F(c){let s,e,r;return e=new U({props:{title:c[0],$$slots:{default:[z]},$$scope:{ctx:c}}}),{c(){s=$(),x(e.$$.fragment),this.h()},l(a){L("svelte-excyvr",document.head).forEach(f),s=v(a),w(e.$$.fragment,a),this.h()},h(){document.title="Andy Ng Boon Hou"},m(a,t){u(a,s,t),C(e,a,t),r=!0},p(a,[t]){const n={};t&64&&(n.$$scope={dirty:t,ctx:a}),e.$set(n)},i(a){r||(h(e.$$.fragment,a),r=!0)},o(a){_(e.$$.fragment,a),r=!1},d(a){a&&f(s),E(e,a)}}}function G(c){const{items:s,title:e}=M;return[e,s]}class Y extends q{constructor(s){super(),B(this,s,G,F,I,{})}}export{Y as component};