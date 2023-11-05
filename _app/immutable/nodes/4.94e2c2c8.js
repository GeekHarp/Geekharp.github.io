import{s as N,f as D,g as S,h as G,d as g,j as _,i as b,n as x,S as X,a as U,l as ie,c as z,m as ce,J as O,p as fe,L as H,W as ue,o as he}from"../chunks/scheduler.e19cab95.js";import{S as A,i as T,b as w,d as k,m as j,a as d,t as p,e as P,g as K,c as Q}from"../chunks/index.1e193559.js";import{e as V,g as Y,P as me}from"../chunks/params.66c9ff2a.js";import{C as ge,S as _e}from"../chunks/SearchPage.e0cf5f42.js";import{C as de,a as $e}from"../chunks/ChipIcon.965e8b96.js";import{U as pe}from"../chunks/UIcon.7d6439d2.js";function ve(l){let e,s,t;return s=new pe({props:{icon:"i-carbon-link",classes:"text-[var(--secondary-text)]"}}),{c(){e=D("a"),w(s.$$.fragment),this.h()},l(r){e=S(r,"A",{class:!0,href:!0,target:!0,rel:!0});var a=G(e);k(s.$$.fragment,a),a.forEach(g),this.h()},h(){_(e,"class","card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit svelte-1duk6wu"),_(e,"href",l[0]),_(e,"target","_blank"),_(e,"rel","noreferrer")},m(r,a){b(r,e,a),j(s,e,null),t=!0},p(r,[a]){(!t||a&1)&&_(e,"href",r[0])},i(r){t||(d(s.$$.fragment,r),t=!0)},o(r){p(s.$$.fragment,r),t=!1},d(r){r&&g(e),P(s)}}}function be(l,e,s){let{to:t}=e;return l.$$set=r=>{"to"in r&&s(0,t=r.to)},[t]}class we extends A{constructor(e){super(),T(this,e,be,ve,N,{to:0})}}function ke(l){let e;return{c(){e=D("div"),this.h()},l(s){e=S(s,"DIV",{class:!0}),G(e).forEach(g),this.h()},h(){_(e,"class","bg-[var(--border)] h-1px m-y-10px")},m(s,t){b(s,e,t)},p:x,i:x,o:x,d(s){s&&g(e)}}}class Z extends A{constructor(e){super(),T(this,e,null,ke,N,{})}}function je(l){let e,s,t,r;return{c(){e=D("img"),this.h()},l(a){e=S(a,"IMG",{class:!0,src:!0,alt:!0,height:!0,width:!0}),this.h()},h(){_(e,"class",s=`rounded-${l[3]} ${l[4]} aspect-square`),X(e.src,t=l[0])||_(e,"src",t),_(e,"alt",l[1]),_(e,"height",r=l[2]*.475),_(e,"width",l[2])},m(a,o){b(a,e,o)},p(a,[o]){o&24&&s!==(s=`rounded-${a[3]} ${a[4]} aspect-square`)&&_(e,"class",s),o&1&&!X(e.src,t=a[0])&&_(e,"src",t),o&2&&_(e,"alt",a[1]),o&4&&r!==(r=a[2]*.475)&&_(e,"height",r),o&4&&_(e,"width",a[2])},i:x,o:x,d(a){a&&g(e)}}}function Pe(l,e,s){let{src:t}=e,{alt:r}=e,{size:a=50}=e,{radius:o="15px"}=e,{classes:m=""}=e;return l.$$set=i=>{"src"in i&&s(0,t=i.src),"alt"in i&&s(1,r=i.alt),"size"in i&&s(2,a=i.size),"radius"in i&&s(3,o=i.radius),"classes"in i&&s(4,m=i.classes)},[t,r,a,o,m]}class Ce extends A{constructor(e){super(),T(this,e,Pe,je,N,{src:0,alt:1,size:2,radius:3,classes:4})}}const De=""+new URL("../assets/Screenshot-fj-job-portal.28263c51.png",import.meta.url).href,Se=""+new URL("../assets/Screenshot-fj-dashboard.256d2f97.png",import.meta.url).href,Ee=""+new URL("../assets/Screenshot-guess-the-words.d87ca6b3.png",import.meta.url).href;function ee(l,e,s){const t=l.slice();return t[2]=e[s],t}function te(l,e,s){const t=l.slice();return t[5]=e[s],t}function re(l){let e,s;return e=new we({props:{to:l[5].to}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){j(e,t,r),s=!0},p(t,r){const a={};r&1&&(a.to=t[5].to),e.$set(a)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function se(l){let e,s;return e=new $e({props:{logo:Y(l[2].logo),name:l[2].name}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){j(e,t,r),s=!0},p(t,r){const a={};r&1&&(a.logo=Y(t[2].logo)),r&1&&(a.name=t[2].name),e.$set(a)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function Le(l){let e,s,t,r,a,o,m,i,E,L,y=l[0].shortDescription+"",W,F,q,M,C,B;e=new Ce({props:{alt:l[0].name,src:l[1](l[0].name),size:360}}),r=new de({props:{title:l[0].name}});let I=V(l[0].links),u=[];for(let n=0;n<I.length;n+=1)u[n]=re(te(l,I,n));const ae=n=>p(u[n],1,1,()=>{u[n]=null});i=new Z({}),q=new Z({});let R=V(l[0].skills),h=[];for(let n=0;n<R.length;n+=1)h[n]=se(ee(l,R,n));const oe=n=>p(h[n],1,1,()=>{h[n]=null});return{c(){w(e.$$.fragment),s=U(),t=D("div"),w(r.$$.fragment),a=U(),o=D("div");for(let n=0;n<u.length;n+=1)u[n].c();m=U(),w(i.$$.fragment),E=U(),L=D("p"),W=ie(y),F=U(),w(q.$$.fragment),M=U(),C=D("div");for(let n=0;n<h.length;n+=1)h[n].c();this.h()},l(n){k(e.$$.fragment,n),s=z(n),t=S(n,"DIV",{class:!0});var c=G(t);k(r.$$.fragment,c),a=z(c),o=S(c,"DIV",{class:!0});var $=G(o);for(let v=0;v<u.length;v+=1)u[v].l($);$.forEach(g),c.forEach(g),m=z(n),k(i.$$.fragment,n),E=z(n),L=S(n,"P",{class:!0});var J=G(L);W=ce(J,y),J.forEach(g),F=z(n),k(q.$$.fragment,n),M=z(n),C=S(n,"DIV",{class:!0});var f=G(C);for(let v=0;v<h.length;v+=1)h[v].l(f);f.forEach(g),this.h()},h(){_(o,"class","row"),_(t,"class","m-t-20px row justify-between items-center"),_(L,"class","text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1"),_(C,"class","row")},m(n,c){j(e,n,c),b(n,s,c),b(n,t,c),j(r,t,null),O(t,a),O(t,o);for(let $=0;$<u.length;$+=1)u[$]&&u[$].m(o,null);b(n,m,c),j(i,n,c),b(n,E,c),b(n,L,c),O(L,W),b(n,F,c),j(q,n,c),b(n,M,c),b(n,C,c);for(let $=0;$<h.length;$+=1)h[$]&&h[$].m(C,null);B=!0},p(n,c){const $={};c&1&&($.alt=n[0].name),c&1&&($.src=n[1](n[0].name)),e.$set($);const J={};if(c&1&&(J.title=n[0].name),r.$set(J),c&1){I=V(n[0].links);let f;for(f=0;f<I.length;f+=1){const v=te(n,I,f);u[f]?(u[f].p(v,c),d(u[f],1)):(u[f]=re(v),u[f].c(),d(u[f],1),u[f].m(o,null))}for(K(),f=I.length;f<u.length;f+=1)ae(f);Q()}if((!B||c&1)&&y!==(y=n[0].shortDescription+"")&&fe(W,y),c&1){R=V(n[0].skills);let f;for(f=0;f<R.length;f+=1){const v=ee(n,R,f);h[f]?(h[f].p(v,c),d(h[f],1)):(h[f]=se(v),h[f].c(),d(h[f],1),h[f].m(C,null))}for(K(),f=R.length;f<h.length;f+=1)oe(f);Q()}},i(n){if(!B){d(e.$$.fragment,n),d(r.$$.fragment,n);for(let c=0;c<I.length;c+=1)d(u[c]);d(i.$$.fragment,n),d(q.$$.fragment,n);for(let c=0;c<R.length;c+=1)d(h[c]);B=!0}},o(n){p(e.$$.fragment,n),p(r.$$.fragment,n),u=u.filter(Boolean);for(let c=0;c<u.length;c+=1)p(u[c]);p(i.$$.fragment,n),p(q.$$.fragment,n),h=h.filter(Boolean);for(let c=0;c<h.length;c+=1)p(h[c]);B=!1},d(n){n&&(g(s),g(t),g(m),g(E),g(L),g(F),g(M),g(C)),P(e,n),P(r),H(u,n),P(i,n),P(q,n),H(h,n)}}}function qe(l){let e,s;return e=new ge({props:{color:l[0].color,$$slots:{default:[Le]},$$scope:{ctx:l}}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){j(e,t,r),s=!0},p(t,[r]){const a={};r&1&&(a.color=t[0].color),r&257&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function Ie(l,e,s){let{project:t}=e;const r=a=>{switch(a){case"Findjobs Job Portal":return De;case"Findjobs Employer Dashboard":return Se;case"Guess the WORDs":return Ee;default:return""}};return l.$$set=a=>{"project"in a&&s(0,t=a.project)},[t,r]}class Re extends A{constructor(e){super(),T(this,e,Ie,qe,N,{project:0})}}function ne(l,e,s){const t=l.slice();return t[3]=e[s],t}function le(l){let e,s;return e=new Re({props:{project:l[3]}}),{c(){w(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){j(e,t,r),s=!0},p:x,i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function Ue(l){let e,s,t=V(l[0]),r=[];for(let o=0;o<t.length;o+=1)r[o]=le(ne(l,t,o));const a=o=>p(r[o],1,1,()=>{r[o]=null});return{c(){e=D("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=S(o,"DIV",{class:!0});var m=G(e);for(let i=0;i<r.length;i+=1)r[i].l(m);m.forEach(g),this.h()},h(){_(e,"class","projects-list mt-5 svelte-8gek34")},m(o,m){b(o,e,m);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(e,null);s=!0},p(o,m){if(m&1){t=V(o[0]);let i;for(i=0;i<t.length;i+=1){const E=ne(o,t,i);r[i]?(r[i].p(E,m),d(r[i],1)):(r[i]=le(E),r[i].c(),d(r[i],1),r[i].m(e,null))}for(K(),i=t.length;i<r.length;i+=1)a(i);Q()}},i(o){if(!s){for(let m=0;m<t.length;m+=1)d(r[m]);s=!0}},o(o){r=r.filter(Boolean);for(let m=0;m<r.length;m+=1)p(r[m]);s=!1},d(o){o&&g(e),H(r,o)}}}function ze(l){let e,s,t;return s=new _e({props:{title:l[1],$$slots:{default:[Ue]},$$scope:{ctx:l}}}),{c(){e=U(),w(s.$$.fragment),this.h()},l(r){ue("svelte-excyvr",document.head).forEach(g),e=z(r),k(s.$$.fragment,r),this.h()},h(){document.title="Andy Ng Boon Hou"},m(r,a){b(r,e,a),j(s,r,a),t=!0},p(r,[a]){const o={};a&64&&(o.$$scope={dirty:a,ctx:r}),s.$set(o)},i(r){t||(d(s.$$.fragment,r),t=!0)},o(r){p(s.$$.fragment,r),t=!1},d(r){r&&g(e),P(s,r)}}}function Ge(l){const{items:e,title:s}=me;return he(()=>{location.search&&new URLSearchParams(location.search).get("item")}),[e,s]}class Ae extends A{constructor(e){super(),T(this,e,Ge,ze,N,{})}}export{Ae as component};
