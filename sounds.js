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

    toggleBGM(e) {
        e.preventDefault();
        const muted = !this.sounds.bgm.muted;
        if(this.sounds.bgm.played.length === 0){
            this.sounds.bgm.play();
        }else{
            this.sounds.bgm.muted = muted;

        }
        //this.sounds.win.muted = muted;
    }

    toggleFX(e) {
        e.preventDefault();
        const muted = !this.sounds.simpleClick.muted;
        this.sounds.confirmSelect.muted = muted;
        this.sounds.loadSelect.muted =  muted;
        this.sounds.noMatch.muted= muted;
        this.sounds.match.muted =  muted;
        this.sounds.punchSelect.muted =  muted;
        this.sounds.reset.muted = muted;
        this.sounds.select1.muted =  muted;
        this.sounds.select2.muted =  muted;
        this.sounds.simpleClick.mutede = muted;
        this.sounds.smallClick.muted =  muted;
        return muted;
    }

    playTheme() {
        this.sounds.bgm.play();
    }
}