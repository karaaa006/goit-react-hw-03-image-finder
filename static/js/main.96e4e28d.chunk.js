(this["webpackJsonpgoit-hw-create-react-app-template"]=this["webpackJsonpgoit-hw-create-react-app-template"]||[]).push([[0],{30:function(e,t,a){},51:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(12),o=a.n(c),s=(a(30),a(14)),i=a(4),l=a.n(i),u=a(9),h=a(5),p=a(6),m=a(8),g=a(7),d=(a(32),a(23)),b=a.n(d).a.create({baseURL:"https://pixabay.com/api/",params:{key:"23524775-df2d338982330c0756c93cc31",per_page:12,image_type:"photo",orientation:"horizontal"}});function j(e){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("?q=".concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e,t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("?q=".concat(t,"&page=").concat(a));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}a(51);var O=a(24),x=a(0),w=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(O.a)({},r,n))},e}return Object(p.a)(a,[{key:"render",value:function(){return Object(x.jsx)("header",{className:"Searchbar",children:Object(x.jsxs)("form",{className:"SearchForm",onSubmit:this.props.onSubmit,children:[Object(x.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(x.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(x.jsx)("input",{name:"query",className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component);function k(e){var t=e.tags,a=e.largeImageURL,n=e.id,r=e.webformatURL,c=e.onClick;return Object(x.jsx)("li",{className:"ImageGalleryItem",children:Object(x.jsx)("img",{className:"ImageGalleryItem-image",src:r,alt:t,id:n,"data-large":a,onClick:c})})}function C(e){var t=e.imageArr,a=e.onClickImage;return Object(x.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.largeImageURL,n=e.id,r=e.webformatURL,c=e.tags;return Object(x.jsx)(k,{largeImageURL:t,webformatURL:r,id:n,tags:c,onClick:a},n)}))})}var S=a(25),I=a.n(S);function A(e){var t=e.children,a=e.onClick;return Object(x.jsx)("button",{className:"Button",type:"button",onClick:a,children:t})}var M=document.getElementById("modal-root"),N=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){var a=document.querySelector(".Overlay");t.target===a&&e.props.onClose()},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(x.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(x.jsx)("div",{className:"Modal",children:Object(x.jsx)("img",{src:this.props.img.largeImageURL,alt:this.props.img.tags})})}),M)}}]),a}(n.Component),q=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"",imageArr:[],currentPage:1,maxPage:0,loading:!1,showModal:!1,currentImage:{}},e.handleSubmit=function(){var t=Object(u.a)(l.a.mark((function t(a){var n,r,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,e.setState({query:a.target.query.value,currentPage:1,loading:!0}),t.next=5,j(a.target.query.value);case 5:return n=t.sent,t.next=8,n.totalHits;case 8:return r=t.sent,t.next=11,n.hits;case 11:c=t.sent,o=Math.ceil(r/c.length),e.setState({maxPage:o,imageArr:c,loading:!1}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e){return t.apply(this,arguments)}}(),e.handleClickMore=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState((function(e){return{currentPage:e.currentPage+1,loading:!0}})),t.next=4,v(e.state.query,e.state.currentPage+1);case 4:return a=t.sent,t.next=7,a.hits;case 7:n=t.sent,e.setState((function(e){return{imageArr:[].concat(Object(s.a)(e.imageArr),Object(s.a)(n)),loading:!1}})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])}))),e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleClickImage=function(t){var a=e.state.imageArr.find((function(e){return e.id===Number.parseInt(t.target.id)}));e.setState({currentImage:a}),e.toggleModal()},e}return Object(p.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(w,{onSubmit:this.handleSubmit}),Object(x.jsx)(C,{imageArr:this.state.imageArr,onClickImage:this.handleClickImage}),Object(x.jsx)(I.a,{type:"TailSpin",color:"#3f51b5",height:100,width:100,visible:this.state.loading}),this.state.imageArr.length>0&&this.state.currentPage<this.state.maxPage&&Object(x.jsx)(A,{onClick:this.handleClickMore,children:"Load more"}),this.state.showModal&&Object(x.jsx)(N,{img:this.state.currentImage,onClose:this.toggleModal})]})}}]),a}(n.Component),L=q;o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(L,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.96e4e28d.chunk.js.map