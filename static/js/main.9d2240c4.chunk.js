(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[0],{207:function(e,t,n){},321:function(e,t,n){},324:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(36),i=n.n(r),s=(n(207),n(132)),o=n.n(s),j=n(170),u=n(11),l=n(424),b=n(397),d=n(54),O=n(104),x=Object(O.b)({name:"currencies",initialState:{data:[]},reducers:{setData:function(e,t){e.data.push(t.payload)},setStatistics:function(e,t){e.data.map((function(e){return e.Cur_ID===t.payload[0].Cur_ID?e.Cur_Statistics=t.payload:e}))}}}),h=x.actions,f=h.setData,p=h.setStatistics,m=x.reducer,v=n(63),g=n(179),C=n(178),y=n(2),S=function(e){var t=e.labels,n=e.data,a=e.label;return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(C.a,{data:{labels:t,datasets:[{label:a,data:n,fill:"origin",backgroundColor:["rgba(0, 0, 0, 0.2)"],borderColor:["rgba(0, 0, 0, 1)"],borderWidth:1}]}})})},D=n(432),_=n(426),w=n(449),I=n(413),k=n(446),E=n(445),R=n(8),M=n(393),U=["expand"],F=Object(R.a)((function(e){e.expand;var t=Object(g.a)(e,U);return Object(y.jsx)(D.a,Object(v.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}})),A=function(e){var t=e.currency,n=e.startDate,c=e.endDate,r=Object(d.b)(),i=Object(a.useState)(!1),s=Object(u.a)(i,2),o=s[0],j=s[1],b={labels:[],data:[]},O=Object(a.useState)(!1),x=Object(u.a)(O,2),h=x[0],f=x[1];return Object(a.useEffect)((function(){t.Cur_Statistics||fetch("https://www.nbrb.by/API/ExRates/Rates/Dynamics/".concat(t.Cur_ID,"?startDate=").concat(n,"&endDate=").concat(c)).then((function(e){return e.json()})).then((function(e){r(p(e)),j(!0)}))}),[r,n,c,t.Cur_ID]),o&&0===b.data.length&&t.Cur_Statistics.map((function(e){return b.labels.push(e.Date.slice(5,10)),b.data.push(e.Cur_OfficialRate)})),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(l.a,{item:!0,children:Object(y.jsxs)(_.a,{children:[Object(y.jsx)(w.a,{avatar:Object(y.jsx)(I.a,{children:t.Cur_Abbreviation}),title:"\u0412\u0430\u043b\u044e\u0442\u0430: ".concat(t.Cur_Name),subheader:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043a\u0443\u0440\u0441: ".concat(t.Cur_OfficialRate),action:Object(y.jsx)(F,{expand:h,onClick:function(){f(!h)},"aria-expanded":h,"aria-label":"show more",children:Object(y.jsx)(M.a,{})})}),Object(y.jsx)(k.a,{in:h,timeout:"auto",unmountOnExit:!0,children:Object(y.jsx)(E.a,{children:Object(y.jsx)(S,{labels:t.Cur_Statistics&&t.Cur_Statistics.map((function(e){return e.Date.slice(5,10)})),data:t.Cur_Statistics&&t.Cur_Statistics.map((function(e){return e.Cur_OfficialRate})),label:t.Cur_Abbreviation})})})]})})})},B=[451,431,456,460,426,429,449],J=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(d.c)((function(e){return e.currencies.data})),i=Object(d.b)();return Object(a.useEffect)((function(){document.title="Exchange rates",0===r.length&&(c(function(e){var t=new Date,n=new Date;return n.setDate(t.getDate()-e),["".concat(n.toJSON().slice(0,10)),"".concat(t.toJSON().slice(0,10))]}(40)),B.map(function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://www.nbrb.by/api/exrates/rates/".concat(t)).then((function(e){return e.json()})).then((function(e){return i(f(e))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[i]),Object(y.jsx)(b.a,{sx:{padding:"1.5vh 0"},children:Object(y.jsx)(l.a,{container:!0,spacing:1.5,direction:"column",children:r.map((function(e){return Object(y.jsx)(A,{currency:e,startDate:n[0],endDate:n[1]},e.Cur_ID)}))})})},G=n(440),N=n(438),L=n(437),P=n(71),T=n(444),W=n(398),z=n(443),Y=n(448),$=n(441),q=n(399);function H(){var e=a.useState(),t=Object(u.a)(e,2),n=t[0],c=t[1];return a.useEffect((function(){c(document.title)}),[document.title]),Object(y.jsx)(W.a,{sx:{flexGrow:1},children:Object(y.jsx)(T.a,{position:"fixed",children:Object(y.jsxs)(z.a,{children:[Object(y.jsx)(D.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(y.jsx)(q.a,{})}),Object(y.jsx)(Y.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:n}),Object(y.jsx)($.a,{color:"inherit",children:"Login"})]})})})}var K=function(){var e=Object(a.useState)("rates"),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(b.a,{sx:{position:"fixed",bottom:0,left:0,width:"100%"},children:Object(y.jsxs)(G.a,{value:n,onChange:function(e,t){c(t)},children:[Object(y.jsx)(N.a,{label:"Rates",value:"rates",icon:Object(y.jsx)(L.a,{children:"trending_up"}),component:P.b,to:"/currency-MUI-pages"}),Object(y.jsx)(N.a,{label:"Savings",value:"savings",icon:Object(y.jsx)(L.a,{children:"savings"}),component:P.b,to:"/currency-MUI-pages/savings"}),Object(y.jsx)(N.a,{label:"Converter",value:"converter",icon:Object(y.jsx)(L.a,{children:"loop"}),component:P.b,to:"/currency-MUI-pages/converter"})]})})})},Q=n(406),V=n(141),X=n(423),Z=n(435),ee=n(433),te=(n(321),n(24)),ne=(n(430),n(412),n(427),n(450),n(431),n(408),n(65),n(400),n(401));var ae=function(){return Object(a.useEffect)((function(){document.title="Curremcy converter"})),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(Y.a,{variant:"h4",component:"div",children:"It's going to be currency converter here."})})},ce=n(422),re=n(415),ie=n(439),se=n(416),oe=n(419),je=n(418),ue=n(407),le=n(414),be=n(429),de=n(428),Oe=n(447);function xe(e){var t=e.onClose,n=e.open,c=(e.savingObj,Object(a.useState)("")),r=Object(u.a)(c,2),i=r[0],s=r[1];return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(ce.a,{open:n,children:[Object(y.jsx)(re.a,{children:"Add Savings"}),Object(y.jsxs)(ie.a,{children:[Object(y.jsx)(se.a,{xs:{color:"inherit"},children:Object(y.jsx)(oe.a,{margin:"normal",label:"Amount",variant:"standard"})}),Object(y.jsxs)(se.a,{margin:"normal",children:[Object(y.jsx)(je.a,{id:"demo-simple-select-label",children:"Currency"}),Object(y.jsxs)(ue.a,{labelId:"currency-select-label",id:"currency-select",value:i,label:"Currency",onChange:function(e){s(e.target.value)},variant:"standard",children:[Object(y.jsx)(le.a,{value:"USD",children:"$"}),Object(y.jsx)(le.a,{value:"GBP",children:"\xa3"}),Object(y.jsx)(le.a,{value:"RUB",children:"\u20bd"}),Object(y.jsx)(le.a,{value:"EUR",children:"\u20ac"}),Object(y.jsx)(le.a,{value:"TRY",children:"\u20a4"}),Object(y.jsx)(le.a,{value:"BTC",children:"\u20bf"})]})]})]}),Object(y.jsxs)(be.a,{children:[Object(y.jsx)(de.a,{variant:"contained",children:"Confirm"}),Object(y.jsx)(de.a,{onClick:function(){return t()},children:"Cansel"})]})]})})}function he(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Y.a,{variant:"h4",component:"div",children:"Coming soon! Monitor your savings here."}),Object(y.jsx)(xe,{onClose:function(){c(!1)},open:n}),Object(y.jsx)(Oe.a,{sx:{margin:"auto 10px 10px auto"},color:"primary","aria-label":"add",onClick:function(){c(!0)},children:Object(y.jsx)(ne.a,{})})]})}var fe=function(){var e=Object(Q.a)("(prefers-color-scheme: dark)"),t=c.a.useMemo((function(){return Object(V.a)({palette:{mode:e?"dark":"light"}})}),[e]);return Object(y.jsx)(P.a,{children:Object(y.jsxs)(X.a,{theme:t,children:[Object(y.jsx)(Z.a,{}),Object(y.jsxs)(ee.a,{maxWidth:"sm",sx:{padding:"7vh 1rem",position:"relative"},children:[Object(y.jsx)(H,{}),Object(y.jsxs)(te.c,{children:[Object(y.jsx)(te.a,{path:"/currency-MUI-pages/savings",children:Object(y.jsx)(he,{})}),Object(y.jsx)(te.a,{path:"/currency-MUI-pages/converter",children:Object(y.jsx)(ae,{})}),Object(y.jsx)(te.a,{path:"/",children:Object(y.jsx)(J,{})})]}),Object(y.jsx)(K,{})]})]})})},pe=Object(O.a)({reducer:{currencies:m}});i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(d.a,{store:pe,children:Object(y.jsx)(fe,{})})}),document.getElementById("root"))}},[[324,1,2]]]);
//# sourceMappingURL=main.9d2240c4.chunk.js.map