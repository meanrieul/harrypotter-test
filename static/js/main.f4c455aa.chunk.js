(this["webpackJsonpharrypotter-test"]=this["webpackJsonpharrypotter-test"]||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var a,c,r,s,j,l,i,b,u,o,d,m,O,x,h,p,v,g=n(1),f=n.n(g),Q=n(23),S=n.n(Q),y=n(9),I=n(10),N=n(13),w=n(12),C=n(11),k=n(2),A=n(3),B=n(4),D=n(0),z=B.a.div(a||(a=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 370px;\n"]))),q=B.a.form(c||(c=Object(A.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n  margin-bottom: 100px;\n"]))),J=B.a.input(r||(r=Object(A.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 300px;\n"]))),L=B.a.button(s||(s=Object(A.a)([""]))),E=B.a.div(j||(j=Object(A.a)(["\n  margin: 100px;\n  height: 40px;\n"]))),F=Object(B.a)(C.b)(l||(l=Object(A.a)(["\n  display: flex;\n  width: 200px;\n  height: 40px;\n  border: 2px solid black;\n  border-radius: 14px;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  background-color: black;\n  color: white;\n  font-size: 20px;\n"]))),G=function(e){var t=e.userName,n=e.handleSubmit,a=e.updateName,c=e.currentName;return Object(D.jsxs)(z,{children:[Object(D.jsx)("div",{children:"\ub9c8\ubc95\uc0ac \uc138\uc0c1\uc5d0\uc11c \ub2f9\uc2e0\uc758 \ub4e0\ub4e0\ud55c \uc870\ub825\uc790\uac00 \ub420 \ubca0\uc2a4\ud2b8 \ud504\ub80c\ub4dc\ub97c \ucc3e\uc544\ubcf4\uc138\uc694!"}),Object(D.jsxs)(q,{onSubmit:n,children:[Object(D.jsx)(J,{placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:t,onChange:a}),Object(D.jsx)(L,{children:"\uc800\uc7a5"})]}),Object(D.jsx)(E,{children:c&&"\uc548\ub155\ud558\uc138\uc694, ".concat(c,"\ub2d8!")}),Object(D.jsx)(F,{to:"/questions",children:"\uc2dc\uc791\ud558\uae30"})]})},H=function(e){Object(N.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={userName:"",currentName:""},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.userName&&e.saveLocalStorage()},e.updateName=function(t){var n=t.target.value;e.setState({userName:n})},e.saveLocalStorage=function(){var t=e.state.userName;localStorage.setItem("userName",t),e.setState({currentName:t})},e}return Object(I.a)(n,[{key:"render",value:function(){var e=this.state,t=e.userName,n=e.currentName;return Object(D.jsx)(G,{userName:t,handleSubmit:this.handleSubmit,updateName:this.updateName,currentName:n})}}]),n}(f.a.Component),K=B.a.div(i||(i=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]))),M=B.a.div(b||(b=Object(A.a)(["\n  display: flex;\n  width: 20%;\n  flex-direction: column;\n  align-items: center;\n  font-size: 10px;\n"]))),P=function(e){var t=e.num;return Object(D.jsxs)(K,{children:[Object(D.jsxs)(M,{children:[Object(D.jsx)("input",{type:"radio",name:t,value:0}),Object(D.jsx)("label",{children:"\uc808\ub300 \uc544\ub2c8\ub2e4"})]}),Object(D.jsxs)(M,{children:[Object(D.jsx)("input",{type:"radio",name:t,value:5}),Object(D.jsx)("label",{children:"\uc544\ub2c8\ub2e4"})]}),Object(D.jsxs)(M,{children:[Object(D.jsx)("input",{type:"radio",name:t,value:10}),Object(D.jsx)("label",{children:"\ubcf4\ud1b5"})]}),Object(D.jsxs)(M,{children:[Object(D.jsx)("input",{type:"radio",name:t,value:15}),Object(D.jsx)("label",{children:"\uadf8\ub807\ub2e4"})]}),Object(D.jsxs)(M,{children:[Object(D.jsx)("input",{type:"radio",name:t,value:20}),Object(D.jsx)("label",{children:"\ub9e4\uc6b0 \uadf8\ub807\ub2e4"})]})]})},R=B.a.div(u||(u=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 370px;\n"]))),T=B.a.form(o||(o=Object(A.a)(["\n  width: 100%;\n"]))),U=B.a.div(d||(d=Object(A.a)(["\n  margin-bottom: 30px;\n"]))),V=B.a.button(m||(m=Object(A.a)([""]))),W=Object(B.a)(C.b)(O||(O=Object(A.a)([""]))),X=function(e){var t=e.handleSubmitA,n=e.handleSubmitB,a=e.handleSubmitC;return Object(D.jsxs)(R,{children:[Object(D.jsxs)(T,{onSubmit:t,children:[Object(D.jsxs)(U,{children:["Q1. \uc6a9\uae30",Object(D.jsx)(P,{num:"Q1"})]}),Object(D.jsxs)(U,{children:["Q2. \uc6a9\uae30",Object(D.jsx)(P,{num:"Q2"})]}),Object(D.jsxs)(U,{children:["Q3. \uc6a9\uae30",Object(D.jsx)(P,{num:"Q3"})]}),Object(D.jsxs)(U,{children:["Q4. \uc6a9\uae30",Object(D.jsx)(P,{num:"Q4"})]}),Object(D.jsxs)(U,{children:["Q5. \uc6a9\uae30",Object(D.jsx)(P,{num:"Q5"})]}),Object(D.jsx)(V,{children:"\uc800\uc7a5"})]}),Object(D.jsxs)(T,{onSubmit:n,children:[Object(D.jsxs)(U,{children:["Q1. \uc9c0\uc2dd",Object(D.jsx)(P,{num:"Q1"})]}),Object(D.jsxs)(U,{children:["Q2. \uc9c0\uc2dd",Object(D.jsx)(P,{num:"Q2"})]}),Object(D.jsxs)(U,{children:["Q3. \uc9c0\uc2dd",Object(D.jsx)(P,{num:"Q3"})]}),Object(D.jsxs)(U,{children:["Q4. \uc9c0\uc2dd",Object(D.jsx)(P,{num:"Q4"})]}),Object(D.jsxs)(U,{children:["Q5. \uc9c0\uc2dd",Object(D.jsx)(P,{num:"Q5"})]}),Object(D.jsx)(V,{children:"\uc800\uc7a5"})]}),Object(D.jsxs)(T,{onSubmit:a,children:[Object(D.jsxs)(U,{children:["Q1. \uc695\uc2ec",Object(D.jsx)(P,{num:"Q1"})]}),Object(D.jsxs)(U,{children:["Q2. \uc695\uc2ec",Object(D.jsx)(P,{num:"Q2"})]}),Object(D.jsxs)(U,{children:["Q3. \uc695\uc2ec",Object(D.jsx)(P,{num:"Q3"})]}),Object(D.jsxs)(U,{children:["Q4. \uc695\uc2ec",Object(D.jsx)(P,{num:"Q4"})]}),Object(D.jsxs)(U,{children:["Q5. \uc695\uc2ec",Object(D.jsx)(P,{num:"Q5"})]}),Object(D.jsx)(V,{children:"\uc800\uc7a5"})]}),Object(D.jsx)(W,{to:"/result",children:"\uacb0\uacfc\ubcf4\uae30"})]})},Y=function(e){Object(N.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e.handleSubmitA=function(e){e.preventDefault();var t=parseInt(e.target.elements.Q1.value)+parseInt(e.target.elements.Q2.value)+parseInt(e.target.elements.Q3.value)+parseInt(e.target.elements.Q4.value)+parseInt(e.target.elements.Q5.value);localStorage.setItem("scoreA",t)},e.handleSubmitB=function(e){e.preventDefault();var t=parseInt(e.target.elements.Q1.value)+parseInt(e.target.elements.Q2.value)+parseInt(e.target.elements.Q3.value)+parseInt(e.target.elements.Q4.value)+parseInt(e.target.elements.Q5.value);localStorage.setItem("scoreB",t)},e.handleSubmitC=function(e){e.preventDefault();var t=parseInt(e.target.elements.Q1.value)+parseInt(e.target.elements.Q2.value)+parseInt(e.target.elements.Q3.value)+parseInt(e.target.elements.Q4.value)+parseInt(e.target.elements.Q5.value);localStorage.setItem("scoreC",t)},e}return Object(I.a)(n,[{key:"render",value:function(){return Object(D.jsx)(X,{handleSubmitA:this.handleSubmitA,handleSubmitB:this.handleSubmitB,handleSubmitC:this.handleSubmitC})}}]),n}(f.a.Component),Z=B.a.div(x||(x=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 370px;\n"]))),$=B.a.div(h||(h=Object(A.a)([""]))),_=B.a.div(p||(p=Object(A.a)(["\n  margin-top: 50px;\n"]))),ee=Object(B.a)(C.b)(v||(v=Object(A.a)([""]))),te=function(){return Object(D.jsxs)(Z,{children:[Object(D.jsxs)("div",{children:[Object(D.jsx)($,{children:"ScoreA: ".concat(localStorage.getItem("scoreA"))}),Object(D.jsx)($,{children:"ScoreB: ".concat(localStorage.getItem("scoreB"))}),Object(D.jsx)($,{children:"ScoreC: ".concat(localStorage.getItem("scoreC"))}),"\uc704\uc640 \uac19\uc740 \uc131\uaca9\uc744 \uac00\uc9c4",localStorage.getItem("userName")?" ".concat(localStorage.getItem("userName"),"\ub2d8\uc758 \ubca0\uc2a4\ud2b8 \ud504\ub80c\ub4dc\ub294?"):" \ub2f9\uc2e0\uc758 \ubca0\uc2a4\ud2b8 \ud504\ub80c\ub4dc\ub294?"]}),Object(D.jsx)(_,{children:"\uc785\ub2c8\ub2e4."}),Object(D.jsx)(ee,{to:"/",children:"\ub2e4\uc2dc\ud558\uae30!"})]})},ne=function(e){Object(N.a)(n,e);var t=Object(w.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){return Object(D.jsx)(te,{})}}]),n}(f.a.Component),ae=function(){return Object(D.jsxs)(C.a,{children:[Object(D.jsx)(k.a,{path:"/",exact:!0,component:H}),Object(D.jsx)(k.a,{path:"/questions",component:Y}),Object(D.jsx)(k.a,{path:"/result",component:ne})]})},ce=function(e){Object(N.a)(n,e);var t=Object(w.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(ae,{})})}}]),n}(g.Component);S.a.render(Object(D.jsx)(ce,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f4c455aa.chunk.js.map