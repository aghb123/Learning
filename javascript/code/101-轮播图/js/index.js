window.addEventListener('load', function() {
    // 1. 获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    // 2. 鼠标经过focus就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            // 代码实现点击事件
            arrow_r.click();
        }, 2000);
    });
    // 3. 动态生成小圆圈 有几张图片 就生成几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');

    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个小li
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index', i);
        // 把小li插入到ol里面
        ol.appendChild(li);
        // 6. 小圆圈的排它思想 直接在生成小圆圈的同时 直接绑定点击事件
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 7. 点击小圆圈 移动图片 移动的是ul
            // ul的移动距离 小圆圈的索引号乘以 图片的宽度 注意是负值
            // 当我们点击了某个小li 就拿到当前小li的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li 就要把这个小li的索引号给 num
            num = index;
            circle = num;
            animate(ul, -index * focusWidth);
        })
    }
    // 4. 改变小圆圈外面大框的长度和位置
    ul.style.width = (ul.children.length + 1) * 100 + '%';
    ol.style.width = ul.children.length * 14 + 'px';
    ol.style.marginLeft = '-' + ol.style.width / 2 + 'px';
    // 5. 把ol里面的第一个小li设置类名为current
    ol.children[0].className = 'current';
    // 8. 克隆第一张图片放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 9. 点击右侧按钮 图片滚动一张
    var num = 0;
    // circle 控制小圆圈的播放
    var circle = 0;
    // flag 节流阀
    var flag = true;
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false; //关闭节流阀
            // 如果走到了最后复制的一张图片，此时 ul要快速复原 left改为0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true; // 开启节流阀
            });
            // 10. 点击右侧按钮 小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle++;
            // 如果circle == 4 说明走到最后我们克隆的这张图片了 就复原
            if (circle == ol.children.length) {
                circle = 0;
            }
            // 调用函数
            circleChange();
        }
    });
    // 11. 左侧按钮做法
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false; //关闭节流阀
            // 如果走到了最后复制的一张图片，此时 ul要快速复原 left改为0
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true; // 开启节流阀
            });
            // 10. 点击右侧按钮 小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle--;
            // 如果circle == 4 说明走到最后我们克隆的这张图片了 就复原
            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;
            // 调用函数
            circleChange();
        }
    })

    function circleChange() {
        // 先清除其余小圆圈的current类名 
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }

    // 12. 自动播放轮播图
    var timer = setInterval(function() {
        // 代码实现点击事件
        arrow_r.click();
    }, 2000);
})