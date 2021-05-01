const getURLParameters =  url => 
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ),
    {}
  );
  /**
 * 判断字符串是否是十六进制的颜色值
 * @param value 
 */
const isColor = function(value: string): boolean {
    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
  }

  export {
    isColor,
    getURLParameters
  }