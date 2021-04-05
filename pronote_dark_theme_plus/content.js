// alert("Hello from your Chrome extension!");
function main() {
    document.querySelectorAll('table.Cours').forEach(element => detectIfCancelled(element));
}

function detectIfCancelled(elem) {
    if (elem.querySelectorAll('div[class="NoWrap ie-ellipsis"]').length != 0) {
        if (elem.querySelector('div[class="NoWrap ie-ellipsis"]').innerText.trim() == "Prof. absent") {
            elem.style.opacity = "0.4";
        } else if (elem.querySelector('div[class="NoWrap ie-ellipsis"]').innerText.trim() == "Cours annulé") {
            elem.style.opacity = "0.4";
        }
    }
}

setInterval(main, 100)