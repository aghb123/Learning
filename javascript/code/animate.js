function animate(obj, target, callback) {
    // console.log(callback);
    // 当我们不断点击按钮，这个元素的速度会越来越快，因为开启了太多的定时器
    // 解决方案就是 让元素只有一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        if (obj.offsetLeft == target) {
            //停止动画 本质是停止计时器
            clearInterval(obj.timer);
            //回调函数写到定时器结束里面
            if (callback) {
                callback();
            }
        }
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // var step = (target - obj.offsetLeft) / 10;
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
};