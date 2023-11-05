import{s as te,f as y,a as V,g as k,h as E,c as D,I as oe,d as $,j as v,i as G,J as h,K as ce,L as ie,M as O,l as ue,m as fe,n as me,N as _e,O as F,P as de,Q as he,R as pe,o as ve}from"../chunks/scheduler.e19cab95.js";import{S as ne,i as se,b as M,d as S,m as q,a as w,g as W,c as X,t as N,e as z}from"../chunks/index.1e193559.js";import{e as Y,t as re,N as L,a as $e,o as ge}from"../chunks/params.66770c33.js";import{p as be}from"../chunks/stores.f00c6b5a.js";import{b as ae}from"../chunks/paths.97d4c521.js";import{U as P}from"../chunks/UIcon.7d6439d2.js";function Z(l,e,n){const t=l.slice();return t[5]=e[n],t}function ee(l){let e,n,t,r,m=l[5].title+"",o,p,i;return n=new P({props:{icon:l[5].icon,classes:"text-1.3em"}}),{c(){e=y("a"),M(n.$$.fragment),t=V(),r=y("span"),o=ue(m),p=V(),this.h()},l(s){e=k(s,"A",{href:!0,class:!0});var u=E(e);S(n.$$.fragment,u),t=D(u),r=k(u,"SPAN",{class:!0});var g=E(r);o=fe(g,m),g.forEach($),p=D(u),u.forEach($),this.h()},h(){v(r,"class","nav-menu-item-label svelte-z8k68j"),v(e,"href",`${ae}${l[5].to}`),v(e,"class","nav-menu-item !text-[var(--secondary-text)] svelte-z8k68j")},m(s,u){G(s,e,u),q(n,e,null),h(e,t),h(e,r),h(r,o),h(e,p),i=!0},p:me,i(s){i||(w(n.$$.fragment,s),i=!0)},o(s){N(n.$$.fragment,s),i=!1},d(s){s&&$(e),z(n)}}}function xe(l){let e,n;return e=new P({props:{icon:"i-carbon-sun"}}),{c(){M(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){q(e,t,r),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function ye(l){let e,n;return e=new P({props:{icon:"i-carbon-moon"}}),{c(){M(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){q(e,t,r),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function ke(l){let e,n,t,r,m,o,p="Andy NG",i,s,u,g,j,b,x,B,T,H;r=new P({props:{icon:"i-carbon-code",classes:"text-2em"}});let I=Y(l[1]),c=[];for(let a=0;a<I.length;a+=1)c[a]=ee(Z(l,I,a));const le=a=>N(c[a],1,1,()=>{c[a]=null}),J=[ye,xe],A=[];function K(a,_){return a[0]?0:1}return b=K(l),x=A[b]=J[b](l),{c(){e=y("div"),n=y("nav"),t=y("a"),M(r.$$.fragment),m=V(),o=y("span"),o.textContent=p,i=V(),s=y("div");for(let a=0;a<c.length;a+=1)c[a].c();u=V(),g=y("div"),j=y("button"),x.c(),this.h()},l(a){e=k(a,"DIV",{class:!0});var _=E(e);n=k(_,"NAV",{class:!0});var d=E(n);t=k(d,"A",{href:!0,class:!0});var f=E(t);S(r.$$.fragment,f),m=D(f),o=k(f,"SPAN",{class:!0,["data-svelte-h"]:!0}),oe(o)!=="svelte-qubdwq"&&(o.textContent=p),f.forEach($),i=D(d),s=k(d,"DIV",{class:!0});var C=E(s);for(let U=0;U<c.length;U+=1)c[U].l(C);C.forEach($),u=D(d),g=k(d,"DIV",{class:!0});var Q=E(g);j=k(Q,"BUTTON",{class:!0});var R=E(j);x.l(R),R.forEach($),Q.forEach($),d.forEach($),_.forEach($),this.h()},h(){v(o,"class","ml-2 text-md font-bold hidden md:inline"),v(t,"href",`${ae}/`),v(t,"class","nav-menu-left decoration-none flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"),v(s,"class","flex flex-row flex-1 self-center justify-center"),v(j,"class","bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"),v(g,"class","flex flex-row self-stretch items-stretch gap-1 text-1.15em"),v(n,"class","container !justify-between flex flex-row items-center text-sm"),v(e,"class","nav-menu svelte-z8k68j")},m(a,_){G(a,e,_),h(e,n),h(n,t),q(r,t,null),h(t,m),h(t,o),h(n,i),h(n,s);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(s,null);h(n,u),h(n,g),h(g,j),A[b].m(j,null),B=!0,T||(H=ce(j,"click",l[3]),T=!0)},p(a,[_]){if(_&2){I=Y(a[1]);let f;for(f=0;f<I.length;f+=1){const C=Z(a,I,f);c[f]?(c[f].p(C,_),w(c[f],1)):(c[f]=ee(C),c[f].c(),w(c[f],1),c[f].m(s,null))}for(W(),f=I.length;f<c.length;f+=1)le(f);X()}let d=b;b=K(a),b!==d&&(W(),N(A[d],1,1,()=>{A[d]=null}),X(),x=A[b],x||(x=A[b]=J[b](a),x.c()),w(x,1),x.m(j,null))},i(a){if(!B){w(r.$$.fragment,a);for(let _=0;_<I.length;_+=1)w(c[_]);w(x),B=!0}},o(a){N(r.$$.fragment,a),c=c.filter(Boolean);for(let _=0;_<c.length;_+=1)N(c[_]);N(x),B=!1},d(a){a&&$(e),z(r),ie(c,a),A[b].d(),T=!1,H()}}}function we(l,e,n){let t,r;O(l,be,p=>n(2,t=p)),O(l,re,p=>n(0,r=p));const m=[{title:L.skills,to:"/skills",icon:"i-carbon-software-resource-cluster"},{title:L.personal,to:"/projects",icon:"i-carbon-cube"},{title:L.career,to:"/experience",icon:"i-carbon-development"}],o=()=>$e();return l.$$.update=()=>{l.$$.dirty&4&&t&&t.url.pathname},[r,m,t,o]}class Ee extends ne{constructor(e){super(),se(this,e,we,ke,te,{})}}function Ne(l){let e,n,t,r,m,o;n=new Ee({});const p=l[2].default,i=_e(p,l,l[1],null);return{c(){e=y("div"),M(n.$$.fragment),t=V(),r=y("div"),i&&i.c(),this.h()},l(s){e=k(s,"DIV",{class:!0});var u=E(e);S(n.$$.fragment,u),t=D(u),r=k(u,"DIV",{class:!0});var g=E(r);i&&i.l(g),g.forEach($),u.forEach($),this.h()},h(){v(r,"class","content container svelte-mb6t29"),v(e,"class",m=F(`body contents ${l[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29")},m(s,u){G(s,e,u),q(n,e,null),h(e,t),h(e,r),i&&i.m(r,null),o=!0},p(s,[u]){i&&i.p&&(!o||u&2)&&de(i,p,s,s[1],o?pe(p,s[1],u,null):he(s[1]),null),(!o||u&1&&m!==(m=F(`body contents ${s[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29"))&&v(e,"class",m)},i(s){o||(w(n.$$.fragment,s),w(i,s),o=!0)},o(s){N(n.$$.fragment,s),N(i,s),o=!1},d(s){s&&$(e),z(n),i&&i.d(s)}}}function je(l,e,n){let t;O(l,re,o=>n(0,t=o));let{$$slots:r={},$$scope:m}=e;return ve(()=>ge()),l.$$set=o=>{"$$scope"in o&&n(1,m=o.$$scope)},[t,m,r]}class Se extends ne{constructor(e){super(),se(this,e,je,Ne,te,{})}}export{Se as component};
