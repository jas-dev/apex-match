

$(document).ready(startGame);

var firstCard = null;
var secondCard = null;
var currentMatches = null;
var gamesPlayed = null;
//counter that increments when reset button clicked, .text value to "games-played > value
var attempts = null;
//counter for number of times firstCard and secondCard pair were clicked. resets when reset button clicked. .text to "attempts > value
var accuracy = null;
//divide totalMatches by totalAttempts, resets when reset is clicked
var canBeClicked = true;

//reset function to wipe stats needed


function startGame(){
    console.log('Game started');
    addEventHandlers();

}

function addEventHandlers(){
    $('.card').click(clickHandler);

}

function clickHandler(){
    if(!canBeClicked ){ // || no clicky same card cheater//
        return;
    }
    $(this).addClass('revealed');
    // adds class to card that was clicked
    if(firstCard === null){
        firstCard= this;
    //breadcrumb to let me knw what if a first card has been chosen yet, and if not, stores the card that was just clicked into var firstCard
    }else{
        secondCard = this;
        var firstCardImg = $(firstCard).find('.front').css('background-image');
        //finds front background image of the first card clicked, returns its value and stores in firstCardImg
        var secondCardImg = $(secondCard).find('.front').css('background-image');
        //finds front background image of the second card clicked, returns its value and stores in firstCardImg
        if(firstCardImg === secondCardImg){
            currentMatches++;
            attempts++;
            console.log ('MATCH');
            firstCard = null;
            secondCard = null;

        }else{
            attempts++;
            console.log('NO MATCH');
            canBeClicked = false;
            setTimeout(resetCards, 2000)
        }

    }


}

function resetCards(){
    console.log(firstCard);
    $(firstCard).removeClass('revealed');
    $(secondCard).removeClass('revealed');
    firstCard = null;
    secondCard = null;
    canBeClicked = true;
}