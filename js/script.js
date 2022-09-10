var blocks = document.querySelectorAll(".row-block");

blocks.forEach(block => {
    block.addEventListener('click', (e) => {
        e.preventDefault();
        var x = e.offsetX;
        var y = e.offsetY;
        console.log(x, y);
    });
});