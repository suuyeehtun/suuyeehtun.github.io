// Global Variables
let canvasForBox = document.getElementById("canvasForBox");
let textContextOfCanvas = canvasForBox.getContext("2d");

// Array of cell values
let cellOfPath1 = [
  [
    0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1,
    1, 1, 0, 0, 1,
  ],
  [
    1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1,
    1, 0, 1, 0, 1,
  ],
  [
    1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0,
    1, 0, 1, 0, 1,
  ],
  [
    1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0,
    1, 0, 1, 0, 1,
  ],
  [
    1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0,
    1, 0, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0,
    1, 0, 1, 0, 1,
  ],
  [
    1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0,
    1, 0, 1, 0, 1,
  ],
  [
    1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1,
    1, 0, 1, 0, 1,
  ],
  [
    1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 1,
  ],
  [
    0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 1, 0, 1,
  ],
  [
    1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1,
  ],
  [
    0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1,
    1, 1, 1, 1, 1,
  ],
  [
    0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1,
  ],
  [
    0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 1, 0, 1,
  ],
  [
    0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 1,
  ],
  [
    0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 0, 1,
  ],
  [
    0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 1, 0, 1,
  ],
  [
    0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    1, 0, 1, 0, 1,
  ],
  [
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    1, 0, 1, 0, 1,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0,
    1, 0, 1, 0, 1,
  ],
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
    1, 0, 1, 0, 1,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0,
    1, 0, 1, 0, 1,
  ],
  [
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 1, 0, 1,
  ],
  [
    0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 0, 0, 1,
  ],
  [
    0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0,
    1, 1, 1, 1, 1,
  ],
  [
    0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
    0, 0, 0, 0, 1,
  ],
  [
    0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1,
  ],
  [
    0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 1,
  ],
  [
    0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 0, 2,
  ],
];

let changeCellOfPath = cellOfPath1;
let sizeOfCell = 15;
let brick = new Image();
brick.src = "./image/grass.webp";
let path = new Image();
path.src = "./image/black.jpg";
let score = document.getElementById("score");
let time = document.getElementById("timer");
let totalTime = 50;
let timerInterval;
let startTimer = false;
let scores = 0;
let livesheart = 3;
let finished = false;
let startGame = true;
let startTime, endTime;
time.innerText = totalTime;
score.innerText = scores;
document.getElementById("gameMusic").play();

//this is show in maze starter and goal images
let cardOfImg = localStorage.getItem("card");
let starter = new Image();
let goal = new Image();

if (cardOfImg === "bear") {
  starter.src = "./image/bearImage.png";
  goal.src = "./image/honeyImage.png";
} else if (cardOfImg === "rabbit") {
  starter.src = "./image/rabbitImage.png";
  goal.src = "./image/carrotImage.png";
} else if (cardOfImg === "elephant") {
  starter.src = "./image/pinkElephantImage.png";
  goal.src = "./image/sugarcaneImage.png";
} else if (cardOfImg === "monkey") {
  starter.src = "./image/monkeyImage.png";
  goal.src = "./image/bananaImage.png";
} else if (cardOfImg === "tiger") {
  starter.src = "./image/tigerImage.png";
  goal.src = "./image/meat.png";
} else if (cardOfImg === "squirrel") {
  starter.src = "./image/squirrel.png";
  goal.src = "./image/nutImage.png";
} else if (cardOfImg === "kanganroo") {
  starter.src = "./image/kangrooImage.png";
  goal.src = "./image/fruitImage.png";
} else if (cardOfImg === "cat") {
  starter.src = "./image/catImage.png";
  goal.src = "./image/fishImage.png";
} else if (cardOfImg === "pig") {
  starter.src = "./image/pigImage.png";
  goal.src = "./image/cornImage.png";
} else if (cardOfImg === "mouse") {
  starter.src = "./image/mouseImage.png";
  goal.src = "./image/cheese.png";
}

/**
 * this method is used for timer
 */
let timer = () => {
  if (!startTimer) {
    startTimer = true;
    time.innerText = totalTime;
    timerInterval = setInterval(() => {
      totalTime--;
      time.innerText = totalTime;
      if (totalTime === 0) {
        endGame("Time's Up! Play Again.");
        document.getElementById("gameOver").play();
        document.getElementById("gameMusic").pause();
        document.getElementById("lose").style.display = "flex";
        document.getElementById("win").style.display = "none";
        clearInterval(timerInterval);
      }
    }, 2000);
  }
};

/**
 * this method is used for drawing the arrayOfMaze on the canvas
 */
let drawCellOfPath = (cell) => {
  textContextOfCanvas.clearRect(0, 0, canvasForBox.width, canvasForBox.height);
  for (let i = 0; i < cell.length; i++) {
    for (let j = 0; j < cell[i].length; j++) {
      let x = j * sizeOfCell;
      let y = i * sizeOfCell;
      if (cell[i][j] === 1) {
        textContextOfCanvas.drawImage(brick, x, y, sizeOfCell, sizeOfCell);
      } else if (cell[i][j] === 2) {
        textContextOfCanvas.drawImage(path, x, y, sizeOfCell, sizeOfCell);
        textContextOfCanvas.drawImage(goal, x, y, sizeOfCell, sizeOfCell);
      } else {
        textContextOfCanvas.fillRect(x, y, sizeOfCell, sizeOfCell);
      }
    }
  }
};

/**
 * this function is used for menu button
 */
$(document).ready(function () {
  $("#menu").click(function () {
    $("#setting").toggle();
    $("#historyBtn, #homeBtn").show();
    $("#historyBtn").click(function () {
      $("#history").slideToggle();
    });
    //
    $("#homeBtn").click(function () {
      $("body").fadeTo(1000, 0.5, function () {
        window.location.href = "home.html";
      });
    });
    //
    $("#helpBtn").click(function () {
      $("body").fadeTo(1000, 0.5, function () {
        window.location.href = "help.html";
      });
    });
    //
    $("#charaterBtn").click(function () {
      $("body").fadeTo(1000, 0.5, function () {
        window.location.href = "cards.html";
      });
    });
    //
    $("#soundBtn").click(function () {
      $("#play_sound").click(function () {
        $("#mute_sound").show();
        document.getElementById("gameMusic").pause();
        $("#play_sound").hide();
      });
      $("#mute_sound").click(function () {
        $("#play_sound").show();
        document.getElementById("gameMusic").play();
        $("#mute_sound").hide();
      });
    });
  });
});

/**
 * this method is used for drawing the player
 */
let drawPlayer = (x, y) => {
  textContextOfCanvas.drawImage(starter, x, y, sizeOfCell, sizeOfCell);
};

/**
 * this is object for player position
 */
let player = {
  horizontalPositionOfPlayer: 0,
  verticalPositionOfPlayer: 0,
  newHorizontalPositionOfPlayer: 0,
  newVerticalPositionOfPlayer: 0,
};

/**
 *  this method is used for movement and collision detection
 */
let moveThePlayer = () => {
  if (!startGame) return;
  if (!startTimer) {
    timer(); // start timer when the player first moves
  }

  let col = Math.floor(player.newHorizontalPositionOfPlayer / sizeOfCell);
  let row = Math.floor(player.newVerticalPositionOfPlayer / sizeOfCell);

  // check for valid position and boundary
  if (
    row >= 0 &&
    row < changeCellOfPath.length &&
    col >= 0 &&
    col < changeCellOfPath[0].length
  ) {
    let cellValue = changeCellOfPath[row][col];
    if (cellValue === 1) {
      document.getElementById("warning-sound").play();
      canvasForBox.classList.add("shake");
      canvasForBox.addEventListener(
        "animationend",
        () => {
          canvasForBox.classList.remove("shake");
        },
        { once: true }
      );
      liveCheck();
      return;
    } else if (cellValue === 2) {
      if (livesheart === 3) {
        scores += 10;
      } else if (livesheart === 2) {
        scores += 7;
      } else if (livesheart === 1) {
        scores += 4;
      }
      score.innerText = scores;
      $(document).ready(function () {
        $("#history").append(
          `<div class="showHistory">Score: ${scores}${historyHeart()}</div>`
        );
      });
      document.getElementById("gameWin").play();
      confetti({
        particleCount: 500,
        spread: 80,
        origin: { x: 0.5, y: 0.5 },
        colors: ["#ffffff", "#00ff00"],
        shapes: ["square", "circle", "rectangle"],
        gravity: 1.2,
        scalar: 1.5,
      });
      document.getElementById("win").style.display = "flex";
      document.getElementById("lose").style.display = "none";
      endGame("Congratulations! You Win.");
      document.getElementById("gameMusic").pause();
      clearInterval(timerInterval);
    }

    /**
     * this method is used for show in history board
     */
    let historyHeart = () => {
      if (scores === 10)
        return `<div class="heartColor">&#x2764; &#x2764; &#x2764;</div>`;
      if (scores === 7)
        return `<div class="heartColor">&#x2764; &#x2764;</div>`;
      if (scores === 4) return `<div class="heartColor">&#x2764; </div>`;
    };

    // move player to new position
    player.horizontalPositionOfPlayer = player.newHorizontalPositionOfPlayer;
    player.verticalPositionOfPlayer = player.newVerticalPositionOfPlayer;
  } else {
    liveCheck();
  }

  // redraw the canvas
  drawCellOfPath(changeCellOfPath);
  drawPlayer(
    player.horizontalPositionOfPlayer,
    player.verticalPositionOfPlayer
  );
};

/**
 * this method is used for live heart
 */
let liveCheck = () => {
  if (livesheart > 0) {
    $(`.live${livesheart}`).hide();
    $(`.lost${livesheart}`).show();
    livesheart--;
  }
  if (livesheart === 0) {
    document.getElementById("gameOver").play();
    document.getElementById("gameMusic").pause();
    document.getElementById("lose").style.display = "flex";
    document.getElementById("win").style.display = "none";
    endGame("Game Over! You hit a wall.");
    clearInterval(timerInterval);
  }
};

/**
 * this method is used for end game
 */
let endGame = (message) => {
  finished = true;
  startGame = false;
  $(document).ready(function () {
    box.style.display = "flex";

    $("#result").text(message);

    $("#restartbtn").click(function () {
      startTimer = false;
      totalTime = 50;
      score.innerText = "00";
      time.innerText = totalTime;
      $(".lost1, .lost2, .lost3").hide();
      $(".live1, .live2, .live3").show();
      $("#box").hide();
      document.getElementById("gameWin").pause();
      document.getElementById("gameMusic").play();
      player.horizontalPositionOfPlayer = 0;
      player.verticalPositionOfPlayer = 0;
      livesheart = 3;
      scores = 0;
      changeCellOfPath = drawRandomCell(cellOfPath1);
      drawCellOfPath(changeCellOfPath);
      drawPlayer(0, 0);
      finished = false;
      startGame = true; 
      $("#play_sound").show();
      $("#mute_sound").hide();
    });
  });
};

/**
 *  this method is used for handle player movement with arrow keys
 */
window.addEventListener("keydown", (key) => {
  if (!startGame) return; 
  switch (key.keyCode) {
    case 37: // ArrowLeft
      player.newHorizontalPositionOfPlayer =
        player.horizontalPositionOfPlayer - sizeOfCell;
      player.newVerticalPositionOfPlayer = player.verticalPositionOfPlayer;
      break;
    case 38: // ArrowUp
      player.newVerticalPositionOfPlayer =
        player.verticalPositionOfPlayer - sizeOfCell;
      player.newHorizontalPositionOfPlayer = player.horizontalPositionOfPlayer;
      break;
    case 39: // ArrowRight
      player.newHorizontalPositionOfPlayer =
        player.horizontalPositionOfPlayer + sizeOfCell;
      player.newVerticalPositionOfPlayer = player.verticalPositionOfPlayer;
      break;
    case 40: // ArrowDown
      player.newVerticalPositionOfPlayer =
        player.verticalPositionOfPlayer + sizeOfCell;
      player.newHorizontalPositionOfPlayer = player.horizontalPositionOfPlayer;
      break;
    default:
      return;
  }

  // check collision before moving
  moveThePlayer();
});

// when the window loading initial setup
window.onload = () => {
  drawCellOfPath(changeCellOfPath);
  drawPlayer(0, 0);
};

/**
 * this method is used for random cell create
 */
let drawRandomCell = (cell) => {
  let rows = cell.length;
  let cols = cell[0].length;
  let arrayOfMaze = [];

  // initialize arrayOfMaze with walls
  for (let i = 0; i < rows; i++) {
    arrayOfMaze[i] = [];
    for (let j = 0; j < cols; j++) {
      arrayOfMaze[i][j] = 1;
    }
  }

  let cells = (x, y) => {
    arrayOfMaze[y][x] = 0;

    // cells ways in random order
    let arrayOfCellDirection = [
      [0, -2],
      [2, 0],
      [0, 2],
      [-2, 0],
    ];

    for (let index = arrayOfCellDirection.length - 1; index > 0; index--) {
      let randomCell = Math.floor(Math.random() * (index + 1));
      let cellBlock = arrayOfCellDirection[index];
      arrayOfCellDirection[index] = arrayOfCellDirection[randomCell];
      arrayOfCellDirection[randomCell] = cellBlock;
    }

    // process each direction
    for (let i = 0; i < arrayOfCellDirection.length; i++) {
      let directionOfX = arrayOfCellDirection[i][0];
      let directionOfY = arrayOfCellDirection[i][1];
      let newDirectionOfX = x + directionOfX;
      let newDirectionOfY = y + directionOfY;
      let wallOfDirectionX = x + directionOfX / 2;
      let wallOfDirectionY = y + directionOfY / 2;

      if (
        newDirectionOfY >= 0 &&
        newDirectionOfY < rows &&
        newDirectionOfX >= 0 &&
        newDirectionOfX < cols &&
        arrayOfMaze[newDirectionOfY][newDirectionOfX] === 1
      ) {
        arrayOfMaze[wallOfDirectionY][wallOfDirectionX] = 0;
        cells(newDirectionOfX, newDirectionOfY);
      }
    }
  };

  cells(0, 0);

  arrayOfMaze[rows - 1] = [
    0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 0, 2,
  ];
  return arrayOfMaze;
};

changeCellOfPath = drawRandomCell(cellOfPath1);
drawCellOfPath(changeCellOfPath);
