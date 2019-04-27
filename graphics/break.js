const np1name = nodecg.Replicant('np1name');
const np2name = nodecg.Replicant('np2name');
const message = nodecg.Replicant('message');
const nuHidden = nodecg.Replicant('nuHidden');
const nowPlaying = nodecg.Replicant("nowPlaying");
const manualsong = nodecg.Replicant("manualSong");
const mSongEnabled = nodecg.Replicant("mSongEnabled");
const songHidden = nodecg.Replicant("songHidden");
const notifHiddenBreak = nodecg.Replicant('notifHiddenBreak');
const notifContents = nodecg.Replicant('notifContents', { defaultValue: new Array() });
var reverseNotifHeight = 0;
var notifHeight = 0;

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
            .to("#temp4", 1, { ease: Power2.easeIn, left: -860, }, 0.7)
            .to({}, 0, {onCompete: function() {
                if (notifHiddenBreak.value) {
                    exampletext.style.top = "45%";
                    nuTl.add(TweenMax.to("#exampletext", 1, { ease: Power2.easeInOut, left: 50}));
                }
            }});
    } else {
        notifHiddenBreak.value = true;
        nuTl.to("#exampletext", 1, { ease: Power2.easeInOut, left: -860 })
            .to("#exampletext", 0, { top: 300, onComplete: function() {
                if (!notifHiddenBreak.value) {
                    exampletext.style.top = reverseNotifHeight - 145 + "px";
                }
            }})
            .to("#temp4", 1, { left: 50 }, 1)
            .to("#temp3", 1, { left: 50 }, 1.1)
            .to("#temp2", 1, { left: 50 }, 1.1)
            .to("#temp1", 1, { left: 50 }, 1.2)
            .to("#line2", 1, { width: 900 }, 2)
            .to("#exampletext", 1, { left: 50 }, 1.5);
    }
});

nowPlaying.on("change", (newValue, oldValue) => {
    if (mSongEnabled.value == false || mSongEnabled.value == undefined) {
        if (nowPlaying.value.artist === undefined && nowPlaying.value.song === undefined) {
            song.text = "♫ Nothing seems to be playing on last.fm. Fix this, streamer! ♫";
        } else {
            song.text = "♫ " + nowPlaying.value.artist + " - " + nowPlaying.value.song + " ♫";
        }
    }
});

manualsong.on("change", (newValue, oldValue) => {
    if (mSongEnabled.value) {
        song.text = "♫ " + manualsong.value + " ♫";
    }
});

mSongEnabled.on("change", (newValue, oldValue) => {
    if (mSongEnabled.value) {
        song.text = "♫ " + manualsong.value + " ♫";
    } else {
        if (nowPlaying.value.artist === undefined && nowPlaying.value.song === undefined) {
            song.text = "♫ Nothing is playing on last.fm. Fix this, streamer! ♫";
        } else {
            song.text = "♫ " + nowPlaying.value.artist + " - " + nowPlaying.value.song + " ♫";
        }
    }
});

songHidden.on("change", (newValue, oldValue) => {
    if (newValue) {
        TweenMax.to("#song", 0.5, { opacity: 0 });
    } else {
        TweenMax.to("#song", 0.5, { opacity: 1 });
    }
});

function notifUpdatePositioning() {
    notifHeight = notifTitle.getBoundingClientRect().height + notifContent.getBoundingClientRect().height - 120;
    reverseNotifHeight = (1080 - notifHeight) / 2;
    notifTexts.style.top = reverseNotifHeight + "px";
    exampletext.style.top = reverseNotifHeight - 145 + "px";
}

notifContents.on('change', (newValue, oldValue) => {
    notifTitle.text = newValue[0];
    notifContent.innerHTML = newValue[1];
    notifUpdatePositioning();
});

notifHiddenBreak.on('change', (newValue, oldValue) => {
    var notifTl = new TimelineMax();
    notifUpdatePositioning();
    if (!newValue) {
        nuHidden.value = true;
        notifTl.to({}, 1.5, {})
        .to("#exampletext", 1, { left: 50 }, 2)
        .to("#notifLine", 1, {width: 900}, 2.1)
        .to("#notifTitle", 1, {left: 50}, 2.2)
        .to("#notifContent", 1, {left: 50}, 2.3);
    } else {
        notifTl.to("#notifContent", 1, {ease: Power2.easeIn, left: -860})
        .to("#notifTitle", 1, {ease: Power2.easeIn, left: -860})
        .to("#notifLine", 1, {ease: Power2.easeIn, width: 0})
        .to("#exampletext", 1, { ease: Power2.easeInOut, left: -860});
    }
});