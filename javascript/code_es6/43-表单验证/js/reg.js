window.onload = function() {
    var regtel = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/; // 手机号码的正则表达式
    var tel = document.querySelector('#tel');
    tel.onblur = function() {
        if (regtel.test(this.value)) {
            // console.log('corrent');
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜你输入正确';
        } else {
            // console.log('wrong');
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>手机号码格式不正确,请重新输入';
        }
    }
}