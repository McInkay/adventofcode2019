(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,function(t,n,r){"use strict";r.r(n),r.d(n,"data",(function(){return a})),r.d(n,"name",(function(){return u})),r.d(n,"part1",(function(){return i})),r.d(n,"part2",(function(){return o}));var e=r(17),a=r(33),u="Fuel",i=function(t){return e.part1(t)},o=function(t){return e.part2(t)}},function(t,n,r){"use strict";r.r(n),r.d(n,"part1",(function(){return e})),r.d(n,"part2",(function(){return a})),r.d(n,"data",(function(){return u})),r.d(n,"name",(function(){return i}));var e=r(18),a=r(19),u=r(34),i="IntCode"},function(t,n){t.exports=function(t){for(var n=0;;){var e=t[n];if(99===e)return t;var a=r[e];if(!a)return;n=a(t,n)}};var r={1:function(t,n){var r=t[++n],e=t[++n];return t[t[++n]]=t[r]+t[e],n+1},2:function(t,n){var r=t[++n],e=t[++n];return t[t[++n]]=t[r]*t[e],n+1}}},function(t,n,r){"use strict";r.r(n),r.d(n,"part1",(function(){return e})),r.d(n,"part2",(function(){return a})),r.d(n,"data",(function(){return u})),r.d(n,"name",(function(){return i}));var e=r(21),a=r(22),u=r(38),i="Line Crossing"},function(t,n,r){"use strict";r.r(n),r.d(n,"part1",(function(){return e})),r.d(n,"part2",(function(){return a})),r.d(n,"data",(function(){return u})),r.d(n,"name",(function(){return i}));var e=r(23),a=r(24),u=r(39),i="Passwords"},function(t,n,r){"use strict";r.r(n),r.d(n,"part1",(function(){return e})),r.d(n,"part2",(function(){return a})),r.d(n,"data",(function(){return u})),r.d(n,"name",(function(){return i}));var e=r(25),a=r(26),u=r(40),i="IntCode2"},function(t,n){t.exports=function(t,n){for(var r=[],a=0;;){var u=t[a];if("99"===u)return r;var i=e(String(u));if(!i.command)return;a=i.command(t,n,r,i.paramModes,a)}};var r={1:function(t,n,r,e,a){var u=Number(t[++a]),i=Number(t[++a]),o=Number(t[++a]),c=0===e[0]?Number(t[u]):u,s=0===e[1]?Number(t[i]):i;return t[o]=Number(c)+Number(s),a+1},2:function(t,n,r,e,a){var u=Number(t[++a]),i=Number(t[++a]),o=Number(t[++a]),c=0===e[0]?Number(t[u]):u,s=0===e[1]?Number(t[i]):i;return t[o]=Number(c)*Number(s),a+1},3:function(t,n,r,e,a){var u=Number(t[++a]),i=n.pop();return t[u]=i,a+1},4:function(t,n,r,e,a){var u=Number(t[++a]),i=0===e[0]?t[u]:u;return r.push(i),a+1},5:function(t,n,r,e,a){var u=Number(t[++a]);if(0===e[0]?0!==Number(t[u]):0!==u){var i=Number(t[++a]);return 0===e[1]?Number(t[i]):i}return a+2},6:function(t,n,r,e,a){var u=Number(t[++a]);if(0===e[0]?0===Number(t[u]):0===u){var i=Number(t[++a]);return 0===e[1]?Number(t[i]):i}return a+2},7:function(t,n,r,e,a){var u=Number(t[++a]),i=Number(t[++a]),o=(0===e[0]?Number(t[u]):u)<(0===e[1]?Number(t[i]):i)?1:0;return t[Number(t[++a])]=o,a+1},8:function(t,n,r,e,a){var u=Number(t[++a]),i=Number(t[++a]),o=(0===e[0]?Number(t[u]):u)===(0===e[1]?Number(t[i]):i)?1:0;return t[Number(t[++a])]=o,a+1}},e=function(t){var n=t.slice(-2),e=0,a=0,u=0;return t.length>2&&(e=Number(t.slice(-3,-2))),t.length>3&&(a=Number(t.slice(-4,-3))),t.length>4&&(u=Number(t.slice(-5,-4))),{command:r[Number(n)],paramModes:[e,a,u]}}},function(t,n,r){"use strict";r.r(n),r.d(n,"part1",(function(){return e})),r.d(n,"part2",(function(){return a})),r.d(n,"data",(function(){return u})),r.d(n,"name",(function(){return i}));var e=r(27),a=r(28),u=r(41),i="Orbits"},function(t,n,r){"use strict";r.r(n),r.d(n,"Tree",(function(){return i})),r.d(n,"getTreeOfOrbits",(function(){return o}));var e=r(4),a=r(46),u=r(47),i=function(){function t(){Object(a.a)(this,t),this._root=null}return Object(u.a)(t,[{key:"countOrbits",value:function(){if(null===this._root)return 0;for(var t=1,n=[this._root],r=0;n.length>0;){var e=n.reduce((function(t,n){return t.concat(n.children)}),[]);r+=e.length*t,n=e,t++}return r}},{key:"traverse",value:function(t){!function n(r){t(r),r.children.forEach((function(t){n(t)}))}(this._root)}},{key:"setRootNode",value:function(t){var n=this._root;this._root=null,this.addNode(t),n&&this._root.children.push(n)}},{key:"addNode",value:function(t,n,r){var e={value:t,children:r||[]};if(null===this._root)return this._root=e,!0;var a=!1;return this.traverse((function(t){t.value===n&&(t.children.push(e),a=!0)})),a}},{key:"removeNode",value:function(t){this.traverse((function(n){n.children.forEach((function(r,e){r.value===t&&n.children.splice(e,1)}))}))}},{key:"contains",value:function(t){var n=!1;return this.traverse((function(r){r.value===t&&(n=!0)})),n}},{key:"distanceBetween",value:function(t,n){var r=function t(n,r,a){var u=null,i=null;return n.value===r&&(u=0),n.value===a&&(i=0),n.children.forEach((function(n){var o=t(n,r,a),c=Object(e.a)(o,2),s=c[0],f=c[1];null!==s&&(u=null!==f?s:s+1),null!==f&&(i=null!==s?f:f+1)})),[u,i]}(this._root,t,n),a=Object(e.a)(r,2);return a[0]+a[1]-2}},{key:"replaceNode",value:function(t){var n=!1;return this.traverse((function(r){r.value===t.value&&(r.children=r.children.concat(t.children),n=!0)})),n}}]),t}(),o=function(t){var n=[new i];return t.forEach((function(t,r){r%100===0&&console.log(r);for(var a=t.split(")"),u=Object(e.a)(a,2),o=u[0],c=u[1],s=0,f=!1;!f;){var d=n[s]||new i;n[s]||n.push(d),d._root||(d.setRootNode(o),f=!0),d._root.value===c?(d.setRootNode(o),f=!0):f=d.addNode(c,o),s++}for(var l=function(t){var r=n[t];n.some((function(e){if(e&&r!==e&&e.contains(r._root.value))return e.replaceNode(r._root),n.splice(t,1),!0}))},p=n.length-1;p>=0;p--)l(p)})),console.log(n.length),n[0]}},,,function(t,n){t.exports={part1:function(t){return t.split("\n").filter((function(t){return t})).reduce((function(t,n){return t+r(Number(n))}),0)},part2:function(t){return t.split("\n").filter((function(t){return t})).reduce((function(t,n){return t+e(Number(n))}),0)}};var r=function(t){return Math.floor(t/3)-2},e=function(t){for(var n=r(t),e=0;n>0;){var a=Math.floor(n/3)-2;n=a,a>0&&(e+=n)}return r(t)+e}},function(t,n,r){var e=r(8);t.exports=function(t){var n=t.split(",").map((function(t){return Number(t)}));return n[1]=12,n[2]=2,e(n)[0]}},function(t,n,r){var e=r(20),a=r(8);t.exports=function(t){for(var n=t.split(",").map((function(t){return Number(t)})),r=0;r<100;r++)for(var u=0;u<100;u++){var i=n.slice(0);i[1]=r,i[2]=u;var o=a(i);if(19690720===e(o,1)[0])return"i: ".concat(r,", j: ").concat(u)}}},,function(t,n,r){var e=r(35),a=r(36),u=(r(37),function(){"use strict";function t(n,r){e(this,t),this.x=n,this.y=r}return a(t,[{key:"right",value:function(t){return this.x+=t,this}},{key:"left",value:function(t){return this.x-=t,this}},{key:"up",value:function(t){return this.y+=t,this}},{key:"down",value:function(t){return this.y-=t,this}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y)}}]),t}()),i={},o=[];t.exports=function(t){var n;return t.split("\n").filter((function(t){return t})).forEach((function(t,n){var r=new u(0,0);t.split(",").forEach((function(t){for(var e=t.substring(0,1),a=Number(t.substring(1)),u=0;u<a;u++){switch(e){case"R":r.right(1);break;case"L":r.left(1);break;case"U":r.up(1);break;case"D":r.down(1)}var c=r.toString();i[c]=i[c]||[],i[c].push(n),i[c].includes(0)&&i[c].includes(1)&&o.push(c)}}))})),o.forEach((function(t){var r=function(t){return t.split(",").reduce((function(t,n){return t+Math.abs(1*Number(n))}),0)}(t);n?r<n&&(n=r):n=r})),n}},function(t,n,r){var e=r(35),a=r(36),u=(r(37),function(){"use strict";function t(n,r){e(this,t),this.x=n,this.y=r}return a(t,[{key:"right",value:function(t){return this.x+=t,this}},{key:"left",value:function(t){return this.x-=t,this}},{key:"up",value:function(t){return this.y+=t,this}},{key:"down",value:function(t){return this.y-=t,this}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y)}}]),t}()),i={},o=[];t.exports=function(t){var n;return t.split("\n").filter((function(t){return t})).forEach((function(t,n){var r=new u(0,0),e=0;t.split(",").forEach((function(t){for(var a=t.substring(0,1),u=Number(t.substring(1)),c=0;c<u;c++){switch(e++,a){case"R":r.right(1);break;case"L":r.left(1);break;case"U":r.up(1);break;case"D":r.down(1)}var s=r.toString();i[s]=i[s]||[],i[s][n]=i[s][n]||e,i[s][0]&&i[s][1]&&o.push(i[s][0]+i[s][1])}}))})),o.forEach((function(t){n?t<n&&(n=t):n=t})),n}},function(t,n,r){var e=r(20);t.exports=function(t){return a(t).filter(u).length};var a=function(t){for(var n=t.split("-"),r=e(n,2),a=r[0],u=r[1],i=[],o=a;o<=u;o++)i.push(String(o));return i},u=function(t){return i(t)&&o(t)&&c(t)},i=function(t){return 6===t.length&&Number.isInteger(Number(t))},o=function(t){for(var n=0;n<t.length-1;n++)if(t[n]===t[n+1])return!0;return!1},c=function(t){for(var n=0;n<t.length-1;n++)if(t[n]>t[n+1])return!1;return!0}},function(t,n,r){var e=r(20);t.exports=function(t){return a(t).filter(u).length};var a=function(t){for(var n=t.split("-"),r=e(n,2),a=r[0],u=r[1],i=[],o=a;o<=u;o++)i.push(String(o));return i},u=function(t){return i(t)&&o(t)&&c(t)},i=function(t){return 6===t.length&&Number.isInteger(Number(t))},o=function(t){for(var n=0;n<t.length-1;n++)if(t[n]===t[n+1]&&t[n]!==t[n+2]&&(0===n||t[n]!==t[n-1]))return!0;return!1},c=function(t){for(var n=0;n<t.length-1;n++)if(t[n]>t[n+1])return!1;return!0}},function(t,n,r){var e=r(12);t.exports=function(t){var n=t.split(",");return e(n,[1]).pop()}},function(t,n,r){var e=r(12);t.exports=function(t){var n=t.split(",");return e(n,[5])}},function(t,n,r){var e=r(14),a=(e.getTotalOrbits,e.getTreeOfOrbits);t.exports=function(t){console.time("part1");var n=t.split("\n"),r=a(n).countOrbits();return console.timeEnd("part1"),r}},function(t,n,r){var e=r(14).getTreeOfOrbits;t.exports=function(t){console.time("part2");var n=t.split("\n"),r=e(n).distanceBetween("YOU","SAN");return console.timeEnd("part2"),r}},,,,,function(t,n,r){t.exports=r.p+"static/media/data.6a51b99e.txt"},function(t,n,r){t.exports=r.p+"static/media/data.94724336.txt"},,,,function(t,n,r){t.exports=r.p+"static/media/data.fe215d0a.txt"},function(t,n,r){t.exports=r.p+"static/media/data.25cf68ee.txt"},function(t,n,r){t.exports=r.p+"static/media/data.9fc5e460.txt"},function(t,n,r){t.exports=r.p+"static/media/data.56c6663f.txt"},,,,,,,,function(t,n,r){t.exports=r(69)},,,,,function(t,n,r){},,function(t,n,r){},,,,,,,,,function(t,n,r){var e={"./day1":6,"./day1/":6,"./day1/data.txt":33,"./day1/fuel":17,"./day1/fuel.js":17,"./day1/index":6,"./day1/index.js":6,"./day2":7,"./day2/":7,"./day2/data.txt":34,"./day2/index":7,"./day2/index.js":7,"./day2/intCode":8,"./day2/intCode.js":8,"./day2/part1":18,"./day2/part1.js":18,"./day2/part2":19,"./day2/part2.js":19,"./day3":9,"./day3/":9,"./day3/data.txt":38,"./day3/index":9,"./day3/index.js":9,"./day3/part1":21,"./day3/part1.js":21,"./day3/part2":22,"./day3/part2.js":22,"./day4":10,"./day4/":10,"./day4/data.txt":39,"./day4/index":10,"./day4/index.js":10,"./day4/part1":23,"./day4/part1.js":23,"./day4/part2":24,"./day4/part2.js":24,"./day5":11,"./day5/":11,"./day5/data.txt":40,"./day5/index":11,"./day5/index.js":11,"./day5/intCode":12,"./day5/intCode.js":12,"./day5/part1":25,"./day5/part1.js":25,"./day5/part2":26,"./day5/part2.js":26,"./day6":13,"./day6/":13,"./day6/data.txt":41,"./day6/index":13,"./day6/index.js":13,"./day6/part1":27,"./day6/part1.js":27,"./day6/part2":28,"./day6/part2.js":28,"./day6/tree":14,"./day6/tree.js":14};function a(t){var n=u(t);return r(n)}function u(t){if(!r.o(e,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e[t]}a.keys=function(){return Object.keys(e)},a.resolve=u,t.exports=a,a.id=65},,,,function(t,n,r){"use strict";r.r(n);var e=r(0),a=r.n(e),u=r(42),i=r.n(u),o=(r(54),r(29)),c=r.n(o),s=r(43),f=r(4),d=r(48),l=r(15),p=r(3);r(56);function v(){return a.a.createElement("div",null,Object(d.a)(Array(24).keys()).map((function(t){return a.a.createElement("p",{key:t},a.a.createElement(l.b,{to:"/day/".concat(t+1)},"Day ",t+1))})))}function m(){var t,n=Object(p.f)().dayNumber;try{t=r(65)("./day".concat(n))}catch(e){}return a.a.createElement("div",{className:"day-wrapper"},t?a.a.createElement("h2",null,"Day: ",n," (",t.name,") - ",a.a.createElement("a",{href:"https://github.com/McInkay/adventofcode2019/tree/master/day".concat(n)},"source")):a.a.createElement("h2",null,"Day ",n," not implemented yet"),t&&a.a.createElement(h,{day:t}))}function h(t){var n=t.day,r=Object(e.useState)(""),u=Object(f.a)(r,2),i=u[0],o=u[1];return Object(e.useEffect)((function(){function t(){return(t=Object(s.a)(c.a.mark((function t(){var r,e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n.data);case 2:return r=t.sent,console.log(r),t.next=6,r.text();case 6:e=t.sent,o(e);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n.data]),a.a.createElement("div",{className:"day"},a.a.createElement("textarea",{className:"data-input",placeholder:"Loading Data...",value:i,onChange:function(t){var n=t.target.value;return o(n)}}),a.a.createElement("div",{className:"output-1"},"Part 1: ",i?n.part1(i):"Missing input data"),a.a.createElement("div",{className:"output-2"},"Part 2: ",i?n.part2?n.part2(i):"No part 2 code":"Missing input data"))}i.a.render(a.a.createElement((function(){return a.a.createElement(l.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("header",null,a.a.createElement("p",null," ",a.a.createElement(l.b,{to:"/"},"Al's Advent of Code ")," ")),a.a.createElement(p.c,null,a.a.createElement(p.a,{path:"/day/:dayNumber"},a.a.createElement(m,null)),a.a.createElement(p.a,{path:"/"},a.a.createElement(v,null)))))}),null),document.getElementById("root"))}],[[49,1,2]]]);
//# sourceMappingURL=main.41bd4aa3.chunk.js.map