!function(){var t={374:function(t,e,n){const i=n(320).Z;t.exports=class extends i{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;super("atGunner",11,8,1,3,2),this.name=t,this.owner=e}}},137:function(t){t.exports=BATTLEFIELDS={levelOne:[[0,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,0,0],[0,3,3,3,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,3,3,3,0,0],[0,0,0,1,0,0,0,0,0,0],[0,3,3,3,0,0,1,0,0,0],[0,0,0,0,0,1,0,0,0,1],[0,0,0,0,0,0,0,0,1,1]],levelTwo:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],background:[[0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,1,1,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,2,2,0,0,0,0,0,0,0,1,0,0],[0,0,2,2,0,0,1,1,0,0,0,0,1,0],[0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}},320:function(t,e){"use strict";e.Z=class{constructor(t,e,n,i,s,r){this.type=t,this.health=e,this.attack=n,this.defense=i,this.range=s,this.move=r,this.alive=!0,this.items=[],this.pos=[]}setAlive(t){this.alive=t}setPiece(t){this.pos=t}move(t){this.pos=t}giveItem(t){this.items.push(t)}isAlive(){return this.alive}takeDamage(t){console.log("damage"),this.health=this.health-(t-this.defense),this.health<0&&(this.health=0),0===this.health&&(this.alive=!1)}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),function(){"use strict";var t=n.p+"d034f4a2c47c3c3068620d55db618d75.png",e=n.p+"0292f15a5491340be2c96175987a8688.png",i=n.p+"333aade2b420735d47a87dd3d53a9a5b.png",s=n.p+"2b352f91ad3be142bfce4bea52b5f365.png",r=n.p+"0584e2e99122dcec4480a418401ea098.png",o=n.p+"7c1edc51cc1dd9e0de4e2ae4c6c1db63.png",l=n(320);document.querySelector(".tCount"),document.querySelector(".name");n(137);class d extends l.Z{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;super("rifleman",10,5,1,3,3),this.name=t,this.owner=e}}var u=d;class a extends l.Z{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;super("sniper",10,5,0,5,3),this.name=t,this.owner=e}}var h=a,c=n(374),m=n.n(c);n.p,document.addEventListener("DOMContentLoaded",(n=>{let d=new class{constructor(n){if(this.board,this.stage=n,1===this.stage){let n=new class{constructor(t){this.type=t,this.playerUnits=[]}assignUnits(t){this.playerUnits.concat(t)}}("user"),d=[new u("Bob",n),new u("Joe",n),new h("Lex",n),new(m())("Steve",n)],a=[new u("Ben"),new u("Ryan"),new h("Dakota"),new(m())("Gunther")];this.board=new class{constructor(t,e,n){var i,s,r;i=this,r=t=>{let{keyCode:e}=t;37===e?this.isValidMove(-1,0)&&(this.updateGrid(this.unitTurn.pos[0],this.unitTurn.pos[1],0),this.updateGrid(this.unitTurn.pos[0],this.unitTurn.pos[1]-1,this.unitTurn),this.unitTurn.pos[1]--,this.currentMoveCount--):39===e?this.isValidMove(1,0)&&(this.updateGrid(this.unitTurn.pos[0],this.unitTurn.pos[1],0),this.updateGrid(this.unitTurn.pos[0],this.unitTurn.pos[1]+1,this.unitTurn),this.unitTurn.pos[1]++,this.currentMoveCount--):38===e?this.isValidMove(0,-1)&&(this.updateGrid(this.unitTurn.pos[0],this.unitTurn.pos[1],0),this.updateGrid(this.unitTurn.pos[0]-1,this.unitTurn.pos[1],this.unitTurn),this.unitTurn.pos[0]--,this.currentMoveCount--):40===e&&this.isValidMove(0,1)&&(this.updateGrid(this.unitTurn.pos[0],this.unitTurn.pos[1],0),this.updateGrid(this.unitTurn.pos[0]+1,this.unitTurn.pos[1],this.unitTurn),this.unitTurn.pos[0]++,this.currentMoveCount--),document.getElementById("moveCounter").textContent=`Moves Left: ${this.currentMoveCount}`,0!==this.currentMoveCount||document.removeEventListener("keydown",this.moveunit)},(s=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(s="moveunit"))in i?Object.defineProperty(i,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[s]=r,this.moved=!1,this.startingPos=[],this.grid=t,this.units=e,this.enemies=n,this.characterKey={},this.enemyNames=[];for(let t=0;t<this.enemies.length;t++)this.enemyNames.push(this.enemies[t].name);this.unitOrder=this.setTurnOrder();for(let t=0;t<this.unitOrder.length;t++)this.characterKey[this.unitOrder[t].name]=this.unitOrder[t];this.currentTurn=0,this.unitTurn=this.unitOrder[this.currentTurn%this.unitOrder.length],this.unitGrid=new Array(10);for(let t=0;t<this.unitGrid.length;t++)this.unitGrid[t]=new Array(10);for(let t=0;t<this.unitGrid.length;t++)for(let e=0;e<this.unitGrid[t].length;e++)this.unitGrid[t][e]=0;this.battlefield=this.drawBattlefield(),this.cellSize=67,this.padding=2,this.setPos(),this.tiles=[],this.fillTiles(),this.unitImages=[],this.generateUnitImages(),this.generateHTMLsquares(),this.generateHTMLunits(),this.currentMoveCount=this.unitTurn.move}setCurrentMoveCount(){this.currentMoveCount=this.unitTurn.move}attack(t){let e=this.characterKey[t];this.inRange(e)&&(e.takeDamage(this.unitTurn.attack),e.isAlive()||this.removeUnit(e))}inRange(t){let e=this.unitTurn.range,n=t.pos[0]-this.unitTurn.pos[0],i=t.pos[1]-this.unitTurn.pos[1];for(;0!==n;)n>0?(n--,e--):n<0&&(n++,e--);for(;0!==i;)i>0?(i--,e--):i<0&&(i++,e--);return!(e<0)}findClickedUnit(t){for(let e=0;e<this.unitOrder.length;e++)if(this.unitOrder[e].name===t){let t,n;return t=null===this.unitOrder[e].owner?"Player 2":"Player 1",n="atGunner"===this.unitOrder[e].type?"RPG":this.unitOrder[e].type,[this.unitOrder[e].health,this.unitOrder[e].attack,this.unitOrder[e].defense,this.unitOrder[e].name,n,t]}}savePositions(){for(let t=0;t<this.unitGrid.length;t++)for(let e=0;e<this.unitGrid[t].length;e++)if(this.unitGrid[t][e]instanceof l.Z){let n=document.getElementById(`${this.unitGrid[t][e].name}`);n.style.position="absolute",console.log(this.unitGrid[t][e].name,t,e,"this is unit name"),n.style.top=69*t+"px",n.style.left=69*e+"px"}}generateUnitImages(){let t=new Image;t.src=s,this.unitImages.push(t);let e=new Image;e.src=o,this.unitImages.push(e);let n=new Image;n.src=r,this.unitImages.push(n)}fillTiles(){let n=new Image;n.src=t,this.tiles.push(n);let s=new Image;s.src=e,this.tiles.push(s);let r=new Image;r.src=i,this.tiles.push(r)}setPos(){for(let t=0;t<this.units.length;t++)this.units[t].setPiece([0,t+2]),this.unitGrid[0][t+2]=this.units[t];for(let t=0;t<this.enemies.length;t++)this.enemies[t].setPiece([this.unitGrid.length-2,t+4]),this.unitGrid[this.unitGrid.length-2][t+4]=this.enemies[t]}isValidMove(t,e){return(0===this.grid[this.unitTurn.pos[0]+e][this.unitTurn.pos[1]+t]||1===this.grid[this.unitTurn.pos[0]+e][this.unitTurn.pos[1]+t])&&0===this.unitGrid[this.unitTurn.pos[0]+e][this.unitTurn.pos[1]+t]}updateGrid(t,e,n){this.unitGrid[t][e]=n}getCenter(t,e){return{x:window.innerWidth/2-t/2+"px",y:window.innerHeight/2-e/2+"px"}}drawBattlefield(){return this.canvas=document.getElementById("game"),this.context=this.canvas.getContext("2d"),this.canvas.style.background="#949494",this.canvas.style.zIndex=11,this.context}generateHTMLsquares(){let t=0;for(let e=0;e<this.grid.length;e++)for(let n=0;n<this.grid[e].length;n++){let i=document.createElement("div");i.id=`${t}`,i.className="square",i.style.position="absolute",i.style.top=69*e+"px",i.style.left=69*n+"px",i.style.width="69px",i.style.height="69px",i.style.zIndex=100,document.getElementById("squares").appendChild(i),t++}}generateHTMLunits(){for(let t=0;t<this.unitGrid.length;t++)for(let e=0;e<this.unitGrid[t].length;e++)if(this.unitGrid[t][e]instanceof l.Z){let n=document.createElement("div");n.id=`${this.unitGrid[t][e].name}`,n.className="unit",n.style.position="absolute",n.style.top=69*t+"px",n.style.left=69*e+"px",n.style.width="69px",n.style.height="69px",n.style.zIndex=101,document.getElementById("squares").appendChild(n)}}render(){this.cellSize,this.padding,this.grid[0].length,this.padding,this.cellSize,this.padding,this.grid.length,this.padding;for(let t=0;t<this.grid.length;t++)for(let e=0;e<this.grid[t].length;e++){const n=this.grid[t][e];let i,s,r,o,d=0,u=0;0===n?(i=this.tiles[0],d=144,u=144):1===n?(i=this.tiles[1],d=144,u=144):3===n&&(i=this.tiles[2],d=1,u=0),this.battlefield.drawImage(i,d,u,30,30,e*(this.cellSize+this.padding),t*(this.cellSize+this.padding),this.cellSize,this.cellSize),this.unitGrid[t][e]instanceof l.Z&&(s=this.unitGrid[t][e].pos[1],r=this.unitGrid[t][e].pos[0],"rifleman"===this.unitGrid[t][e].type?o=this.unitImages[0]:"sniper"===this.unitGrid[t][e].type?o=this.unitImages[1]:"atGunner"===this.unitGrid[t][e].type&&(o=this.unitImages[2]),null===this.unitGrid[t][e].owner&&(o.style.transform="rotate(180deg)"),this.battlefield.drawImage(o,8,8,48,48,e*(this.cellSize+this.padding),t*(this.cellSize+this.padding),this.cellSize,this.cellSize))}}renderOptions(){document.getElementById("");let t=document.createElement("button"),e=document.createElement("button"),n=document.createElement("button"),i=document.createElement("button");t.class="move",e.class="attack",n.class="items",i.class="defend",t.style.display="block"}draw(t){let e=document.createElement("canvas");return e.id=t,e.width,e.height,e.getContext("2d"),document.body.appendChild(e),"moveOptions"===t&&this.renderOptions(),this.context}drawSquare(t,e,n,i,s){this.battlefieldContext.lineWidth=1,this.battlefieldContext.fillStyle=s,this.battlefieldContext.fillRect(t,e,n,i),this.battlefieldContext.strokeRect(t,e,n,i)}drawGrid(){let t=0,e=0,n=this.squareSize,i=this.squareSize;for(let s=0;s<this.grid.length;s++){for(let r=0;r<this.grid.length;r++)0===this.grid[s][r]?this.drawSquare(t,e,n,i,"#d3d3d2"):this.drawSquare(t,e,n,i,"#111"),t+=n;e+=i,t=0}}enemyAction(){}nextTurn(){this.gameEnd(),this.currentTurn++,document.getElementById("tCount").textContent=this.currentTurn+1,this.unitTurn=this.unitOrder[this.currentTurn%this.unitOrder.length],document.getElementById("name").textContent=`${this.unitTurn.name}`,null===this.unitTurn.type&&this.enemyAction(),this.gameEnd()}gameEnd(){return 50===this.currentTurn?(console.log("You lose!"),!0):this.won()?(console.log("You win!"),!0):!!this.lost()&&(console.log("You lose!"),!0)}removeUnit(t){let e=this.unitOrder.indexOf(t);e>-1&&this.unitOrder.splice(e,1);let n=t.pos[0],i=t.pos[1];this.unitGrid[n][i]=0,null===t.owner?this.enemies.splice(this.enemies.indexOf(t),1):this.units.splice(this.units.indexOf(t),1),document.getElementById(t.name).remove(),this.gameEnd(),this.savePositions(),this.nextTurn(),this.setCurrentMoveCount(),document.getElementById("move").style.display="block";let s=document.getElementsByClassName("moveB");for(let t=0;t<s.length;t++)s[t].style.display="block"}moveUnit(t){let e=t[0],n=t[1],i=this.unitTurn.pos,s=[i[0]+e,i[1]+n];return!!this.validMove(s)&&(this.unitTurn.move(s),null!=this.unitTurn.owner&&(this.grid[s[0]][s[1]]=this.unitTurn),!0)}validMove(t){let e=t[0],n=t[1];return!(e>9||e<0||n>9||n<0)&&1===this.grid[e][n]&&0===this.grid[e][n]}won(){return 0===this.enemies.length}lost(){return 0===this.units.length}setTurnOrder(){let t=[],e=0,n=0;for(let i=0;i<this.units.length+this.enemies.length;i++)i%2==0?(t.push(this.units[e]),e++):(t.push(this.enemies[n]),n++);return console.log(t),t}shuffleArray(t){let e=t.length,n=e;for(;e>=0;){n=Math.floor(Math.random()*(e+1));let i=t[e];t[e]=t[n],t[n]=i,e--}return t}renderStatus(){}}(BATTLEFIELDS.levelOne,d,a,n),this.runGame(this.board)}else this.stage}runGame(t){t.battlefield,function e(){window.requestAnimationFrame(e),t.render()}()}}(1);document.getElementById("confirm-move").addEventListener("click",(()=>{d.board.savePositions(),document.removeEventListener("keydown",d.board.moveUnit),document.getElementById("moveCounter").style.display="none";let t=document.getElementsByClassName("moveB");for(let e=0;e<t.length;e++)t[e].style.display="block";a.style.display="none",document.getElementById("moveText").style.display="none"})),document.getElementById("cancel-move").addEventListener("click",(()=>{let t=d.board.unitTurn.pos,e=d.board.startingPos;d.board.updateGrid(t[0],t[1],0),d.board.updateGrid(e[0],e[1],d.board.unitTurn),d.board.unitTurn.pos=e,console.log(d.board.unitTurn.pos,"reset unit position"),d.board.setCurrentMoveCount(),document.removeEventListener("keydown",d.board.moveUnit),document.getElementById("moveCounter").style.display="none";let n=document.getElementsByClassName("moveB");for(let t=0;t<n.length;t++)n[t].style.display="block";document.getElementById("moveText").style.display="none"})),document.getElementById("cancel-move").addEventListener("click",(()=>{})),document.getElementById("move").addEventListener("click",(()=>{let t=[...d.board.unitTurn.pos];d.board.startingPos=t,console.log(d.board.startingPos,"starting pos"),document.getElementById("left").style.display="none",document.getElementById("right").style.display="none",document.getElementById("moveText").style.display="block"})),document.getElementById("cancel-attack").addEventListener("click",(()=>{document.getElementById("attackText").style.display="none",document.getElementById("moveOption").style.display="block"})),document.getElementById("start-game").addEventListener("click",(()=>{document.getElementById("start-game").style.display="none",document.getElementById("stage-select").style.display="block"})),document.getElementById("standard").addEventListener("click",(()=>{d.stage=1,document.getElementById("title-screen").style.display="none",document.getElementById("view").style.display="block"})),document.getElementById("bridge").addEventListener("click",(()=>{d.stage=2,document.getElementById("title-screen").style.display="none",document.getElementById("view").style.display="block"})),document.getElementById("end").addEventListener("click",(()=>{d.board.savePositions(),d.board.nextTurn(),d.board.setCurrentMoveCount(),d.board.moved=!1;let t=document.getElementById("move");document.getElementById("attackText").style.display="none",t.style.display="block";let e=document.getElementsByClassName("moveB");for(let t=0;t<e.length;t++)e[t].style.display="block"}));let a=document.getElementById("move");a.addEventListener("click",(()=>{let t=document.getElementsByClassName("moveB");for(let e=0;e<t.length;e++)t[e].style.display="none";let e=document.getElementById("moveCounter");e.style.display="block",e.textContent=`Moves Left: ${d.board.currentMoveCount}`,document.addEventListener("keydown",d.board.moveunit)}));let c=document.getElementsByClassName("square");for(let t=0;t<c.length;t++)c[t].addEventListener("mouseover",(t=>{console.log(t.target.id)}));let g=document.getElementsByClassName("unit");for(let t=0;t<g.length;t++)g[t].addEventListener("mouseover",(t=>{let e=d.board.findClickedUnit(t.target.id);document.getElementById("unitInfo").innerHTML=`HP: ${e[0]}\n\n                              <br>\n                              ATK: ${e[1]}\n\n                              <br>\n                              DEF: ${e[2]}\n\n                              <br>\n                              <br>\n                              Name: ${e[3]}\n\n                              <br>\n                              Type: ${e[4]}\n\n                              <br>\n                              Alliance: ${e[5]}`}));document.getElementById("attack").addEventListener("click",(()=>{let t=document.getElementsByClassName("moveB");for(let e=0;e<t.length;e++)t[e].style.display="none";document.getElementById("attackText").style.display="block";let e=document.getElementsByClassName("unit");for(let n=0;n<e.length;n++)e[n].addEventListener("click",(e=>{if(d.board.enemyNames.includes(e.target.id)&&null!==d.board.unitTurn.owner){d.board.attack(e.target.id),d.board.savePositions(),d.board.nextTurn(),d.board.setCurrentMoveCount(),document.getElementById("move").style.display="block",document.getElementById("attackText").style.display="none";for(let e=0;e<t.length;e++)t[e].style.display="block"}}))}))}))}()}();
//# sourceMappingURL=main.js.map