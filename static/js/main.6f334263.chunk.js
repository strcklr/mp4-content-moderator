(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{40:function(e,n,t){},42:function(e,n,t){},79:function(e,n,t){"use strict";t.r(n);var c=t(2),o=t.n(c),r=t(32),a=t.n(r),s=(t(40),t(3)),i=t.n(s),l=t(10),u=t(4),b=(t(42),t(80),t(34)),d=t(35),j=t(21),p=t(33),f=t(1);var h=function(){var e=Object(c.useRef)(null),n=Object(c.useState)(!1),o=Object(u.a)(n,2),r=o[0],a=o[1],s=Object(c.useState)("Drag and drop a file to be scanned. Click to browse."),h=Object(u.a)(s,2),m=h[0],O=h[1],g=Object(c.useState)(null),v=Object(u.a)(g,2),x=v[0],D=v[1],N=Object(c.useState)("unknown.mp4"),k=Object(u.a)(N,2),C=k[0],F=k[1],w="http://localhost:8082/get-video-info?video_id=",y=function(e){return/^(?:https?:\/\/)?(w{3})?\.?youtube\.com/.test(e)},I=function(e){D(e[0]),F(e[0].name),O("Ready to process file: "+e[0].name),a(!0)},L=function(){a(!1),D(null),F("unknown.mp4"),O("Drag and drop a file to be scanned. Click to browse.")},B=function(){console.log(x)};function R(){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(i.a.mark((function e(){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(78).fork("./start_server.sh"),n=document.getElementById("url").value,!y(n)){e.next=5;break}return c=n.split("?")[1].match(/v=([^&]+)/)[1],e.abrupt("return",fetch(w+c).then((function(e){return e.text()})).then((function(e){return U(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){var n,t,c,o={},r=e.split("&");for(var a in r)t=(n=r[a].split("="))[0],c=n[1],o[t]=decodeURIComponent(c);return o}return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"banner",children:[Object(f.jsx)("h1",{id:"title",children:"Media Moderator"}),Object(f.jsx)("h4",{id:"subtitle",children:"Upload an mp4 to be scrubbed"}),function(){if(!r)return Object(f.jsxs)("div",{className:"inlineButtons",children:[Object(f.jsx)("input",{className:"input",id:"url",type:"url",placeholder:"Paste a URL (ex: https://youtube.com/...)",onClick:console.log("click")}),Object(f.jsxs)("button",{className:"btn",id:"run",onClick:R,children:["RUN",Object(f.jsx)(j.a,{className:"btnIcon"})]})]})}(),Object(f.jsx)("div",{className:"fileDrop",children:Object(f.jsxs)(p.FileDrop,{onTargetClick:function(){r||e.current.click()},onFrameDragEnter:function(e){return console.log("onFrameDragEnter",e)},onFrameDragLeave:function(e){return console.log("onFrameDragLeave",e)},onFrameDrop:function(e){return console.log("onFrameDrop",e)},onDragOver:function(e){return console.log("onDragOver",e)},onDragLeave:function(e){return console.log("onDragLeave",e)},onDrop:function(e,n){console.log("onDrop!",e,n),console.log(e),I(e)},children:[r?Object(f.jsxs)("div",{className:"inlineButtons",children:[Object(f.jsxs)("button",{className:"btn",id:"removeBtn",onClick:L,children:[Object(f.jsx)("span",{className:"filename",children:C})," ",Object(f.jsx)(d.a,{className:"btnIcon"})]}),Object(f.jsxs)("button",{className:"btn",id:"run",onClick:B,children:["RUN",Object(f.jsx)(j.a,{className:"btnIcon"})]})]}):Object(f.jsx)(b.a,{className:"upload"}),Object(f.jsx)("p",{id:"fileDropInstruction",children:m}),Object(f.jsx)("input",{onChange:function(e){var n=e.target.files;I(n)},ref:e,type:"file",className:"hidden"})]})})]})})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,81)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(h,{})}),document.getElementById("root")),m()}},[[79,1,2]]]);
//# sourceMappingURL=main.6f334263.chunk.js.map