import{_,v as b,r as m,c as i,a as e,t as a,b as c,w as r,F as y,d as h,u as v,E as w,o as p,e as g,f as k}from"./index-C0Dwk9PB.js";const f="/assets/logo-color-CXpeObRF.png",S={class:"home-container"},A={class:"introduce"},L={class:"title"},C={class:"content"},$={class:"apply"},E=["src"],B={class:"apply-card-title"},I={class:"apply-card-content"},F={__name:"index",setup(N){b.useI18n();const u=m([{img:"/assets/images/gxn.png",title:"apply.title1",content:"apply.content1",button:"button.get_it_now"},{img:"/assets/images/kpt.png",title:"apply.title2",content:"apply.content2",button:"button.get_it_now"},{img:"/assets/images/ky.png",title:"apply.title3",content:"apply.content3",button:"button.get_it_now",path:"https://github.com/ALSparse/ALSparse/blob/master/LICENSE"},{img:"/assets/images/yhsc.png",title:"apply.title4",content:"apply.content4",button:"button.get_it_now",path:"https://alsparse.github.io/ALSparse"},{img:"/assets/images/ktzx.png",title:"apply.title5",content:"apply.content5",button:"button.get_it_now",path:"https://github.com/ALSparse/ALSparse/wiki/Customize:Formats"},{img:"/assets/images/jsgy.png",title:"apply.title6",content:"apply.content6",button:"button.participate_now",path:"https://github.com/ALSparse/ALSparse/issues"}]);function l(t){const s=navigator.userAgent;let o=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(s);t.path?window.open(t.path,o?"_self":"_blank"):k({message:"功能建设中...",type:"warning"})}return(t,s)=>{const o=w;return p(),i("div",S,[e("div",A,[s[1]||(s[1]=e("img",{class:"logo",src:f,alt:"logo"},null,-1)),e("div",L,a(t.$t("introduce.title")),1),e("div",C,a(t.$t("introduce.content")),1),c(o,{class:"btn",type:"warning",onClick:s[0]||(s[0]=n=>l({path:"https://github.com/ALSparse/ALSparse"}))},{default:r(()=>[g(a(t.$t("button.get_it_now")),1)]),_:1})]),e("div",$,[(p(!0),i(y,null,h(v(u),(n,d)=>(p(),i("div",{class:"apply-card",key:d},[e("img",{class:"apply-card-img",src:n.img,alt:"应用图标"},null,8,E),e("div",B,a(t.$t(n.title)),1),e("div",I,a(t.$t(n.content)),1),c(o,{class:"apply-card-btn",type:"warning",onClick:x=>l(n)},{default:r(()=>[g(a(t.$t(n.button)),1)]),_:2},1032,["onClick"])]))),128))])])}}},O=_(F,[["__scopeId","data-v-7a07501d"]]);export{O as default};