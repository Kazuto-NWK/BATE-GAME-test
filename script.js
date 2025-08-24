"use strict"

let challengeCount = 10;
let bestscore = 10;
const answer = [];

const stButton =  document.getElementById(`stButton`);
const challengeNumber =  document.getElementById(`challengeNumber`);
const resetButton = document.getElementById(`resetButton`);
const numberMemoBox = document.getElementById(`subnumberMemoBox`);

window.addEventListener("load", () => {
  const bestScoreDisp = document.getElementById(`bestScore`);
  let jsonCount  = localStorage.getItem(`storage`);
  bestscore = JSON.parse(jsonCount);

  if(!bestscore) bestScoreDisp.textContent = 10;
  else bestScoreDisp.textContent = bestscore;
});

const showSection = (id) => {
  document.querySelectorAll('.content').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
};


const answerNumber = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  const confirmedNum = () => {
      let subNum = randomNumber();
      return (!answer.includes(subNum))? answer.push(subNum) : confirmedNum();
  };

  for(let i = 1; i < 4; i++) {
    confirmedNum();
  };

  // console.log(answer);
};

stButton.addEventListener("click", () => {
  showSection(`gamecontent`);
  answerNumber();
});




const judge = () => {
  const firstNum = Number(document.getElementById(`firstNumber`).value);
  const secondNum = Number(document.getElementById(`secondNumber`).value);
  const lastNum = Number(document.getElementById(`lastNumber`).value);
  
  const predictionArr = [firstNum, secondNum, lastNum];
  // console.log(predictionArr);

  if(firstNum === secondNum || firstNum === lastNum || secondNum === lastNum) return alert("同じ数字は使えません");
    

  let biteCount = 0;
  let eatCount = 0;

  for(let i = 0; i < 3; i++) {
    if(answer[i] === predictionArr[i]) {
      biteCount++;
    } else if(answer.includes(predictionArr[i])) {
      eatCount++;
    }
    // console.log(`bite: ${biteCount}   eat: ${eatCount}`)
  }
  console.log(`bite: ${biteCount}   eat: ${eatCount}`);

  alert(`今回予想した数値 ${predictionArr.join("")} \n BITE : ${biteCount}    eat: ${eatCount}`)

  // document.getElementById("predictionNum").textContent = `今回予想した数値 ${Number(predictionArr.join(""))}`;
  // document.getElementById("result").textContent = `BITE : ${biteCount}    eat: ${eatCount}`;

  challengeCount--;
  document.getElementById("challengeCountScore").textContent = `${challengeCount}`;

  let subChallengeCount = 10 - challengeCount;
  document.getElementById(`${subChallengeCount} inputNum`).textContent = `${predictionArr.join("")}`;
  document.getElementById(`${subChallengeCount} bite`).textContent = `${biteCount}`;
  document.getElementById(`${subChallengeCount} eat`).textContent = `${eatCount}`;

  if(biteCount === 3) {
    alert("おめでとう！正解だ！");
    document.getElementById(`${subChallengeCount} inputNum`).style.color = "red";
    challengeNumber.disabled = "disabled";

    if(bestscore > subChallengeCount) document.getElementById("bestScore").textContent = `${subChallengeCount}`;
    
    let jsonCount = JSON.stringify(subChallengeCount);
    localStorage.setItem(`storage`, jsonCount);

  } else if(challengeCount <= 0) {
    alert("残念！また挑戦してくれ！");
  }
};

challengeNumber.addEventListener("click", () => judge);


const resetGame = () => {
  challengeCount = 10;

  // document.getElementById("predictionNum").textContent = `今回予想した数値`;
  // document.getElementById("result").textContent = `BITE :     eat: `;

  document.getElementById("challengeCountScore").textContent = `10`;

  for(let i = 1; i <= 10; i++) {
    document.getElementById(`${i} inputNum`).textContent = `null`;
    document.getElementById(`${i} inputNum`).style.color = `black`;
    document.getElementById(`${i} bite`).textContent = `null`;
    document.getElementById(`${i} eat`).textContent = `null`;
  }
};


const resetIcon = () => {
  const flexItem = document.querySelectorAll("div.flex_item");
  // console.log(flexItem);
  for(const item of flexItem) {
    // console.log(item)
    item.style.backgroundColor = "cyan";
  }
};

resetButton.addEventListener("click", () => {
  resetGame();
  answer.splice(0);
  answerNumber();
  resetIcon();
});


const cheangeColor = (num) => {
  const cheangeNum = document.getElementById(`${num}`);
  const currentColor = window.getComputedStyle(cheangeNum).backgroundColor;

  if(currentColor === "rgb(0, 255, 255)") cheangeNum.style.backgroundColor = "gray";
  else if(currentColor === "rgb(128, 128, 128)") cheangeNum.style.backgroundColor = "rgba(157, 245, 110, 1)"
  else cheangeNum.style.backgroundColor = "cyan"
};


