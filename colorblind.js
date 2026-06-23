function applyColorBlindMode() {
    let btn = document.getElementById("cbBtn");

    if (localStorage.getItem("colorBlind") === "on") {
        document.body.classList.add("colorblind");

        if (btn) {
            btn.innerHTML = "Normal Mode";
        }
    } else {
        document.body.classList.remove("colorblind");

        if (btn) {
            btn.innerHTML = "Colour Blind Mode";
        }
    }
}

function toggleColorBlind() {
    if (document.body.classList.contains("colorblind")) {
        localStorage.setItem("colorBlind", "off");
    } else {
        localStorage.setItem("colorBlind", "on");
    }

    applyColorBlindMode();
}

document.addEventListener("DOMContentLoaded", function () {
    applyColorBlindMode();
});
