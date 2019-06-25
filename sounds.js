class Sounds {
    constructor() {
        this.sounds = {
            confirmSelect: new Audio('sounds/ConfirmSelect.wav'),
            loadSelect: new Audio('sounds/LoadSelect.wav'),
            match: new Audio('sounds/Match.wav'),
            punchSelect: new Audio('sounds/PunchSelect.wav'),
            punchSelect2: new Audio('sounds/PunchSelect2.wav'),
            reset: new Audio('sounds/Reset.wav'),
            select1: new Audio('sounds/Select2.wav'),
            select2: new Audio('sounds/Select2.wav'),
            simpleClick: new Audio('sounds/SimpleClick.wav'),
            smallClick: new Audio('sounds/SmallClick.wav')
        };

        this.playSound = this.playSound.bind(this);
        this.toggleBGM = this.toggleBGM.bind(this);
        this.toggleFX = this.toggleFX.bind(this);

        this.setVolume();
        this.addEventListeners();
    }

    setVolume() {
        this.sounds.confirmSelect.volume = .35;
        this.sounds.loadSelect.volume = .5;
        this.sounds.match.volume = .5;
        this.sounds.punchSelect.volume = .7;
        this.sounds.punchSelect2.volume = .5;
        this.sounds.reset.volume = .25;
        this.sounds.select1.volume = .6;
        this.sounds.select2.volume = .6;
        this.sounds.simpleClick.volume = .6;
        this.sounds.smallClick.volume = .6;
    }

    addEventListeners() {
        const {bgm, fanfare} = this.sounds;
        fanfare.addEventListener('ended', () => {
            setTimeout(() => {
                bgm.play();
            }, 750);
        });
    }

    startBGM() {
        this.sounds.bgm.loop = true;
        this.sounds.bgm.play();
    }

    playSound(sound) {
        this.sounds[sound].play();
    }

    toggleBGM() {
        const muted = !this.sounds.bgm.muted;
        this.sounds.bgm.muted = muted;
        this.sounds.fanfare.muted = muted;
        return muted;
    }

    toggleFX() {
        const muted = !this.sounds.beep.muted;
        this.sounds.beep.muted = muted;
        this.sounds.beep2.muted = muted;
        this.sounds.right.muted = muted;
        this.sounds.wrong.muted = muted;
        this.sounds.flee.muted = muted;
        return muted;
    }

    playFanfare() {
        this.sounds.bgm.pause();
        this.sounds.fanfare.play();
    }
}