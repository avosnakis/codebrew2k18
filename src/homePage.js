const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
    if (this.classList.contains('open')){
        this.childNodes[1].style.visibility = "visible";
    }
    else {
        this.childNodes[1].style.visibility = "hidden";
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

