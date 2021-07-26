document.body.appendChild(document.createElement("canvas")).setAttribute("id", "matrix");

let matrix = document.getElementById("matrix");
matrix.style.position = "absolute";
matrix.style.zIndex = "-1";

let context = matrix.getContext("2d");

matrix.height = window.innerHeight;
matrix.width = window.innerWidth;

//文字
let texts = "0123456789".split("");

let drop = [];
let font_size = 16;
let columns = matrix.width / font_size;
for (let i = 0; i < columns; i++) drop[i] = 1;

function drawMatrix() {
    context.fillStyle = "rgba(0, 0, 0, 0.09)";
    context.fillRect(0, 0, matrix.width, matrix.height);

    context.fillStyle = "#00ee00";
    context.font = font_size + "px";
    for (let i = 0; i < columns; i++) {
        //随机取要输出的文字
        let text = texts[Math.floor(Math.random() * texts.length)];
        //输出文字，注意坐标的计算
        context.fillText(text, i * font_size, drop[i] * font_size); /*get 0 and 1*/

        if (drop[i] * font_size > (matrix.height * 2) / 3 && Math.random() > 0.95) /*reset*/ drop[i] = 0;
        drop[i]++;
    }
}
setInterval(drawMatrix, 33);