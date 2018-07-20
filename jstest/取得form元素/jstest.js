function changecolor (obj, color) {
    obj.bgColor = color
}

window.onload = function () {
    var trObj = document.all('infoTr')
    console.log(trObj)
    for (let i = 0; i < trObj.length; i++) {
        trObj[i].addEventListener('mouseover', function () {
            //this 表示当前操作的对象 tr
            changecolor(this, '#FFFFFF')
        }, false)
        trObj[i].addEventListener('mouseout', function () {
            //this 表示当前操作的对象 tr
            changecolor(this, '#f2f2f2')
        }, false)
    }
}