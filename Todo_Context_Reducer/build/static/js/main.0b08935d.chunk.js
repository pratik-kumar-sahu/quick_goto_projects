(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(6),o=c.n(n),a=c(4),r=c(1),s=c(7),i=c(16),d=function(t,e){switch(e.type){case"ADD_TODO":return[{id:Object(i.a)(),todo:e.payload}].concat(Object(s.a)(t));case"DELETE_TODO":return t.filter((function(t){return t.id!==e.payload}));default:return t}},u=c(0),j=Object(r.createContext)(),l=function(t){var e=Object(r.useReducer)(d,[]),c=Object(a.a)(e,2),n=c[0],o=c[1];return Object(u.jsx)(j.Provider,{value:{todos:n,dispatch:o},children:t.children})},O=(c(13),function(t){var e=Object(r.useContext)(j),c=(e.todos,e.dispatch),n=t.text,o=t.setText;return Object(u.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),n.trim()&&(c({type:"ADD_TODO",payload:n}),o("")),o("")},children:[Object(u.jsx)("input",{className:"form-input",type:"text",value:n,onChange:function(t){o(t.target.value)},placeholder:"Write today's task"}),Object(u.jsx)("button",{className:"form-button",type:"submit",children:"Save"})]})});function b(t){var e=Object(r.useContext)(j).dispatch,c=t.todo,n=c.id,o=c.todo;return Object(u.jsx)("div",{className:"todo",onClick:function(){return function(t){e({type:"DELETE_TODO",payload:t})}(n)},children:o})}function p(){var t=Object(r.useState)(""),e=Object(a.a)(t,2),c=e[0],n=e[1],o=Object(r.useContext)(j).todos;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{text:c,setText:n,todos:o}),Object(u.jsx)("div",{className:"todo-container",children:o.length>0?o.map((function(t){return Object(u.jsx)(b,{todo:t},t.id)})):Object(u.jsx)("div",{style:{margin:"0 auto"},children:"No Tasks created \ud83e\udd28 add one here \ud83d\udc46\ud83c\udffb"})})]})}var x=document.getElementById("root");o.a.render(Object(u.jsx)(l,{children:Object(u.jsx)(p,{})}),x)}},[[14,1,2]]]);
//# sourceMappingURL=main.0b08935d.chunk.js.map