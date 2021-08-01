// 导入工具库
import Utils from "./Utils.js";

let terminal = document.body.appendChild(document.createElement("div"));
terminal.setAttribute("class", "terminal");

terminal.style.position = "absolute";
terminal.style.zIndex = "1";

terminal.innerHTML = `
			<h1 id="title">${main_title}</h1>
			<div class="text" id="text_1"></div>
			<div class="text" id="text_2"></div>
			<div class="cursor">_</div>
			<div class="c">
				请返回至主站点
				<i class="fa fa-heart faa-pulse animated" style="color: #e74c3c"></i>
				by
				<a href="https://www.huxinfeng.com" title="(◕ˇ∀ˇ◕)"> 星宿君 の 极客帝国 </a>
			</div>`;

//引入css
let selector = [`@keyframes blink`];
let style = [`
                0% {
                    opacity: 0;
                }
                33% {
                    opacity: 1;
                }
                66% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }`
];

Utils.setStyle(`
            body {
                background-color: black;
            }

            a {
                color: inherit;
            }

            .terminal {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 60%;
                padding: 0 20%;
                /* background-color: #010101; */
                color: #00ee00;
                font-family: consolas;
                word-wrap: break-all;
            }
            .terminal #title {
                text-align: center;
                width: 100%;
                font-size: 6em;
            }
            .terminal .text {
                display: inline-block;
                margin-bottom: 10px;
            }
            .terminal .cursor {
                display: inline;
                animation: blink 0.75s linear infinite;
            }
            .terminal .c {
                position: absolute;
                bottom: 10%;
                right: 10%;
            }
            .terminal .c .hearth {
                display: inline !important;
            }
`, selector, style);

let text_1 = main_text_1,
    text_2 = main_text_2;

repeat(text_1, 1);

setTimeout(function () {
    document.getElementById("text_1").style.display = "block";
    repeat(text_2, 2);
}, text_1.length * 100 + 1000);

function repeat(text, n) {
    let i = 0,
        repeatable = setInterval(function () {
            $("#text_" + n).text($("#text_" + n).text() + text[i]);
            i++;
            if (i >= text.length) {
                clearInterval(repeatable);
            }
        }, 100);
}
