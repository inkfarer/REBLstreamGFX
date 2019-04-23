const p1score = nodecg.Replicant('p1score');
const p2score = nodecg.Replicant('p2score');
const stage = nodecg.Replicant('stage');
const scHidden = nodecg.Replicant('scHidden');
const canvas = document.getElementById("scCanvas");
const ctx = scCanvas.getContext('2d');
const p1name = nodecg.Replicant('p1name');
const p2name = nodecg.Replicant('p2name');

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