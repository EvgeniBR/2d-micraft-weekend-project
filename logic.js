//////Front page Drop///////////////////
const start = document.querySelector(`.start`);
const body = document.querySelector(`body`);

start.addEventListener(`click`, function (event) {
  console.log(`click`);
  body.firstElementChild.remove();
});

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

const srcPick = 'http://www.rw-designer.com/cursor-extern.php?id=30247';
let docStyle = document.body.style;
document.querySelector('.pickaxeimg').addEventListener('click', () => {
  if (!docStyle.cursor) docStyle.cursor = `url('${srcPick}'), default`;
  else docStyle.cursor = null;
});
const srcAxe = 'http://www.rw-designer.com/cursor-extern.php?id=24924';
 docStyle = document.body.style;
document.querySelector('.axeimg').addEventListener('click', () => {
  if (!docStyle.cursor) docStyle.cursor = `url('${srcAxe}'), default`;
  else docStyle.cursor = null;
});
const srcShovel = 'http://www.rw-designer.com/cursor-extern.php?id=24925';
 docStyle = document.body.style;
document.querySelector('.shovelimg').addEventListener('click', () => {
  if (!docStyle.cursor) docStyle.cursor = `url('${srcShovel}'), default`;
  else docStyle.cursor = null;
});
const srcWand = 'http://www.rw-designer.com/cursor-extern.php?id=18817';
 docStyle = document.body.style;
document.querySelector('.wandimg').addEventListener('click', () => {
  if (!docStyle.cursor) docStyle.cursor = `url('${srcWand}'), default`;
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
      console.log(treeMatrix[i][j]);
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
    [0,0,0,0,1,1,1,0,0,0,0,0], 
    [0,0,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0,0],
    [0,1,1,1,0,0,0,1,1,1,0,0], 
    [0,1,1,0,0,0,0,0,1,1,0,0], 
    [0,1,1,0,0,0,0,0,1,1,2,0],
    [0,1,1,2,0,0,0,0,1,1,2,2], 
    [2,1,1,2,2,0,0,0,1,1,2,2]
      ];

  for (let i = 0; i < stoneMatrix.length; i++) {
    for (let j = 0; j < stoneMatrix[0].length; j++) {
      console.log(stoneMatrix[i][j]);
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
    [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0], 
    [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0], 
    [0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0]
      ];

  for (let i = 0; i < cloudMatrix.length; i++) {
    for (let j = 0; j < cloudMatrix[0].length; j++) {
      console.log(cloudMatrix[i][j]);
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

// while(docStyle.cursor = `url('${srcPick}')`){
//   function pickStone(){

//   }
// }