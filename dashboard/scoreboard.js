const p1score = nodecg.Replicant('p1score');
const p2score = nodecg.Replicant('p2score');
const stage = nodecg.Replicant('stage');
const np1name = nodecg.Replicant('np1name');
const np2name = nodecg.Replicant('np2name');
const scHidden = nodecg.Replicant('scHidden');
const p1name = nodecg.Replicant('p1name');
const p2name = nodecg.Replicant('p2name');

p1score.on('change', (newValue, oldValue) => {
    p1display.value = newValue;
});

p2score.on('change', (newValue, oldValue) => {
    p2display.value = newValue;
});

p1display.addEventListener('change', (event) => {
    p1score.value = Number(event.target.value);
});

p2display.addEventListener('change', (event) => {
    p2score.value = Number(event.target.value);
});

p1plus.onclick = () => {
    p1score.value = Number(p1score.value) + 1;
};

p1min.onclick = () => {
    p1score.value = Number(p1score.value) - 1;
};

p2plus.onclick = () => {
    p2score.value = Number(p2score.value) + 1;
};

p2min.onclick = () => {
    p2score.value = Number(p2score.value) - 1;
};

stageInput.addEventListener('change', (event) => {
    stage.value = event.target.value;
});

stage.on('change', (newValue, oldValue) => {
    stageInput.value = newValue;
});

nmBegin.onclick = () => {
    p1score.value = 0;
    p2score.value = 0;
    p1name.value = np1name.value;
    p2name.value = np2name.value;
};

showSC.onclick = () => {
    scHidden.value = false;
};

hideSC.onclick = () => {
    scHidden.value = true;
};

p1name.on('change', (newValue, oldValue) => {
    p1input.value = newValue;
});

p2name.on('change', (newValue, oldValue) => {
    p2input.value = newValue;
});

p1input.addEventListener('change', (event) => {
    p1name.value = event.target.value;
});

p2input.addEventListener('change', (event) => {
    p2name.value = event.target.value;
});

scHidden.on('change', (newValue, OldValue) => {
    if (newValue) {
        hideSC.disabled = true;
        showSC.disabled = false;
    } else {
        showSC.disabled = true;
        hideSC.disabled = false;
    }
});