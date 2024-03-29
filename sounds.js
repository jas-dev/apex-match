class Sounds {
    constructor() {
        this.sounds = {
            noMatch: new Audio('sounds/NoMatch.wav'),
            match: new Audio('sounds/Match.wav'),
            punchSelect: new Audio('sounds/PunchSelect.wav'),
            reset: new Audio('sounds/Reset.wav'),
            select1: new Audio('sounds/Select1.wav'),
            select2: new Audio('sounds/Select2.wav'),
            simpleClick: new Audio('sounds/SimpleClick.wav'),
            bgm: new Audio('sounds/bgm.mp3'),
            victory: new Audio('sounds/Victory.mp3')
        };

        this.playSound = this.playSound.bind(this);
        this.toggleBGM = this.toggleBGM.bind(this);
        this.toggleFX = this.toggleFX.bind(this);
        this.setVolume();
        this.sounds.bgm.loop = true;
    }

    setVolume() {
        this.sounds.noMatch.volume = .25;
        this.sounds.punchSelect.volume = .5;
        this.sounds.match.volume = .5;
        this.sounds.reset.volume = .3;
        this.sounds.select1.volume = .6;
        this.sounds.select2.volume = .6;
        this.sounds.simpleClick.volume = .5;
        this.sounds.bgm.volume = .2;
        this.sounds.victory.volume = .3;
    }
    playSound(sound){
        this.sounds[sound].play();
    }

    toggleBGM() {
        if($('button.mute-bgm').hasClass('disabled')){
            if(this.sounds.bgm.muted){
                this.sounds.bgm.muted = false;
            }else{
                this.sounds.bgm.play();
            }
            return this.sounds.bgm.muted;

        }else{
            this.sounds.bgm.muted = true;
            return this.sounds.bgm.muted;
        }
    }

    toggleFX() {
        const muted= !this.sounds.simpleClick.muted;

        if(!this.sounds.simpleClick.muted){
            this.sounds.noMatch.muted= true;
            this.sounds.match.muted =  true;
            this.sounds.punchSelect.muted =  true;
            this.sounds.reset.muted = true;
            this.sounds.select1.muted =  true;
            this.sounds.select2.muted =  true;
            this.sounds.simpleClick.muted = true;
            this.sounds.victory.muted = true
        }else{
            this.sounds.noMatch.muted= false;
            this.sounds.match.muted =  false;
            this.sounds.punchSelect.muted =  false;
            this.sounds.reset.muted = false;
            this.sounds.select1.muted =  false;
            this.sounds.select2.muted =  false;
            this.sounds.simpleClick.muted = false;
            this.sounds.victory.muted = false;
        }
        return muted
    }
}