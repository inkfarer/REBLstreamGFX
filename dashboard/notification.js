const notifHiddenMain = nodecg.Replicant('notifHiddenMain');
const notifHiddenBreak = nodecg.Replicant('notifHiddenBreak');
const notifContents = nodecg.Replicant('notifContents', { defaultValue: new Array() });
var notifTimeout;

notifHiddenMain.on('change', (newValue) => {
    if (newValue) {
        notifHide.disabled = true;
        notifShow.disabled = false;
        notifShow5.disabled = false;
    } else {
        notifShow.disabled = true;
        notifHide.disabled = false;
        notifShow5.disabled = true;
    }
});

notifShow.onclick = () => {
    notifHiddenMain.value = false;
};
notifHide.onclick = () => {
    clearTimeout(notifTimeout);
    notifHiddenMain.value = true;
}
notifShow5.onclick = () => {
    notifHiddenMain.value = false;
    notifTimeout = setTimeout(function(){notifHiddenMain.value = true}, 5000);
};

notifHiddenBreak.on('change', (newValue) => {
    if (newValue) {
        notifHideBreak.disabled = true;
        notifShowBreak.disabled = false;
        notifShowBreak5.disabled = false;
    } else {
        notifShowBreak.disabled = true;
        notifHideBreak.disabled = false;
        notifShowBreak5.disabled = true;
    }
});

notifShowBreak.onclick = () => {
    notifHiddenBreak.value = false;
};
notifHideBreak.onclick = () => {
    clearTimeout(notifTimeout);
    notifHiddenBreak.value = true;
}
notifShowBreak5.onclick = () => {
    notifHiddenBreak.value = false;
    notifTimeout = setTimeout(function(){notifHiddenBreak.value = true}, 5000);
};

notifContents.on('change', (newValue, oldValue) => {
    notifTitleInput.value = newValue[0];
    notifContentInput.value = newValue[1];
});

notifTitleInput.addEventListener('change', (event) => {
    notifContents.value[0] = event.target.value;
});

notifContentInput.addEventListener('change', (event) => {
    notifContents.value[1] = event.target.value;
});