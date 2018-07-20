
window.onload=function () {
    var form = document.getElementById('form')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    // var btn = document.getElementById('btn')
    form.addEventListener("submit",function (e) {
        if(email.value === ""){
            email.className = "failure"
            e.preventDefault()
        }else {
            if(/^\w+@\w+\.\w+$/.test(email.value)){
                this.submit()
            }else {
                email.className = "failure"
                e.preventDefault()
            }
        }
    },false)
}