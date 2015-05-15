
// the document passed to function run after html file is loaded on the browser
$ (document).ready (function(){

  var drawXNext = true;
  var foundWinner = false;
  var board = ['', '', '', '', '','' ,'','', ''];

  //I attach a click handler to each square in my tic tac toe
  $("#box div").click(function(){
    //1. When I click on a specific box (with in my tic tac toe board) it will find the ID that associates with the box that I clicked
    var IDofSquareThatWasClicked = $(this).attr("id");

    //2. If I click on any box it will display an "x" or an "o" and if I click the same box again it will not allow me to change what is already in that box because I filled the empty string already.
    if($(this).html() === ''){
       // 3.
      showBoxClicked(IDofSquareThatWasClicked);
    }

  }); // end of the click handler for each box

  // look for the dom element that has the reset id and attach a handler to it
  $("#reset").click(resetHandler);

  function resetHandler() {
    // find all dom element with a class of 'square'
    $('.square').each(function(){
      // for each dom elemnet set it's html to an empty string
      $(this).html('');
    });

    drawNext = true;
    foundWinner = false;
    board = ['', '', '', '', '','' ,'','', ''];

  };

  function showBoxClicked(boxId) {
    if(drawXNext){ // 4. When I click on a box it will draw "X" first
      $("#" + boxId).html("X"); // 4.1 Find the HTML element that was clicked and set it to the string "O".
      drawXNext = false;  // 4.2 If I click on a box it will show "X" and then when I click on another box afterwards it will show "O"

      board[boxId] = 'X';

      console.log("Board is " + board);
       foundWinner = lookForWinner("X", board);
       if(foundWinner){
       alert("X is the winner");
       }
    }else{  // 5 OR
      $("#" + boxId).html("O");  // 5.1 Find the HTML element that was clicked and set it to the string "O".
      drawXNext = true;  // 5.2 when I state "True" it will loop me back to the drawXNext and it will write "X" when I click on a box.
      board[boxId] = 'O';
      console.log("Board is " + board);
          foundWinner = lookForWinner("O", board);
          if(foundWinner){
          alert("O is the winner");
       }
    }
  }; // end of the showBoxClicked function

// Goes through code and finds different solutions for how to win
  function lookForWinner(choice, board){
    var winner = false;

    //All different solutions of ways to win - diagonal, by row, by column.
    // row1 all X'x or O's
    if(board[0] === choice && board[1] === choice && board[2] === choice){
      winner = true;
    // row2 all X'x or O's
    }else if(board[3] === choice && board[4] === choice && board[5] === choice){
      winner = true;
    // row3 all X'x or O's
    }else if(board[6] === choice && board[7] === choice && board[8] === choice){
      winner = true;
    // column1 all X'x or O's
    }else if(board[0] === choice && board[3] === choice && board[6] === choice){
      winner = true;
    // column2 all X'x or O's
    }else if(board[1] === choice && board[4] === choice && board[7] === choice){
      winner = true;
    // column2 all X'x or O's
    }else if(board[2] === choice && board[5] === choice && board[8] === choice){
      winner = true;
    // Diagonal Left of all X'x or O's
    }else if(board[0] === choice && board[6] === choice && board[8] === choice){
      winner = true;
    // Diagonal Right of all X'x or O's
    }else if(board[2] === choice && board[4] === choice && board[6] === choice){
      winner = true;
    }
    return winner;
  };
});  // end of the document ready

