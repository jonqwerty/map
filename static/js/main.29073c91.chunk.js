(this.webpackJsonpmap=this.webpackJsonpmap||[]).push([[0],{30:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),c=n(7),o=n.n(c),s=(n.p,n(30),n(31),n(25)),l=n(3),r=n(9),u=(n(15),n(24),n(6)),p=n.n(u),j=n(0),h=function(t){var e=Object(i.useState)(""),n=Object(l.a)(e,2),a=n[0],c=n[1],o=Object(i.useState)(""),s=Object(l.a)(o,2),r=s[0],u=s[1],h=Object(i.useState)(""),b=Object(l.a)(h,2),g=b[0],O=b[1],d=Object(i.useState)(""),x=Object(l.a)(d,2),f=x[0],m=x[1];return Object(j.jsx)("div",{style:{height:"500px",width:"6em",backgroundColor:"grey",textAlign:"center",fontSize:"40px"},children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("label",{children:["\u0428\u0438\u0440\u043e\u0442\u0430:",Object(j.jsx)("input",{value:a,type:"text",onChange:function(t){c(t.target.value.split(" ").join(""))}})]}),Object(j.jsxs)("label",{children:["\u0414\u043e\u0432\u0433\u043e\u0442\u0430:",Object(j.jsx)("input",{value:r,type:"text",onChange:function(t){u(t.target.value.split(" ").join(""))}})]}),Object(j.jsxs)("label",{children:["\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f:",Object(j.jsx)("input",{value:g,type:"text",onChange:function(t){O(t.target.value.split(" ").join(""))}})]}),Object(j.jsxs)("label",{children:["\u0424\u043e\u0442\u043e (Url):",Object(j.jsx)("input",{value:f,type:"text",onChange:function(t){m(t.target.value.split(" ").join(""))}})]}),Object(j.jsx)("button",{onClick:function(e){if(e.preventDefault(),a.match(/^[0-9]+[.]?[0-9]+$/)&&r.match(/^[0-9]+[.]?[0-9]+$/)&&g.length&&f.length){var n={lat:a,lng:r,info:g,image:f};console.log(n);p.a.post("https://quiet-bastion-79730.herokuapp.com/",n,{headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}}).then((function(t){console.log("RESPONSE RECEIVED: ",t)})).catch((function(t){console.log("AXIOS ERROR: ",t)})),c(""),u(""),O(""),m(""),t.setFlag(!t.flag)}else alert('Coordinates must be numeric with ".", and all fields must be filling')},children:"\u0417\u0434\u0430\u0442\u0438 \u0432 \u043e\u0440\u0435\u043d\u0434\u0443"})]})})},b={width:"800px",height:"500px"},g=Object(r.GoogleApiWrapper)({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/map",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://quiet-bastion-79730.herokuapp.com/",REACT_APP_API_URLl:"http://localhost:5000/"}).API_KEY})((function(t){var e=t.google,n=Object(i.useState)(!1),a=Object(l.a)(n,2),c=a[0],o=a[1],u=Object(i.useState)([]),g=Object(l.a)(u,2),O=g[0],d=g[1],x=Object(i.useState)([]),f=Object(l.a)(x,2),m=f[0],v=f[1],S=Object(i.useState)(""),C=Object(l.a)(S,2),y=C[0],E=C[1];Object(i.useEffect)((function(){p.a.get("https://quiet-bastion-79730.herokuapp.com/").then((function(t){return d(JSON.parse(t.data.positions))})),p.a.get("https://quiet-bastion-79730.herokuapp.com/").then((function(t){return v(JSON.parse(t.data.positions))}))}),[]),Object(i.useEffect)((function(){setTimeout((function(){return p.a.get("https://quiet-bastion-79730.herokuapp.com/").then((function(t){return d(JSON.parse(t.data.positions))}))}),3e3)}),[c]);var A=function(t){for(var n=[],i=y.map.getBounds(),a=0;a<O.length;a++)i.contains(new e.maps.LatLng(O[a].lat,O[a].lng))&&n.push(O[a]);v(n)},_=function(t){var e=t.position.lat,n=m.find((function(t){return t.lat===e})),i=m.filter((function(t){return t.lat!==e})),a=[n].concat(Object(s.a)(i));v(a)};return Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"20px",height:"100%"},children:[Object(j.jsx)(h,{flag:c,setFlag:o}),Object(j.jsx)("div",{style:{width:"800px",height:"500px"},children:Object(j.jsx)(r.Map,{id:"map",className:"map",google:e,zoom:11,style:b,initialCenter:{lat:50.44055686944465,lng:30.53022771561217},ref:function(t){return E(t)},onDragend:A,onZoomChanged:A,children:m.map((function(t){return Object(j.jsx)(r.Marker,{position:{lat:t.lat,lng:t.lng},onClick:_},t.id)}))})}),Object(j.jsx)("div",{style:{width:"300px"},children:m.map((function(t){return Object(j.jsxs)("div",{style:{border:"solid black 2px",margin:"10px"},children:[Object(j.jsx)("div",{style:{maxWidth:"300px",maxHeight:"350px"},children:Object(j.jsx)("img",{style:{maxWidth:"100%",maxHeight:"100%"},src:t.image,alt:"image"})}),Object(j.jsxs)("div",{style:{margin:"10px"},children:[t.info," "]})]},t.id)}))})]})})),O=function(){return Object(j.jsx)("div",{style:{height:"100px",width:"100%",backgroundColor:"grey",textAlign:"center",fontSize:"80px"},children:"SOME PLACES IN MAP"})};var d=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{}),Object(j.jsx)(g,{})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),i(t),a(t),c(t),o(t)}))};console.log("https://quiet-bastion-79730.herokuapp.com/"),o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),x()}},[[78,1,2]]]);
//# sourceMappingURL=main.29073c91.chunk.js.map