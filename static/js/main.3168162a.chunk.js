(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{24:function(e,t,n){e.exports={App:"App_App__1GIFg"}},25:function(e,t,n){e.exports={ModalContainer:"Modal_ModalContainer__2Xg7A"}},26:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__P8r0p"}},31:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(23),s=n.n(r),o=(n(31),n(24)),i=n.n(o),l=n(6),j=n(2),p=n(8),d=n.n(p),u=n(13),h=n(5),b=n(14),O=n.n(b),x=n(7),g=n.n(x),m=n(25),f=n.n(m),v=n(0),k=function(e){var t="";return"Request failed with status code 400"===e.error?t="Entries missing or incorrect":"Request failed with status code 402"===e.error?t="Account already exists.":"Request failed with status code 401"===e.error&&(t="Incorrect password or email"),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:f.a.ModalContainer,style:{transform:e.show?"translateY(0)":"translateY(-75vh)"},children:[Object(v.jsx)("h1",{children:"Error"}),e.error,Object(v.jsx)("p",{children:Object(v.jsx)("strong",{children:t})})]})})},w=n(26),F=n.n(w),_=function(e){var t=Object(v.jsx)("div",{className:F.a.Backdrop,onClick:e.errorDeletehandler});return!1===e.show&&(t=null),t};var C=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(h.a)(r,2),o=s[0],i=s[1],j=Object(a.useState)(""),p=Object(h.a)(j,2),b=p[0],x=p[1],m=Object(a.useState)(""),f=Object(h.a)(m,2),w=f[0],F=f[1],C=Object(a.useState)(""),P=Object(h.a)(C,2),y=P[0],N=P[1],S=Object(a.useState)(""),A=Object(h.a)(S,2),L=A[0],E=A[1],I=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={email:b,password:w,name:y,mobile:L},O.a.post("https://ttmg-backend.herokuapp.com/api/auth/staffRegister",t).then((function(e){200===e.status&&(window.location.href=" http://localhost:3000/login-page-api/LandingPage")})).catch((function(e){i(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={email:b,password:w},O.a.post("https://ttmg-backend.herokuapp.com/api/auth/staffLogin",t).then((function(e){200===e.status&&(window.location.href=" http://localhost:3000/login-page-api/LandingPage")})).catch((function(e){i(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){i("")},M=Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(_,{show:""!==o,errorDeletehandler:D}),Object(v.jsx)("p",{children:"Name:"}),Object(v.jsx)("input",{type:"text",placeholder:" Full Name",onChange:function(e){return N(e.target.value)}}),Object(v.jsx)("p",{children:"Phone Number:"}),Object(v.jsx)("input",{type:"tel",placeholder:" Phone Number",onChange:function(e){return E(e.target.value)}}),Object(v.jsx)("p",{children:"Email Address:"}),Object(v.jsx)("input",{type:"email",onChange:function(e){return x(e.target.value)},placeholder:" Email"}),Object(v.jsx)("p",{children:"Password:"}),Object(v.jsxs)("div",{className:g.a.tooltip,children:[Object(v.jsx)("input",{type:"password",onChange:function(e){return F(e.target.value)},placeholder:" Password"}),Object(v.jsx)("span",{className:g.a.tooltiptext,children:"Password length should be more than 8."})]})," ",Object(v.jsx)("br",{}),Object(v.jsx)("button",{onClick:I,children:"Sign-Up"}),Object(v.jsxs)("p",{style:{fontSize:"12px"},children:["Already have an account ? "," ",Object(v.jsx)("span",{className:g.a.Option,onClick:function(){return c(!n)},children:"Login"})]})]});return n&&(M=Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(_,{show:""!==o,errorDeletehandler:D}),Object(v.jsx)("p",{children:"Email Address:"}),Object(v.jsx)("input",{type:"email",onChange:function(e){return x(e.target.value)},placeholder:" Email"}),Object(v.jsx)("p",{children:"Password:"}),Object(v.jsx)("input",{type:"password",onChange:function(e){return F(e.target.value)},placeholder:" Password"}),Object(v.jsx)("br",{}),Object(v.jsx)(l.b,{to:"/",children:Object(v.jsx)("button",{onClick:B,children:"Login"})}),Object(v.jsxs)("p",{style:{fontSize:"12px"},children:["Don't have an account ?  "," ",Object(v.jsx)("span",{className:g.a.Option,onClick:function(){return c(!n)},children:"Sign-up"})]})]})),Object(v.jsxs)("div",{children:[Object(v.jsx)(k,{show:""!==o,error:o,children:o}),Object(v.jsx)("div",{className:g.a.FeedbackForm,children:Object(v.jsx)("div",{className:g.a.InputContainer,children:M})})]})};var P=function(){return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Landing Page"}),Object(v.jsx)(l.b,{to:"/login-page-api/signUp",children:Object(v.jsx)("button",{children:"Log-Out"})})]})})},y=function(){return Object(v.jsx)(l.b,{link:!0,to:"/login-page-api/signUp",children:Object(v.jsx)("button",{children:"Click to start"})})};var N=function(){return Object(v.jsx)(l.a,{children:Object(v.jsx)("div",{className:i.a.App,children:Object(v.jsxs)(j.c,{children:[Object(v.jsx)(j.a,{exact:!0,path:"/login-page-api",element:Object(v.jsx)(y,{})}),Object(v.jsx)(j.a,{exact:!0,path:"/login-page-api/signUp",element:Object(v.jsx)(C,{})}),Object(v.jsx)(j.a,{exact:!0,path:"/login-page-api/LandingPage",element:Object(v.jsx)(P,{})})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),S()},7:function(e,t,n){e.exports={FeedbackForm:"FeedbackForm_FeedbackForm__1Qosx",InputContainer:"FeedbackForm_InputContainer__2b4KP",Address:"FeedbackForm_Address__3iP-t",Option:"FeedbackForm_Option__3NWVX",tooltip:"FeedbackForm_tooltip__19rlZ",tooltiptext:"FeedbackForm_tooltiptext__3rsHt"}}},[[52,1,2]]]);
//# sourceMappingURL=main.3168162a.chunk.js.map