const { ipcRenderer } = require('electron');

let btnStart = document.getElementById("btn-start");
let botSel = document.getElementById("bot-sel");

btnStart.addEventListener("click", () => {
    ipcRenderer.invoke("start", botSel.value);
});
