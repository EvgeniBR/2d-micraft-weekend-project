//////Front page Drop///////////////////
const start = document.querySelector(`.start`);
const body = document.querySelector(`body`);

start.addEventListener(`click`, function (event) {
  console.log(`click`);
  body.firstElementChild.remove();
});
let currentBox ;
let currentTool ;
////////Tools Picking Up Method///////////////////
let pickaxe = document.querySelector(`.pickaxeimg`);
let axe = document.querySelector(`.axeimg`);
let shovel = document.querySelector(`.shovelimg`);
let wand = document.querySelector(`.wandimg`);
let pickUpPickaxe = document.querySelector(`.take-pickaxe`);
let dropDownPickaxe = document.querySelector(`.drop-pickaxe`);
let pickUpaxe = document.querySelector(`.take-axe`);
let dropDownaxe = document.querySelector(`.drop-axe`);
let pickUpShovel = document.querySelector(`.take-shovel`);
let dropDownShovel = document.querySelector(`.drop-shovel`);
let stoneCounter = document.querySelector(`.stonecounter`);
let cloudCounter = document.querySelector(`.cloudcounter`);
let grassCounter = document.querySelector(`.grasscounter`);
let woodCounter = document.querySelector(`.woodcounter`);
let groundCounter = document.querySelector(`.groundcounter`);
let groundTopCounter = document.querySelector(`.groundtopcounter`);
const srcPick = "http://www.rw-designer.com/cursor-extern.php?id=30247";
let docStyle = document.body.style;
document.querySelector(".pickaxeimg").addEventListener("click", () => {
  currentTool = `stoneAxe`;
  if (!docStyle.cursor) docStyle.cursor = `url('${srcPick}'), default`;
  else docStyle.cursor = null;
});
const srcAxe = "http://www.rw-designer.com/cursor-extern.php?id=24924";
docStyle = document.body.style;
document.querySelector(".axeimg").addEventListener("click", () => {
  currentTool = `woodAxe`;
  if (!docStyle.cursor) docStyle.cursor = `url('${srcAxe}'), default`;
  else docStyle.cursor = null;
});
const srcShovel = "http://www.rw-designer.com/cursor-extern.php?id=24925";
docStyle = document.body.style;
document.querySelector(".shovelimg").addEventListener("click", () => {
  currentTool = `groundShovel`;
  if (!docStyle.cursor) docStyle.cursor = `url('${srcShovel}'), default`;
  else docStyle.cursor = null;
});
const srcWand = "http://www.rw-designer.com/cursor-extern.php?id=18817";
docStyle = document.body.style;
document.querySelector(".wandimg").addEventListener("click", () => {
  currentTool = `superWand`;
  if (!docStyle.cursor) docStyle.cursor = `url('${srcWand}'), default`;
  else docStyle.cursor = null;
});
const srcStone = "https://ani.cursors-4u.net/others/oth-9/oth896.cur";
docStyle = document.body.style;
document.querySelector(".stoneimg").addEventListener("click", () => {
  currentTool = `stonecurser`;
  if (!docStyle.cursor) docStyle.cursor = `url('${srcStone}'), default`;
  else docStyle.cursor = null;
});
const srcGrass = "https://ani.cursors-4u.net/others/oth-9/oth911.cur";
docStyle = document.body.style;
document.querySelector(".grassimg").addEventListener("click", () => {
  currentTool = `grasscurser`;
  if (!docStyle.cursor) docStyle.cursor = `url('${srcGrass}'), default`;
  else docStyle.cursor = null;
});
const srcGround = "https://ani.cursors-4u.net/others/oth-9/oth905.cur";
docStyle = document.body.style;
document.querySelector(".groundimg").addEventListener("click", () => {
  currentTool = `groundcurser`;
  if (!docStyle.cursor) docStyle.cursor = `url('${srcGround}'), default`;
  else docStyle.cursor = null;
});
const srcCloud = "https://ani.cursors-4u.net/others/oth-9/oth899.cur";
docStyle = document.body.style;
document.querySelector(".cloudimg").addEventListener("click", () => {
  currentTool = `cloudcurser`;
  if (!docStyle.cursor) docStyle.cursor = `url('${srcCloud}'), default`;
  else docStyle.cursor = null;
});
const srcGroundTop = "https://cur.cursors-4u.net/cursors/cur-11/cur1003.cur";
docStyle = document.body.style;
document.querySelector(".groundtopimg").addEventListener("click", () => {
  currentTool = `groundtopcurser`;
  if (!docStyle.cursor) docStyle.cursor = `url('${srcGroundTop}'), default`;
  else docStyle.cursor = null;
});
const srcWood = "https://cur.cursors-4u.net/cursors/cur-11/cur1005.cur";
docStyle = document.body.style;
document.querySelector(".woodimg").addEventListener("click", () => {
  currentTool = `woodcurser`;
  if (!docStyle.cursor) docStyle.cursor = `url('${srcWood}'), default`;
  else docStyle.cursor = null;
});

let game = document.querySelector(`.game`);
const gameObject = new Map();

function initGameMatrix() {
  let gameMatrix = [];
  for (let col = 0; col < 25; col++) {
    gameMatrix[col] = [];

    for (let row = 0; row < 30; row++) {
      let myDiv = document.createElement(`div`);
      myDiv.classList.add(`box`);
      myDiv.classList.add(`sky-box`);
      game.appendChild(myDiv);
      gameObject.set(`${col},${row}`, { myDiv });
    }
  }
}
initGameMatrix();

// const test = gameObject.get(`3,4`);
// test.myDiv.classList.remove(`sky-box`);
// test.myDiv.classList.add(`cloud-box`);

function initGround() {
  for (let i = 0; i < 30; i++) {
    for (let j = 21; j < 25; j++) {
      let ground = gameObject.get(`${j},${i}`);
      ground.myDiv.classList.remove(`sky-box`);
      ground.myDiv.classList.add(`ground-box`);
    }
  }
}
initGround();
function initGroundTop() {
  for (let i = 0; i < 30; i++) {
    for (let j = 20; j < 21; j++) {
      let ground = gameObject.get(`${j},${i}`);
      ground.myDiv.classList.remove(`sky-box`);
      ground.myDiv.classList.add(`ground-top-box`);
    }
  }
}
initGroundTop();

function initTree() {
  let row = 20;
  let col = 6;
  const treeMatrix = [
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 2, 1, 1, 1, 1, 0],
    [0, 1, 1, 2, 2, 1, 1, 0, 0],
    [0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 0, 0, 0],
  ];

  for (let i = 0; i < treeMatrix.length; i++) {
    for (let j = 0; j < treeMatrix[0].length; j++) {
      
      let gameO = gameObject.get(`${col},${row}`);
      if (treeMatrix[i][j] === 1) {
        gameO.myDiv.classList.remove(`sky-box`);
        gameO.myDiv.classList.add(`grass-box`);
      } else if (treeMatrix[i][j] === 2) {
        gameO.myDiv.classList.remove(`sky-box`);
        gameO.myDiv.classList.add(`wood-box`);
      }
      row++;
    }
    col++;
    row = 20;
  }
}
initTree();
function initStone() {
  let row = 1;
  let col = 12;
  const stoneMatrix = [
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 2, 0],
    [0, 1, 1, 2, 0, 0, 0, 0, 1, 1, 2, 2],
    [2, 1, 1, 2, 2, 0, 0, 0, 1, 1, 2, 2],
  ];

  for (let i = 0; i < stoneMatrix.length; i++) {
    for (let j = 0; j < stoneMatrix[0].length; j++) {
      
      let gameO = gameObject.get(`${col},${row}`);
      if (stoneMatrix[i][j] === 1) {
        gameO.myDiv.classList.remove(`sky-box`);
        gameO.myDiv.classList.add(`stone-box`);
      } else if (stoneMatrix[i][j] === 2) {
        gameO.myDiv.classList.remove(`sky-box`);
        gameO.myDiv.classList.add(`grass-box`);
      }
      row++;
    }
    col++;
    row = 1;
  }
}
initStone();

function initCloud() {
  let row = 2;
  let col = 1;
  const cloudMatrix = [
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  ];

  for (let i = 0; i < cloudMatrix.length; i++) {
    for (let j = 0; j < cloudMatrix[0].length; j++) {
      
      let gameO = gameObject.get(`${col},${row}`);
      if (cloudMatrix[i][j] === 1) {
        gameO.myDiv.classList.remove(`sky-box`);
        gameO.myDiv.classList.add(`cloud-box`);
      }
      row++;
    }
    col++;
    row = 2;
  }
}
initCloud();

const generalBox = document.querySelectorAll(`.box`);

function gameFunction(box){

    if(currentTool == `stoneAxe`){
      console.log(`box got clicked`);
      console.log(box.currentTarget.classList);
      if(box.currentTarget.classList.contains(`stone-box`)){
        box.currentTarget.classList.remove(`stone-box`);
        box.currentTarget.classList.add(`sky-box`);
        stoneCounter.textContent = parseInt(stoneCounter.textContent) +1
      }
  }
    if(currentTool == `woodAxe`){
      console.log(`box got clicked`);
      console.log(box.currentTarget.classList);
      if(box.currentTarget.classList.contains(`wood-box`)){
        box.currentTarget.classList.remove(`wood-box`);
        box.currentTarget.classList.add(`sky-box`);
        woodCounter.textContent = parseInt(woodCounter.textContent) +1
      }
  }
    if(currentTool == `groundShovel`){
      console.log(`box got clicked`);
      console.log(box.currentTarget.classList);
      if(box.currentTarget.classList.contains(`ground-box`)){
        box.currentTarget.classList.remove(`ground-box`);
        box.currentTarget.classList.add(`sky-box`);
        groundCounter.textContent = parseInt(groundCounter.textContent) +1
      }
  }
    if(currentTool == `groundShovel`){
      console.log(`box got clicked`);
      console.log(box.currentTarget.classList);
      if(box.currentTarget.classList.contains(`ground-top-box`)){
        box.currentTarget.classList.remove(`ground-top-box`);
        box.currentTarget.classList.add(`sky-box`);
        groundTopCounter.textContent = parseInt(groundTopCounter.textContent) +1
      }
    }
    if(currentTool == `superWand`){
      console.log(`box got clicked`);
      console.log(box.currentTarget.classList);
      if(box.currentTarget.classList.contains(`cloud-box`)){
        box.currentTarget.classList.remove(`cloud-box`);
        box.currentTarget.classList.add(`sky-box`);
        cloudCounter.textContent = parseInt(cloudCounter.textContent) +1
      }
  }
    if(currentTool == `superWand`){
      console.log(`box got clicked`);
      console.log(box.currentTarget.classList);
      if(box.currentTarget.classList.contains(`grass-box`)){
        box.currentTarget.classList.remove(`grass-box`);
        box.currentTarget.classList.add(`sky-box`);
        grassCounter.textContent = parseInt(grassCounter.textContent) +1
      }
  }
  if(parseInt(stoneCounter.textContent)>0){
    if(currentTool == `stonecurser`){
      console.log(`box got clicked`);
      console.log(box.currentTarget.classList);
      if(box.currentTarget.classList.contains(`sky-box`)){
        box.currentTarget.classList.remove(`sky-box`);
        box.currentTarget.classList.add(`stone-box`);
        stoneCounter.textContent = parseInt(stoneCounter.textContent) -1
      }
  }
}
  if(parseInt(grassCounter.textContent)>0){
    if(currentTool == `grasscurser`){
      console.log(`box got clicked`);
      console.log(box.currentTarget.classList);
      if(box.currentTarget.classList.contains(`sky-box`)){
        box.currentTarget.classList.remove(`sky-box`);
        box.currentTarget.classList.add(`grass-box`);
        grassCounter.textContent = parseInt(grassCounter.textContent) -1
      }
  }
}
  if(parseInt(groundCounter.textContent)>0){
    if(currentTool == `groundcurser`){
      console.log(`box got clicked`);
      console.log(box.currentTarget.classList);
      if(box.currentTarget.classList.contains(`sky-box`)){
        box.currentTarget.classList.remove(`sky-box`);
        box.currentTarget.classList.add(`ground-box`);
        groundCounter.textContent = parseInt(groundCounter.textContent) -1
      }
  }
}
  if(parseInt(cloudCounter.textContent)>0){
    if(currentTool == `cloudcurser`){
      console.log(`box got clicked`);
      console.log(box.currentTarget.classList);
      if(box.currentTarget.classList.contains(`sky-box`)){
        box.currentTarget.classList.remove(`sky-box`);
        box.currentTarget.classList.add(`cloud-box`);
        cloudCounter.textContent = parseInt(cloudCounter.textContent) -1
      }
  }
}
  if(parseInt(groundTopCounter.textContent)>0){
    if(currentTool == `groundtopcurser`){
      console.log(`box got clicked`);
      console.log(box.currentTarget.classList);
      if(box.currentTarget.classList.contains(`sky-box`)){
        box.currentTarget.classList.remove(`sky-box`);
        box.currentTarget.classList.add(`ground-top-box`);
        groundTopCounter.textContent = parseInt(groundTopCounter.textContent) -1
      }
  }
}
  if(parseInt(woodCounter.textContent)>0){
    if(currentTool == `woodcurser`){
      console.log(`box got clicked`);
      console.log(box.currentTarget.classList);
      if(box.currentTarget.classList.contains(`sky-box`)){
        box.currentTarget.classList.remove(`sky-box`);
        box.currentTarget.classList.add(`wood-box`);
        woodCounter.textContent = parseInt(woodCounter.textContent) -1
      }
  }
}
}

generalBox.forEach(function(box){
  box.addEventListener(`click` , gameFunction);

});
