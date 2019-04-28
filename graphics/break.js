const np1name = nodecg.Replicant('np1name');
const np2name = nodecg.Replicant('np2name');
const message = nodecg.Replicant('message');
const nuHidden = nodecg.Replicant('nuHidden');
const nowPlaying = nodecg.Replicant("nowPlaying");
const manualsong = nodecg.Replicant("manualSong");
const mSongEnabled = nodecg.Replicant("mSongEnabled");
const songHidden = nodecg.Replicant("songHidden");
const BGShown = nodecg.Replicant("BGShown");

np1name.on('change', (newValue, oldValue) => {
    temp2.text = newValue;
});

np2name.on('change', (newValue, oldValue) => {
    temp4.text = newValue;
});

message.on('change', (newValue, oldValue) => {
    exampletext.text = newValue;
});

nuHidden.on('change', (newValue, oldValue) => {
    var nuTl = new TimelineMax();
    if (newValue) {
        nuTl.to("#line2", 1, { ease: Power2.easeIn, width: 0 })
            .to("#exampletext", 1, { ease: Power2.easeIn, left: -860 }, 0.2)
            .to("#line2", 1, { ease: Power2.easeIn, width: 0 }, -0.1)
            .to("#temp1", 1, { ease: Power2.easeIn, left: -860 }, 0.4)
            .to("#temp2", 1, { ease: Power2.easeIn, left: -860 }, 0.6)
            .to("#temp3", 1, { ease: Power2.easeIn, left: -860 }, 0.6)
            .to("#temp4", 1, { ease: Power2.easeIn, left: -860 }, 0.7)
            .to("#exampletext", 0, { top: "45%" })
            .to("#exampletext", 1, { ease: Power2.easeInOut, left: 50});
    } else {
        nuTl.to("#exampletext", 1, { ease: Power2.easeInOut, left: -860 })
            .to("#exampletext", 0, { top: 300 })
            .to("#temp4", 1, { left: 50 }, 1)
            .to("#temp3", 1, { left: 50 }, 1.1)
            .to("#temp2", 1, { left: 50 }, 1.1)
            .to("#temp1", 1, { left: 50 }, 1.2)
            .to("#line2", 1, { width: 900 }, 2)
            .to("#exampletext", 1, { left: 50 }, 1.5);
    }
});

function songTextAnim(newText) {
    var songTimeline = new TimelineMax();
    songTimeline.add(TweenMax.to("#song", 0.5, {top: 50, ease: Power2.easeIn, onComplete: function() {
        song.text = newText;
        song.style.top = "-50px";
    }}))
    .add(TweenMax.to("#song", 0.5, {top: 1}));
} 

function updateSongText() {
    if (mSongEnabled.value) {
        songTextAnim("♫ " + manualsong.value + " ♫");
    } else {
        if (nowPlaying.value.artist === undefined && nowPlaying.value.song === undefined) {
            songTextAnim("♫ Nothing appears to be playing at the moment. ♫");
        } else {
            songTextAnim("♫ " + nowPlaying.value.artist + " - " + nowPlaying.value.song + " ♫");
        }
    }
}

nowPlaying.on("change", (newValue, oldValue) => {
    // this if condition fixes unnecessary animation triggers when the dashboard gets refreshed
    if (newValue !== oldValue) {
        updateSongText();
    }
});

manualsong.on("change", (newValue, oldValue) => {
    if (newValue !== oldValue) {
        updateSongText();
    }
});

mSongEnabled.on("change", (newValue, oldValue) => {
    if (newValue !== oldValue) {
        updateSongText();
    }
});

songHidden.on("change", (newValue, oldValue) => {
    if (newValue) {
        TweenMax.to("#musicBG", 0.5, { opacity: 0 });
    } else {
        TweenMax.to("#musicBG", 0.5, { opacity: 1 });
    }
});

BGShown.on("change", (newValue) => {
    if (newValue) {
        TweenMax.to("#backgroundIMG", 1, {opacity: 1});
    } else {
        TweenMax.to("#backgroundIMG", 1, {opacity: 0});
    }
})