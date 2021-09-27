(this["webpackJsonptips-editor"]=this["webpackJsonptips-editor"]||[]).push([[0],{104:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(17),c=n.n(r),a=n(30),i=n(231),s=n(21),o=n(57),l=function(){return fetch(s.b).then((function(e){return e.json()}))},u=function(){var t=Object(a.a)(c.a.mark((function t(n,r,a){var s,l,u,j,b,d,O,f,p;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=new i.a({auth:a}),l=Object(o.b)()){t.next=4;break}throw new Error("Repository not specified");case 4:return u=l.branch,j=l.owner,b=l.path,d=l.repo,t.next=7,s.request("GET /repos/{owner}/{repo}/contents/{path}",{repo:d,owner:j,path:b});case 7:return O=t.sent,f=O.data,p=e.from(JSON.stringify(n,null,2)).toString("base64"),t.next=12,s.request("PUT /repos/{owner}/{repo}/contents/{path}",{sha:f.sha,repo:d,path:b,owner:j,branch:u,message:r,content:p});case 12:return t.abrupt("return",!0);case 13:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}).call(this,n(239).Buffer)},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a}));var r="__TIPS__",c="https://raw.githubusercontent.com/4d/Web-studio-TIPS/main/tips.json",a={filter:{key:"",type:"*"},items:[],current:-1,keys:[]}},238:function(e,t,n){},446:function(e,t,n){},456:function(e,t,n){"use strict";n.r(t);var r,c,a=n(1),i=n.n(a),s=n(35),o=n.n(s),l=(n(238),n(13)),u=n(220),j=n.n(u),b=n(120),d=n(233),O=n(476),f=n(477),p=n(104);function h(e){return{type:c.SET_ITEMS,payload:e}}function m(e){return{type:c.REMOVE_ITEM,payload:e}}function x(e,t){return{type:c.SAVE_ITEM,payload:{item:e,index:t}}}function y(e){return{type:c.SET_CURRENT_ITEM,payload:e}}function v(e){return{type:c.FILTER_BY_KEY,payload:e}}!function(e){e.TEXT="text",e.VIDEO="video"}(r||(r={})),function(e){e.SET_CURRENT_ITEM="Edit item",e.REMOVE_ITEM="Remove item",e.SAVE_ITEM="SAVE item",e.SET_KEYS="Set Keys",e.SET_ITEMS="Set Items",e.FILTER_BY_KEY="Filter by key",e.FILTER_BY_TYPE="Filter by type"}(c||(c={}));var g=n(21),k=n(232),E=n(9),T=n(65),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.SET_KEYS:return Object(E.a)(Object(E.a)({},e),{},{keys:t.payload});case c.FILTER_BY_KEY:return Object(E.a)(Object(E.a)({},e),{},{filter:Object(E.a)(Object(E.a)({},e.filter),{},{key:t.payload})});case c.FILTER_BY_TYPE:return Object(E.a)(Object(E.a)({},e),{},{filter:Object(E.a)(Object(E.a)({},e.filter),{},{type:t.payload})});case c.SET_ITEMS:return Object(E.a)(Object(E.a)({},e),{},{items:Object(T.sortBy)(t.payload,["key"])});case c.REMOVE_ITEM:return Object(E.a)(Object(E.a)({},e),{},{items:Object(T.remove)(e.items,(function(e,n){return n!==t.payload}))});case c.SAVE_ITEM:var n=t.payload,r=n.index,a=n.item;return r>=e.items.length?Object(E.a)(Object(E.a)({},e),{},{current:-1,items:[].concat(Object(k.a)(e.items),[a])}):Object(E.a)(Object(E.a)({},e),{},{current:-1,items:e.items.map((function(e,t){return r===t?a:e}))});case c.SET_CURRENT_ITEM:return Object(E.a)(Object(E.a)({},e),{},{current:t.payload});default:return e}},S=n(3),N=Object(a.createContext)([g.c,function(){}]);N.displayName="Store";var C=function(){return Object(a.useContext)(N)},I=function(e){var t=e.children,n=Object(a.useReducer)(w,g.c),r=Object(l.a)(n,2),i=r[0],s=r[1];return Object(a.useEffect)((function(){localStorage.setItem(g.a,JSON.stringify(i.items))}),[i.items]),Object(a.useEffect)((function(){fetch("keys.json").then((function(e){return e.json()})).then((function(e){return s(function(e){return{type:c.SET_KEYS,payload:e}}(e))}))}),[]),Object(S.jsx)(N.Provider,{value:[i,s],children:t})},_=n(459),R=function(e){var t=e.show,n=e.onYes,r=e.title,c=void 0===r?"Confirm":r,a=e.children,i=e.yesLabel,s=void 0===i?"Yes":i,o=e.noLabel,l=void 0===o?"No":o,u=e.yesProps,j=void 0===u?{}:u,d=e.noProps,O=void 0===d?{}:d;function f(e){n&&n(e)}return Object(S.jsxs)(_.a,{show:t,onHide:function(){return f(!1)},children:[Object(S.jsx)(_.a.Header,{children:Object(S.jsx)(_.a.Title,{children:c})}),Object(S.jsx)(_.a.Body,{children:a}),Object(S.jsxs)(_.a.Footer,{children:[Object(S.jsx)(b.a,Object(E.a)(Object(E.a)({appearance:"primary"},j),{},{onClick:function(){return f(!0)},children:s})),Object(S.jsx)(b.a,Object(E.a)(Object(E.a)({appearance:"subtle"},O),{},{onClick:function(){return f(!1)},children:l}))]})]})},M=n(473),F=n(474),Y=n(461),V=n(475),L=n(467),P=n(122),B=n(227),q=n.n(B),A=n(57),D=n(460),K=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),r=n[0],c=n[1];return Object(S.jsxs)(D.a,{inside:!0,children:[Object(S.jsx)(P.a,Object(E.a)(Object(E.a)({},e),{},{type:r?"text":"password"})),Object(S.jsx)(D.a.Button,{onClick:function(){c(!r)},children:Object(S.jsx)(d.a,{icon:r?"eye":"eye-slash"})})]})},H=M.a.Types.StringType,J=M.a.Model({token:H().isRequired("The access key is required"),message:H().isRequired("The message is required")}),X=function(e){var t=e.show,n=void 0!==t&&t,r=e.onYes,c=void 0===r?function(){}:r,i=Object(a.useRef)(),s=Object(a.useState)({}),o=Object(l.a)(s,2),u=o[0],j=o[1],b=Object(a.useState)({message:"",token:""}),d=Object(l.a)(b,2),O=d[0],f=d[1],h=C(),m=Object(l.a)(h,1)[0].items,x=Object(a.useMemo)((function(){var e=Object(A.b)(),t=e.branch,n=e.owner,r=e.path,c=e.repo;return"https://github.com/".concat(n,"/").concat(c,"/blob/").concat(t,"/").concat(r)}),[]);Object(a.useEffect)((function(){f(Object(E.a)(Object(E.a)({},O),{},{message:""})),j({})}),[n]);return Object(S.jsxs)(R,{show:n,yesProps:{color:"green"},onYes:function(e){if(e)return function(){var e;(null===(e=i.current)||void 0===e?void 0:e.check())&&Object(p.b)(m,null===O||void 0===O?void 0:O.message,null===O||void 0===O?void 0:O.token).catch((function(e){alert("Error while updating the file. Check the console for more info"),console.error(e)})).finally((function(){return c(!0)}))}();c(e)},children:["Saving content to:",Object(S.jsx)("div",{className:"flex justify-center my-5",children:Object(S.jsx)("a",{target:"_blank",href:x,className:"bg-gray-500 text-xs p-1 rounded-md mx-1",rel:"noreferrer",children:x})}),Object(S.jsxs)(F.a,{ref:function(e){return i.current=e},model:J,autoComplete:"off",formValue:O,formError:u,onChange:function(e){return f(e)},onCheck:j,children:[Object(S.jsxs)(Y.a,{controlId:"token",children:[Object(S.jsx)(V.a,{children:"Access Key"}),Object(S.jsx)(L.a,{name:"token",type:"password",autoComplete:"off",accepter:K})]}),Object(S.jsxs)(Y.a,{controlId:"message",children:[Object(S.jsx)(V.a,{children:"Message"}),Object(S.jsx)(L.a,{name:"message",accepter:P.a,componentClass:"textarea",rows:5,placeholder:"Put your commit message here"}),Object(S.jsxs)(q.a,{children:["The Token can be generated"," ",Object(S.jsx)("a",{href:"https://github.com/settings/tokens/new",target:"_blank",rel:"noreferrer",children:"from here"}),". Make sure that the"," ",Object(S.jsx)("span",{className:"bg-gray-500 text-xs p-1 rounded-md mx-1",children:"public_repo"})," ","scope is checked.",Object(S.jsx)("img",{className:"my-4",src:"github_token.png",alt:"Github Token"})]})]})]})]})},U=n(29),G=n(469),z=(n(446),["children","active"]),W=function(e){var t=e.children,n=e.active,r=Object(U.a)(e,z);return Object(S.jsx)("div",Object(E.a)(Object(E.a)({className:"rs-item ".concat(n?"active":"")},r),{},{children:t}))},$=function(e){var t=e.path,n=void 0===t?"":t,r=e.onClick,c=e.className,i=void 0===c?"":c,s=e.style,o=void 0===s?{}:s,u=n.split(":"),j=Object(a.useState)(-1),b=Object(l.a)(j,2),d=b[0],O=b[1];return Object(S.jsx)(G.a,{separator:"",style:o,className:"".concat(i," font-medium whitespace-nowrap"),children:u.map((function(e,t){var n=u.slice(0,t+1).join(":");return Object(S.jsx)(G.a.Item,{renderItem:function(){return Object(S.jsx)(W,{onMouseEnter:function(){return O(t)},onMouseLeave:function(){return O(-1)},active:d>=t,onClick:function(){r&&r({value:n,index:t})},children:e})}},n)}))})},Q=function(){var e=C(),t=Object(l.a)(e,2),n=t[0],i=n.items,s=n.filter,o=t[1],u=Object(a.useState)(!1),m=Object(l.a)(u,2),k=m[0],E=m[1],T=Object(a.useState)(!1),w=Object(l.a)(T,2),N=w[0],I=w[1],_=Object(a.useState)(!1),M=Object(l.a)(_,2),F=M[0],Y=M[1],V=Object(a.useState)(!1),L=Object(l.a)(V,2),P=L[0],B=L[1];Object(a.useEffect)((function(){var e=[];if(localStorage.getItem(g.a)){try{e=JSON.parse(localStorage.getItem(g.a)||"[]")}catch(t){e=[]}o(h(e))}else q()}),[]);var q=function(){B(!0),Object(p.a)().then((function(e){return o(h(e))})).finally((function(){return B(!1)}))},A=["*",r.TEXT,r.VIDEO];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(R,{show:N,yesProps:{color:"red"},onYes:function(e){e&&q(),I(!1)},children:["Reloading the view will fetch the items from:",Object(S.jsx)("div",{className:"flex justify-center my-5",children:Object(S.jsx)("a",{target:"_blank",href:g.b,className:"bg-gray-500 text-xs p-1 rounded-md mx-1",rel:"noreferrer",children:g.b})}),Object(S.jsx)("span",{className:"text-red-400 underline",children:"All your changes will be lost. Do you want to proceed?"})]}),Object(S.jsx)(X,{show:F,onYes:function(){return Y(!1)}}),Object(S.jsxs)("div",{className:"w-full flex justify-between flex-row my-3",children:[Object(S.jsxs)("div",{className:"flex justify-center align-middle",children:[Object(S.jsx)(b.a,{className:"mr-4",onClick:function(){return I(!0)},children:Object(S.jsx)(d.a,{icon:"refresh",spin:P})}),Object(S.jsx)(b.a,{onClick:function(){return Y(!0)},children:Object(S.jsx)(d.a,{icon:"save"})}),Object(S.jsx)(O.a,{className:"mx-4",children:A.map((function(e){return Object(S.jsx)(b.a,{appearance:s.type===e?"primary":"default",onClick:function(){return o((t=e,{type:c.FILTER_BY_TYPE,payload:t}));var t},children:"*"===e?"All":Object(S.jsx)(d.a,{icon:e===r.TEXT?"code":"film"})})}))}),Object(S.jsx)(f.a,{className:"mr-4",icon:Object(S.jsx)(d.a,{icon:"plus"}),onClick:function(){o(x({body:"",key:"",type:r.TEXT},i.length)),o(y(i.length))}}),s.key?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)($,{path:s.key,onClick:function(e){var t=e.value;return o(v(t))}}),Object(S.jsx)(b.a,{appearance:"link",onClick:function(){return o(v(""))},children:"Clear"})]}):null]}),Object(S.jsx)("div",{className:"block",children:Object(S.jsx)(f.a,{appearance:k?"primary":"default",onClick:function(){return E(!k)},icon:Object(S.jsx)(d.a,{icon:"code"})})})]}),k?Object(S.jsx)(j.a,{style:{padding:10,borderRadius:6,marginBottom:12,border:"1px dashed gray"},src:i,theme:"solarized"}):null]})},Z=n(470),ee=n(464),te=n(462),ne=n(471),re=["onChange","value","data"],ce=function(e){var t=e.onChange,n=e.value,r=void 0===n?"":n,c=e.data,a=void 0===c?[]:c,i=Object(U.a)(e,re);return Object(S.jsx)(O.a,{children:a.map((function(e){var n=e.icon,c=e.value;return Object(S.jsx)(f.a,Object(E.a)(Object(E.a)({},i),{},{icon:n?Object(S.jsx)(d.a,{icon:n}):void 0,onClick:function(e){return function(e,n){t&&t(e,n)}(c,e)},appearance:c===r?"primary":"default"}))}))})},ae=n(228),ie=["children"],se=function(e){var t=e.value,n=void 0===t?"":t;return Object(S.jsx)(ae.a,{options:{overrides:{a:{component:function(e){var t=e.children,n=Object(U.a)(e,ie);return Object(S.jsxs)("a",Object(E.a)(Object(E.a)({},n),{},{target:"_blank",rel:"noopener noreferrer",children:[t,Object(S.jsx)(d.a,{icon:"external-link",className:"ml-1"})]}))}}}},children:n})},oe=["value","className"],le=function(e){var t=e.value,n=void 0===t?"":t,r=e.className,c=Object(U.a)(e,oe),i=Object(a.useState)(!1),s=Object(l.a)(i,2),o=s[0],u=s[1];return Object(S.jsxs)("div",{className:r,children:[Object(S.jsx)(ce,{style:{marginBottom:10},data:[{icon:"code",value:"code"},{icon:"eye",value:"preview"}],value:o?"preview":"code",onChange:function(e){return u("preview"===e)}}),o?Object(S.jsx)(se,{value:n}):Object(S.jsx)(P.a,Object(E.a)(Object(E.a)({},c),{},{value:n,componentClass:"textarea",placeholder:"Textarea"}))]})},ue=M.a.Types.StringType,je=function(){return Object(S.jsx)("hr",{style:{width:"80%",margin:"15px auto"}})},be=M.a.Model({key:ue().isRequired("The key is required").pattern(/^[0-9a-z]+(?::[0-9a-z]+)*$/),type:ue().isOneOf([r.VIDEO,r.TEXT],"The specified type is unsupported").isRequired("The type is required"),body:ue().isRequired("The content is required"),"video.link":ue()}),de=function(){var e=C(),t=Object(l.a)(e,2),n=t[0],c=n.current,i=n.items,s=n.keys,o=t[1],u=Object(a.useState)({}),j=Object(l.a)(u,2),O=j[0],f=j[1],p=Object(a.useState)(),h=Object(l.a)(p,2),v=h[0],g=h[1],k=Object(a.useRef)(),E=Object(a.useMemo)((function(){return s.map((function(e){return e.value}))}),[s.length]);if(Object(a.useEffect)((function(){var e=i[c];e&&(g(Object(A.a)(e)),f({}))}),[i,c]),c<0||!i[c])return null;var T=function(){(null===v||void 0===v?void 0:v.key)||o(m(c)),o(y(-1))};return Object(S.jsxs)(Z.a,{show:c>=0,onHide:T,children:[Object(S.jsx)(Z.a.Header,{children:(null===v||void 0===v?void 0:v.key)?Object(S.jsx)(Z.a.Title,{children:Object(S.jsx)($,{path:v.key})}):null}),Object(S.jsx)(Z.a.Body,{children:Object(S.jsxs)(F.a,{ref:function(e){return k.current=e},model:be,autoComplete:"off",formValue:v,formError:O,onChange:function(e){return g(e)},onCheck:f,children:[Object(S.jsxs)(Y.a,{children:[Object(S.jsx)(V.a,{children:"Key"}),Object(S.jsx)(L.a,{name:"key",accepter:ee.a,data:E})]}),Object(S.jsxs)(Y.a,{children:[Object(S.jsx)(V.a,{children:"Type"}),Object(S.jsxs)(L.a,{name:"type",accepter:te.a,appearance:"picker",style:{display:"flex",width:"fit-content",paddingRight:10},children:[Object(S.jsxs)(ne.a,{value:r.TEXT,children:[Object(S.jsx)(d.a,{icon:"code",className:"mr-4"}),"Text"]}),Object(S.jsxs)(ne.a,{value:r.VIDEO,children:[Object(S.jsx)(d.a,{icon:"code",className:"mr-4"}),"Video"]})]})]}),(null===v||void 0===v?void 0:v.type)===r.VIDEO?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(je,{}),Object(S.jsxs)(Y.a,{children:[Object(S.jsx)(V.a,{children:"Url"}),Object(S.jsx)(L.a,{name:"video.link",accepter:P.a,style:{width:"100%"}})]})]}):null,Object(S.jsx)(Y.a,{children:Object(S.jsx)(L.a,{name:"body",accepter:le,rows:10,style:{width:"100%",minHeight:280},className:"w-full min-h-[326px]"})})]})}),Object(S.jsxs)(Z.a.Footer,{children:[Object(S.jsx)(b.a,{onClick:function(){var e;return null===(e=k.current)||void 0===e?void 0:e.check((function(e){if(!Object.keys(e||{}).length){var t=Object(A.c)(v);o(x(t,c))}}))},appearance:"primary",children:"Confirm"}),Object(S.jsx)(b.a,{appearance:"subtle",onClick:T,children:"Cancel"})]})]})},Oe=n(17),fe=n.n(Oe),pe=n(30),he=n(465),me=n(468),xe={width:"100%",height:"100%"},ye=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],c=C(),i=Object(l.a)(c,2)[1];return Object(S.jsx)(he.a,{className:"w-full mb-3",draggable:!0,multiple:!1,fileList:n?[n]:[],autoUpload:!1,fileListVisible:!1,onChange:function(){var e=Object(pe.a)(fe.a.mark((function e(t){var n,c,a;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,null===(n=t[0].blobFile)||void 0===n?void 0:n.text();case 4:if(e.t0=e.sent,e.t0){e.next=7;break}e.t0="[]";case 7:c=e.t0,e.prev=8,a=JSON.parse(c),i(h(a)),e.next=17;break;case 13:return e.prev=13,e.t1=e.catch(8),me.a.error("Invalid JSON."),e.abrupt("return");case 17:r(null);case 18:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(t){return e.apply(this,arguments)}}(),accept:"application/json",children:Object(S.jsx)("div",{style:xe,children:"Click or Drag files to this area"})})},ve=n(463),ge=n(478),ke=n(466),Ee=n(472),Te=n(479),we=function(e){var t=e.show,n=e.onConfirm,r=e.item;return r?Object(S.jsxs)(R,{show:t,onYes:n,yesLabel:"Remove",noLabel:"Cancel",yesProps:{appearance:"primary",color:"red"},children:["Are you sure you want to remove the key:",Object(S.jsx)("span",{className:"bg-gray-500 text-xs p-1 rounded-md mx-1",children:r.key})," ","of type:",Object(S.jsx)("span",{className:"bg-gray-500 text-xs p-1 rounded-md mx-1",children:r.type}),"?"]}):null},Se=["top","left"],Ne=function(e){var t=e.item;return Object(S.jsx)(ve.a,{preventOverflow:!0,placement:"auto",trigger:"click",speaker:function(e){var n=e.top,c=e.left,a=Object(U.a)(e,Se);return Object(S.jsx)(ge.a,Object(E.a)(Object(E.a)({title:t.title||"",style:{top:n,left:c}},a),{},{children:Object(S.jsxs)("article",{className:"prose text-left prose-sm overflow-auto p-1 max-h-80 text-sm",children:[t.type===r.VIDEO&&t.video.link?Object(S.jsx)("iframe",{height:200,width:"100%",src:t.video.link,title:t.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):null,Object(S.jsx)(se,{value:t.body})]})}))},children:Object(S.jsx)(d.a,{icon:function(){switch(t.type){case r.TEXT:return"code";case r.VIDEO:return"film";default:return"question"}}(),className:"text-gray-300 text-base cursor-pointer"})})},Ce=function(){var e=C(),t=Object(l.a)(e,2),n=t[0],r=n.items,c=n.filter,i=n.keys,s=t[1],o=Object(a.useState)(-1),u=Object(l.a)(o,2),j=u[0],O=u[1],f=Object(a.useMemo)((function(){return i.map((function(e){return e.value}))}),[i]);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(we,{item:r[j],show:!!r[j],onConfirm:function(e){e&&s(m(j)),O(-1)}}),0===r.length?Object(S.jsxs)("div",{className:"text-center bg-[#292d33] border-dashed rounded-md border border-gray-200 p-3",children:["The list is empty. Please upload a valid"," ",Object(S.jsx)("span",{className:"bg-gray-500 p-1 text-xs rounded-md mx-1",children:"JSON file"})," ","or use"," ",Object(S.jsx)("a",{href:"tips.json",target:"_blank",children:"this example"})]}):null,Object(S.jsx)(ke.a,{hover:!0,children:r.map((function(e,t){if(!e.key.startsWith(c.key)||"*"!==c.type&&e.type!==c.type)return null;var n=f.includes(e.key);return Object(S.jsx)(ke.a.Item,{index:t,children:Object(S.jsxs)(Ee.a,{children:[Object(S.jsx)(Ee.a.Item,{colspan:2,className:"flex justify-center items-center h-16",children:Object(S.jsx)(Ne,{item:e})}),Object(S.jsxs)(Ee.a.Item,{colspan:19,className:"flex flex-row h-16",children:[!n&&Object(S.jsx)(ve.a,{trigger:"hover",placement:"left",speaker:Object(S.jsx)(Te.a,{children:Object(S.jsx)("div",{className:"p-2",children:"Key not supported"})}),children:Object(S.jsx)(d.a,{icon:"info",className:"flex items-center mr-2 text-red-400 cursor-pointer"})}),Object(S.jsx)($,{style:{marginLeft:n?22:"unset"},path:e.key,onClick:function(e){var t=e.value;return s(v(t))}})]}),Object(S.jsxs)(Ee.a.Item,{colspan:2,className:"flex justify-center items-center h-16",children:[Object(S.jsx)(b.a,{color:"orange",appearance:"link",onClick:function(){return O(t)},children:"Remove"}),Object(S.jsx)("span",{className:"p-1",children:"|"}),Object(S.jsx)(b.a,{appearance:"link",onClick:function(){return s(y(t))},children:"Edit"})]})]})},"".concat(e.key,":").concat(t))}))})]})},Ie=function(){return Object(S.jsxs)(I,{children:[Object(S.jsx)("a",{className:"github-fork-ribbon",href:"https://github.com/midrissi/tips-editor","data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub",target:"_blank",rel:"noreferrer",children:"Fork me on GitHub"}),Object(S.jsxs)("div",{className:"max-w-7xl m-auto mt-4",children:[Object(S.jsx)(ye,{}),Object(S.jsx)(Q,{}),Object(S.jsx)(Ce,{}),Object(S.jsx)(de,{})]})]})},_e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,480)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};o.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(Ie,{})}),document.getElementById("root")),_e()},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o}));var r=n(221),c=n(65),a=n(21),i=function e(t){var n={};for(var r in t)if("object"!==typeof t[r]||Array.isArray(t[r]))n[r]=t[r];else{var c=e(t[r]);for(var a in c)n[r+"."+a]=c[a]}return n},s=function(e){var t={};for(var n in e)Object(c.set)(t,n,e[n]);return t},o=function(){var e=Object(r.a)(/^https:\/\/raw\.githubusercontent\.com\/((?:(?!\/)[\s\S])*)\/((?:(?!\/)[\s\S])*)\/((?:(?!\/)[\s\S])*)\/(.*)/,{owner:1,repo:2,branch:3,path:4}).exec(a.b);if(e)return e.groups}}},[[456,1,2]]]);
//# sourceMappingURL=main.544b30ef.chunk.js.map