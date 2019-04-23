const np1name = nodecg.Replicant('np1name');
const np2name = nodecg.Replicant('np2name');
const message = nodecg.Replicant('message');
const nuHidden = nodecg.Replicant('nuHidden');

np1name.on('change', (newValue, oldValue) => {
    np1input.value = newValue;
});

np2name.on('change', (newValue, oldValue) => {
    np2input.value = newValue;
});

np1input.addEventListener('change', (event) => {
    np1name.value = event.target.value;
});

np2input.addEventListener('change', (event) => {
    np2name.value = event.target.value;
});

message.on('change', (newValue, oldValue) => {
    messageInput.value = newValue;
});

messageInput.addEventListener('change', (event) => {
    message.value = event.target.value;
});

nuShow.onclick = () => {
    nuHidden.value = false;
};

nuHide.onclick = () => {
    nuHidden.value = true;
};
nuHidden.on('change', (newValue, OldValue) => {
    if (newValue) {
        nuHide.disabled = true;
        nuShow.disabled = false;
    } else {
        nuShow.disabled = true;
        nuHide.disabled = false;
    }
});