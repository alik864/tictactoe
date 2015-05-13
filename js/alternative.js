var cells = new Array(9); // [null, null, null, null, null, null, null, null, null];
  // cells[0] = "x";
  // cells[1] = "o";
  // $("#canvas1").on("click", function(){canvasClicked(1);});
  // $("#canvas2").on("click", function(){canvasClicked(2);});
  // $("#canvas3").on("click", function(){canvasClicked(3);});
  // $("#canvas4").on("click", function(){canvasClicked(4);});
  // $("#canvas5").on("click", function(){canvasClicked(5);});
  // $("#canvas6").on("click", function(){canvasClicked(6);});
  // $("#canvas7").on("click", function(){canvasClicked(7);});
  // $("#canvas8").on("click", function(){canvasClicked(8);});
  // $("#canvas9").on("click", function(){canvasClicked(9);});

  // var ids = ["#canvas1","#canvas2","#canvas3","#canvas4","#canvas5","#canvas6","#canvas7","#canvas8","#canvas9"]
  // for (var i = 0; i < 9; i+= 1) {
  //   $(ids[0]).on("click", function(){canvasClicked(i+1);});
  // }
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

// new update ---

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



