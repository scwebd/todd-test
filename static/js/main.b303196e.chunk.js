(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e){e.exports=[{id:1,image:"/assets/beth.png",clicked:!1},{id:2,image:"/assets/birdperson.png",clicked:!1},{id:3,image:"/assets/evilmorty.png",clicked:!1},{id:4,image:"/assets/gianthead.png",clicked:!1},{id:5,image:"/assets/goldenford.png",clicked:!1},{id:6,image:"/assets/jerry.png",clicked:!1},{id:7,image:"/assets/jessica.png",clicked:!1},{id:8,image:"/assets/meeseeks.png",clicked:!1},{id:9,image:"/assets/morty.png",clicked:!1},{id:10,image:"/assets/mr.png",clicked:!1},{id:11,image:"/assets/rick.png",clicked:!1},{id:12,image:"/assets/summer.png",clicked:!1}]},function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),s=a.n(r),i=(a(16),a(6)),o=a(1),l=a(2),u=a(4),m=a(3),d=a(5),h=(a(17),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={message:"",animating:!1},a.renderMessage=function(){switch(a.state.message){case"correct":return"You guessed correctly!";case"incorrect":return"You guessed incorrectly! Sad...";default:return"Click an image to begin!"}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=e.score,n=e.topScore,c={animating:!0};c.message=0===a&&0===n?"":0===a&&n>0?"incorrect":"correct",a===this.props.score&&this.state.message===c.message||this.setState(c)}},{key:"render",value:function(){var e=this;return c.a.createElement("li",{className:this.state.animating?this.state.message:"",onAnimationEnd:function(){return e.setState({animating:!1})}},this.renderMessage())}}]),t}(n.Component));a(18);var g=function(e){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",null,c.a.createElement("li",{className:"brand"},c.a.createElement("a",{href:"/"},"Clicky Game")),c.a.createElement(h,{score:e.score,topScore:e.topScore}),c.a.createElement("li",null,"Score: ",e.score," || Top Score: ",e.topScore)))};a(19);var f=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"Clicky Game"),c.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))};a(20);var p=function(e){return c.a.createElement("main",{className:"container"},e.children)};a(21);var k=function(e){return c.a.createElement("div",{role:"img","aria-label":"click-item",onClick:function(){return e.handleClick(e.id)},style:{backgroundImage:'url("'.concat(e.image,'")')},className:"click-item".concat(e.shake?" shake":"")})};a(22);var v=a(9),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={characters:v,score:0,topScore:0},a.handleCorrectGuess=function(e){var t=a.state,n=t.topScore,c=t.score+1,r=Math.max(c,n);a.setState({characters:a.shuffleData(e),score:c,topScore:r})},a.handleIncorrectGuess=function(e){a.setState({characters:a.resetData(e),score:0})},a.resetData=function(e){var t=e.map(function(e){return Object(i.a)({},e,{clicked:!1})});return a.shuffleData(t)},a.shuffleData=function(e){for(var t=e.length-1;t>0;){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n,t--}return e},a.handleItemClick=function(e){var t=!1,n=a.state.characters.map(function(a){var n=Object(i.a)({},a);return n.id===e&&(n.clicked||(n.clicked=!0,t=!0)),n});t?a.handleCorrectGuess(n):a.handleIncorrectGuess(n)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({characters:this.shuffleData(this.state.characters)})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(g,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(f,null),c.a.createElement(p,null,this.state.characters.map(function(t){return c.a.createElement(k,{key:t.id,id:t.id,shake:!e.state.score&&e.state.topScore,handleClick:e.handleItemClick,image:"/todd-test"+t.image})})))}}]),t}(n.Component);var E=function(){return c.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.b303196e.chunk.js.map