
my old html

<!DOCTYPE HTML>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link href='http://fonts.googleapis.com/css?family=Playball' rel='stylesheet' type='text/css'>
    <script src="https://code.jquery.com/jquery-2.1.4.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
  </head>
  <body>
    <div class ="tictactoeheadline">
      <h2> Tic Tac Toe </h2>
      <h4 id="game-message"></h4>
    </div>

    <div id ="box">
      <canvas id = "canvas1" onclick="canvasClicked(1)"></canvas>
      <canvas id = "canvas2" onclick="canvasClicked(2)"></canvas>
      <canvas id = "canvas3" onclick="canvasClicked(3)"></canvas>
        <br/>
      <canvas id = "canvas4" onclick="canvasClicked(4)"></canvas>
      <canvas id = "canvas5" onclick="canvasClicked(5)"></canvas>
      <canvas id = "canvas6" onclick="canvasClicked(6)"></canvas>
        <br/>
      <canvas id = "canvas7" onclick="canvasClicked(7)"></canvas>
      <canvas id = "canvas8" onclick="canvasClicked(8)"></canvas>
      <canvas id = "canvas9" onclick="canvasClicked(9)"></canvas>
    </div>
      <div id ="scoreboard">
      <h2> Scoreboard </h2>

      </div>
  </body>
</html>













// my old code java

//Global Variables
var painted;
var content;
var winningCombinations;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var w;
var y;
var scoreboard = {x:0, O:1};

//Instantiate Arrays
window.onload=function(){

  painted = new Array();
  content = new Array();
  winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  for(var l = 0; l <= 8; l++){
    painted[l] = false;
    content[l] = '';
  }
}

//Game methods
function canvasClicked(canvasNumber){
  theCanvas = "canvas"+canvasNumber;
  c = document.getElementById(theCanvas);
  cxt = c.getContext("2d");

  if(painted[canvasNumber-1] ==false){
    if(turn%2==0){
      cxt.beginPath();
      cxt.moveTo(10,10);
      cxt.lineTo(40,40);
      cxt.moveTo(40,10);
      cxt.lineTo(10,40);
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1] = 'X';
    } else {
      cxt.beginPath();
      cxt.arc(25,25,20,0,Math.PI*2,true);
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1] = 'O';
    }

    turn++;
    painted[canvasNumber-1] = true;
    squaresFilled++;
    checkForWinners(content[canvasNumber-1]);

    if(squaresFilled==9){
      $("#game-message").html("THE GAME IS OVER!");
      location.reload(true);
    }

}
  else{
    console.log("");
  }

}

function checkForWinners(symbol){
  for(var a = 0; a < winningCombinations.length; a++){
    if(content[winningCombinations[a][0]] === symbol &&
       content[winningCombinations[a][1]] === symbol &&
       content[winningCombinations[a][2]] === symbol){
      $("#game-message").html("Winner is " + );
      playAgain();
    }
  }
}

// refreshes it at the end of the game
function playAgain(){
  y=confirm(" Do you want to play again?");
  if(y==true){
    console.log(" OK");
    location.reload(true);
  }
  else{
    $("#game-message").html("Game Over! Please come play again soon!");
  }
}

// update

function updateScore(score,player){
switch(player)  {
    case 1 :
        $('#player1score').text(score);
        break;
    case 2 :
        $('#player2score').text(score);
        break;
    default :
        console.log('received not acceptable player number');
}
}





/*my old code css
html {
  background-color: thistle;
}

body {
  /*background-image: url(../Image/swirl_pattern.png);
  margin-left: 0em;
  background-image: url(http://tallulahdoll.files.wordpress.com/2012/11/tribal-pattern_2.jpg);
  margin-right: 0em;
  padding: 2em;
  margin-top: 2em;
  margin-bottom: 2em;
  border-top: rgb(115, 78, 35);
  border-style: groove;
  border-width: initial;
}

#scoreboard {
  background-color: white;
  margin-left: 16.9em;
  margin-right: 16.9em;
  padding-bottom: 7em;
  padding-top: 1em;
  border-style: inset;
  border-color: black;
}

.tictactoeheadline {
  margin: 0 auto;
  display: table;
  padding-top: 1em;
  width: 39em;
  height: 150px;
  background: rgb(243, 239, 217);
  border-radius: 197px;
  margin-bottom: 1em;
}


#box > canvas {
  width: 200px;
  height: 200px;
  border: 7px solid rgb(14, 134, 151);
  /* float: left; */
}

h2 {
  font-size: 3em;
  font-family: 'Playball', cursive;
  ont-style: italic;
}



#game-message {
  margin: 0 auto;
  display: table;
  /*margin-top: 1em;
  margin-bottom: 1em;
  padding: 1em;*/
  background-color: rgb(210, 173, 244);
  color: white;
 /* border-style: outset;*/
  border-color: rgb(240, 236, 239);
  font-family: sans-serif;
}


#box {
  margin: 0 auto;
  display: table;
  border-color: rgb(216, 237, 235);
  background-color: rgb(229, 247, 255);
  margin-bottom: 2em;
}

.tictactoeheadline {
  margin: 0 auto;
  display: table;
  padding-top: 1em;
  width: 39em;
  height: 150px;
  background: rgb(243, 239, 217);
  border-radius: 197px;
  margin-bottom: 1em;
  border: rgb(217, 153, 92);
  border-style: inset;
  border-width: thick;
}

#canvas4, #canvas7 {
  /*clear: both;*/
}

h2 {
  margin: 0 auto;
  display: table;
  color: teal;
  font-size: xx-large;
  font-style: italic;
}

h3{

    position:relative;
    -webkit-animation:h3Animation 5s;

}

h1{

    position:relative;
    -webkit-animation:h1Animation 5s;

}

h2{

    position:relative;
    -webkit-animation:h2Animation 5s;

}
*/


/*`matts code

var cells = new Array(9); // [null, null, null, null, null, null, null, null, null];
   cells[0] = "x";
   cells[1] = "o";
   $("#canvas1").on("click", function(){canvasClicked(1);});
   $("#canvas2").on("click", function(){canvasClicked(2);});
   $("#canvas3").on("click", function(){canvasClicked(3);});
   $("#canvas4").on("click", function(){canvasClicked(4);});
   $("#canvas5").on("click", function(){canvasClicked(5);});
   $("#canvas6").on("click", function(){canvasClicked(6);});
   $("#canvas7").on("click", function(){canvasClicked(7);});
   $("#canvas8").on("click", function(){canvasClicked(8);});
   $("#canvas9").on("click", function(){canvasClicked(9);});

   var ids = ["#canvas1","#canvas2","#canvas3","#canvas4","#canvas5","#canvas6","#canvas7","#canvas8","#canvas9"]
   for (var i = 0; i < 9; i+= 1) {
    $(ids[0]).on("click", function(){canvasClicked(i+1);});
   }



var turn = "x";
var elements = $("#box > canvas")
for (var i = 0; i < 9; i+=1){
  elements[i].on("click", function() {
    canvasClicked(i+1);
    cells[i] = turn;
    toggleTurn();
  })
 }

var toggleTurn = function() {
  if (turn === "x") {
    turn = "o";
  } else {
    turn = "x";
  }
  return turn;
}

// Game Methods //code by myself

// $(document).ready(function() {
// $('#box div').click(function(){


  // if ($("#box1").hasClass('o') && $("#box2").hasClass('o') && $("#box3").hasClass('o') || $("#box4").hasClass('o') && $("#box5").hasClass('o') && $("#box6").hasClass('o') || $("#box7").hasClass('o') && $("#box8").hasClass('o') && $("#box9").hasClass('o') || $("#box1").hasClass('o') && $("#box4").hasClass('o') && $("#box7").hasClass('o') || $("#box2").hasClass('o') && $("#box5").hasClass('o') && $("#box8").hasClass('o') || $("#box3").hasClass('o') && $("#box6").hasClass('o') && $("#box9").hasClass('o') || $("#box1").hasClass('o') && $("#box5").hasClass('o') && $("#box9").hasClass('o') || $("#box3").hasClass('o') && $("#box5").hasClass('o') && $("#box7").hasClass('o'))
  //  {
//    alert('O has won the game. Start a new game')
//    $("#game li").text("+");
//   $("#game li").removeClass('disable')
//   $("#game li").removeClass('o')
//   $("#game li").removeClass('x')
//   $("#game li").removeClass('btn-primary')
//   $("#game li").removeClass('btn-info')
//    }
//   else if ($("#box1").hasClass('o') && $("#box2").hasClass('o') && $("#box3").hasClass('o') || $("#box4").hasClass('o') && $("#box5").hasClass('o') && $("#box6").hasClass('o') || $("#box7").hasClass('o') && $("#box8").hasClass('o') && $("#box9").hasClass('o') || $("#box1").hasClass('o') && $("#box4").hasClass('o') && $("#box7").hasClass('o') || $("#box2").hasClass('o') && $("#box5").hasClass('o') && $("#box8").hasClass('o') || $("#box3").hasClass('o') && $("#box6").hasClass('o') && $("#box9").hasClass('o') || $("#box1").hasClass('o') && $("#box5").hasClass('o') && $("#box9").hasClass('o') || $("#box3").hasClass('o') && $("#box5").hasClass('o') && $("#box7").hasClass('o'))
//   {
//    alert('X wins has won the game. Start a new game')
//    $("#game li").text("+");
//   $("#game li").removeClass('disable')
//   $("#game li").removeClass('o')
//   $("#game li").removeClass('x')
//   $("#game li").removeClass('btn-primary')
//   $("#game li").removeClass('btn-info')
//   }
//   else if (count == 9)
//   {
//   alert('Its a tie. It will restart.')
//   $("#game li").text("+");
//   $("#game li").removeClass('disable')
//   $("#game li").removeClass('o')
//   $("#game li").removeClass('x')
//   $("#game li").removeClass('btn-primary')
//   $("#game li").removeClass('btn-info')
//   count = 0
//   }
//   else if ($(this).hasClass('disable'))
//   {
//     alert('Already selected')
//   }
//   else if (count%2 == 0)
//   {
//     count++
//     $(this).text(o)
//       $(this).addClass('disable o btn-primary')
//       if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
//       {
//      alert('O wins')
//      count = 0
//      o_win++
// $('#o_win').text(o_win)
//         }
//   }
//    else
//   {
//     count++
//     $(this).text(x)
//     $(this).addClass('disable x btn-info')
//      if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
//         {
//    alert('X wins')
//    count = 0
//    x_win++
//    $('#x_win').text(x_win)
//         }
//   }

//    });
//     $("#reset").click(function () {
//     $("#game li").text("+");
//   $("#game li").removeClass('disable')
//   $("#game li").removeClass('o')
//   $("#game li").removeClass('x')
//   $("#game li").removeClass('btn-primary')
//   $("#game li").removeClass('btn-info')
//   count = 0

//   });
// });













----------------------------------------

// //Game methods
// function canvasClicked(canvasNumber){
//  takes the number canvasNumber and turns into an ID like canvas7
//   // theCanvas = "canvas"+canvasNumber;
//   c = document.getElementById(theCanvas);
//   cxt = c.getContext("2d");

//   if(painted[canvasNumber-1] ==false){
//     if(turn%2==0){
//       cxt.beginPath();
//       cxt.moveTo(10,10);
//       cxt.lineTo(40,40);
//       cxt.moveTo(40,10);
//       cxt.lineTo(10,40);
//       cxt.stroke();
//       cxt.closePath();
//       content[canvasNumber-1] = 'X';
//     } else {
//       cxt.beginPath();
//       cxt.arc(25,25,20,0,Math.PI*2,true);
//       cxt.stroke();
//       cxt.closePath();
//       content[canvasNumber-1] = 'O';
//     }

//     turn++;
//     painted[canvasNumber-1] = true;
//     squaresFilled++;
//     checkForWinners(content[canvasNumber-1]);

//     if(squaresFilled==9){
//       document.getElementById("game-message").innerHTML = "THE GAME IS OVER!";
//       location.reload(true);
//     }

// }
//   else{
//     console.log("");
//   }

// }

// function checkForWinners(symbol){
//   for(var a = 0; a < winningCombinations.length; a++){
//     if(content[winningCombinations[a][0]] === symbol &&
//        content[winningCombinations[a][1]] === symbol &&
//        content[winningCombinations[a][2]] === symbol){
//       document.getElementById("game-message").innerHTML = symbol + " WON!";
//       playAgain();
//     }
//   }
// }

// function playAgain(){
//   y=confirm(" Do you want to play again?");
//   if(y==true){
//     console.log(" OK");
//     location.reload(true);
//   }
//   else{
//     document.getElementById("game-message").innerHTML = "Bye! Come play again soon!";
//   }
// }

// // update

// function updateScore(score,player){
// switch(player)  {
//     case 1 :
//         $('#player1score').text(score);
//         break;
//     case 2 :
//         $('#player2score').text(score);
//         break;
//     default :
//         console.log('received not acceptable player number');
// }
// }
