import Utils from "./Utils.js";

// 统计运时间
function runtime(startTime) {
	let start = new Date(startTime);
	let now = new Date();
	let runtime = now.getTime() - start.getTime();
	$("#huxinfeng_runtime").html(
		"该站点已在暴风雨中运行 " +
			Math.floor(runtime / 1000 / 60 / 60 / 24) +
			" 天 " +
			(Math.floor(runtime / 1000 / 60 / 60) % 24) +
			" 小时 " +
			(Math.floor(runtime / 1000 / 60) % 60) +
			" 分钟 " +
			(Math.floor(runtime / 1000) % 60) +
			" 秒 "
	);
}
runtime(startTime);
setInterval(() => {
	runtime(startTime);
}, 1000);

// Copyright;
$("#huxinfeng_copyright").append(
	`
    <h4>
        Copyright &copy; 2021 - ${new Date().getFullYear()} with
        <i class="fa fa-heart faa-pulse animated" style="color: #e74c3c"></i>
        by 星宿君
        <a id="huxinfeng_author" href="https://www.huxinfeng.com/" target="_blank" title="星宿君 の 代码帝国">
            huxinfeng.com
        </a>
        版权所有.
    </h4>
    <a href="https://www.12377.cn" target="_blank" one-link-mark="yes">
        <img style="vertical-align: middle" alt="www.12377.cn" src="https://cdn.jsdelivr.net/gh/huxinfeng/asset@latest/image/icon_www.12377.cn.png" />
        中国互联网违法和不良信息举报中心
    </a>
    |
    <a href="http://www.bjjubao.org" target="_blank" one-link-mark="yes">
        <img style="vertical-align: middle" alt="www.bjjubao.org" src="https://cdn.jsdelivr.net/gh/huxinfeng/asset@latest/image/icon_www.bjjubao.org.png" />
        北京互联网举报中心
    </a>
    |
    <a href="https://beian.miit.gov.cn/" target="_blank" one-link-mark="yes">京ICP备2021019764号-1</a>
    |
    <a href="https://cdn.jsdelivr.net/gh/huxinfeng/asset@latest/image/huxinfeng.com.certificate.jpg" target="_blank" one-link-mark="yes">域名证书</a>
    `
);

// Copyright样式;
/* Utils.setStyle(
	`
    #huxinfeng_author {
        color: rgba(228, 63, 90, .8);
        background-color: rgba(255, 255, 255, .8);
        font-weight: bolder;
        display: inline-block;
        padding: 0 4px;
        transition: .3s ease-in-out;
        border-radius: 4px
    }

    #huxinfeng_author:hover {
        transform: scale(1.05);
        box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 10%);
    }
`
);
*/
