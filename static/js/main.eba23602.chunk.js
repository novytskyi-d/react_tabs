(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(5),s=c(1),d=c.n(s),b=(c(10),c(11),c(12),c(4)),o=c.n(b),l=c(0),r=d.a.memo((function(t){var e=t.selectedTabId,c=t.tabs,n=t.onTabSelected,a=c.find((function(t){return t.id===e}))||c[0];return Object(l.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:c.map((function(t){var e=t.id===a.id;return Object(l.jsx)("li",{className:o()({"is-active":e}),"data-cy":"Tab",children:Object(l.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t){t.id!==a.id&&n(t)}(t)},children:t.title})},t.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:a.content})]})})),j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=j[0],m=function(){var t=Object(s.useState)(u),e=Object(i.a)(t,2),c=e[0],n=e[1],a=Object(s.useCallback)((function(t){n(t)}),[]);return Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(l.jsx)(r,{tabs:j,selectedTabId:c.id,onTabSelected:a})]})};a.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.eba23602.chunk.js.map