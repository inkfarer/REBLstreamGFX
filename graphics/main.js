const p1score = nodecg.Replicant('p1score');
const p2score = nodecg.Replicant('p2score');
const stage = nodecg.Replicant('stage');
const scHidden = nodecg.Replicant('scHidden');
const canvas = document.getElementById("scCanvas");
const ctx = scCanvas.getContext('2d');
const p1name = nodecg.Replicant('p1name');
const p2name = nodecg.Replicant('p2name');
const notifHiddenMain = nodecg.Replicant('notifHiddenMain');
const notifContents = nodecg.Replicant('notifContents', { defaultValue: new Array() });
var notifHeight = 0;

//canvas nonsense
ctx.beginPath();
ctx.rect(0, 0, 5, 120);
ctx.fillStyle = "#0047aa";
ctx.fill();
ctx.beginPath();
ctx.rect(5, 0, 350, 120);
ctx.fillStyle = "#f1f1f1";
ctx.fill();
ctx.beginPath();
ctx.rect(350, 0, 50, 120);
ctx.fillStyle = "white";
ctx.fill();
ctx.beginPath();
ctx.rect(5, 0, 395, 40);
ctx.fillStyle = "#151515";
ctx.fill();
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = "#d0d0d0";
ctx.moveTo(5, 80);
ctx.lineTo(400, 80);
ctx.stroke();
//end canvas
//was it worth it?

stage.on('change', (newValue, oldValue) => {
    staged.text = newValue;
});

p1score.on('change', (newValue, oldValue) => {
    p1scored.innerText = newValue;
});

p2score.on('change', (newValue, oldValue) => {
    p2scored.innerText = newValue;
});

scHidden.on('change', (newValue, oldValue) => {
    if (newValue) {
        TweenMax.to("#scoreboard1", 1, { ease: Power2.easeIn, left: -500});
    } else {
        TweenMax.to("#scoreboard1", 1, {left: 100});
    }
});

p1name.on('change', (newValue, oldValue) => {
    p1named.text = newValue;
});

p2name.on('change', (newValue, oldValue) => {
    p2named.text = newValue;
});

function calculateNotifHeight() {
    if (notifBodyText.innerHTML == "") {
        return 0;
    } else {
        return notifBodyText.getBoundingClientRect().height + 5;
    }
}

notifHiddenMain.on('change', (newValue) => {
    notifTimeline = new TimelineMax();
    notifHeight = calculateNotifHeight();
    notifBody.style.height = notifHeight + "px";
    if (newValue) {
        notifTimeline.to("#notifTitleText", 0.5, {opacity: 0, left: -395, ease: Power3.easeIn}, "a")
        .to("#notifBodyText", 0.5, {opacity: 0, left: -395, ease: Power3.easeIn}, "a")
        .to("#notifTitle", 0.5, {left: -395, opacity: 0, ease: Power3.easeIn,}, "a")
        .to("#notifBody", 0.5, {left: -395, opacity: 0, ease: Power3.easeIn}, "a")
        .to("#notifLine", 0.3, {height: 0, ease: Power3.easeIn});
    } else {
        notifTimeline.to("#notifLine", 0.3, {height: notifHeight + 40})
        .to("#notifTitle", 0.5, {left: 5, opacity: 1, ease: Power3.easeOut,}, "a")
        .to("#notifTitleText", 0.5, {opacity: 1, left: 10, ease: Power3.easeOut}, "a")
        .to("#notifBody", 0.5, {left: 5, opacity: 0.9, ease: Power3.easeOut,}, "a")
        .to("#notifBodyText", 0.5, {opacity: 1, left: 10, ease: Power3.easeOut}, "a");
    }
});

notifContents.on('change', (newValue, oldValue) => {
    notifTitleText.text = newValue[0];
    notifBodyText.innerHTML = newValue[1];
    if (!notifHiddenMain.value) {
        // not to seem judgemental, but why would you change the message while the box is open anyways?
        notifHeight = calculateNotifHeight();
        console.log(calculateNotifHeight() + ", " + notifHeight);
        TweenMax.to("#notifLine", 0.5, {height: notifHeight + 40});
        TweenMax.to("#notifBody", 0.5, {height: notifHeight, ease: Power3.easeOut,});
    }
});