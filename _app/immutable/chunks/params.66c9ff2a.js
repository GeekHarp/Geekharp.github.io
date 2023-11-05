import{t as me,a as pe}from"./index.1e193559.js";import{u as fe}from"./scheduler.e19cab95.js";import{w as ge,b as ve}from"./paths.af7d1814.js";function Le(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ze(e,D){me(e,1,1,()=>{D.delete(e.key)})}function Ce(e,D,z,f,k,$,g,Y,F,T,E,C){let w=e.length,v=$.length,b=w;const P={};for(;b--;)P[e[b].key]=b;const _=[],q=new Map,U=new Map,O=[];for(b=v;b--;){const n=C(k,$,b),t=z(n);let h=g.get(t);h?f&&O.push(()=>h.p(n,D)):(h=T(t,n),h.c()),q.set(t,_[b]=h),t in P&&U.set(t,Math.abs(b-P[t]))}const G=new Set,J=new Set;function m(n){pe(n,1),n.m(Y,E),g.set(n.key,n),E=n.first,v--}for(;w&&v;){const n=_[v-1],t=e[w-1],h=n.key,c=t.key;n===t?(E=n.first,w--,v--):q.has(c)?!g.has(h)||G.has(h)?m(n):J.has(c)?w--:U.get(h)>U.get(c)?(J.add(h),m(n)):(G.add(c),w--):(F(t,g),w--)}for(;w--;){const n=e[w];q.has(n.key)||F(n,g)}for(;v;)m(_[v-1]);return fe(O),_}const ue="@riadh-adrani-theme",be=e=>{localStorage.setItem(ue,JSON.stringify(e))},ce=ge(!1),oe=e=>ce.update(D=>{var f;const z=typeof e=="boolean"?e:!D;return be(z),(f=document.querySelector(":root"))==null||f.setAttribute("data-theme",z?"dark":"light"),z}),Te=()=>{const e=localStorage.getItem(ue);e?oe(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&oe(!0)},se=e=>`${ve}/logos/${e}`,j=(e,D)=>D?{dark:se(D),light:se(e)}:se(e),L={Bootstrap:j("bootstrap.svg"),TypeScript:j("ts.png"),ReactJs:j("react.svg"),NodeJs:j("node.png"),Svelte:j("svelte.png"),ExpressJs:j("express.png"),JavaScript:j("js.png"),PostgreSQL:j("postgres.png"),Sass:j("sass.png"),Unknown:j("no-img.svg"),HTML:j("html.svg"),CSS:j("css.svg"),Findjobs:j("findjobs.png"),AppliedMaterials:j("applied-materials.png")};let le;ce.subscribe(e=>le=e);const Ae=e=>typeof e=="string"?e:le?e.dark:e.light,Me=`Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

\`\`\`tsx
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`
`,V=e=>e,de=[V({slug:"ts",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:L.TypeScript,name:"Typescript"}),V({slug:"js",color:"yellow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:L.JavaScript,name:"Javascript"}),V({slug:"reactjs",color:"cyan",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:L.ReactJs,name:"React"}),V({slug:"svelte",color:"orange",description:Me,logo:L.Svelte,name:"Svelte"}),V({slug:"bootstrap",color:"purple",description:"",logo:L.Bootstrap,name:"Bootstrap"}),V({slug:"nodejs",color:"green",description:"",logo:L.NodeJs,name:"Node.js"}),V({slug:"expressjs",color:"gray",description:"",logo:L.ExpressJs,name:"Express.js"}),V({slug:"postgresql",color:"blue",description:"",logo:L.PostgreSQL,name:"PostgreSQL"}),V({slug:"html",color:"orange",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:L.HTML,name:"HTML"}),V({slug:"css",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:L.CSS,name:"CSS"}),V({slug:"sass",color:"pink",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:L.Sass,name:"Sass"})],ee=(...e)=>de.filter(D=>e.includes(D.slug));var N=(e=>(e.GitHub="github",e.StackOverflow="stackoverflow",e.Twitter="twitter",e.Linkedin="linkedin",e.Email="email",e.Facebook="facebook",e.Youtube="youtube",e))(N||{}),ne=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e))(ne||{});const $e=[{slug:"",company:"Findjobs Pte Ltd",description:"- Developed and maintained both Job Portal and Employer Dashboard<br />- Developed APIs using Express framework",contract:ne.FullTime,type:"Software Development",location:"On-site",period:{from:new Date(2019,7),to:new Date(2023,8)},skills:ee("ts","js"),name:"Senior Web Developer",color:"#ffffff",links:[],logo:L.Findjobs,shortDescription:""},{slug:"software-freelance",company:"Applied Materials",description:"Creating awesome applications for customers.",contract:ne.FullTime,type:"Software Development",location:"Home",period:{from:new Date(2017,10),to:new Date(2019,0)},skills:ee("svelte","ts","sass","css","html","js"),name:"Engineering Technician",color:"#ffffff",links:[],logo:L.AppliedMaterials,shortDescription:""}],ye=[{slug:"slick-portfolio-angular",color:"#5e95e3",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",shortDescription:"A Job Portal where Job seekers can create/manage their profiles, search and apply for jobs. Made with Next.js.",links:[{to:"https://findjobs.asia",label:"Job Portal"}],logo:L.Unknown,name:"Findjobs Job Portal",period:{from:new Date},skills:ee("ts","bootstrap"),type:"Website Template"},{slug:"slick-portfolio-svelte",color:"#ff3e00",description:"A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",shortDescription:"An Employer Dashboard where employers can post job openings, review applicant profiles and streamline the hiring process. A React app integrated with Express backend, Hasura (GraphQL), etc.",links:[{to:"https://dashboard.findjobs.asia",label:"Employer Dashboard"}],logo:L.Svelte,name:"Findjobs Employer Dashboard",period:{from:new Date},skills:ee("js","reactjs","nodejs","expressjs","postgresql"),type:"Website Template",screenshots:[{label:"screen 1",src:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"2",src:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"3",src:"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"4",src:"https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"5",src:"https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"6",src:"https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}]},{slug:"slick-portfolio-angular",color:"#5e95e3",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",shortDescription:"Test your ability in recognizing Scrambled word or play a game of Hangman with friends with Guess the WORDs. This project is written using pure HTML, CSS and Javascript for DOM Manipulation.",links:[{to:"https://geekharp.github.io/word-guessing-game/",label:"Word Guessing Game"}],logo:L.Unknown,name:"Guess the WORDs",period:{from:new Date},skills:ee("html","css","js"),type:"Website Template"}];var he=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ae={},we={get exports(){return ae},set exports(e){ae=e}};(function(e,D){(function(z,f){e.exports=f()})(he,function(){var z=1e3,f=6e4,k=36e5,$="millisecond",g="second",Y="minute",F="hour",T="day",E="week",C="month",w="quarter",v="year",b="date",P="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var a=["th","st","nd","rd"],i=r%100;return"["+r+(a[(i-20)%10]||a[i]||a[0])+"]"}},O=function(r,a,i){var o=String(r);return!o||o.length>=a?r:""+Array(a+1-o.length).join(i)+r},G={s:O,z:function(r){var a=-r.utcOffset(),i=Math.abs(a),o=Math.floor(i/60),s=i%60;return(a<=0?"+":"-")+O(o,2,"0")+":"+O(s,2,"0")},m:function r(a,i){if(a.date()<i.date())return-r(i,a);var o=12*(i.year()-a.year())+(i.month()-a.month()),s=a.clone().add(o,C),l=i-s<0,d=a.clone().add(o+(l?-1:1),C);return+(-(o+(i-s)/(l?s-d:d-s))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:C,y:v,w:E,d:T,D:b,h:F,m:Y,s:g,ms:$,Q:w}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},J="en",m={};m[J]=U;var n="$isDayjsObject",t=function(r){return r instanceof y||!(!r||!r[n])},h=function r(a,i,o){var s;if(!a)return J;if(typeof a=="string"){var l=a.toLowerCase();m[l]&&(s=l),i&&(m[l]=i,s=l);var d=a.split("-");if(!s&&d.length>1)return r(d[0])}else{var p=a.name;m[p]=a,s=p}return!o&&s&&(J=s),s||!o&&J},c=function(r,a){if(t(r))return r.clone();var i=typeof a=="object"?a:{};return i.date=r,i.args=arguments,new y(i)},u=G;u.l=h,u.i=t,u.w=function(r,a){return c(r,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var y=function(){function r(i){this.$L=h(i.locale,null,!0),this.parse(i),this.$x=this.$x||i.x||{},this[n]=!0}var a=r.prototype;return a.parse=function(i){this.$d=function(o){var s=o.date,l=o.utc;if(s===null)return new Date(NaN);if(u.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var d=s.match(_);if(d){var p=d[2]-1||0,M=(d[7]||"0").substring(0,3);return l?new Date(Date.UTC(d[1],p,d[3]||1,d[4]||0,d[5]||0,d[6]||0,M)):new Date(d[1],p,d[3]||1,d[4]||0,d[5]||0,d[6]||0,M)}}return new Date(s)}(i),this.init()},a.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},a.$utils=function(){return u},a.isValid=function(){return this.$d.toString()!==P},a.isSame=function(i,o){var s=c(i);return this.startOf(o)<=s&&s<=this.endOf(o)},a.isAfter=function(i,o){return c(i)<this.startOf(o)},a.isBefore=function(i,o){return this.endOf(o)<c(i)},a.$g=function(i,o,s){return u.u(i)?this[o]:this.set(s,i)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(i,o){var s=this,l=!!u.u(o)||o,d=u.p(i),p=function(I,A){var B=u.w(s.$u?Date.UTC(s.$y,A,I):new Date(s.$y,A,I),s);return l?B:B.endOf(T)},M=function(I,A){return u.w(s.toDate()[I].apply(s.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(A)),s)},S=this.$W,x=this.$M,W=this.$D,Q="set"+(this.$u?"UTC":"");switch(d){case v:return l?p(1,0):p(31,11);case C:return l?p(1,x):p(0,x+1);case E:var R=this.$locale().weekStart||0,X=(S<R?S+7:S)-R;return p(l?W-X:W+(6-X),x);case T:case b:return M(Q+"Hours",0);case F:return M(Q+"Minutes",1);case Y:return M(Q+"Seconds",2);case g:return M(Q+"Milliseconds",3);default:return this.clone()}},a.endOf=function(i){return this.startOf(i,!1)},a.$set=function(i,o){var s,l=u.p(i),d="set"+(this.$u?"UTC":""),p=(s={},s[T]=d+"Date",s[b]=d+"Date",s[C]=d+"Month",s[v]=d+"FullYear",s[F]=d+"Hours",s[Y]=d+"Minutes",s[g]=d+"Seconds",s[$]=d+"Milliseconds",s)[l],M=l===T?this.$D+(o-this.$W):o;if(l===C||l===v){var S=this.clone().set(b,1);S.$d[p](M),S.init(),this.$d=S.set(b,Math.min(this.$D,S.daysInMonth())).$d}else p&&this.$d[p](M);return this.init(),this},a.set=function(i,o){return this.clone().$set(i,o)},a.get=function(i){return this[u.p(i)]()},a.add=function(i,o){var s,l=this;i=Number(i);var d=u.p(o),p=function(x){var W=c(l);return u.w(W.date(W.date()+Math.round(x*i)),l)};if(d===C)return this.set(C,this.$M+i);if(d===v)return this.set(v,this.$y+i);if(d===T)return p(1);if(d===E)return p(7);var M=(s={},s[Y]=f,s[F]=k,s[g]=z,s)[d]||1,S=this.$d.getTime()+i*M;return u.w(S,this)},a.subtract=function(i,o){return this.add(-1*i,o)},a.format=function(i){var o=this,s=this.$locale();if(!this.isValid())return s.invalidDate||P;var l=i||"YYYY-MM-DDTHH:mm:ssZ",d=u.z(this),p=this.$H,M=this.$m,S=this.$M,x=s.weekdays,W=s.months,Q=s.meridiem,R=function(A,B,K,te){return A&&(A[B]||A(o,l))||K[B].slice(0,te)},X=function(A){return u.s(p%12||12,A,"0")},I=Q||function(A,B,K){var te=A<12?"AM":"PM";return K?te.toLowerCase():te};return l.replace(q,function(A,B){return B||function(K){switch(K){case"YY":return String(o.$y).slice(-2);case"YYYY":return u.s(o.$y,4,"0");case"M":return S+1;case"MM":return u.s(S+1,2,"0");case"MMM":return R(s.monthsShort,S,W,3);case"MMMM":return R(W,S);case"D":return o.$D;case"DD":return u.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return R(s.weekdaysMin,o.$W,x,2);case"ddd":return R(s.weekdaysShort,o.$W,x,3);case"dddd":return x[o.$W];case"H":return String(p);case"HH":return u.s(p,2,"0");case"h":return X(1);case"hh":return X(2);case"a":return I(p,M,!0);case"A":return I(p,M,!1);case"m":return String(M);case"mm":return u.s(M,2,"0");case"s":return String(o.$s);case"ss":return u.s(o.$s,2,"0");case"SSS":return u.s(o.$ms,3,"0");case"Z":return d}return null}(A)||d.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(i,o,s){var l,d=this,p=u.p(o),M=c(i),S=(M.utcOffset()-this.utcOffset())*f,x=this-M,W=function(){return u.m(d,M)};switch(p){case v:l=W()/12;break;case C:l=W();break;case w:l=W()/3;break;case E:l=(x-S)/6048e5;break;case T:l=(x-S)/864e5;break;case F:l=x/k;break;case Y:l=x/f;break;case g:l=x/z;break;default:l=x}return s?l:u.a(l)},a.daysInMonth=function(){return this.endOf(C).$D},a.$locale=function(){return m[this.$L]},a.locale=function(i,o){if(!i)return this.$L;var s=this.clone(),l=h(i,o,!0);return l&&(s.$L=l),s},a.clone=function(){return u.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},r}(),H=y.prototype;return c.prototype=H,[["$ms",$],["$s",g],["$m",Y],["$H",F],["$W",T],["$M",C],["$y",v],["$D",b]].forEach(function(r){H[r[1]]=function(a){return this.$g(a,r[0],r[1])}}),c.extend=function(r,a){return r.$i||(r(a,y,c),r.$i=!0),c},c.locale=h,c.isDayjs=t,c.unix=function(r){return c(1e3*r)},c.en=m[J],c.Ls=m,c.p={},c})})(we);const ie=ae;var re={},Se={get exports(){return re},set exports(e){re=e}};(function(e,D){(function(z,f){e.exports=f()})(he,function(){var z,f,k=1e3,$=6e4,g=36e5,Y=864e5,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,T=31536e6,E=2628e6,C=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,w={years:T,months:E,days:Y,hours:g,minutes:$,seconds:k,milliseconds:1,weeks:6048e5},v=function(m){return m instanceof G},b=function(m,n,t){return new G(m,t,n.$l)},P=function(m){return f.p(m)+"s"},_=function(m){return m<0},q=function(m){return _(m)?Math.ceil(m):Math.floor(m)},U=function(m){return Math.abs(m)},O=function(m,n){return m?_(m)?{negative:!0,format:""+U(m)+n}:{negative:!1,format:""+m+n}:{negative:!1,format:""}},G=function(){function m(t,h,c){var u=this;if(this.$d={},this.$l=c,t===void 0&&(this.$ms=0,this.parseFromMilliseconds()),h)return b(t*w[P(h)],this);if(typeof t=="number")return this.$ms=t,this.parseFromMilliseconds(),this;if(typeof t=="object")return Object.keys(t).forEach(function(r){u.$d[P(r)]=t[r]}),this.calMilliseconds(),this;if(typeof t=="string"){var y=t.match(C);if(y){var H=y.slice(2).map(function(r){return r!=null?Number(r):0});return this.$d.years=H[0],this.$d.months=H[1],this.$d.weeks=H[2],this.$d.days=H[3],this.$d.hours=H[4],this.$d.minutes=H[5],this.$d.seconds=H[6],this.calMilliseconds(),this}}return this}var n=m.prototype;return n.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(h,c){return h+(t.$d[c]||0)*w[c]},0)},n.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=q(t/T),t%=T,this.$d.months=q(t/E),t%=E,this.$d.days=q(t/Y),t%=Y,this.$d.hours=q(t/g),t%=g,this.$d.minutes=q(t/$),t%=$,this.$d.seconds=q(t/k),t%=k,this.$d.milliseconds=t},n.toISOString=function(){var t=O(this.$d.years,"Y"),h=O(this.$d.months,"M"),c=+this.$d.days||0;this.$d.weeks&&(c+=7*this.$d.weeks);var u=O(c,"D"),y=O(this.$d.hours,"H"),H=O(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3,r=Math.round(1e3*r)/1e3);var a=O(r,"S"),i=t.negative||h.negative||u.negative||y.negative||H.negative||a.negative,o=y.format||H.format||a.format?"T":"",s=(i?"-":"")+"P"+t.format+h.format+u.format+o+y.format+H.format+a.format;return s==="P"||s==="-P"?"P0D":s},n.toJSON=function(){return this.toISOString()},n.format=function(t){var h=t||"YYYY-MM-DDTHH:mm:ss",c={Y:this.$d.years,YY:f.s(this.$d.years,2,"0"),YYYY:f.s(this.$d.years,4,"0"),M:this.$d.months,MM:f.s(this.$d.months,2,"0"),D:this.$d.days,DD:f.s(this.$d.days,2,"0"),H:this.$d.hours,HH:f.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:f.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:f.s(this.$d.seconds,2,"0"),SSS:f.s(this.$d.milliseconds,3,"0")};return h.replace(F,function(u,y){return y||String(c[u])})},n.as=function(t){return this.$ms/w[P(t)]},n.get=function(t){var h=this.$ms,c=P(t);return c==="milliseconds"?h%=1e3:h=c==="weeks"?q(h/w[c]):this.$d[c],h||0},n.add=function(t,h,c){var u;return u=h?t*w[P(h)]:v(t)?t.$ms:b(t,this).$ms,b(this.$ms+u*(c?-1:1),this)},n.subtract=function(t,h){return this.add(t,h,!0)},n.locale=function(t){var h=this.clone();return h.$l=t,h},n.clone=function(){return b(this.$ms,this)},n.humanize=function(t){return z().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},n.valueOf=function(){return this.asMilliseconds()},n.milliseconds=function(){return this.get("milliseconds")},n.asMilliseconds=function(){return this.as("milliseconds")},n.seconds=function(){return this.get("seconds")},n.asSeconds=function(){return this.as("seconds")},n.minutes=function(){return this.get("minutes")},n.asMinutes=function(){return this.as("minutes")},n.hours=function(){return this.get("hours")},n.asHours=function(){return this.as("hours")},n.days=function(){return this.get("days")},n.asDays=function(){return this.as("days")},n.weeks=function(){return this.get("weeks")},n.asWeeks=function(){return this.as("weeks")},n.months=function(){return this.get("months")},n.asMonths=function(){return this.as("months")},n.years=function(){return this.get("years")},n.asYears=function(){return this.as("years")},m}(),J=function(m,n,t){return m.add(n.years()*t,"y").add(n.months()*t,"M").add(n.days()*t,"d").add(n.hours()*t,"h").add(n.minutes()*t,"m").add(n.seconds()*t,"s").add(n.milliseconds()*t,"ms")};return function(m,n,t){z=t,f=t().$utils(),t.duration=function(u,y){var H=t.locale();return b(u,{$l:H},y)},t.isDuration=v;var h=n.prototype.add,c=n.prototype.subtract;n.prototype.add=function(u,y){return v(u)?J(this,u,1):h.bind(this)(u,y)},n.prototype.subtract=function(u,y){return v(u)?J(this,u,-1):c.bind(this)(u,y)}}})})(Se);const De=re;ie.extend(De);const je=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],qe=(e,D)=>`${e} | ${D}`;function Oe(e,D=new Date(Date.now()+1e3*60*60*24)){const z=ie(e),f=ie(D),k=ie.duration(f.diff(z));let $=0,g="day";return k.as("days")<=7?(g="day",$=k.as("days")):k.as("months")<=1?(g="week",$=k.as("weeks")):k.as("years")<=1?(g="month",$=k.as("months")):(g="year",$=k.as("years")),$=Math.trunc($),`${Math.trunc($)} ${g}${$>1?"s":""}`}var Z=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(Z||{});const Ye="Slick template with Svelte",Ee={home:"Home",personal:"Projects",career:"Experiences",resume:"Resume",skills:"Skills"},Pe=e=>{switch(e){case N.GitHub:return Z.GitHub;case N.Linkedin:return Z.LinkedIn;case N.StackOverflow:return Z.StackOverflow;case N.Facebook:return Z.Facebook;case N.Email:return Z.Email;case N.Twitter:return Z.Twitter;case N.Youtube:return Z.Youtube}},We={title:"Home",name:"Name",lastName:"LASTNAME",description:"Hello there, I'm Andy. A Web Developer with an Engineering background who is excited about building Web applications that will benefit the masses, similar to how technology has improved our lives over the past decade.",links:[{platform:N.GitHub,link:"https://github.com/geekHarp"},{platform:N.Linkedin,link:"https://www.linkedin.com/in/andyngboonhou/"},{platform:N.Email,link:"ngbhandy@gmail.com"}]},Fe={title:"Projects",items:ye},Je={title:"Experiences",items:$e},Ve={title:"Skills",items:de};export{Je as E,We as H,Z as I,de as M,Ee as N,Fe as P,Ve as S,Ye as T,oe as a,Pe as b,Oe as c,je as d,Le as e,ze as f,Ae as g,qe as h,Te as o,ce as t,Ce as u};
