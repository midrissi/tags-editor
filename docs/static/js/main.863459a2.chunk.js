(this["webpackJsonptags-editor"]=this["webpackJsonptags-editor"]||[]).push([[0],{171:function(e,t,a){},173:function(e,t,a){},321:function(e,t,a){"use strict";a.r(t);var i,n,o=a(1),r=a.n(o),c=a(21),s=a.n(c),u=(a(171),a(12)),l=a(152),d=a.n(l),m=a(165),b=a(331),p=a(166);function j(e){return{type:n.SET_CURRENT_ITEM,payload:e}}function h(e){return{type:n.SET_FILTER,payload:e}}!function(e){e.TEXT="text",e.VIDEO="video"}(i||(i={})),function(e){e.SET_CURRENT_ITEM="Edit item",e.REMOVE_ITEM="Remove item",e.SAVE_ITEM="SAVE item",e.SET_ITEMS="Set Items",e.SET_FILTER="Set filter"}(n||(n={}));var O={filter:"",items:[{key:"editors:webform:toolbox:components",type:i.TEXT,body:"[The list of components](https://doc4d.github.io/docs/alpha/en/WebStudio/webStudio.html#components)"},{key:"editors:webform:properties:style:color",type:i.TEXT,body:"[The list of components](https://doc4d.github.io/docs/alpha/en/WebStudio/webStudio.html#components)"},{key:"editors:webform:toolbox:styleslib",type:i.TEXT,body:"[Styles Library](https://doc4d.github.io/docs/alpha/en/WebStudio/webStudio.html#styles-library)"},{key:"editors:webform:toolbox:datasources",type:i.TEXT,body:"[Data Sources](https://doc4d.github.io/docs/alpha/en/WebStudio/webStudio.html#data-sources)"},{key:"editors:webform:toolbox:outline",type:i.TEXT,body:"[Outline](https://doc4d.github.io/docs/alpha/en/WebStudio/webStudio.html#outline)"},{key:"editors:webform:toolbox:components:button",type:i.TEXT,body:"![4d software](https://blog.4d.com/wp-content/uploads/2021/06/banner-blog-v19LTS-1024x512.jpg)\n\n### The new 4D v19R\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n\n[Learn more](https://doc4d.github.io/docs/alpha/en/WebStudio/webStudio.html#components)"},{key:"editors:webform:toolbox:components:image",type:i.TEXT,body:"![4d software](https://blog.4d.com/wp-content/uploads/2021/06/banner-blog-v19LTS-1024x512.jpg)\n\n### The new 4D v19R\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n\n[Learn more](https://doc4d.github.io/docs/alpha/en/WebStudio/webStudio.html#components)"},{key:"editors:webform:toolbox:components:image",type:i.VIDEO,video:{provider:"youtube",link:"https://www.youtube.com/embed/0d_a-9iNV8s"},title:"Component: DataTable",body:"### Component: DataTable\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis odio erat, vitae laoreet mi viverra vel."},{key:"editors:webform:toolbox:components:image",type:i.TEXT,body:"[Some link](https://git-ps.wakanda.io/4d/web-studio/design-system/-/issues/14)"},{key:"editors:webform:toolbox:components:datatable",type:i.VIDEO,video:{provider:"youtube",link:"https://www.youtube.com/embed/Q5lXyagkziI"},title:"Component: DataTable",body:"### Component: DataTable\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis odio erat, vitae laoreet mi viverra vel."},{key:"editors:webform:properties:image:source",type:i.TEXT,body:"[Some link](https://git-ps.wakanda.io/4d/web-studio/design-system/-/issues/14)"}]},f=a(164),v=a(10),x=a(104),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_FILTER:return Object(v.a)(Object(v.a)({},e),{},{filter:t.payload});case n.SET_ITEMS:return Object(v.a)(Object(v.a)({},e),{},{items:t.payload});case n.REMOVE_ITEM:return Object(v.a)(Object(v.a)({},e),{},{items:Object(x.remove)(e.items,(function(e,a){return a!==t.payload}))});case n.SAVE_ITEM:var a=t.payload,i=a.index,o=a.item;return Object(x.isUndefined)(i)?Object(v.a)(Object(v.a)({},e),{},{items:[].concat(Object(f.a)(e.items),[o])}):Object(v.a)(Object(v.a)({},e),{},{items:e.items.map((function(e,t){return i===t?o:e}))});case n.SET_CURRENT_ITEM:return Object(v.a)(Object(v.a)({},e),{},{current:t.payload});default:return e}},g=a(3),T=Object(o.createContext)([O,function(){}]);T.displayName="Store";var w=function(){return Object(o.useContext)(T)},E=function(e){var t=e.children,a=Object(o.useReducer)(y,O),i=Object(u.a)(a,2),n=i[0],r=i[1];return Object(g.jsx)(T.Provider,{value:[n,r],children:t})},k=a(45),q=a(328),S=(a(173),["children","active"]),C=function(e){var t=e.children,a=e.active,i=Object(k.a)(e,S);return Object(g.jsx)("div",Object(v.a)(Object(v.a)({className:"rs-item ".concat(a?"active":"")},i),{},{children:t}))},I=function(e){var t=e.path,a=void 0===t?"":t,i=e.onClick,n=e.className,r=void 0===n?"":n,c=a.split(":"),s=Object(o.useState)(-1),l=Object(u.a)(s,2),d=l[0],m=l[1];return Object(g.jsx)(q.a,{separator:"",className:"".concat(r," font-medium whitespace-nowrap"),children:c.map((function(e,t){var a=c.slice(0,t+1).join(":");return Object(g.jsx)(q.a.Item,{renderItem:function(){return Object(g.jsx)(C,{onMouseEnter:function(){return m(t)},onMouseLeave:function(){return m(-1)},active:d>=t,onClick:function(){i&&i({value:a,index:t})},children:e})}},a)}))})},N=function(){var e=w(),t=Object(u.a)(e,2),a=t[0],i=a.items,n=a.filter,r=t[1],c=Object(o.useState)(!1),s=Object(u.a)(c,2),l=s[0],j=s[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"w-full flex justify-between flex-row my-3",children:[Object(g.jsx)("div",{className:"flex justify-center align-middle",children:n?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(I,{path:n,onClick:function(e){var t=e.value;return r(h(t))}}),Object(g.jsx)(m.a,{appearance:"link",onClick:function(){return r(h(""))},children:"Clear"})]}):null}),Object(g.jsx)("div",{className:"block",children:Object(g.jsx)(b.a,{appearance:l?"primary":"default",onClick:function(){return j(!l)},className:"rounded-full",icon:Object(g.jsx)(p.a,{icon:"code"})})})]}),l?Object(g.jsx)(d.a,{style:{padding:10,borderRadius:6,marginBottom:12,border:"1px dashed gray"},src:i,theme:"solarized"}):null]})},M=a(329),R=function(){var e=function(){return n(j(void 0))},t=w(),a=Object(u.a)(t,2),i=a[0].current,n=a[1];return Object(g.jsxs)(M.a,{show:!!i,onHide:e,children:[Object(g.jsx)(M.a.Header,{children:Object(g.jsx)(M.a.Title,{children:" Item Detail "})}),Object(g.jsx)(M.a.Body,{}),Object(g.jsxs)(M.a.Footer,{children:[Object(g.jsx)(m.a,{onClick:e,appearance:"primary",children:"Save"}),Object(g.jsx)(m.a,{onClick:e,appearance:"subtle",children:"Cancel"})]})]})},_=a(108),D=a.n(_),L=a(158),F=a(325),V=a(327),X={width:"100%",height:"100%"},W=function(){var e=Object(o.useState)(null),t=Object(u.a)(e,2),a=t[0],i=t[1],r=w(),c=Object(u.a)(r,2)[1];return Object(g.jsx)(F.a,{className:"w-full mb-3",draggable:!0,multiple:!1,fileList:a?[a]:[],autoUpload:!1,fileListVisible:!1,onChange:function(){var e=Object(L.a)(D.a.mark((function e(t){var a,o,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,null===(a=t[0].blobFile)||void 0===a?void 0:a.text();case 4:if(e.t0=e.sent,e.t0){e.next=7;break}e.t0="[]";case 7:o=e.t0,e.prev=8,r=JSON.parse(o),c((s=r,{type:n.SET_ITEMS,payload:s})),e.next=17;break;case 13:return e.prev=13,e.t1=e.catch(8),V.a.error("Invalid JSON."),e.abrupt("return");case 17:i(null);case 18:case"end":return e.stop()}var s}),e,null,[[8,13]])})));return function(t){return e.apply(this,arguments)}}(),accept:"application/json",children:Object(g.jsx)("div",{style:X,children:"Click or Drag files to this area"})})},U=a(161),B=a(323),A=a(332),H=a(324),J=a(326),P=a(330),Q=["top","left"],z=["children"],G=function(e){var t=e.item;return Object(g.jsx)(B.a,{preventOverflow:!0,placement:"auto",trigger:"click",speaker:function(e){var a=e.top,n=e.left,o=Object(k.a)(e,Q);return Object(g.jsx)(A.a,Object(v.a)(Object(v.a)({title:t.title||"",style:{top:a,left:n}},o),{},{children:Object(g.jsxs)("article",{className:"prose text-left prose-sm overflow-auto p-1 max-h-80 text-sm",children:[t.type===i.VIDEO&&"youtube"===t.video.provider&&t.video.link?Object(g.jsx)("iframe",{height:200,width:"100%",src:t.video.link,title:t.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):null,Object(g.jsx)(U.a,{options:{overrides:{a:{component:function(e){var t=e.children,a=Object(k.a)(e,z);return Object(g.jsxs)("a",Object(v.a)(Object(v.a)({},a),{},{target:"_blank",rel:"noopener noreferrer",className:"flex items-center",children:[t,Object(g.jsx)(p.a,{icon:"external-link",className:"ml-1"})]}))}}}},children:t.body})]})}))},children:Object(g.jsx)(p.a,{icon:t.type===i.VIDEO?"film":"code",className:"text-gray-300 text-base cursor-pointer"})})},K=function(e){var t=e.show,a=e.onConfirm,i=e.item;if(!i)return null;function n(e){a&&a(e)}return Object(g.jsxs)(H.a,{show:t,onHide:function(){return n(!1)},children:[Object(g.jsx)(H.a.Header,{children:Object(g.jsx)(H.a.Title,{children:"Confirm"})}),Object(g.jsxs)(H.a.Body,{children:["Are you sure you want to remove the key:",Object(g.jsx)("span",{className:"bg-gray-500 text-xs p-1 rounded-md mx-1",children:i.key})," ","of type:",Object(g.jsx)("span",{className:"bg-gray-500 p-1 text-xs rounded-md mx-1",children:i.type}),"?"]}),Object(g.jsxs)(H.a.Footer,{children:[Object(g.jsx)(m.a,{onClick:function(){return n(!0)},appearance:"primary",color:"red",children:"Remove"}),Object(g.jsx)(m.a,{onClick:function(){return n(!1)},appearance:"subtle",children:"Cancel"})]})]})},Y=function(){var e=w(),t=Object(u.a)(e,2),a=t[0],i=a.items,r=a.filter,c=t[1],s=Object(o.useState)(-1),l=Object(u.a)(s,2),d=l[0],b=l[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(K,{item:i[d],show:!!i[d],onConfirm:function(e){e&&c(function(e){return{type:n.REMOVE_ITEM,payload:e}}(d)),b(-1)}}),Object(g.jsx)(J.a,{hover:!0,children:i.map((function(e,t){return r&&!e.key.startsWith(r)?null:Object(g.jsx)(J.a.Item,{index:t,children:Object(g.jsxs)(P.a,{children:[Object(g.jsx)(P.a.Item,{colspan:2,className:"flex justify-center items-center h-16",children:Object(g.jsx)(G,{item:e})}),Object(g.jsx)(P.a.Item,{colspan:19,className:"flex flex-col justify-center items-start h-16",children:Object(g.jsx)(I,{path:e.key,onClick:function(e){var t=e.value;return c(h(t))}})}),Object(g.jsxs)(P.a.Item,{colspan:2,className:"flex justify-center items-center h-16",children:[Object(g.jsx)(m.a,{color:"orange",appearance:"link",onClick:function(){return b(t)},children:"Remove"}),Object(g.jsx)("span",{className:"p-1",children:"|"}),Object(g.jsx)(m.a,{appearance:"link",onClick:function(){return c(j(e))},children:"Edit"})]})]})},"".concat(e.key,":").concat(t))}))})]})},Z=function(){return Object(g.jsx)(E,{children:Object(g.jsxs)("div",{className:"max-w-7xl m-auto mt-4",children:[Object(g.jsx)(W,{}),Object(g.jsx)(N,{}),Object(g.jsx)(Y,{}),Object(g.jsx)(R,{})]})})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,333)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),o(e),r(e)}))};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(Z,{})}),document.getElementById("root")),$()}},[[321,1,2]]]);
//# sourceMappingURL=main.863459a2.chunk.js.map