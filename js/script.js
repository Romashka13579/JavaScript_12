var blocks = document.querySelectorAll(".row-block");

blocks.forEach(block => {
    block.addEventListener('click', (e) => {
        e.preventDefault();
        var block_styles = block.getBoundingClientRect();
        var x = e.offsetX;
        var y = e.offsetY;
        console.log(x, y, Math.round(block_styles.width));
        block.addEventListener('mousemove', (e) => {
            var x1 = e.clientX;
            var y1 = e.clientY;
            block.style.position = "absolute"
            block.style.left = ""+(x1-x)+"px"
            block.style.top = ""+(y1-y)+"px"
        });
    });
});