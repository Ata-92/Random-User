(this["webpackJsonprandom-user"]=this["webpackJsonprandom-user"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(12),i=a.n(s),r=(a(19),a(14)),o=(a(20),a.p+"static/media/email.e1f03bb9.svg"),l=a.p+"static/media/phone.d017e1ae.svg",m=a.p+"static/media/location.0b7d98ab.svg",u=a(13),j=a.n(u),d=a(0);var g=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],s=function(){j.a.get("https://randomuser.me/api/").then((function(e){return e.data.results.map((function(e){return{image:"".concat(e.picture.large),name:"".concat(e.name.title," ").concat(e.name.first," ").concat(e.name.last),email:"".concat(e.email),phone:"".concat(e.cell),location:"".concat(e.location.city," - ").concat(e.location.country),age:"Age: ".concat(e.dob.age),registration:"Register Date: ".concat(e.registered.date.slice(0,10))}}))})).then((function(e){return n(e)}))};return Object(c.useEffect)(s,[]),Object(d.jsxs)("div",{className:"App",children:[a.map((function(e){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:e.image,alt:"user",className:"user-image"}),Object(d.jsx)("h1",{className:"user-name",children:e.name}),Object(d.jsx)("img",{src:o,alt:"Email Icon",className:"email-image"}),Object(d.jsx)("p",{className:"user-email",children:e.email}),Object(d.jsx)("img",{src:l,alt:"Phone Icon",className:"phone-image"}),Object(d.jsx)("p",{className:"user-cell",children:e.phone}),Object(d.jsx)("img",{src:m,alt:"Location Icon",className:"location-image"}),Object(d.jsx)("p",{className:"user-location",children:e.location}),Object(d.jsx)("p",{className:"user-age",children:e.age}),Object(d.jsx)("p",{className:"user-registration",children:e.registration})]})})),Object(d.jsx)("div",{className:"btn",children:Object(d.jsx)("button",{onClick:s,children:"Random User"})})]})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),b()}},[[40,1,2]]]);
//# sourceMappingURL=main.ac1bfe97.chunk.js.map