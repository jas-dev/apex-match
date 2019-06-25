

$(document).ready(startGame);

var firstCard = null;
var secondCard = null;
var matches = 0;
var gamesPlayed = 0;
var attempts = 0;
var accuracy = 0 + "%";
var canBeClicked = true;
var images = ['LMG.png','SMG.png','Shotguns.png','Pistol.png','SR.png','AR.png','apex_icon2.png','apex-logo-weathered.png','apex-logo-darkred.png'];


function startGame(){
    console.log('Game started');
    randomizeAndGenerateCards();
    addEventHandlers();
    display_stats();
}

function addEventHandlers(){
    $('.card').click(clickHandler);
    $('.reset').click(reset_stats);
}

function clickHandler(){
    if(!canBeClicked || $(this).hasClass('revealed')){
        //if caBeClicked var is falsy exit click handler so game "stops playing" until its truthy again, or if card that was clicked already has class of revealed, exit click handler for that moment so multiple clicks on same element cant be used to exploit game logic
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
            matches++;
            attempts++;
            console.log ('MATCH');
            firstCard = null;
            secondCard = null;
            display_stats();

        }else{
            attempts++;
            console.log('NO MATCH');
            canBeClicked = false;
            setTimeout(resetCards, 1500);
            display_stats();
        }
    }
}

function randomizeAndGenerateCards(){
    var doubleImages = images.concat(images);
    shuffle(doubleImages);

    for (var i =0; i < doubleImages.length;i++){
        var container = $('<div>').addClass('container');
        var card = $('<div>').addClass('card');
        var front = $('<div>').addClass('front').css("background-image", `url(images/${doubleImages[i]}`);
        var back = $('<div>').addClass('back').css("background-image", "url(images/Blank.png)");
        card.append(back, front);
        container.append(card);
        $('#game-area').append(container);
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function resetCards(){
    console.log("resetCards has been triggered");
    $(firstCard).removeClass('revealed');
    $(secondCard).removeClass('revealed');
    firstCard = null;
    secondCard = null;
    canBeClicked = true;
}

function display_stats(){
    console.log("display_stats has been triggered");
    $('.games-played .value').text(gamesPlayed);
    $('.attempts .value').text(attempts);
    if(!matches && !attempts){
        accuracy = null;
        $('.accuracy .value').text(accuracy);
    }else{
        accuracy = matches / attempts;
        var accuracyConverted= (accuracy*100).toFixed(2)+ "%";
        $('.accuracy .value').text(accuracyConverted);
    }

}

function reset_stats(){
    console.log("reset stats has been triggered");
    accuracy = 0;
    matches = 0;
    attempts = 0;
    firstCard = null;
    secondCard = null;
    $('div .card').removeClass('revealed');
    gamesPlayed++;
    display_stats();

}

function startAudio() {
    $('.card-area').onload(playSound);
}

function playSound() {
    var player = new Audio('');
    player.volume = .7;
    player.play();
}