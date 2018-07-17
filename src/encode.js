/*
 |-----------------------------------------------------------------------
 | URI encode 和 decode
 |-----------------------------------------------------------------------
 */
/**
 * 可把字符串作为 URI 进行编码
 * @param {String} str
 * @returns {string}
 * 备注：
 *      1.不会进行编码的字符有82个 ：!，#，$，&，'，(，)，*，+，,，-，.，/，:，;，=，?，@，_，~，0-9，a-z，A-Z
 *      2. encodeURI主要用于直接赋值给地址栏时候; location.href=encodeURI("http://huangjacky.com/");
 */
encodeURI = (str) => encodeURI(str);

/**
 * 可把字符串作为 URI 进行编码
 * @param {String} str
 * @returns {string}
 * 备注：
 *      1.不会进行编码的字符有71个：!， '，(，)，*，-，.，_，~，0-9，a-z，A-Z
 *      2.encodeURIComponent主要用于url的query参数 location.href="http://huangjacky.com/test.php?a="+encodeURIComponent("我就是我");
 */
encodeURIComponent = (str) => encodeURIComponent(str);

/**
 * 解码encodeURI
 * @param {String} str
 * @returns {string}
 */
decodeURI = (str) => decodeURI(str);

/**
 * 解码encodeURIComponent
 * @param {String} str
 * @returns {string}
 */
decodeURIComponent = (str) => decodeURIComponent(str);


/*
 |-----------------------------------------------------------------------
 | base64 encode 和 decode
 |-----------------------------------------------------------------------
 */

/**
 * base64 encode
 * @param {String} str
 * @returns {string}
 */
btoa = (str) => btoa(str);


/**
 * base64 decode
 * @param {String} str
 * @returns {string}
 */
atob = (str) => atob(str);

// TODO base64的编码和解码包
// https://github.com/dankogai/js-base64
