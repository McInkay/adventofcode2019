(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,function(t,n,r){"use strict";r.r(n),r.d(n,"name",(function(){return a})),r.d(n,"part1",(function(){return u})),r.d(n,"part2",(function(){return i}));var e=r(12),a="Fuel",u=function(t){return e.part1(t)},i=function(t){return e.part2(t)}},function(t,n,r){"use strict";r.r(n),r.d(n,"part1",(function(){return e})),r.d(n,"part2",(function(){return a})),r.d(n,"name",(function(){return u}));var e=r(13),a=r(14),u="IntCode"},function(t,n){t.exports=function(t){for(var n=0;;){var e=t[n];if(99===e)return t;var a=r[e];if(!a)return;n=a(t,n)}};var r={1:function(t,n){var r=t[++n],e=t[++n];return t[t[++n]]=t[r]+t[e],n+1},2:function(t,n){var r=t[++n],e=t[++n];return t[t[++n]]=t[r]*t[e],n+1}}},function(t,n,r){"use strict";r.r(n),r.d(n,"part1",(function(){return e})),r.d(n,"part2",(function(){return a})),r.d(n,"name",(function(){return u}));var e=r(16),a=r(17),u="Line Crossing"},function(t,n,r){"use strict";r.r(n),r.d(n,"part1",(function(){return e})),r.d(n,"part2",(function(){return a})),r.d(n,"name",(function(){return u}));var e=r(18),a=r(19),u="Passwords"},,,function(t,n){t.exports={part1:function(t){return t.split("\n").filter((function(t){return t})).reduce((function(t,n){return t+r(Number(n))}),0)},part2:function(t){return t.split("\n").filter((function(t){return t})).reduce((function(t,n){return t+e(Number(n))}),0)}};var r=function(t){return Math.floor(t/3)-2},e=function(t){for(var n=r(t),e=0;n>0;){var a=Math.floor(n/3)-2;n=a,a>0&&(e+=n)}return r(t)+e}},function(t,n,r){var e=r(7);t.exports=function(t){var n=t.split(",").map((function(t){return Number(t)}));return n[1]=12,n[2]=2,e(n)[0]}},function(t,n,r){var e=r(15),a=r(7);t.exports=function(t){for(var n=t.split(",").map((function(t){return Number(t)})),r=0;r<100;r++)for(var u=0;u<100;u++){var i=n.slice(0);i[1]=r,i[2]=u;var c=a(i);if(19690720===e(c,1)[0])return"i: ".concat(r,", j: ").concat(u)}}},,function(t,n,r){var e=r(23),a=r(24),u=(r(25),function(){"use strict";function t(n,r){e(this,t),this.x=n,this.y=r}return a(t,[{key:"right",value:function(t){return this.x+=t,this}},{key:"left",value:function(t){return this.x-=t,this}},{key:"up",value:function(t){return this.y+=t,this}},{key:"down",value:function(t){return this.y-=t,this}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y)}}]),t}()),i={},c=[];t.exports=function(t){var n;return t.split("\n").filter((function(t){return t})).forEach((function(t,n){var r=new u(0,0);t.split(",").forEach((function(t){for(var e=t.substring(0,1),a=Number(t.substring(1)),u=0;u<a;u++){switch(e){case"R":r.right(1);break;case"L":r.left(1);break;case"U":r.up(1);break;case"D":r.down(1)}var o=r.toString();i[o]=i[o]||[],i[o].push(n),i[o].includes(0)&&i[o].includes(1)&&c.push(o)}}))})),c.forEach((function(t){var r=function(t){return t.split(",").reduce((function(t,n){return t+Math.abs(1*Number(n))}),0)}(t);n?r<n&&(n=r):n=r})),n}},function(t,n,r){var e=r(23),a=r(24),u=(r(25),function(){"use strict";function t(n,r){e(this,t),this.x=n,this.y=r}return a(t,[{key:"right",value:function(t){return this.x+=t,this}},{key:"left",value:function(t){return this.x-=t,this}},{key:"up",value:function(t){return this.y+=t,this}},{key:"down",value:function(t){return this.y-=t,this}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y)}}]),t}()),i={},c=[];t.exports=function(t){var n;return t.split("\n").filter((function(t){return t})).forEach((function(t,n){var r=new u(0,0),e=0;t.split(",").forEach((function(t){for(var a=t.substring(0,1),u=Number(t.substring(1)),o=0;o<u;o++){switch(e++,a){case"R":r.right(1);break;case"L":r.left(1);break;case"U":r.up(1);break;case"D":r.down(1)}var f=r.toString();i[f]=i[f]||[],i[f][n]=i[f][n]||e,i[f][0]&&i[f][1]&&c.push(i[f][0]+i[f][1])}}))})),c.forEach((function(t){n?t<n&&(n=t):n=t})),n}},function(t,n,r){var e=r(15);t.exports=function(t){return a(t).filter(u).length};var a=function(t){for(var n=t.split("-"),r=e(n,2),a=r[0],u=r[1],i=[],c=a;c<=u;c++)i.push(String(c));return i},u=function(t){return i(t)&&c(t)&&o(t)},i=function(t){return 6===t.length&&Number.isInteger(Number(t))},c=function(t){for(var n=0;n<t.length-1;n++)if(t[n]===t[n+1])return!0;return!1},o=function(t){for(var n=0;n<t.length-1;n++)if(t[n]>t[n+1])return!1;return!0}},function(t,n,r){var e=r(15);t.exports=function(t){return a(t).filter(u).length};var a=function(t){for(var n=t.split("-"),r=e(n,2),a=r[0],u=r[1],i=[],c=a;c<=u;c++)i.push(String(c));return i},u=function(t){return i(t)&&c(t)&&o(t)},i=function(t){return 6===t.length&&Number.isInteger(Number(t))},c=function(t){for(var n=0;n<t.length-1;n++)if(t[n]===t[n+1]&&t[n]!==t[n+2]&&(0===n||t[n]!==t[n-1]))return!0;return!1},o=function(t){for(var n=0;n<t.length-1;n++)if(t[n]>t[n+1])return!1;return!0}},,,,,,,,,,,,function(t,n,r){t.exports=r(54)},,,,,function(t,n,r){},function(t,n,r){},,,,,,,,,function(t,n,r){var e={"./day1":5,"./day1/":5,"./day1/data.txt":47,"./day1/fuel":12,"./day1/fuel.js":12,"./day1/index":5,"./day1/index.js":5,"./day2":6,"./day2/":6,"./day2/data.txt":51,"./day2/index":6,"./day2/index.js":6,"./day2/intCode":7,"./day2/intCode.js":7,"./day2/part1":13,"./day2/part1.js":13,"./day2/part2":14,"./day2/part2.js":14,"./day3":8,"./day3/":8,"./day3/data.txt":52,"./day3/index":8,"./day3/index.js":8,"./day3/part1":16,"./day3/part1.js":16,"./day3/part2":17,"./day3/part2.js":17,"./day4":9,"./day4/":9,"./day4/data.txt":53,"./day4/index":9,"./day4/index.js":9,"./day4/part1":18,"./day4/part1.js":18,"./day4/part2":19,"./day4/part2.js":19};function a(t){var n=u(t);return r(n)}function u(t){if(!r.o(e,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e[t]}a.keys=function(){return Object.keys(e)},a.resolve=u,t.exports=a,a.id=46},function(t,n,r){t.exports=r.p+"static/media/data.6a51b99e.txt"},,,,function(t,n,r){t.exports=r.p+"static/media/data.94724336.txt"},function(t,n,r){t.exports=r.p+"static/media/data.fe215d0a.txt"},function(t,n,r){t.exports=r.p+"static/media/data.25cf68ee.txt"},function(t,n,r){"use strict";r.r(n);var e=r(0),a=r.n(e),u=r(26),i=r.n(u),c=(r(36),r(29)),o=r(30),f=r(10),s=r(3),d=(r(37),"/adventofcode2019");function l(){return a.a.createElement("div",null,Object(o.a)(Array(24).keys()).map((function(t){return a.a.createElement("p",{key:t},a.a.createElement(f.b,{to:"/day/".concat(t+1)},"Day ",t+1))})))}function p(){var t,n=Object(s.f)().dayNumber;try{t=r(46)("./day".concat(n))}catch(e){}return a.a.createElement("div",{className:"day-wrapper"},t?a.a.createElement("h2",null,"Day: ",n," (",t.name,")"):a.a.createElement("h2",null,"Day ",n," not implemented yet"),t&&a.a.createElement(y,{day:t}))}function y(t){var n=t.day,r=Object(e.useState)(""),u=Object(c.a)(r,2),i=u[0],o=u[1];return a.a.createElement("div",{className:"day"},a.a.createElement("textarea",{className:"data-input",placeholder:"Data",value:i,onChange:function(t){var n=t.target.value;return o(n)}}),a.a.createElement("div",{className:"output-1"},"Part 1: ",i?n.part1(i):"Missing input data"),a.a.createElement("div",{className:"output-2"},"Part 2: ",i?n.part2?n.part2(i):"No part 2 code":"Missing input data"))}i.a.render(a.a.createElement((function(){return a.a.createElement(f.a,{basename:d},a.a.createElement("div",{className:"App"},a.a.createElement("header",null,a.a.createElement("p",null," ",a.a.createElement(f.b,{to:"/"},"Al's Advent of Code ")," ")),a.a.createElement(s.c,null,a.a.createElement(s.a,{path:"/day/:dayNumber"},a.a.createElement(p,null)),a.a.createElement(s.a,{path:"/"},a.a.createElement(l,null)))))}),null),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.c975bd54.chunk.js.map