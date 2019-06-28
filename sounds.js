class Sounds {
    constructor() {
        this.sounds = {
            confirmSelect: new Audio('sounds/ConfirmSelect.wav'),
            loadSelect: new Audio('sounds/LoadSelect.wav'),
            noMatch: new Audio('sounds/NoMatch.wav'),
            match: new Audio('sounds/Match.wav'),
            punchSelect: new Audio('sounds/PunchSelect.wav'),
            reset: new Audio('sounds/Reset.wav'),
            select1: new Audio('sounds/Select2.wav'),
            select2: new Audio('sounds/Select2.wav'),
            simpleClick: new Audio('sounds/SimpleClick.wav'),
            smallClick: new Audio('sounds/SmallClick.wav'),
            bgm: new Audio('sounds/bgm.mp3')
        };

        this.playSound = this.playSound.bind(this);
        this.toggleBGM = this.toggleBGM.bind(this);
        this.toggleFX = this.toggleFX.bind(this);
        this.setVolume();
        this.addEventListeners();
    }

    setVolume() {
        this.sounds.confirmSelect.volume = .4;
        this.sounds.loadSelect.volume = .4;
        this.sounds.noMatch.volume = .25;
        this.sounds.punchSelect.volume = .5;
        this.sounds.match.volume = .5;
        this.sounds.reset.volume = .3;
        this.sounds.select1.volume = .6;
        this.sounds.select2.volume = .6;
        this.sounds.simpleClick.volume = .5;
        this.sounds.smallClick.volume = .5;
        this.sounds.bgm.volume = .1;
    }

    addEventListeners() {
     /*   const {bgm, //win} = this.sounds;
        bgm.addEventListener('ended', () => {
            setTimeout(() => {
                bgm.play();
            }, 750);
        });*/
    }

    startBGM() {
        this.sounds.bgm.loop = true;
    }

    playSound(sound) {
        this.sounds[sound].play();
    }

    toggleBGM() {
        if(this.sounds.bgm.played.length === 0){
            this.sounds.bgm.play();
        }else if(!!this.sounds.bgm.played.length){
            this.sounds.bgm.muted = true;
        }

        //this.sounds.win.muted = muted;
    }

    toggleFX() {
        if(!this.sounds.simpleClick.muted){
            this.sounds.confirmSelect.muted = true;
            this.sounds.loadSelect.muted =  true;
            this.sounds.noMatch.muted= true;
            this.sounds.match.muted =  true;
            this.sounds.punchSelect.muted =  true;
            this.sounds.reset.muted = true;
            this.sounds.select1.muted =  true;
            this.sounds.select2.muted =  true;
            this.sounds.simpleClick.muted = true;
            this.sounds.smallClick.muted =  true;
        }else{
            this.sounds.confirmSelect.muted = false;
            this.sounds.loadSelect.muted =  false;
            this.sounds.noMatch.muted= false;
            this.sounds.match.muted =  false;
            this.sounds.punchSelect.muted =  false;
            this.sounds.reset.muted = false;
            this.sounds.select1.muted =  false;
            this.sounds.select2.muted =  false;
            this.sounds.simpleClick.muted = false;
            this.sounds.smallClick.muted =  false;
        }

    }

    playTheme() {
        this.sounds.bgm.play();
    }
}