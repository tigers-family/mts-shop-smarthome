import{s as ae,n as Q,y as Tu,z as r4,A as te,f as ze,o as f4,r as d4,e as Su}from"../chunks/scheduler.yHiYX-9k.js";import{S as ie,i as oe,g as E,k as w,a as k,d as $,b as m,e as M,t as B,z as Re,v as Xe,p as A,w as Le,j,n as L,o as z,q as H,r as X,u as Y,h as C,m as I,l as ne,f as i,y as Ye,D as Ue,H as Du,E as Bu,x as tu}from"../chunks/index.BS3E1mbt.js";import{e as Z,L as m4,i as Gu,C as g4,B as lu,s as qu,A as n4}from"../chunks/modalStore.B6znZD5Z.js";import{B as Cu,H as uu}from"../chunks/H1.DiAfya2N.js";import{C as p4}from"../chunks/CompareImg.DGZPw1Ls.js";function Ou(l,e,u){const t=l.slice();return t[2]=e[u],t}function h4(l){let e=l[2]+"",u;return{c(){u=X(e)},l(t){u=Y(t,e)},m(t,s){M(t,u,s)},p:Q,d(t){t&&$(u)}}}function Pu(l){let e,u;return e=new Cu({props:{$$slots:{default:[h4]},$$scope:{ctx:l}}}),{c(){j(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,s){z(e,t,s),u=!0},p(t,s){const r={};s&32&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){u||(B(e.$$.fragment,t),u=!0)},o(t){A(e.$$.fragment,t),u=!1},d(t){H(e,t)}}}function v4(l){let e,u,t,s=Z(l[1]),r=[];for(let o=0;o<s.length;o+=1)r[o]=Pu(Ou(l,s,o));const v=o=>A(r[o],1,1,()=>{r[o]=null});return{c(){e=E("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=w(o,"DIV",{class:!0});var f=k(e);for(let a=0;a<r.length;a+=1)r[a].l(f);f.forEach($),this.h()},h(){m(e,"class",u="flex flex-row gap-3 items-start justify-start relative whitespace-nowrap w-max "+l[0])},m(o,f){M(o,e,f);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null);t=!0},p(o,[f]){if(f&2){s=Z(o[1]);let a;for(a=0;a<s.length;a+=1){const _=Ou(o,s,a);r[a]?(r[a].p(_,f),B(r[a],1)):(r[a]=Pu(_),r[a].c(),B(r[a],1),r[a].m(e,null))}for(Re(),a=s.length;a<r.length;a+=1)v(a);Xe()}(!t||f&1&&u!==(u="flex flex-row gap-3 items-start justify-start relative whitespace-nowrap w-max "+o[0]))&&m(e,"class",u)},i(o){if(!t){for(let f=0;f<s.length;f+=1)B(r[f]);t=!0}},o(o){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)A(r[f]);t=!1},d(o){o&&$(e),Le(r,o)}}}function $4(l,e,u){let{class:t=""}=e;const s=["Xiaomi","Яндекс","TCL","Samsung","DeLonghi","Huawei","TP-Link","Dreame"];return l.$$set=r=>{"class"in r&&u(0,t=r.class)},[t,s]}class x4 extends ie{constructor(e){super(),oe(this,e,$4,v4,ae,{class:0})}}function _4(l){let e,u,t;return e=new p4({props:{class:"h-[18px] w-[18.36px]"}}),{c(){j(e.$$.fragment),u=X(`
					Сравнить`)},l(s){L(e.$$.fragment,s),u=Y(s,`
					Сравнить`)},m(s,r){z(e,s,r),M(s,u,r),t=!0},p:Q,i(s){t||(B(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){s&&$(u),H(e,s)}}}function b4(l){let e,u,t;return e=new g4({props:{class:"h-[18px] w-[18.36px] stroke-white fill-white"}}),{c(){j(e.$$.fragment),u=X(`
				Купить сразу`)},l(s){L(e.$$.fragment,s),u=Y(s,`
				Купить сразу`)},m(s,r){z(e,s,r),M(s,u,r),t=!0},p:Q,i(s){t||(B(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){s&&$(u),H(e,s)}}}function E4(l){let e,u,t,s,r='<img class="mx-auto w-[131px]" src="./iphone.png"/>',v,o,f,a='<div class="flex flex-col gap-2"><div class="text-gray text-sm font-normal">Смартфон</div> <div class="text-sm font-medium leading-[18px] text-black">Apple iPhone 13 128GB (темная ночь)</div></div> <div class="flex flex-col gap-2"><div class="text-red w-[155px] text-lg font-bold leading-[18px]">от 2 500.00 руб.</div> <div class="w-[155px] text-sm font-normal leading-[18px] text-black">или 128 руб./мес.</div></div>',_,D,d,g,p,c,h,F;return u=new m4({props:{class:"z-20 w-6 absolute top-0 right-0 m-4 cursor-pointer"}}),g=new Cu({props:{ignoreClick:!0,class:"!px-2 hover:fill-black fill-gray !w-full md:!w-max justify-center",$$slots:{default:[_4]},$$scope:{ctx:l}}}),c=new Cu({props:{class:"px-[9px] hover:fill-black fill-gray bg-red hover:bg-[#c8052b] text-white hover:text-white border-none !w-full md:!w-max justify-center",$$slots:{default:[b4]},$$scope:{ctx:l}}}),c.$on("click",l[1]),{c(){e=E("div"),j(u.$$.fragment),t=C(),s=E("div"),s.innerHTML=r,v=C(),o=E("div"),f=E("div"),f.innerHTML=a,_=C(),D=E("div"),d=E("a"),j(g.$$.fragment),p=C(),j(c.$$.fragment),this.h()},l(V){e=w(V,"DIV",{class:!0});var T=k(e);L(u.$$.fragment,T),t=I(T),s=w(T,"DIV",{class:!0,"data-svelte-h":!0}),ne(s)!=="svelte-iyaw28"&&(s.innerHTML=r),v=I(T),o=w(T,"DIV",{class:!0});var R=k(o);f=w(R,"DIV",{class:!0,"data-svelte-h":!0}),ne(f)!=="svelte-1rsxlq2"&&(f.innerHTML=a),_=I(R),D=w(R,"DIV",{class:!0});var U=k(D);d=w(U,"A",{href:!0});var ue=k(d);L(g.$$.fragment,ue),ue.forEach($),p=I(U),L(c.$$.fragment,U),U.forEach($),R.forEach($),T.forEach($),this.h()},h(){m(s,"class","relative w-[247px]"),m(f,"class","flex flex-col gap-4"),m(d,"href","./compare"),m(D,"class","flex md:flex-row flex-col justify-start md:gap-4 gap-2"),m(o,"class","flex flex-col gap-3"),m(e,"class",h="bg-white relative text-left rounded-2xl border-solid border-[#e6e8f0] border-2 p-5 flex flex-row gap-9 items-start justify-start flex-wrap md:w-[287px] w-[244px] "+l[0])},m(V,T){M(V,e,T),z(u,e,null),i(e,t),i(e,s),i(e,v),i(e,o),i(o,f),i(o,_),i(o,D),i(D,d),z(g,d,null),i(D,p),z(c,D,null),F=!0},p(V,[T]){const R={};T&8&&(R.$$scope={dirty:T,ctx:V}),g.$set(R);const U={};T&8&&(U.$$scope={dirty:T,ctx:V}),c.$set(U),(!F||T&1&&h!==(h="bg-white relative text-left rounded-2xl border-solid border-[#e6e8f0] border-2 p-5 flex flex-row gap-9 items-start justify-start flex-wrap md:w-[287px] w-[244px] "+V[0]))&&m(e,"class",h)},i(V){F||(B(u.$$.fragment,V),B(g.$$.fragment,V),B(c.$$.fragment,V),F=!0)},o(V){A(u.$$.fragment,V),A(g.$$.fragment,V),A(c.$$.fragment,V),F=!1},d(V){V&&$(e),H(u),H(g),H(c)}}}function w4(l,e,u){let{class:t=""}=e,s=!1;Gu.subscribe(v=>{s=v});const r=()=>{Gu.set(!s)};return l.$$set=v=>{"class"in v&&u(0,t=v.class)},[t,r]}class me extends ie{constructor(e){super(),oe(this,e,w4,E4,ae,{class:0})}}function D4(l){const e=l-1;return e*e*e+1}function We(l,{delay:e=0,duration:u=400,easing:t=D4,x:s=0,y:r=0,opacity:v=0}={}){const o=getComputedStyle(l),f=+o.opacity,a=o.transform==="none"?"":o.transform,_=f*(1-v),[D,d]=Tu(s),[g,p]=Tu(r);return{delay:e,duration:u,easing:t,css:(c,h)=>`
			transform: ${a} translate(${(1-c)*D}${d}, ${(1-c)*g}${p});
			opacity: ${f-_*h}`}}function Uu(l){let e,u,t;return{c(){e=E("img"),this.h()},l(s){e=w(s,"IMG",{class:!0,src:!0}),this.h()},h(){m(e,"class","object-cover h-[260px] md:h-[331px] lg:h-[260px] xl:h-[332px] absolute -right-[55px] -bottom-[65px]"),te(e.src,u=l[2])||m(e,"src",u)},m(s,r){M(s,e,r)},p(s,r){r&4&&!te(e.src,u=s[2])&&m(e,"src",u)},i(s){s&&(t||ze(()=>{t=Ue(e,We,{y:200,duration:2e3}),t.start()}))},o:Q,d(s){s&&$(e)}}}function B4(l){let e;return{c(){e=X("Перейти в категорию")},l(u){e=Y(u,"Перейти в категорию")},m(u,t){M(u,e,t)},d(u){u&&$(e)}}}function C4(l){let e,u,t,s,r,v,o,f,a,_,D,d,g,p,c=l[3]&&Uu(l);return D=new lu({props:{class:"absolute left-5 top-[234px] md:top-[314px] lg:top-[274px] xl:top-[314px]",$$slots:{default:[B4]},$$scope:{ctx:l}}}),{c(){e=E("div"),u=E("div"),t=E("div"),s=E("div"),r=X(l[0]),v=C(),o=E("div"),f=X(l[1]),a=C(),c&&c.c(),_=C(),j(D.$$.fragment),this.h()},l(h){e=w(h,"DIV",{class:!0});var F=k(e);u=w(F,"DIV",{class:!0});var V=k(u);t=w(V,"DIV",{class:!0});var T=k(t);s=w(T,"DIV",{class:!0});var R=k(s);r=Y(R,l[0]),R.forEach($),v=I(T),o=w(T,"DIV",{class:!0});var U=k(o);f=Y(U,l[1]),U.forEach($),T.forEach($),a=I(V),c&&c.l(V),_=I(V),L(D.$$.fragment,V),V.forEach($),F.forEach($),this.h()},h(){m(s,"class","text-lg leading-[18px] font-bold"),m(o,"class","text-base font-normal"),m(t,"class","flex flex-col gap-3 items-start justify-start absolute top-5 px-5"),m(u,"class","bg-[#f7f8fb] rounded-2xl absolute right-0 left-0 bottom-0 top-0"),m(e,"class","w-full max-w-[358px] md:w-[304px] lg:w-[224px] xl:w-[287px] h-[298px] md:h-[398px] lg:h-[338px] xl:h-[398px] relative overflow-hidden")},m(h,F){M(h,e,F),i(e,u),i(u,t),i(t,s),i(s,r),i(t,v),i(t,o),i(o,f),i(u,a),c&&c.m(u,null),i(u,_),z(D,u,null),d=!0,g||(p=r4(l[4].call(null,e)),g=!0)},p(h,[F]){(!d||F&1)&&Ye(r,h[0]),(!d||F&2)&&Ye(f,h[1]),h[3]?c?(c.p(h,F),F&8&&B(c,1)):(c=Uu(h),c.c(),B(c,1),c.m(u,_)):c&&(c.d(1),c=null);const V={};F&32&&(V.$$scope={dirty:F,ctx:h}),D.$set(V)},i(h){d||(B(c),B(D.$$.fragment,h),d=!0)},o(h){A(D.$$.fragment,h),d=!1},d(h){h&&$(e),c&&c.d(),H(D),g=!1,p()}}}function I4(l,e,u){let{title:t="title"}=e,{desc:s="desc"}=e,{img:r="./cat/0.png"}=e,v=!1;function o(f){new IntersectionObserver(_=>{_.forEach(D=>{D.isIntersecting&&u(3,v=!0)})},{threshold:1}).observe(f)}return l.$$set=f=>{"title"in f&&u(0,t=f.title),"desc"in f&&u(1,s=f.desc),"img"in f&&u(2,r=f.img)},[t,s,r,v,o]}class F4 extends ie{constructor(e){super(),oe(this,e,I4,C4,ae,{title:0,desc:1,img:2})}}function V4(l){let e;return{c(){e=X("Узнать подробнее")},l(u){e=Y(u,"Узнать подробнее")},m(u,t){M(u,e,t)},d(u){u&&$(e)}}}function Wu(l){let e,u,t;return{c(){e=E("img"),this.h()},l(s){e=w(s,"IMG",{class:!0,src:!0}),this.h()},h(){m(e,"class","object-cover absolute -bottom-[60px] md:-bottom-[120px] scale-[1.2] lg:w-[400px] lg:right-[47px] lg:-bottom-[60px] xl:w-[470px] xl:right-[120px] xl:-bottom-[70px]"),te(e.src,u="./block-1.png")||m(e,"src",u)},m(s,r){M(s,e,r)},i(s){s&&(t||ze(()=>{t=Ue(e,We,{y:200,duration:2e3}),t.start()}))},o:Q,d(s){s&&$(e)}}}function k4(l){let e,u,t,s="Товары для умного дома",r,v,o="Комфортный быт с минимумом усилий",f,a,_,D;a=new lu({props:{class:"mt-3 w-max",$$slots:{default:[V4]},$$scope:{ctx:l}}});let d=l[0]&&Wu();return{c(){e=E("div"),u=E("div"),t=E("div"),t.textContent=s,r=C(),v=E("div"),v.textContent=o,f=C(),j(a.$$.fragment),_=C(),d&&d.c(),this.h()},l(g){e=w(g,"DIV",{class:!0});var p=k(e);u=w(p,"DIV",{class:!0});var c=k(u);t=w(c,"DIV",{class:!0,"data-svelte-h":!0}),ne(t)!=="svelte-1q3pjf2"&&(t.textContent=s),r=I(c),v=w(c,"DIV",{class:!0,"data-svelte-h":!0}),ne(v)!=="svelte-lfe7ca"&&(v.textContent=o),f=I(c),L(a.$$.fragment,c),c.forEach($),_=I(p),d&&d.l(p),p.forEach($),this.h()},h(){m(t,"class","text-[20px] leading-[22px] md:text-[40px] md:leading-[42px] lg:leading-[34px] lg:text-[32px] xl:text-[40px] xl:leading-[42px] font-bold"),m(v,"class","text-base md:text-[22px] md:leading-[24px] lg:text-[16px] lg:leading-[20px] xl:text-[22px] xl:leading-[24px] text-cool-grey-10 font-normal"),m(u,"class","flex flex-col gap-3 absolute px-5 py-10 md:px-10 md:py-20 lg:py-[112px] lg:px-[34px] xl:py-[106px] xl:px-[64px]"),m(e,"class","w-full max-w-[358px] md:max-w-[624px] lg:max-w-[944px] xl:max-w-[1196px] h-[380px] sm:h-[412px] md:h-[624px] lg:h-[358px] relative mx-auto bg-block-1-bg bg-cover bg-center rounded-2xl overflow-hidden ")},m(g,p){M(g,e,p),i(e,u),i(u,t),i(u,r),i(u,v),i(u,f),z(a,u,null),i(e,_),d&&d.m(e,null),D=!0},p(g,[p]){const c={};p&2&&(c.$$scope={dirty:p,ctx:g}),a.$set(c),g[0]?d?p&1&&B(d,1):(d=Wu(),d.c(),B(d,1),d.m(e,null)):d&&(d.d(1),d=null)},i(g){D||(B(a.$$.fragment,g),B(d),D=!0)},o(g){A(a.$$.fragment,g),D=!1},d(g){g&&$(e),H(a),d&&d.d()}}}function A4(l,e,u){let t=!1;return f4(()=>{u(0,t=!0)}),[t]}class y4 extends ie{constructor(e){super(),oe(this,e,A4,k4,ae,{})}}function M4(l){let e,u,t,s,r,v,o,f,a,_;return{c(){e=E("div"),u=E("div"),t=E("div"),s=X(l[0]),r=C(),v=E("div"),o=new Du(!1),f=C(),a=E("img"),this.h()},l(D){e=w(D,"DIV",{class:!0});var d=k(e);u=w(d,"DIV",{class:!0});var g=k(u);t=w(g,"DIV",{class:!0});var p=k(t);s=Y(p,l[0]),p.forEach($),r=I(g),v=w(g,"DIV",{class:!0});var c=k(v);o=Bu(c,!1),c.forEach($),g.forEach($),f=I(d),a=w(d,"IMG",{class:!0,src:!0}),d.forEach($),this.h()},h(){m(t,"class","text-lg leading-5 font-bold"),o.a=null,m(v,"class","text-sm leading-5 font-normal"),m(u,"class","flex flex-col gap-3 items-start left-5 top-5"),m(a,"class","w-[104px] md:w-[84px] mx-auto sm:mx-0 object-cover"),te(a.src,_=l[2])||m(a,"src",_),m(e,"class","bg-[#F7F8FB] p-5 rounded-2xl sm:flex gap-1 sm:gap-2 justify-between lg:w-[464px] xl:w-[388px]")},m(D,d){M(D,e,d),i(e,u),i(u,t),i(t,s),i(u,r),i(u,v),o.m(l[1],v),i(e,f),i(e,a)},p(D,[d]){d&1&&Ye(s,D[0]),d&2&&o.p(D[1]),d&4&&!te(a.src,_=D[2])&&m(a,"src",_)},i:Q,o:Q,d(D){D&&$(e)}}}function j4(l,e,u){let{title:t="title"}=e,{desc:s="desc"}=e,{img:r="./cat/0.png"}=e;return l.$$set=v=>{"title"in v&&u(0,t=v.title),"desc"in v&&u(1,s=v.desc),"img"in v&&u(2,r=v.img)},[t,s,r]}class L4 extends ie{constructor(e){super(),oe(this,e,j4,M4,ae,{title:0,desc:1,img:2})}}function z4(l){let e;return{c(){e=X("Оформить заказ")},l(u){e=Y(u,"Оформить заказ")},m(u,t){M(u,e,t)},d(u){u&&$(e)}}}function Nu(l){let e,u,t,s,r,v,o,f,a,_,D,d,g,p,c;return{c(){e=E("img"),s=C(),r=E("img"),f=C(),a=E("img"),d=C(),g=E("img"),this.h()},l(h){e=w(h,"IMG",{src:!0,alt:!0,class:!0}),s=I(h),r=w(h,"IMG",{src:!0,alt:!0,class:!0}),f=I(h),a=w(h,"IMG",{src:!0,alt:!0,class:!0}),d=I(h),g=w(h,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){te(e.src,u="./bubble.svg")||m(e,"src",u),m(e,"alt","bubble"),m(e,"class","absolute w-[14px] top-[15px] left-[35px] z-[1] md:w-[49px] lg:w-[39px] lg:left-[85px] xl:left-[185px]"),te(r.src,v="./bubble.svg")||m(r,"src",v),m(r,"alt","bubble"),m(r,"class","absolute w-[55px] -top-[25px] right-[35px] z-[1] md:w-[193px] md:-top-[100px] md:-right-[15px] lg:right-[59px] xl:right-[111px]"),te(a.src,_="./bubble.svg")||m(a,"src",_),m(a,"alt","bubble"),m(a,"class","absolute w-[141px] -bottom-[80px] -left-[20px] z-[1] md:w-[178px] md:-left-[10px] lg:w-[326px] lg:-left-[130px] lg:-bottom-[94px] xl:-left-[23px]"),te(g.src,p="./bubble.svg")||m(g,"src",p),m(g,"alt","bubble"),m(g,"class","absolute w-[34px] bottom-[15px] right-[35px] z-[1] md:w-[66px] md:right-[15px] lg:w-[74px] lg:right-[0px] xl:right-[50px]")},m(h,F){M(h,e,F),M(h,s,F),M(h,r,F),M(h,f,F),M(h,a,F),M(h,d,F),M(h,g,F)},i(h){h&&(t||ze(()=>{t=Ue(e,We,{y:200,duration:2e3}),t.start()})),h&&(o||ze(()=>{o=Ue(r,We,{y:200,duration:2e3}),o.start()})),h&&(D||ze(()=>{D=Ue(a,We,{y:200,duration:2e3}),D.start()})),h&&(c||ze(()=>{c=Ue(g,We,{y:200,duration:2e3}),c.start()}))},o:Q,d(h){h&&($(e),$(s),$(r),$(f),$(a),$(d),$(g))}}}function H4(l){let e,u,t,s="Оформите заказ",r,v,o='<input type="text" placeholder="*Ваше имя" class="rounded pl-5 hover:border-cool-grey-8 hover:placeholder:text-cool-grey-8 focus:outline-[#1481B4] border-solid border-[#e6e8f0] border-2 h-11 flex justify-center md:justify-start items-center"/> <input type="text" placeholder="*Ваш номер телефона" class="rounded pl-5 hover:border-cool-grey-8 hover:placeholder:text-cool-grey-8 focus:outline-[#1481B4] border-solid border-[#e6e8f0] border-2 h-11 flex justify-center md:justify-start items-center"/>',f,a,_,D,d,g;a=new lu({props:{class:"w-full bg-[#ED7F86] mt-6 md:w-max md:mx-auto",$$slots:{default:[z4]},$$scope:{ctx:l}}});let p=l[0]&&Nu();return{c(){e=E("div"),u=E("div"),t=E("div"),t.textContent=s,r=C(),v=E("div"),v.innerHTML=o,f=C(),j(a.$$.fragment),_=C(),p&&p.c(),this.h()},l(c){e=w(c,"DIV",{class:!0});var h=k(e);u=w(h,"DIV",{class:!0});var F=k(u);t=w(F,"DIV",{class:!0,"data-svelte-h":!0}),ne(t)!=="svelte-37hhf2"&&(t.textContent=s),r=I(F),v=w(F,"DIV",{class:!0,"data-svelte-h":!0}),ne(v)!=="svelte-s05hry"&&(v.innerHTML=o),f=I(F),L(a.$$.fragment,F),F.forEach($),_=I(h),p&&p.l(h),h.forEach($),this.h()},h(){m(t,"class","text-2xl lg:mb-8 md:text-[40px] leading-[26px] font-black text-center"),m(v,"class","flex flex-col gap-3 mt-4"),m(u,"class","md:py-10 md:px-12 lg:px-[208px] xl:px-[334px] z-[100] relative px-5 py-10"),m(e,"class","relative bg-[#F7F8FB] rounded-2xl overflow-hidden")},m(c,h){M(c,e,h),i(e,u),i(u,t),i(u,r),i(u,v),i(u,f),z(a,u,null),i(e,_),p&&p.m(e,null),D=!0,d||(g=r4(l[1].call(null,e)),d=!0)},p(c,[h]){const F={};h&4&&(F.$$scope={dirty:h,ctx:c}),a.$set(F),c[0]?p?h&1&&B(p,1):(p=Nu(),p.c(),B(p,1),p.m(e,null)):p&&(p.d(1),p=null)},i(c){D||(B(a.$$.fragment,c),B(p),D=!0)},o(c){A(a.$$.fragment,c),D=!1},d(c){c&&$(e),H(a),p&&p.d(),d=!1,g()}}}function T4(l,e,u){let t=!1;function s(r){new IntersectionObserver(o=>{o.forEach(f=>{f.isIntersecting&&u(0,t=!0)})},{threshold:1}).observe(r)}return[t,s]}class S4 extends ie{constructor(e){super(),oe(this,e,T4,H4,ae,{})}}function Ru(l,e,u){const t=l.slice();return t[4]=e[u],t}function Xu(l){let e,u;return{c(){e=E("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0}),this.h()},h(){te(e.src,u="./star.svg")||m(e,"src",u),m(e,"alt","star")},m(t,s){M(t,e,s)},p:Q,d(t){t&&$(e)}}}function G4(l){let e,u,t,s,r,v,o,f,a,_,D,d=Z(Array(l[0])),g=[];for(let p=0;p<d.length;p+=1)g[p]=Xu(Ru(l,d,p));return{c(){e=E("div"),u=E("div"),t=new Du(!1),s=C(),r=E("div");for(let p=0;p<g.length;p+=1)g[p].c();v=C(),o=E("div"),f=new Du(!1),a=C(),_=E("div"),D=X(l[3]),this.h()},l(p){e=w(p,"DIV",{class:!0});var c=k(e);u=w(c,"DIV",{class:!0});var h=k(u);t=Bu(h,!1),h.forEach($),s=I(c),r=w(c,"DIV",{class:!0});var F=k(r);for(let R=0;R<g.length;R+=1)g[R].l(F);F.forEach($),v=I(c),o=w(c,"DIV",{class:!0});var V=k(o);f=Bu(V,!1),V.forEach($),a=I(c),_=w(c,"DIV",{class:!0});var T=k(_);D=Y(T,l[3]),T.forEach($),c.forEach($),this.h()},h(){t.a=null,m(u,"class","text-xl leading-6 font-bold relative underline"),m(r,"class","flex gap-1 mt-2 mb-4"),f.a=null,m(o,"class","text-black text-base leading-6 font-normal"),m(_,"class","text-gray text-base leading-6 font-normal mt-4"),m(e,"class","rounded-2xl border-solid border-[#e6e8f0] border-2 p-5 md:p-10 min-w-[244px] md:min-w-[508px]")},m(p,c){M(p,e,c),i(e,u),t.m(l[1],u),i(e,s),i(e,r);for(let h=0;h<g.length;h+=1)g[h]&&g[h].m(r,null);i(e,v),i(e,o),f.m(l[2],o),i(e,a),i(e,_),i(_,D)},p(p,[c]){if(c&2&&t.p(p[1]),c&1){d=Z(Array(p[0]));let h;for(h=0;h<d.length;h+=1){const F=Ru(p,d,h);g[h]?g[h].p(F,c):(g[h]=Xu(),g[h].c(),g[h].m(r,null))}for(;h<g.length;h+=1)g[h].d(1);g.length=d.length}c&4&&f.p(p[2]),c&8&&Ye(D,p[3])},i:Q,o:Q,d(p){p&&$(e),Le(g,p)}}}function q4(l,e,u){let{stars:t=5}=e,{title:s="title"}=e,{desc:r="desc"}=e,{name:v="name"}=e;return l.$$set=o=>{"stars"in o&&u(0,t=o.stars),"title"in o&&u(1,s=o.title),"desc"in o&&u(2,r=o.desc),"name"in o&&u(3,v=o.name)},[t,s,r,v]}class O4 extends ie{constructor(e){super(),oe(this,e,q4,G4,ae,{stars:0,title:1,desc:2,name:3})}}function P4(l){let e;return{c(){e=X("Подписаться")},l(u){e=Y(u,"Подписаться")},m(u,t){M(u,e,t)},d(u){u&&$(e)}}}function U4(l){let e,u,t="Подпишитесь на новости",s,r,v,o,f,a,_,D=`Нажимая на кнопку «Подписаться», я даю согласие на получение новостей
		и акционных предложений от компании`,d;return f=new lu({props:{class:"w-full md:w-auto mt-6 md:mt-0",$$slots:{default:[P4]},$$scope:{ctx:l}}}),f.$on("click",l[0]),{c(){e=E("div"),u=E("div"),u.textContent=t,s=C(),r=E("div"),v=E("input"),o=C(),j(f.$$.fragment),a=C(),_=E("div"),_.textContent=D,this.h()},l(g){e=w(g,"DIV",{class:!0});var p=k(e);u=w(p,"DIV",{class:!0,"data-svelte-h":!0}),ne(u)!=="svelte-zqofg9"&&(u.textContent=t),s=I(p),r=w(p,"DIV",{class:!0});var c=k(r);v=w(c,"INPUT",{class:!0,placeholder:!0}),o=I(c),L(f.$$.fragment,c),c.forEach($),a=I(p),_=w(p,"DIV",{class:!0,"data-svelte-h":!0}),ne(_)!=="svelte-1o7t9cq"&&(_.textContent=D),p.forEach($),this.h()},h(){m(u,"class","text-2xl md:text-[40px] leading-[26px] font-black"),m(v,"class","rounded w-full text-center border-solid border-[#e6e8f0] hover:border-cool-grey-8 hover:placeholder:text-cool-grey-8 focus:outline-[#1481B4] border-2 h-11 flex justify-center md:justify-start items-center md:flex-grow-[1]"),m(v,"placeholder","Введите ваш e-mail"),m(r,"class","md:flex md:gap-3 mt-4"),m(_,"class","text-cool-grey-6 text-xs leading-3 font-normal mt-3"),m(e,"class","bg-[#F7F8FB] p-5 md:py-10 md:px-12 lg:px-[208px] xl:px-[334px] rounded-2xl")},m(g,p){M(g,e,p),i(e,u),i(e,s),i(e,r),i(r,v),i(r,o),z(f,r,null),i(e,a),i(e,_),d=!0},p(g,[p]){const c={};p&4&&(c.$$scope={dirty:p,ctx:g}),f.$set(c)},i(g){d||(B(f.$$.fragment,g),d=!0)},o(g){A(f.$$.fragment,g),d=!1},d(g){g&&$(e),H(f)}}}function W4(l){let e=!1;return qu.subscribe(t=>{e=t}),[()=>{qu.set(!e)}]}class N4 extends ie{constructor(e){super(),oe(this,e,W4,U4,ae,{})}}function Yu(l,e,u){const t=l.slice();return t[15]=e[u].stars,t[16]=e[u].name,t[17]=e[u].title,t[18]=e[u].desc,t}function Ju(l,e,u){const t=l.slice();return t[21]=e[u].img,t[17]=e[u].title,t[18]=e[u].desc,t}function Ku(l,e,u){const t=l.slice();return t[24]=e[u],t[26]=u,t}function Qu(l,e,u){const t=l.slice();return t[27]=e[u],t[26]=u,t}function Zu(l,e,u){const t=l.slice();return t[17]=e[u].title,t[18]=e[u].desc,t[21]=e[u].img,t}function R4(l){let e;return{c(){e=X("Основные категории")},l(u){e=Y(u,"Основные категории")},m(u,t){M(u,e,t)},d(u){u&&$(e)}}}function e4(l){let e,u;return e=new F4({props:{title:l[17],desc:l[18],img:l[21]}}),{c(){j(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,s){z(e,t,s),u=!0},p:Q,i(t){u||(B(e.$$.fragment,t),u=!0)},o(t){A(e.$$.fragment,t),u=!1},d(t){H(e,t)}}}function X4(l){let e;return{c(){e=X("Самые популярные товары")},l(u){e=Y(u,"Самые популярные товары")},m(u,t){M(u,e,t)},d(u){u&&$(e)}}}function u4(l){let e,u=l[27].name+"",t,s,r,v,o;function f(){return l[12](l[26])}return{c(){e=E("div"),t=X(u),s=C(),this.h()},l(a){e=w(a,"DIV",{class:!0});var _=k(e);t=Y(_,u),s=I(_),_.forEach($),this.h()},h(){m(e,"class",r="cursor-pointer "+(l[26]===0?"ml-4":"")+" "+(l[26]===l[3].length-1?"pl-4":"")+" "+(l[27].state?"text-red border-red border-b-2 pb-2":""))},m(a,_){M(a,e,_),i(e,t),i(e,s),v||(o=tu(e,"click",f),v=!0)},p(a,_){l=a,_[0]&8&&u!==(u=l[27].name+"")&&Ye(t,u),_[0]&8&&r!==(r="cursor-pointer "+(l[26]===0?"ml-4":"")+" "+(l[26]===l[3].length-1?"pl-4":"")+" "+(l[27].state?"text-red border-red border-b-2 pb-2":""))&&m(e,"class",r)},d(a){a&&$(e),v=!1,o()}}}function Y4(l){let e,u;return e=new n4({props:{class:"rotate-90 !fill-[#1481b4]"}}),{c(){j(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,s){z(e,t,s),u=!0},i(t){u||(B(e.$$.fragment,t),u=!0)},o(t){A(e.$$.fragment,t),u=!1},d(t){H(e,t)}}}function t4(l){let e,u=l[24]+"",t,s,r,v,o,f,a=l[26]===0&&Y4();return{c(){e=E("div"),t=X(u),s=C(),a&&a.c(),r=C(),this.h()},l(_){e=w(_,"DIV",{class:!0});var D=k(e);t=Y(D,u),s=I(D),a&&a.l(D),r=I(D),D.forEach($),this.h()},h(){m(e,"class","cursor-pointer hover:text-black "+(l[26]===0?"text-[#1481b4] text-base font-medium":"")+" flex flex-row gap-1 items-center")},m(_,D){M(_,e,D),i(e,t),i(e,s),a&&a.m(e,null),i(e,r),v=!0,o||(f=tu(e,"click",l[8]),o=!0)},p:Q,i(_){v||(B(a),v=!0)},o(_){A(a),v=!1},d(_){_&&$(e),a&&a.d(),o=!1,f()}}}function J4(l){let e;return{c(){e=X("Управляйте вашим домом с умом")},l(u){e=Y(u,"Управляйте вашим домом с умом")},m(u,t){M(u,e,t)},d(u){u&&$(e)}}}function l4(l){let e,u;return e=new L4({props:{img:l[21],title:l[17],desc:l[18]}}),{c(){j(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,s){z(e,t,s),u=!0},p:Q,i(t){u||(B(e.$$.fragment,t),u=!0)},o(t){A(e.$$.fragment,t),u=!1},d(t){H(e,t)}}}function K4(l){let e;return{c(){e=X("Отзывы покупателей")},l(u){e=Y(u,"Отзывы покупателей")},m(u,t){M(u,e,t)},d(u){u&&$(e)}}}function s4(l){let e,u;return e=new O4({props:{stars:l[15],name:l[16],title:l[17],desc:l[18]}}),{c(){j(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,s){z(e,t,s),u=!0},p:Q,i(t){u||(B(e.$$.fragment,t),u=!0)},o(t){A(e.$$.fragment,t),u=!1},d(t){H(e,t)}}}function Q4(l){let e,u,t,s,r,v,o,f,a,_,D,d,g,p,c,h,F,V,T="Сортировать:",R,U,ue,ge,Iu=l[9][0]+"",su,ru,pe,nu,se,Je,au,He,Te,he,iu,P,ve,ou,$e,cu,xe,fu,_e,du,be,mu,Ee,gu,we,pu,De,hu,re,ce,vu,le,fe,Ke,$u,Be,xu,Se,Ce,_u,Ie,de,bu,Fe,Eu,Ge,Ve,qe,wu,Fu;ze(l[11]),u=new y4({}),r=new uu({props:{$$slots:{default:[R4]},$$scope:{ctx:l}}});let ke=Z(l[5]),S=[];for(let n=0;n<ke.length;n+=1)S[n]=e4(Zu(l,ke,n));const a4=n=>A(S[n],1,1,()=>{S[n]=null});_=new uu({props:{$$slots:{default:[X4]},$$scope:{ctx:l}}});let Oe=Z(l[3]),J=[];for(let n=0;n<Oe.length;n+=1)J[n]=u4(Qu(l,Oe,n));pe=new n4({props:{class:"rotate-90 !fill-[#1481b4]"}});let Ae=Z(l[9]),G=[];for(let n=0;n<Ae.length;n+=1)G[n]=t4(Ku(l,Ae,n));const i4=n=>A(G[n],1,1,()=>{G[n]=null});he=new x4({props:{class:"mx-4"}}),ve=new me({props:{class:"ml-4"}}),$e=new me({}),xe=new me({}),_e=new me({}),be=new me({}),Ee=new me({}),we=new me({}),De=new me({props:{class:"mr-4"}}),ce=new uu({props:{$$slots:{default:[J4]},$$scope:{ctx:l}}});let ye=Z(l[6]),q=[];for(let n=0;n<ye.length;n+=1)q[n]=l4(Ju(l,ye,n));const o4=n=>A(q[n],1,1,()=>{q[n]=null});Ce=new N4({}),de=new uu({props:{$$slots:{default:[K4]},$$scope:{ctx:l}}});let Me=Z(l[7]),O=[];for(let n=0;n<Me.length;n+=1)O[n]=s4(Yu(l,Me,n));const c4=n=>A(O[n],1,1,()=>{O[n]=null});return Ve=new S4({}),{c(){e=E("div"),j(u.$$.fragment),t=C(),s=E("div"),j(r.$$.fragment),v=C(),o=E("div");for(let n=0;n<S.length;n+=1)S[n].c();f=C(),a=E("div"),j(_.$$.fragment),D=C(),d=E("div"),g=E("div");for(let n=0;n<J.length;n+=1)J[n].c();p=C(),c=E("div"),h=C(),F=E("div"),V=E("div"),V.textContent=T,R=C(),U=E("div"),ue=E("div"),ge=E("div"),su=X(Iu),ru=C(),j(pe.$$.fragment),nu=C(),se=E("div");for(let n=0;n<G.length;n+=1)G[n].c();au=C(),He=E("div"),Te=E("div"),j(he.$$.fragment),iu=C(),P=E("div"),j(ve.$$.fragment),ou=C(),j($e.$$.fragment),cu=C(),j(xe.$$.fragment),fu=C(),j(_e.$$.fragment),du=C(),j(be.$$.fragment),mu=C(),j(Ee.$$.fragment),gu=C(),j(we.$$.fragment),pu=C(),j(De.$$.fragment),hu=C(),re=E("div"),j(ce.$$.fragment),vu=C(),le=E("video"),fe=E("source"),$u=C(),Be=E("div");for(let n=0;n<q.length;n+=1)q[n].c();xu=C(),Se=E("div"),j(Ce.$$.fragment),_u=C(),Ie=E("div"),j(de.$$.fragment),bu=C(),Fe=E("div");for(let n=0;n<O.length;n+=1)O[n].c();Eu=C(),Ge=E("div"),j(Ve.$$.fragment),this.h()},l(n){e=w(n,"DIV",{class:!0});var b=k(e);L(u.$$.fragment,b),t=I(b),s=w(b,"DIV",{class:!0});var y=k(s);L(r.$$.fragment,y),v=I(y),o=w(y,"DIV",{class:!0});var Ne=k(o);for(let N=0;N<S.length;N+=1)S[N].l(Ne);Ne.forEach($),y.forEach($),f=I(b),a=w(b,"DIV",{class:!0});var je=k(a);L(_.$$.fragment,je),D=I(je),d=w(je,"DIV",{class:!0});var ee=k(d);g=w(ee,"DIV",{class:!0});var x=k(g);for(let N=0;N<J.length;N+=1)J[N].l(x);x.forEach($),p=I(ee),c=w(ee,"DIV",{class:!0}),k(c).forEach($),h=I(ee),F=w(ee,"DIV",{class:!0});var W=k(F);V=w(W,"DIV",{class:!0,"data-svelte-h":!0}),ne(V)!=="svelte-2n5new"&&(V.textContent=T),R=I(W),U=w(W,"DIV",{class:!0});var Qe=k(U);ue=w(Qe,"DIV",{class:!0});var Ze=k(ue);ge=w(Ze,"DIV",{class:!0});var Vu=k(ge);su=Y(Vu,Iu),Vu.forEach($),ru=I(Ze),L(pe.$$.fragment,Ze),Ze.forEach($),nu=I(Qe),se=w(Qe,"DIV",{class:!0});var ku=k(se);for(let N=0;N<G.length;N+=1)G[N].l(ku);ku.forEach($),Qe.forEach($),W.forEach($),au=I(ee),He=w(ee,"DIV",{class:!0});var Au=k(He);Te=w(Au,"DIV",{class:!0});var yu=k(Te);L(he.$$.fragment,yu),yu.forEach($),Au.forEach($),iu=I(ee),P=w(ee,"DIV",{class:!0});var K=k(P);L(ve.$$.fragment,K),ou=I(K),L($e.$$.fragment,K),cu=I(K),L(xe.$$.fragment,K),fu=I(K),L(_e.$$.fragment,K),du=I(K),L(be.$$.fragment,K),mu=I(K),L(Ee.$$.fragment,K),gu=I(K),L(we.$$.fragment,K),pu=I(K),L(De.$$.fragment,K),K.forEach($),ee.forEach($),je.forEach($),hu=I(b),re=w(b,"DIV",{});var Pe=k(re);L(ce.$$.fragment,Pe),vu=I(Pe),le=w(Pe,"VIDEO",{class:!0});var Mu=k(le);fe=w(Mu,"SOURCE",{src:!0,type:!0}),Mu.forEach($),$u=I(Pe),Be=w(Pe,"DIV",{class:!0});var ju=k(Be);for(let N=0;N<q.length;N+=1)q[N].l(ju);ju.forEach($),Pe.forEach($),xu=I(b),Se=w(b,"DIV",{class:!0});var Lu=k(Se);L(Ce.$$.fragment,Lu),Lu.forEach($),_u=I(b),Ie=w(b,"DIV",{});var eu=k(Ie);L(de.$$.fragment,eu),bu=I(eu),Fe=w(eu,"DIV",{class:!0});var zu=k(Fe);for(let N=0;N<O.length;N+=1)O[N].l(zu);zu.forEach($),eu.forEach($),Eu=I(b),Ge=w(b,"DIV",{class:!0});var Hu=k(Ge);L(Ve.$$.fragment,Hu),Hu.forEach($),b.forEach($),this.h()},h(){m(o,"class","flex flex-col md:flex-row md:flex-wrap gap-4 items-center"),m(s,"class","py-6 md:py-8"),m(g,"class","flex gap-4 font-medium overflow-x-scroll text-nowrap whitespace-nowrap no-scrollbar"),m(c,"class","border-[#E6E8F0] ml-4 -mt-[2px] border-b-2"),m(V,"class","text-gray text-base"),m(ge,"class","text-[#1481b4] text-base"),m(ue,"class","flex flex-row gap-1 items-center cursor-pointer"),m(se,"class",Je="absolute -left-2 "+(l[0]?"":"hidden")+" -mt-8 rounded-md shadow-[#141F3B80] shadow-lg bg-white text-nowrap text-[16px] flex flex-col gap-1 p-2 font-normal text-cool-grey-8"),m(U,"class","relative z-10 group"),m(F,"class","ml-4 mt-5 mb-4 flex flex-row gap-2 items-start justify-start font-medium"),m(Te,"class","overflow-x-scroll no-scrollbar"),m(He,"class","h-[34px]"),m(P,"class","mt-4 flex gap-4 font-medium overflow-x-scroll no-scrollbar"),m(d,"class","w-screen -ml-4"),m(a,"class","py-6 md:py-8"),te(fe.src,Ke="./video"+(l[4]<=1280?"-mob":"")+".mp4")||m(fe,"src",Ke),m(fe,"type","video/mp4"),le.autoplay=!0,le.playsInline=!0,le.muted=!0,le.loop=!0,m(le,"class","rounded-2xl max-h-[247px] w-full object-cover"),m(Be,"class","flex flex-col lg:flex-row gap-4 mt-6 flex-wrap"),m(Se,"class","mt-12 mb-4 md:mb-8 md:mt-16"),m(Fe,"class","flex gap-4 overflow-x-scroll no-scrollbar"),m(Ge,"class","mt-12 mb-20"),m(e,"class","px-4 md:px-0 mx-auto md:max-w-[624px] lg:max-w-[944px] xl:max-w-[1196px] overflow-hidden")},m(n,b){M(n,e,b),z(u,e,null),i(e,t),i(e,s),z(r,s,null),i(s,v),i(s,o);for(let y=0;y<S.length;y+=1)S[y]&&S[y].m(o,null);i(e,f),i(e,a),z(_,a,null),i(a,D),i(a,d),i(d,g);for(let y=0;y<J.length;y+=1)J[y]&&J[y].m(g,null);i(d,p),i(d,c),i(d,h),i(d,F),i(F,V),i(F,R),i(F,U),i(U,ue),i(ue,ge),i(ge,su),l[13](ge),i(ue,ru),z(pe,ue,null),i(U,nu),i(U,se);for(let y=0;y<G.length;y+=1)G[y]&&G[y].m(se,null);l[14](se),i(d,au),i(d,He),i(He,Te),z(he,Te,null),i(d,iu),i(d,P),z(ve,P,null),i(P,ou),z($e,P,null),i(P,cu),z(xe,P,null),i(P,fu),z(_e,P,null),i(P,du),z(be,P,null),i(P,mu),z(Ee,P,null),i(P,gu),z(we,P,null),i(P,pu),z(De,P,null),i(e,hu),i(e,re),z(ce,re,null),i(re,vu),i(re,le),i(le,fe),i(re,$u),i(re,Be);for(let y=0;y<q.length;y+=1)q[y]&&q[y].m(Be,null);i(e,xu),i(e,Se),z(Ce,Se,null),i(e,_u),i(e,Ie),z(de,Ie,null),i(Ie,bu),i(Ie,Fe);for(let y=0;y<O.length;y+=1)O[y]&&O[y].m(Fe,null);i(e,Eu),i(e,Ge),z(Ve,Ge,null),qe=!0,wu||(Fu=[tu(window,"resize",l[11]),tu(ue,"click",l[8])],wu=!0)},p(n,b){const y={};if(b[1]&1&&(y.$$scope={dirty:b,ctx:n}),r.$set(y),b[0]&32){ke=Z(n[5]);let x;for(x=0;x<ke.length;x+=1){const W=Zu(n,ke,x);S[x]?(S[x].p(W,b),B(S[x],1)):(S[x]=e4(W),S[x].c(),B(S[x],1),S[x].m(o,null))}for(Re(),x=ke.length;x<S.length;x+=1)a4(x);Xe()}const Ne={};if(b[1]&1&&(Ne.$$scope={dirty:b,ctx:n}),_.$set(Ne),b[0]&1032){Oe=Z(n[3]);let x;for(x=0;x<Oe.length;x+=1){const W=Qu(n,Oe,x);J[x]?J[x].p(W,b):(J[x]=u4(W),J[x].c(),J[x].m(g,null))}for(;x<J.length;x+=1)J[x].d(1);J.length=Oe.length}if(b[0]&768){Ae=Z(n[9]);let x;for(x=0;x<Ae.length;x+=1){const W=Ku(n,Ae,x);G[x]?(G[x].p(W,b),B(G[x],1)):(G[x]=t4(W),G[x].c(),B(G[x],1),G[x].m(se,null))}for(Re(),x=Ae.length;x<G.length;x+=1)i4(x);Xe()}(!qe||b[0]&1&&Je!==(Je="absolute -left-2 "+(n[0]?"":"hidden")+" -mt-8 rounded-md shadow-[#141F3B80] shadow-lg bg-white text-nowrap text-[16px] flex flex-col gap-1 p-2 font-normal text-cool-grey-8"))&&m(se,"class",Je);const je={};if(b[1]&1&&(je.$$scope={dirty:b,ctx:n}),ce.$set(je),(!qe||b[0]&16&&!te(fe.src,Ke="./video"+(n[4]<=1280?"-mob":"")+".mp4"))&&m(fe,"src",Ke),b[0]&64){ye=Z(n[6]);let x;for(x=0;x<ye.length;x+=1){const W=Ju(n,ye,x);q[x]?(q[x].p(W,b),B(q[x],1)):(q[x]=l4(W),q[x].c(),B(q[x],1),q[x].m(Be,null))}for(Re(),x=ye.length;x<q.length;x+=1)o4(x);Xe()}const ee={};if(b[1]&1&&(ee.$$scope={dirty:b,ctx:n}),de.$set(ee),b[0]&128){Me=Z(n[7]);let x;for(x=0;x<Me.length;x+=1){const W=Yu(n,Me,x);O[x]?(O[x].p(W,b),B(O[x],1)):(O[x]=s4(W),O[x].c(),B(O[x],1),O[x].m(Fe,null))}for(Re(),x=Me.length;x<O.length;x+=1)c4(x);Xe()}},i(n){if(!qe){B(u.$$.fragment,n),B(r.$$.fragment,n);for(let b=0;b<ke.length;b+=1)B(S[b]);B(_.$$.fragment,n),B(pe.$$.fragment,n);for(let b=0;b<Ae.length;b+=1)B(G[b]);B(he.$$.fragment,n),B(ve.$$.fragment,n),B($e.$$.fragment,n),B(xe.$$.fragment,n),B(_e.$$.fragment,n),B(be.$$.fragment,n),B(Ee.$$.fragment,n),B(we.$$.fragment,n),B(De.$$.fragment,n),B(ce.$$.fragment,n);for(let b=0;b<ye.length;b+=1)B(q[b]);B(Ce.$$.fragment,n),B(de.$$.fragment,n);for(let b=0;b<Me.length;b+=1)B(O[b]);B(Ve.$$.fragment,n),qe=!0}},o(n){A(u.$$.fragment,n),A(r.$$.fragment,n),S=S.filter(Boolean);for(let b=0;b<S.length;b+=1)A(S[b]);A(_.$$.fragment,n),A(pe.$$.fragment,n),G=G.filter(Boolean);for(let b=0;b<G.length;b+=1)A(G[b]);A(he.$$.fragment,n),A(ve.$$.fragment,n),A($e.$$.fragment,n),A(xe.$$.fragment,n),A(_e.$$.fragment,n),A(be.$$.fragment,n),A(Ee.$$.fragment,n),A(we.$$.fragment,n),A(De.$$.fragment,n),A(ce.$$.fragment,n),q=q.filter(Boolean);for(let b=0;b<q.length;b+=1)A(q[b]);A(Ce.$$.fragment,n),A(de.$$.fragment,n),O=O.filter(Boolean);for(let b=0;b<O.length;b+=1)A(O[b]);A(Ve.$$.fragment,n),qe=!1},d(n){n&&$(e),H(u),H(r),Le(S,n),H(_),Le(J,n),l[13](null),H(pe),Le(G,n),l[14](null),H(he),H(ve),H($e),H(xe),H(_e),H(be),H(Ee),H(we),H(De),H(ce),Le(q,n),H(Ce),H(de),Le(O,n),H(Ve),wu=!1,d4(Fu)}}}function Z4(l,e,u){let t;const s=[{title:"Освещение",desc:"Умные лампы и датчики движения",img:"./cat/0.png"},{title:"Климат",desc:"Умные термостаты и системы",img:"./cat/1.png"},{title:"Безопасность",desc:"Видеонаблюдение и умные замки",img:"./cat/2.png"},{title:"Управление голосом",desc:"Умные колонки и датчики распознавания голоса",img:"./cat/3.png"}],r=[{title:"Комфорт и удобство",desc:"Открыть шторы, пропылесосить пол, включить свет&nbsp;&mdash; доверьте все гаджетам.",img:"./icon-0.png"},{title:"Экономия энергии",desc:"Вы&nbsp;можете забыть выключить свет и&nbsp;электроприборы, но&nbsp;умные розетки не&nbsp;забудут.",img:"./icon-1.png"},{title:"Безопасность",desc:"Наблюдайте за&nbsp;домом в&nbsp;реальном времени, где&nbsp;бы вы&nbsp;не&nbsp;находились.",img:"./icon-2.png"},{title:"Гибкие настройки",desc:"Температура, свет, влажность&nbsp;&mdash; настройте атмосферу дома под себя.",img:"./icon-3.png"},{title:"Экологичность",desc:"За&nbsp;потреблением воды, тепла и&nbsp;электричества проследят специальные датчики.",img:"./icon-4.png"},{title:"Умное управление",desc:"Командуйте домом с&nbsp;помощью голоса, приложений и&nbsp;эргономичных кнопок.",img:"./icon-5.png"}],v=[{title:"Робот-пылесос Xiaomi Mi Robot Vacuum",desc:"Этот робот-пылесос просто спасение для моего дома! Он&nbsp;справляется с&nbsp;уборкой лучше меня, а&nbsp;я&nbsp;теперь могу проводить больше времени с&nbsp;семьей. Умные функции и&nbsp;тихая работа делают его лучшим помощником!",name:"Анна Иванова",stars:5},{title:"Умная колонка Yandex.Station",desc:"Колонка Yandex привносит в&nbsp;дом много удобства. Голосовое управление работает хорошо, но&nbsp;иногда не&nbsp;понимает запросы. Хотелось&nbsp;бы больше интеграции с&nbsp;другими сервисами. Звук неплохой, но&nbsp;можно и&nbsp;лучше.",name:"Петр Смирнов",stars:3},{title:"Зубная щетка Xiaomi Mi Electric Toothbrush",desc:"Эта щетка стала для меня настоящим открытием! Она действительно эффективно чистит зубы и&nbsp;десны, при этом очень удобна в&nbsp;использовании. Различные режимы чистки и&nbsp;долгое время работы без подзарядки делают ее&nbsp;отличным выбором.",name:"Елена Козлова",stars:4}];let o=!1,f,a;const _=()=>{u(0,o=!o)},D=["сначала дорогие","сначала дешевые","новинки","по умолчанию"],d=[{name:"Зубные щетки",state:!0},{name:"Кофемашины",state:!1},{name:"Роботы-пылесосы",state:!1},{name:"Колонки",state:!1},{name:"Часы",state:!1}],g=V=>{d.forEach(T=>T.state=!1),u(3,d[V].state=!d[V].state,d)};function p(){u(4,t=window.innerWidth)}const c=V=>g(V);function h(V){Su[V?"unshift":"push"](()=>{a=V,u(2,a)})}function F(V){Su[V?"unshift":"push"](()=>{f=V,u(1,f)})}return u(4,t=0),[o,f,a,d,t,s,r,v,_,D,g,p,c,h,F]}class rt extends ie{constructor(e){super(),oe(this,e,Z4,Q4,ae,{},null,[-1,-1])}}export{rt as component};
