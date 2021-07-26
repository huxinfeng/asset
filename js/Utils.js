export default class Utils {
    static setStyle(str, selector = [], style = []) {
        if (document.styleSheets.length < 1) {
            let style = document.createElement("style");
            document.head.appendChild(style);
        }
        let sheet = document.styleSheets[document.styleSheets.length - 1];
        str.replace(/\n/g, "").match(/.*?\{.*?\}/g).forEach(function (item) {
            let arr = item.match(/(.*?)\{(.*?)\}/).slice(1);
            sheet.addRule(arr[0].trim(), arr[1].trim(), sheet.rules.length);
            if (selector && style) {
                for (let i = 0; i < selector.length; i++) {
                    sheet.addRule(selector[i], style[i], sheet.rules.length);
                }
            }
        })
    }
}