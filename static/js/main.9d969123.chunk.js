(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{16:function(e,n,t){},17:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t.n(o),r=t(4),c=t.n(r),i=(t(16),t(5)),l=t(6),s=t(11),u=t(10),d=t(8),j=t(9),h=(t(17),t(7)),f=t(2),p=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={haveFile:!1,uploadText:"Drag and drop a file to be scanned. Click to browse.",file:"unkkj;lkjasdl;kfja;lsdkfja;lsdkjown.mp4"},e.removeFile=function(){e.setState({haveFile:!1,uploadText:"Drag and drop a file to be scanned. Click to browse.",file:"unknown.mp4"})},e}return Object(l.a)(t,[{key:"getUploadIcon",value:function(){return this.state.haveFile?Object(f.jsxs)("button",{className:"removeButton",onClick:this.removeFile,children:[Object(f.jsx)("span",{className:"filename",children:this.state.file})," ",Object(f.jsx)(j.a,{id:"deleteIcon"})]}):Object(f.jsx)(d.a,{className:"upload"})}},{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"banner",children:[Object(f.jsx)("h1",{id:"title",children:"Media Moderator"}),Object(f.jsx)("h4",{id:"subtitle",children:"View content with confidence"}),Object(f.jsx)("div",{className:"fileDrop",children:Object(f.jsxs)(h.FileDrop,{onFrameDragEnter:function(e){return console.log("onFrameDragEnter",e)},onFrameDragLeave:function(e){return console.log("onFrameDragLeave",e)},onFrameDrop:function(e){return console.log("onFrameDrop",e)},onDragOver:function(e){return console.log("onDragOver",e)},onDragLeave:function(e){return console.log("onDragLeave",e)},onDrop:function(n,t){console.log("onDrop!",n,t),console.log(n);var o=n[0].name;e.setState({file:o,haveFile:!0,uploadText:"Ready to process file: "+o})},children:[this.getUploadIcon(),Object(f.jsx)("p",{id:"fileDropInstruction",children:this.state.uploadText})]})})]})})}}]),t}(o.Component),b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),o(e),a(e),r(e),c(e)}))};c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),b()}},[[22,1,2]]]);
//# sourceMappingURL=main.9d969123.chunk.js.map