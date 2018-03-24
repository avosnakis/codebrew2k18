const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
    console.log(this);
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
