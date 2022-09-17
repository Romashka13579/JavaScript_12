var blocks = document.querySelectorAll(".row-block");
var coloumns = document.querySelectorAll(".coloumn");
var main_conteiner = document.querySelector(".main-conteiner");
var pressed = false;
var coloumn_is = 0;

Grab(blocks);

function Grab(blocks){
    blocks.forEach(block => {
        block.addEventListener('mousedown', (e) => {
            pressed = true;
            var x = e.clientX;
            var y = e.clientY;
            var posx_in_obj = x - block.offsetLeft;
            var posy_in_obj = y - block.offsetTop;
            var block_clone = block.cloneNode(true);
            main_conteiner.prepend(block_clone);

            var block_clone_2 = block.cloneNode(true);
            block.style.display = "none";
            
            block_clone.addEventListener('mousemove', (e) => {
                if(pressed == true){
                    ForMousemove(e, block_clone, posx_in_obj, posy_in_obj);
                }
            });
            ForMousemove(e, block_clone, posx_in_obj, posy_in_obj);

            block_clone.addEventListener('mouseup', (e) => {
                pressed = false;
                x2 = e.clientX;
                y2 = e.clientY;
                coloumns.forEach(coloumn => {
                    var coloumn_style = coloumn.getBoundingClientRect();
                    if((x2 < coloumn_style.width + coloumn_style.left && x2 > coloumn_style.left) && (y2 < coloumn_style.height + coloumn_style.top && y2 > coloumn_style.top)){
                        coloumn.prepend(block_clone_2);
                        var blocks = document.querySelectorAll(".row-block");
                        block_clone_2.style.background = "rgb(140, 140, 140)"
                        Grab(blocks);
                        coloumn_is = 1;
                    }
                });
                if(coloumn_is != 1){
                    block.style.display = "block";
                    block.style.background = "rgb(140, 140, 140)"
                }
                coloumn_is = 0;
                block_clone.remove();
            });
        });
    });
}

function ForMousemove(e, block_clone, x, y){
    var x1 = e.clientX;
    var y1 = e.clientY;
    block_clone.style.position = "absolute"
    block_clone.style.background = "rgb(140, 140, 140)"
    block_clone.style.left = ""+(x1 - x)+"px"
    block_clone.style.top = ""+(y1 - y)+"px"
    block_clone.style.cursor = 'grabbing'
}