(function(){"use strict";var a={1776:function(a,n,t){var e=t(9242),r=t(3396);const o=(0,r.Uk)("Home"),i=(0,r.Uk)(" | "),u=(0,r.Uk)("quran"),s=(0,r.Uk)(" | "),l=(0,r.Uk)("Contact");function c(a,n){const t=(0,r.up)("router-link"),e=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(t,{to:"/"},{default:(0,r.w5)((()=>[o])),_:1}),i,(0,r.Wm)(t,{to:"/quran"},{default:(0,r.w5)((()=>[u])),_:1}),s,(0,r.Wm)(t,{to:"/contact"},{default:(0,r.w5)((()=>[l])),_:1})]),(0,r.Wm)(e)],64)}var d=t(89);const p={},h=(0,d.Z)(p,[["render",c]]);var f=h,m=t(678),v=t.p+"img/logologo.6dc3cbd0.png";const b=(0,r.uE)('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><h1 style="color:black;text-align:center;font-family:&#39;Courier New&#39;, Courier, monospace;"><b></b></h1><br><br><div class="row" style="background-color:#BBC789;"><div class="col-6 py-5 px-5" style="text-align:justify;"><div class="pt-5"><h1>Keutamaan Al-Quran</h1><h4>Dari Abu Sa&#39;id RA berkata, Rasulullah SAW bersabda, &quot;Allah berfirman, &#39;barang siapa yang disibukan oleh Al-Qur&#39;an daripada berzikir kepada-Ku dan memohon kepada-Ku, maka Aku berikan kepadanya sesuatu yang lebih utama daripada yang Aku berikan kepada orang-orang yang memohon kepada-Ku dan keutamaan kalam Allah diatas seluruh perkataan adalah seumpama keutamaan Allah atas makhluk-Nya.&quot; (Hr. Tirmidzi, Darami, dan Baihaqi) </h4></div></div><div class="col-6"><img src="'+v+'" alt="logo" height="400px"></div></div>',5);function g(a,n){return b}const k={},y=(0,d.Z)(k,[["render",g]]);var _=y,w=t(7139);const q={class:"search"},j={class:"surah"},A={class:"judull"},O={key:0,class:"judul"},C={class:"suara"},S={key:0},x={controls:"",class:"suaraa"},T=["src"],D=(0,r._)("div",{class:"bis"},[(0,r._)("p",{class:"bismillah"},"بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ")],-1),E={class:"hasil"},U={class:"hasill"},B={class:"lista"};function W(a,n,t,o,i,u){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("section",q,[(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":n[0]||(n[0]=a=>i.inputnomor=a),class:"input",placeholder:"Masukkan nomor surah"},null,512),[[e.nr,i.inputnomor]]),(0,r._)("button",{onClick:n[1]||(n[1]=(...a)=>u.lihat&&u.lihat(...a)),class:"btn"},"Baca")]),(0,r._)("section",j,[(0,r._)("div",A,[i.namaSurah?((0,r.wg)(),(0,r.iD)("h1",O,(0,w.zw)(i.namaSurah.name_simple),1)):(0,r.kq)("",!0)]),(0,r._)("div",C,[i.audio?((0,r.wg)(),(0,r.iD)("p",S,[(0,r._)("audio",x,[(0,r._)("source",{src:i.audio.audio_url,type:"audio/mpeg"},null,8,T)])])):(0,r.kq)("",!0)]),D]),(0,r._)("section",E,[(0,r._)("div",U,[(0,r._)("ul",B,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.ayah,(a=>((0,r.wg)(),(0,r.iD)("li",{class:"ayat",key:a.id},(0,w.zw)(a.text_uthmani)+" "+(0,w.zw)(a.text),1)))),128))])])])],64)}var H=t(6265),K=t.n(H),P={data(){return{ayat:[],audio:null,namaSurah:null,inputnomor:""}},methods:{async lihat(){let a=this.inputnomor,n=`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${a}`,t="https://api.quran.com/api/v4/quran/translations/134?chapter_number="+a,e="https://api.quran.com/api/v4/chapters?language=en",r="https://api.quran.com/api/v4/chapter_recitations/2?language=en";if(a<=0||a>114)alert("Coba Ingat Surat Al-qur'an ada berapa? Hanya 114 loh!!");else{const o=K().get(n),i=K().get(t),u=K().get(e),s=K().get(r);K().all([o,i,u,s]).then(K().spread(((...n)=>{const t=n[0],e=n[1],r=n[2],o=n[3],i=t.data.verses,u=e.data.translations,s=(a,n)=>{const t=[];for(let e=0;e<a.length+n.length;e++)e%2===0?t.push(a[e/2]):t.push(n[(e-1)/2]);return t};this.ayah=s(i,u),this.audio=o.data.audio_files[a-1],this.namaSurah=r.data.chapters[a-1]})))}}}};const z=(0,d.Z)(P,[["render",W]]);var N=z;const M=[{path:"/",name:"home",component:_},{path:"/quran",name:"quran",component:N},{path:"/contact",name:"contact",component:()=>t.e(631).then(t.bind(t,7788))}],Y=(0,m.p7)({history:(0,m.r5)(),routes:M});var Z=Y;(0,e.ri)(f).use(Z).mount("#app")}},n={};function t(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return a[e](o,o.exports,t),o.exports}t.m=a,function(){var a=[];t.O=function(n,e,r,o){if(!e){var i=1/0;for(c=0;c<a.length;c++){e=a[c][0],r=a[c][1],o=a[c][2];for(var u=!0,s=0;s<e.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((function(a){return t.O[a](e[s])}))?e.splice(s--,1):(u=!1,o<i&&(i=o));if(u){a.splice(c--,1);var l=r();void 0!==l&&(n=l)}}return n}o=o||0;for(var c=a.length;c>0&&a[c-1][2]>o;c--)a[c]=a[c-1];a[c]=[e,r,o]}}(),function(){t.n=function(a){var n=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(n,{a:n}),n}}(),function(){t.d=function(a,n){for(var e in n)t.o(n,e)&&!t.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:n[e]})}}(),function(){t.f={},t.e=function(a){return Promise.all(Object.keys(t.f).reduce((function(n,e){return t.f[e](a,n),n}),[]))}}(),function(){t.u=function(a){return"js/contact.fad5d318.js"}}(),function(){t.miniCssF=function(a){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)}}(),function(){var a={},n="uts-putri:";t.l=function(e,r,o,i){if(a[e])a[e].push(r);else{var u,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+o),u.src=e),a[e]=[r];var p=function(n,t){u.onerror=u.onload=null,clearTimeout(h);var r=a[e];if(delete a[e],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(a){return a(t)})),n)return n(t)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var a={143:0};t.f.j=function(n,e){var r=t.o(a,n)?a[n]:void 0;if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(t,e){r=a[n]=[t,e]}));e.push(r[2]=o);var i=t.p+t.u(n),u=new Error,s=function(e){if(t.o(a,n)&&(r=a[n],0!==r&&(a[n]=void 0),r)){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,r[1](u)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===a[n]};var n=function(n,e){var r,o,i=e[0],u=e[1],s=e[2],l=0;if(i.some((function(n){return 0!==a[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(s)var c=s(t)}for(n&&n(e);l<i.length;l++)o=i[l],t.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return t.O(c)},e=self["webpackChunkuts_putri"]=self["webpackChunkuts_putri"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(1776)}));e=t.O(e)})();
//# sourceMappingURL=app.dbab5963.js.map