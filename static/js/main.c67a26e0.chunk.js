(this["webpackJsonpprofiles-table"]=this["webpackJsonpprofiles-table"]||[]).push([[0],{88:function(e,n,t){},89:function(e,n,t){"use strict";t.r(n);var a,c,r,i,o,l,s,d,b,u,j,p,g,x,m,h,O,f,v,y,k,C,w,S,P,A,E,_=t(0),T=t(40),B=t.n(T),I=t(4),L=t(3),z=t(13),M=t(5),F=t(2),N=t(8),D=t(7),K=t(91),R=t.p+"static/media/tel.4f8a6968.svg",G=t.p+"static/media/email.dc3c8cb7.svg",J=t.p+"static/media/down-arrow.1f61d293.svg",U=t.p+"static/media/up-arrow.4314742f.svg",X=t(92),H=t(1),V=F.c.div(a||(a=Object(L.a)(["\n   display: flex;\n   justify-content: space-between;\n"]))),q=F.c.div(c||(c=Object(L.a)(["\n   flex-grow: 1;\n"]))),W=F.c.div(r||(r=Object(L.a)(["\n   background-color: ",";\n   height: 40px;\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   border: 2px solid rgb(213 204 204);\n   font-size: 16px;\n   font-weight: bold;\n   cursor: pointer;\n"])),(function(e){return e.theme.pageEndTitleColumnsBg})),Z=F.c.div(i||(i=Object(L.a)(["\n   line-height: 20px;\n   padding: 8px 15px;\n   border: 1px solid rgb(213 204 204);\n   color: ",";\n   background-color: ",";\n"])),(function(e){return e.theme.text}),(function(e){return e.theme.tableCellBackground})),Q=F.c.div(o||(o=Object(L.a)(["\n   .my-link div:hover {\n      background: #ffffff;\n      transition: .3s;\n   }\n"]))),Y=function(e){var n=e.value,t=e.id;return Object(H.jsx)(Q,{children:Object(H.jsx)(z.b,{className:"my-link",to:"/profile-summary/".concat(t),children:Object(H.jsx)(Z,{children:n})})})},$=function(e){var n,t=e.value;return n="Active"===t?{color:"green"}:"Paused"===t?{color:"orange"}:{color:"red"},Object(H.jsx)(Z,{style:n,children:Object(H.jsx)(X.a,{defaults:t,i18nKey:t.toLowerCase()})})},ee=function(e){var n=e.value,t=Object(K.a)(new Date(n),"dd/MM/yyyy");return Object(H.jsx)(Z,{children:t})},ne=function(e){var n=e.value;return Object(H.jsxs)(Z,{children:[Object(H.jsx)("img",{src:G,alt:"email",style:{marginRight:10}}),n]})},te=function(e){var n=e.value;return Object(H.jsxs)(Z,{children:[Object(H.jsx)("img",{src:R,alt:"tel number:",style:{marginRight:5}}),n]})},ae=function(e){var n=e.data,t=e.id;return{TEXT:Object(H.jsx)(Y,Object(D.a)(Object(D.a)({},n),{},{id:t})),STATUS:Object(H.jsx)($,Object(D.a)({},n)),DATE:Object(H.jsx)(ee,Object(D.a)({},n)),EMAIL:Object(H.jsx)(ne,Object(D.a)({},n)),TELNUMBER:Object(H.jsx)(te,Object(D.a)({},n))}[n.type]},ce=function(e,n,t){return(new Intl.Collator).compare.apply(null,"DESC"===t?[n,e]:[e,n])},re=function(e,n){var t=n.type,a=n.payload;switch(t){case"init":return Object(D.a)(Object(D.a)({},e),{},{data:a.sort((function(n,t){return ce(n.data[e.sort.column].value,t.data[e.sort.column].value,e.sort.direction)}))});case"sort":var c={column:a,direction:e.sort.column!==a?"ASC":"ASC"===e.sort.direction?"DESC":"ASC"};return Object(D.a)(Object(D.a)({},e),{},{sort:c,data:e.data.sort((function(e,n){return ce(e.data[c.column].value,n.data[c.column].value,c.direction)}))});default:throw new Error}},ie=function(e){var n=e.columns,t=e.data,a=Object(_.useReducer)(re,{data:[],sort:{column:"0",direction:"ASC"}}),c=Object(I.a)(a,2),r=c[0],i=c[1];Object(_.useEffect)((function(){i({type:"init",payload:t})}),[t]);var o=Object(_.useCallback)((function(e){i({type:"sort",payload:e.currentTarget.dataset.index})}),[]);return Object(H.jsx)(V,{children:n.map((function(e,n){return Object(H.jsxs)(q,{children:[Object(H.jsxs)(W,{"data-index":n,onClick:o,children:[Object(H.jsx)(X.a,{defaults:e.title,i18nKey:e.title.toLowerCase().replace(" ","_")}),r.sort.column===n.toString()&&"ASC"===r.sort.direction&&Object(H.jsx)("img",{style:{paddingLeft:10},src:J,alt:""}),r.sort.column===n.toString()&&"DESC"===r.sort.direction&&Object(H.jsx)("img",{style:{paddingLeft:10},src:U,alt:""})]}),r.data.map((function(n,t){var a=n.data.find((function(n){return"".concat(n.columnId)==="".concat(e.id)}));return Object(H.jsx)(ae,{data:a,id:n.id},t+"ComponentRenderer")}))]},n)}))})},oe=t.p+"static/media/close.f1cf61d5.svg",le=F.c.div(l||(l=Object(L.a)(["\n   position: fixed;\n   top: 0;\n   right: 0;\n   bottom: 0;\n   left: 0;\n   z-index: 1000;\n   background: rgba(0, 0, 0, 0.6);\n   display: flex;\n   justify-content: center;\n   align-items: flex-start;\n   overflow-y: scroll;\n   padding: 100px;\n"]))),se=F.c.div(s||(s=Object(L.a)(["\n   width: 100%;\n   max-width: 400px;\n   background-color: #f9f9f9;\n   border-radius: 15px;\n   padding-top: 10px;\n   position: relative;\n   box-shadow: 0 5px 15px black;\n   font-size: 16px;\n   line-height: 22px;\n"]))),de=F.c.button(d||(d=Object(L.a)(["\n   background: #ff0000;\n   height: 30px;\n   width: 30px;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   border: none;\n   position: absolute;\n   right: 7px;\n   top: 7px;\n   background: none;\n   cursor: pointer;\n   transition: .3s;\n   outline: none;\n   &:hover {\n      transition: .3s;\n      transform: rotate(180deg);\n   }\n"]))),be=F.c.div(b||(b=Object(L.a)(["\n   display: flex;\n   justify-content: space-between;\n   padding: 10px;\n   border-bottom: 1px solid #c2b9b9;\n   font-size: 18px;\n   color: #797878;\n   margin-bottom: 15px;\n"]))),ue=F.c.input(u||(u=Object(L.a)(["\ndisplay: block;\n   border: 2px solid gray;\n   border-radius: 5px;\n   width: 94%;\n   line-height: 24px;\n   padding-left: 10px;\n   margin: 0 auto;\n"]))),je=F.c.div(j||(j=Object(L.a)(["\n   width: 94%;\n   margin-top: 12px;\n   margin: 12px auto 0;\n\n\n"]))),pe=F.c.div(p||(p=Object(L.a)(["\n   border: 1px solid #c2b9b9;\n   padding: 7px;\n"]))),ge=F.c.input(g||(g=Object(L.a)(["\n   margin-right: 10px;\n   width: 16px;\n   height: 16px;\n"]))),xe=F.c.div(x||(x=Object(L.a)(["\n   display: flex;\n   justify-content: flex-end;\n   padding: 10px 0;\n"]))),me=F.c.button(m||(m=Object(L.a)(["\n   padding: 5px 10px;\n   border: 1px solid;\n   border-radius: 7px;\n   margin-right: 12px;\n   font-size: 16px;\n"]))),he=F.c.button(h||(h=Object(L.a)(["\n   background-color: #6cd86c;\n   padding: 7px 12px;\n   border: 1px solid;\n   border-radius: 7px;\n   margin-right: 12px;\n   font-size: 16px;\n"]))),Oe=function(e){var n=e.setOpenModal,t=e.columns,a=e.activeColumns,c=e.setActiveColumns,r=Object(_.useState)(a),i=Object(I.a)(r,2),o=i[0],l=i[1],s=Object(_.useCallback)((function(e){var n=e.currentTarget.dataset.value;l((function(e){return Object(D.a)(Object(D.a)({},e),{},Object(N.a)({},n,!e[n]))}))}),[]),d=Object(_.useCallback)((function(){c(o),n(!1),localStorage.setItem("activeColumns",JSON.stringify(o))}),[o,c,n]),b=Object(_.useCallback)((function(){n(!1)}),[n]);return Object(H.jsx)(le,{children:Object(H.jsxs)(se,{children:[Object(H.jsx)(de,{onClick:b,children:Object(H.jsx)("img",{src:oe,width:"36",alt:""})}),Object(H.jsx)(be,{children:Object(H.jsx)("h2",{children:Object(H.jsx)(X.a,{i18nKey:"Select columns"})})}),Object(H.jsx)(ue,{type:"text",placeholder:"Search columns..."}),Object(H.jsx)(je,{children:t.map((function(e){return Object(H.jsxs)(pe,{children:[Object(H.jsx)(ge,{type:"checkbox",value:e.title,checked:o[e.id],onChange:s,"data-value":e.id}),Object(H.jsx)(X.a,{defaults:e.title,i18nKey:e.title.toLowerCase().replace(" ","_")})]},e.id+"ModalColumnTitle")}))}),Object(H.jsxs)(xe,{children:[Object(H.jsx)(he,{onClick:d,children:Object(H.jsx)(X.a,{i18nKey:"Apply"})}),Object(H.jsx)(me,{onClick:b,children:Object(H.jsx)(X.a,{i18nKey:"Close"})})]})]})})},fe=t(16),ve=t.n(fe),ye=F.c.button(O||(O=Object(L.a)(["\npadding: 5px 10px;\nborder: 1px solid #575555;\nborder-radius: 10px;\nmargin: 7px 15px;\ncolor: ",";\nbackground-color: ",";\n\n   &:hover {\n      background-color: rgb(213, 204, 204);\n   }\n"])),(function(e){return e.theme.text}),(function(e){return e.theme.buttonBackground})),ke=F.c.div(f||(f=Object(L.a)(["\n   font-size: 24px;\n   padding: 40px;\n   font-weight: bold;\n"]))),Ce="https://61814fdd32c9e20017804772.mockapi.io/api/testdb",we=localStorage.getItem("activeColumns"),Se=function(){var e=Object(_.useState)([]),n=Object(I.a)(e,2),t=n[0],a=n[1],c=Object(_.useState)({}),r=Object(I.a)(c,2),i=r[0],o=r[1],l=Object(_.useState)([]),s=Object(I.a)(l,2),d=s[0],b=s[1],u=Object(_.useState)(!1),j=Object(I.a)(u,2),p=j[0],g=j[1];return Object(_.useEffect)((function(){Promise.all([ve.a.get("".concat(Ce,"/columns-new")),ve.a.get("".concat(Ce,"/data"))]).then((function(e){var n=Object(I.a)(e,2),t=n[0],c=n[1];a(t.data),b(c.data),o(we?JSON.parse(we):t.data.reduce((function(e,n){return Object(D.a)(Object(D.a)({},e),{},Object(N.a)({},n.id,!0))}),{}))}))}),[]),t.length&&d.length?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(ye,{onClick:function(){return g(!0)},children:Object(H.jsx)(X.a,{i18nKey:"Select columns"})}),p&&Object(H.jsx)(Oe,{setOpenModal:g,columns:t,activeColumns:i,setActiveColumns:o}),Object(H.jsx)(ie,{columns:t.filter((function(e){return i[e.id]})),data:d})]}):Object(H.jsx)(ke,{children:Object(H.jsx)(X.a,{i18nKey:"Loading"})})},Pe=t(6),Ae=F.c.div(v||(v=Object(L.a)(["\n   display: flex;\n"]))),Ee=F.c.div(y||(y=Object(L.a)(["\n   background-color: ",";\n   margin-left: 40px;\n   margin-top: 5px;\n   padding: 10px 20px;\n   color: ",";\n   border: 2px solid rgb(213 204 204);\n   border-bottom: 0;\n   border-radius: 10px 10px 0px 0px;\n\n   &: hover {\n      background: #63dd63;\n      transition: background 0.3s ease;\n   }\n"])),(function(e){return e.theme.pageEndTitleColumnsBg}),(function(e){return e.theme.text})),_e=F.c.div(k||(k=Object(L.a)(["\n   width: 100%;\n   height: 2px;\n   background-color: rgb(213 204 204);\n"]))),Te=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(Ae,{children:[Object(H.jsx)(z.b,{to:"/",children:Object(H.jsx)(Ee,{children:Object(Pe.b)("Profiles")})}),Object(H.jsx)(z.b,{to:"/profile-summary",children:Object(H.jsx)(Ee,{children:Object(Pe.b)("Profile summary")})})]}),Object(H.jsx)(_e,{})]})},Be=F.c.div(C||(C=Object(L.a)(["\n   background-color: ",";\n   border: 2px solid rgb(213 204 204);\n   border-radius: 20px;\n   margin: 25px 40px;\n   width: 400px;\n   height: 400px;\n   padding: 15px;\n"])),(function(e){return e.theme.tableCellBackground})),Ie=F.c.h1(w||(w=Object(L.a)(["\n   display: inline-block;\n   font-size: 24px;\n   margin-left: 20px;\n   margin-top: 10px;\n   border-bottom: 2px solid black;\n"]))),Le=F.c.div(S||(S=Object(L.a)(["\n   padding: 20px 15px;\n"]))),ze=F.c.li(P||(P=Object(L.a)(["\n   display: block;\n   font-size: 16px;\n   line-height: 20px;\n   margin-bottom: 10px;\n      & span {\n         font-weight: bold;\n         padding-right: 10px;\n      } \n"]))),Me=F.c.div(A||(A=Object(L.a)(["\n      font-size: 18px;\n      padding: 15px 15px 0;\n"]))),Fe=function(e){var n=e.test;console.log(n);var t=Object(M.f)().userId,a="https://61814fdd32c9e20017804772.mockapi.io/api/testdb",c=Object(_.useState)([]),r=Object(I.a)(c,2),i=r[0],o=r[1],l=Object(_.useState)([]),s=Object(I.a)(l,2),d=s[0],b=s[1];Object(_.useEffect)((function(){ve.a.get("".concat(a,"/data/").concat(t)).then((function(e){var n=e.data.data.map((function(e){return e.value})),t=Object(I.a)(n,5),a=t[0],c=t[1],r=t[2],i=t[3],l=t[4];o({name:a,status:c,date:r,email:i,number:l})}))}),[t]),Object(_.useEffect)((function(){ve.a.get("".concat(a,"/data/").concat(t,"/info")).then((function(e){var n=e.data,t=Object.entries(n[0]).map((function(e){return e[1]})),a=Object(I.a)(t,5),c=a[0],r=a[1],i=a[2],o=a[3],l=a[4];b({createdAt:c,name:r,picture:i,country:o,id:l})}))}),[t]);var u=d.createdAt?Object(K.a)(new Date(d.createdAt),"dd/MM/yyyy"):null;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(Me,{children:Object(Pe.b)("Profile Summary Page")}),Object(H.jsxs)(Be,{children:[Object(H.jsx)(Ie,{children:Object(Pe.b)("General Info")}),Object(H.jsx)(Le,{children:Object(H.jsxs)("ul",{children:[Object(H.jsxs)(ze,{children:[Object(H.jsx)("span",{children:Object(Pe.b)("Profile name")}),i.name]}),Object(H.jsxs)(ze,{children:[Object(H.jsx)("span",{children:Object(Pe.b)("Name")}),d.name]}),Object(H.jsxs)(ze,{children:[Object(H.jsx)("span",{children:Object(Pe.b)("Create date")}),u]}),Object(H.jsxs)(ze,{children:[Object(H.jsx)("span",{children:Object(Pe.b)("Phone number")}),i.number]}),Object(H.jsxs)(ze,{children:[Object(H.jsx)("span",{children:Object(Pe.b)("Email")}),i.email]}),Object(H.jsxs)(ze,{children:[Object(H.jsx)("span",{children:Object(Pe.b)("Adress")}),d.country]}),Object(H.jsxs)(ze,{children:[Object(H.jsx)("span",{children:Object(Pe.b)("Picture")}),Object(H.jsx)("img",{src:d.picture,width:"180",alt:""})]})]})})]})]})},Ne=F.c.div(E||(E=Object(L.a)(["\n   .profile-link span {\n      color: #4646eb;\n      padding: 5px;\n   }\n   .profile-link span: hover {\n      background-color: #eacbcb;\n      border-radius: 5px;\n   }\n"])));var De,Ke,Re,Ge,Je=function(){return Object(H.jsxs)(Ne,{style:{padding:40,fontSize:20,fontWeight:"bold"},children:[" ",Object(Pe.b)("Please select a profile in"),"  \u2192 ",Object(H.jsx)(z.b,{className:"profile-link",to:"/",children:Object(H.jsx)("span",{children:Object(Pe.b)("Profiles")})})]})},Ue=t(29),Xe=500,He=F.c.div(De||(De=Object(L.a)(["\n   display: flex;\n   align-items: center;\n   width: 550px;\n   height: 280px;\n   margin: 15px auto;\n"]))),Ve=F.c.div(Ke||(Ke=Object(L.a)(["\n   width: 100%;\n   height: 100%;\n   overflow: hidden;\n"]))),qe=F.c.div.attrs()(Re||(Re=Object(L.a)(["\n   display: flex;\n   height: 100%;\n   transform: translateX(","px);\n   transition: translate;\n   transition-property: transform;\n   transition-duration: 400ms;\n   transition-timing-function: ease-in-out;\n"])),(function(e){return e.offset})),We=F.c.img(Ge||(Ge=Object(L.a)(["\n   height: 100%;\n   min-width: ","px;\n   max-width: ","px;\n"])),Xe,Xe),Ze=["https://upload.wikimedia.org/wikipedia/commons/1/17/2018_Porsche_Cayenne_V8_Turbo_Tiptronic_4.0_Front.jpg","https://cdn.motor1.com/images/mgl/n7Z0o/s3/2020-bmw-x5-m-rendering.jpg","https://www.carscoops.com/wp-content/uploads/2020/06/audi-rs-q8-vorsprung-pack-for-sale-uk-36-1024x555.jpg","https://upload.wikimedia.org/wikipedia/commons/c/c4/2017_Mercedes-Benz_GLS_63_AMG_%28X_166%29_wagon_%282018-09-17%29_01.jpg","https://autopro8.mediacdn.vn/zoom/600_315/2020/5/14/2020-rolls-royce-cullinan-black-badge-006-1589445196592129260698-crop-15894452243411180024940.jpg"];var Qe,Ye,$e,en,nn=function(){var e=Object(_.useState)(0),n=Object(I.a)(e,2),t=n[0],a=n[1];return Object(H.jsxs)(He,{children:[Object(H.jsx)(Ue.a,{onClick:function(){a((function(e){var n=e+Xe;return Math.min(n,0)}))},style:{cursor:"pointer",width:"2em",height:"2em",visibility:"".concat(t?"visible":"hidden")}}),Object(H.jsx)(Ve,{children:Object(H.jsx)(qe,{offset:t,children:Ze.map((function(e,n){return Object(H.jsx)(We,{src:e,alt:"car"},"".concat(n,"_Car"))}))})}),Object(H.jsx)(Ue.b,{onClick:function(){a((function(e){var n=e-Xe,t=-500*(Ze.length-1);return n===t+-500?0:Math.max(n,t)}))},style:{cursor:"pointer",width:"2em",height:"2em"}})]})},tn={body:"#E2E2E2",text:"#363537",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)",mainBackground:"rgb(239, 238, 238)",buttonBackground:"white",tableCell:"black",tableCellBackground:"rgb(239, 238, 238)",pageEndTitleColumnsBg:"rgb(234, 231, 231)"},an={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)",mainBackground:"#212020",buttonBackground:"#8b8585",tableCellBackground:"rgb(21, 20, 20)",pageEndTitleColumnsBg:"rgb(58, 55, 55)"},cn=Object(F.b)(Qe||(Qe=Object(L.a)(["\n  *,\n  *::after,\n  *::before {\n      box-sizing: border-box;\n   }\n\n   body {\n      align-items: center;\n      background: ",";\n      color: ",";\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      height: 100vh;\n      margin: 0;\n      padding: 0;\n      font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n      transition: all 0.25s linear;\n   }\n   "])),(function(e){return e.theme.body}),(function(e){return e.theme.text})),rn=function(e){var n=e.changeLanguage,t=Object(_.useState)(localStorage.getItem("i18nextLng")||null),a=Object(I.a)(t,2),c=a[0],r=a[1],i=Object(_.useCallback)((function(e){n(e.target.value),r(e.target.value)}),[n]);return Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)("label",{children:[" ",Object(Pe.b)("Change language"),Object(H.jsxs)("select",{value:c,onChange:i,children:[Object(H.jsx)("option",{value:"en",children:"EN"}),Object(H.jsx)("option",{value:"ru",children:"RU"})]})]})})},on=t(90),ln=F.c.div(Ye||(Ye=Object(L.a)(["\n   padding: 0 15px;\n   width: 1030px;\n   height: 100vh;\n   margin: 0 auto;\n   background-color: ",";\n   font-size: 14px;\n   font-family: Arial, Helvetica, sans-serif;\n"])),(function(e){return e.theme.mainBackground})),sn=F.c.div($e||($e=Object(L.a)(["\n   display: flex;\n   justify-content: flex-end;\n   align-items: center;\n   padding-top: 8px;\n"]))),dn=F.c.button(en||(en=Object(L.a)(["\n   color: ",";\n   border: 1px solid black;\n   border-radius: 8px;\n   padding: 3px 5px;\n   margin-right: 10px;\n   background-color: ",";\n      &:hover {\n         background-color: rgb(213, 204, 204);\n      }\n"])),(function(e){return e.theme.text}),(function(e){return e.theme.buttonBackground}));var bn=function(){var e=Object(_.useState)(localStorage.getItem("activeTheme")||"light"),n=Object(I.a)(e,2),t=n[0],a=n[1],c=Object(on.a)().i18n;return Object(H.jsx)(F.a,{theme:"light"===t?tn:an,children:Object(H.jsxs)(ln,{children:[Object(H.jsxs)(z.a,{children:[Object(H.jsxs)(sn,{children:[Object(H.jsx)(dn,{onClick:function(){return function(e,n){"light"===e?(n("dark"),localStorage.setItem("activeTheme","dark")):(n("light"),localStorage.setItem("activeTheme","light"))}(t,a)},children:Object(H.jsx)(X.a,{i18nKey:"Toggle Theme"})}),Object(H.jsx)(cn,{}),Object(H.jsx)(rn,{changeLanguage:function(e){return c.changeLanguage(e)}})]}),Object(H.jsx)(Te,{}),Object(H.jsxs)(M.c,{children:[Object(H.jsx)(M.a,{exact:!0,path:"/",component:Se}),Object(H.jsx)(M.a,{path:"/profile-summary/:userId",component:Fe}),Object(H.jsx)(M.a,{exact:!0,path:"/profile-summary",component:Je})]})]}),Object(H.jsx)(nn,{})]})})},un=t(49),jn=t(14);Pe.a.use(un.a).use(jn.e).init({resources:{en:{translations:{"Toggle Theme":"Toggle Theme","Change language":"Change language: ",Loading:"Loading...","Select columns":"Select columns","Please select a profile in":"Please select a profile in","Profile summary":"Profile summary",Profiles:"Profiles",Apply:"Apply",Close:"Close","Profile Summary Page":"Profile Summary Page","General Info":"General Info","Profile name":"Profile name:",Name:"Name:","Create date":"Create date:","Phone number":"Phone number:",Email:"Email:",Adress:"Adress:",Picture:"Picture:",profile_name:"Profile name",profile_status:"Profile status",create_date:"Create date",email:"Email",phone_number:"Phone number",active:"Active",delete:"Delete",paused:"Paused"}},ru:{translations:{"Toggle Theme":"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0435\u043c\u0443","Change language":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044f\u0437\u044b\u043a: ",Loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...","Select columns":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0446\u044b","Please select a profile in":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0432","Profile summary":"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",Profiles:"\u041f\u0440\u043e\u0444\u0438\u043b\u0438",Apply:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c",Close:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","Profile Summary Page":"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f","General Info":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f","Profile name":"\u0418\u043c\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f:",Name:"\u0418\u043c\u044f:","Create date":"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f:","Phone number":"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430:",Email:"\u042d\u043b\u0435\u043a\u0442\u0440.\u043f\u043e\u0447\u0442\u0430:",Adress:"\u0410\u0434\u0440\u0435\u0441:",Picture:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430:",profile_name:"\u0418\u043c\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",profile_status:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",create_date:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",email:"Email",phone_number:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",active:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439",delete:"\u0423\u0434\u0430\u043b\u0451\u043d",paused:"\u041f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d"}}},fallbackLng:"en",debug:!0,ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1}});Pe.a,t(88);B.a.render(Object(H.jsx)(bn,{}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.c67a26e0.chunk.js.map