(this["webpackJsonpsolitaire-calendar"]=this["webpackJsonpsolitaire-calendar"]||[]).push([[0],[,,function(e,a,t){e.exports=t.p+"static/media/joker.ae567fe4.png"},,,,function(e,a,t){e.exports=t(14)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),o=t.n(c),l=(t(11),t(3)),i=t(1),s=(t(12),t(2)),d=t.n(s);var m=function(){var e=(new Date).getFullYear(),a=function(e){var a=new Date(e.getFullYear(),0,0),t=e-a+60*(a.getTimezoneOffset()-e.getTimezoneOffset())*1e3;return Math.floor(t/864e5)}(new Date),t=["\u2666","\u2663","\u2665","\u2660"],c=["A","2","3","4","5","6","7","8","9","10","J","Q","K","JOKER"],o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=Math.floor((a-1)/28),m=Math.floor((a-1)%28/7),u=Math.floor((a-1)%28%7),f=Object(n.useState)(e),h=Object(l.a)(f,2),v=h[0],y=h[1],p=Object(n.useState)(s),E=Object(l.a)(p,2),g=E[0],w=E[1];Object(n.useEffect)((function(){i.a.rebuild()}),[]);var k=c[g],b=t[v%4],N=function(e){return"\u2663"===e||"\u2660"===e?"black":"red"},J=function(e,a,n,c,o){var l="day ".concat(o?"day--today":""," ").concat(0===a?"day-of-week--first":""," ").concat(a===n.length-1?"day-of-week--last":"");return r.a.createElement("div",{className:l,key:a,"data-for":"tooltip-day","data-tip":JSON.stringify({dayIndex:a,weekIndex:c})},0===a&&r.a.createElement("div",{className:"week-label ".concat(N(t[c]))},r.a.createElement("div",null,k),r.a.createElement("div",null,t[c])),r.a.createElement("div",{className:"text"},e),a===n.length-1&&r.a.createElement("div",{className:"week-label week-label--end ".concat(N(t[c]))},r.a.createElement("div",null,k),r.a.createElement("div",null,t[c])))};return r.a.createElement("div",{className:"calendar"},r.a.createElement(i.a,{id:"tooltip-day",type:"light",border:!0,getContent:function(e){return function(e){if(!e)return null;var a=JSON.parse(e),n=a.dayIndex,r=a.weekIndex,l=a.isJoker,i=void 0!==l&&l,s=28*g+7*r+n+1,d=new Date(v,0,s),m=Math.floor((s-1)/91),u=Math.floor((s-1)%91/7),f=t[m],h=c[u];return i?"\ndate: ".concat(d.getDate()," ").concat(o[d.getMonth()],"\n<br>\nday in year: ").concat(s,'\n<br>\n<span class="red">JOKER</span>\n'):"\ndate: ".concat(d.getDate()," ").concat(o[d.getMonth()],"\n<br>\nday in year: ").concat(s,'\n<br>\nMonth: <span class="').concat(N(b),'">').concat(b).concat(k,'</span>\n<br>\nWeek : <span class="').concat(N(t[r]),'">').concat(t[r]).concat(k,'</span>\n<br>\nSeason: <span class="').concat(N(f),'">').concat(f).concat(h,"</span>\n")}(e)},html:!0,className:"tooltip-day",clickable:!0}),r.a.createElement("div",{className:"calendar-container"},r.a.createElement("div",{className:"calendar--header"},r.a.createElement("div",{className:"year"},b," ",v),r.a.createElement("div",{className:"month"},r.a.createElement("div",{className:"arrow arrow--left",onClick:function(){var e=(c.length+g-1)%c.length;w(e),e===c.length-1&&y(v-1),setTimeout((function(){return i.a.rebuild()}),100)}},"<"),r.a.createElement("div",null,"JOKER"===k?k:"The month of ".concat(k)),r.a.createElement("div",{className:"arrow arrow--right",onClick:function(){var e=(g+1)%c.length;w(e),0===e&&y(v+1),setTimeout((function(){return i.a.rebuild()}),100)}},">"))),r.a.createElement("div",{className:"calendar--body"},13===g?r.a.createElement((function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"52%"}},r.a.createElement("div",{"data-for":"tooltip-day","data-tip":JSON.stringify({dayIndex:0,weekIndex:0,isJoker:!0}),style:{width:"50%"}},r.a.createElement("img",{src:d.a,width:"100%",alt:"joker day"})),function(e){return e%4===0&&e%100!==0||e%400===0}(v)&&r.a.createElement("div",{"data-for":"tooltip-day","data-tip":JSON.stringify({dayIndex:1,weekIndex:0,isJoker:!0}),style:{width:"50%"}},r.a.createElement("img",{src:d.a,width:"100%",alt:"joker day",style:{transform:"rotateY(180deg)"}})))}),null):[[1,2,3,4,5,6,7],[8,9,10,11,12,13,14],[15,16,17,18,19,20,21],[22,23,24,25,26,27,28]].map((function(a,t){return function(a,t){return r.a.createElement("div",{className:"week",key:t},a.map((function(n,r){return J(n,r,a,t,e===v&&s===g&&t===m&&r===u)})))}(a,t)})))))};t(13);var u=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.ff49a14c.chunk.js.map