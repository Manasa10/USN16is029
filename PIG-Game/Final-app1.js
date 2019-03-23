
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
The files Final-app1.js, index1.html and style1.css correspond to the second version of pig game with
 2 dice. If one of the dice rolls a 1 then it is the turn of the next player.
 The text box provided at the bottom can be used to set a winning score. Default is 20. Clicking on the go
 button beside the text box sets the new target.
 Edited by Manasa Deshpande
 Git Repository- Manasa10/USN16is029

*/
var scores, roundScore, activePlayer, gamePlaying, gameStart, winScore=20, prevDice=0;


init();


document.querySelector('.btn-roll').addEventListener("click", function() {
    if(gamePlaying) {
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        console.log(dice1);
        //2. Display the result
        
        var diceDOM1 = document.querySelector('.dice1');
        diceDOM1.style.display = 'inline';
        diceDOM1.src = 'dice-' + dice1 + '.png';

         // 1.2nd Random number
         var dice2 = Math.floor(Math.random() * 6) + 1;
        console.log(dice2);
         //2. Displaying the 2nd dice
         
         var diceDOM2 = document.querySelector('.dice2');
         diceDOM2.style.display = 'block';
         diceDOM2.src = 'dice-' + dice2 + '.png';
        

        //3. Update the round score IF the rolled number was NOT a 1
        if (dice1!== 1 && dice2!== 1 ) {
                     //Add score
            roundScore += dice1+dice2;
   
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
    }    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        globalScores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = globalScores[activePlayer];

        // Check if player won the game
        if (globalScores[activePlayer] >= winScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});
document.querySelector('.btn-go').addEventListener('click',setWinScore );

function setWinScore() {
    if (gamePlaying && gameStart) {
        gameStart=false;//to prevent editing the winning score after the game starts
        var x= document.getElementById('fintextbox').value;
        //document.getElementById('fintextbox').disabled=true;
        if(!isNaN(x)){
            if(x>0){
            winScore=x;
            //console.log(winScore);
            }
        }
}
}


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    prevDice=0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener("click", init);
var finscore;
function init() {
    globalScores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    gameStart=true;
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('fintextbox').value=20;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function showhide(r){
    var t=r.form['txt'];
    r.value=='none'?t.setAttribute('disabled','disabled'):t.removeAttribute('disabled');
    t.style.display=r.value;
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;








/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
