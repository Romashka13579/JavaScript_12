var blocks = document.querySelectorAll(".row-block");
var pressed = false;

blocks.forEach(block => {
    block.addEventListener('mousedown', (e) => {
        pressed = true;
        e.preventDefault();
        var block_styles = block.getBoundingClientRect();
        var x = e.offsetX;
        var y = e.offsetY;
        block.style.cursor = 'grabbing'
        console.log(x, y, Math.round(block_styles.width));
        block.addEventListener('mousemove', (e) => {
            var x1 = e.clientX;
            var y1 = e.clientY;
            block.style.position = "absolute"
            block.style.background = "rgb(140, 140, 140)"
            block.style.left = ""+(x1-x)+"px"
            block.style.top = ""+(y1-y)+"px"
        });
    });
});