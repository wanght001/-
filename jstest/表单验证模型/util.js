/*
    本文件是一个JS工具文件，里面应该提供一系列的属性，函数
 */
/*
    本方法主要是验证指定元素的内容是否为空
 */

function validateEmpty (eleId) {
    var obj = document.getElementById(eleId) //取得一个表单元素
    var spanObj = document.getElementById(eleId + "span"); //取得span元素
    if( obj.value === "" ){
        obj.className = 'failure'
        spanObj.innerHTML = '<p style.css="color: red">x</p>'
        return false
    }else {
        obj.className = 'success';
        spanObj.innerHTML = '<p style.css="color: green">√</p>'
        return true
    }
}