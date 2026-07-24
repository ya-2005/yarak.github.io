const btn = document.getElementById("start-btn");
const failSound = new Audio("sounds/fail sound.mp3");
const loseHeartSound = new Audio("sounds/loseheart.mp3");
const winSound = new Audio("sounds/winsound.mp3");
const startSound = new Audio("sounds/startsound.mp3");
const LeftStar = document.getElementById("leftstar");
const RightStar = document.getElementById("rightstar");
const StartFace = document.getElementById("startFace");
const HintButt = document.getElementById("hint");


if (btn) {
  btn.addEventListener("click", () => {
    document.body.classList.add("fade-out");
    StartFace.src = "photes/laugh.png";
startSound.currentTime = 0;
        startSound.play();
    setTimeout(() => {
      window.location.href = "index2.html";
    }, 800);
  });
}
let value = 1;

const number = document.getElementById("number");

document.getElementById("plus").onclick = () => {
    value++;
    number.textContent = value;
};

document.getElementById("minus").onclick = () => {
    value--;
    number.textContent = value;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const myNumber = getRandomInt(1, 10);

const hearts = document.querySelectorAll(".heart");
let lives = 3;
const restartBtn = document.getElementById("restart");
document.getElementById("check").onclick = () => {
    if (value === myNumber) {
        LeftStar.src = "photes/heart-eyes.png";
        RightStar.src = "photes/heart-eyes.png";
        document.getElementById("resultCont").textContent = "Congratulations! You guessed the number!";
        resultCont.style.color = "green";
        winSound.currentTime = 0;
        winSound.play();
         hearts.forEach(h => h.classList.add("hide"));

        restartBtn.style.display = "block";

        document.getElementById("check").disabled = true;
        return;
    }
    else{
         LeftStar.src = "photes/sad-face.png";
        RightStar.src = "photes/sad-face.png";
        lives--;
        HintButt.style.display = "block";

        resultCont.style.color = "red";
        document.getElementById("resultCont").textContent = "Wrong! Try again.";
        hearts[lives].classList.add("hide");
        loseHeartSound.currentTime = 0;
        loseHeartSound.play();
         if (lives === 0) {
            HintButt.style.display = "none";
        LeftStar.src = "photes/die.png";
        RightStar.src = "photes/die.png";
        document.getElementById("check").disabled = true;
        document.getElementById("resultCont").textContent = "Game Over!\n" +"the correct answer is: "+ myNumber;
         restartBtn.style.display = "block";
         failSound.currentTime = 0;
         failSound.play();
    }
        
    }


};
restartBtn.onclick = () => {
    LeftStar.src = "photes/star.png";
    RightStar.src = "photes/star.png";
    lives = 3;
    value = 1;
    number.textContent = value;
    resultCont.textContent = "";
    document.getElementById("check").disabled = false;
    hearts.forEach(h => h.classList.remove("hide"));
    restartBtn.style.display = "none";
};
const hintBox = document.getElementById("hintBox");

HintButt.onclick = () => {
    const min = Math.max(1, myNumber - 2);
    const max = Math.min(10, myNumber + 2);

    hintBox.textContent = `Hint: The number is between ${min} and ${max}`;
    
    hintBox.classList.add("show");

    setTimeout(() => {
        hintBox.classList.remove("show");
    }, 2500);
};