function refresh(id) {
    document.getElementById(id).src = document.getElementById(id).src
    //document.getElementById(id.toString()).contentWindow.location.reload();
}

let sources = [
    "https://corp2.rennacs.com:10005/cgi-bin/sp.cgi?chn=0&u=admin&p=rufnmnzq",
    "https://corp2.rennacs.com:10005/cgi-bin/sp.cgi?chn=1&u=admin&p=rufnmnzq",
    "https://corp2.rennacs.com:10005/cgi-bin/sp.cgi?chn=2&u=admin&p=rufnmnzq",
    "https://corp2.rennacs.com:10005/cgi-bin/sp.cgi?chn=3&u=admin&p=rufnmnzq",
    "https://corp2.rennacs.com:10006/cgi-bin/sp.cgi?chn=0&u=admin&p=rufnmnzq",
    "https://corp2.rennacs.com:10006/cgi-bin/sp.cgi?chn=1&u=admin&p=rufnmnzq",
    "https://corp2.rennacs.com:10006/cgi-bin/sp.cgi?chn=2&u=admin&p=rufnmnzq",
    "https://corp2.rennacs.com:10006/cgi-bin/sp.cgi?chn=3&u=admin&p=rufnmnzq",
    "https://corp2.rennacs.com:10007/cgi-bin/sp.cgi?chn=0&u=admin&p=rufnmnzq",
    "https://corp2.rennacs.com:10007/cgi-bin/sp.cgi?chn=1&u=admin&p=rufnmnzq",
    "https://corp2.rennacs.com:10007/cgi-bin/sp.cgi?chn=2&u=admin&p=rufnmnzq",
    "https://corp2.rennacs.com:10007/cgi-bin/sp.cgi?chn=3&u=admin&p=rufnmnzq"
];

let cameraSel = document.getElementById("cameraSel");
let iframe = document.getElementById("iframe");
let cam = 0;
iframe.width = "640px";
iframe.height = "360px";

cameraSel.addEventListener("change", e => {
    cam = cameraSel.value;
    refresh();
});

refresh();

function refresh() {
    iframe.src = "";
    iframe.src = sources[cam];
}

var slider = document.getElementById("myRange");
let scale;
slider.oninput = function() {
  scale = this.value;
  iframe.style.transform = "scale(" + scale +")";
}

let upM = 0;
let downM = 0;
let leftM = 0;
let rightM = 0;

function up() {
    upM += 100 * scale;
    iframe.style.marginTop = upM + "px";
}

function down() {
    downM += 100 * scale;
    iframe.style.marginBottom = downM + "px";
}
function left() {
    leftM += 100 * scale;
    iframe.style.marginLeft = leftM + "px";
}
function right() {
    rightM += 100 * scale;
    iframe.style.marginRight = rightM + "px";
}

function reset() {
    scale = 0;
    slider.value = 1;
    upM = 0;
    downM = 0;
    leftM = 0;
    rightM = 0;
    iframe.style.marginLeft = "0px";
    iframe.style.marginRight = "0px";
    iframe.style.marginUp = "0px";
    iframe.style.marginDown = "0px";
    iframe.style.transform = "scale(1)";
    iframe.width = 640;
    iframe.height = 360;
}

document.addEventListener("keydown", e => {
    e.preventDefault();
    console.log(e.keyCode);
    if (e.keyCode == 37) {
        left();
    }
    if (e.keyCode == 38) {
        up();
    }
    if (e.keyCode == 39) {
        right();
    }
    if (e.keyCode == 40) {
        down();
    }
    if (e.keyCode == 82) {
        reset();
    }
    if (e.keyCode == 32) {
        refresh();
    }
    if (e.keyCode == 187) {
        scale += 0.1;
        iframe.style.transform = "scale(" + scale +")";
        slider.value = scale;
    }
    if (e.keyCode == 189) {
        scale -= 0.1;
        iframe.style.transform = "scale(" + scale +")";
        slider.value = scale;
    }
})

