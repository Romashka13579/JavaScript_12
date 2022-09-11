var blocks = document.querySelectorAll(".row-block");
var coloumns = document.querySelectorAll(".coloumn");
var main_conteiner = document.querySelector(".main-conteiner");
var pressed = false;

blocks.forEach(block => {
    block.addEventListener('mousedown', (e) => {
        pressed = true;
        e.preventDefault();
        var x = e.offsetX;
        var y = e.offsetY;
        var block_clone = block.cloneNode(true);
        main_conteiner.prepend(block_clone);
        var x_0 = e.clientX;
        var y_0 = e.clientY;
        block_clone.style.cursor = 'grabbing'
        block_clone.style.left = ""+x_0+"px";
        block_clone.style.top = ""+y_0+"px";
        block.style.display = "none";
        console.log(x, y);
        ForMousemove(e, block_clone, x, y);
        block_clone.addEventListener('mousemove', (e) => {
            if(pressed == true){
                ForMousemove(e, block_clone, x, y);
            }
        });
        block_clone.addEventListener('mouseup', (e) => {
            pressed = false;
            e.preventDefault();
        });
    });
});

function ForMousemove(e, block_clone, x, y){
    var x1 = e.clientX;
    var y1 = e.clientY;
    block_clone.style.position = "absolute"
    block_clone.style.background = "rgb(140, 140, 140)"
    block_clone.style.left = ""+(x1-x)+"px"
    block_clone.style.top = ""+(y1-y)+"px"
}