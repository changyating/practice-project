/*
 * @Descripttion: 轮播图
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-11 15:05:58
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-11 17:16:29
 */

(function() {
    var carousel_list = document.getElementById('carousel_list')
    var left_btn = document.getElementById('left_btn')
    var right_btn = document.getElementById('right_btn')
    var circle_ol = document.getElementById('circle_ol')
    var banner = document.getElementById('banner');
    var circle_lis = circle_ol.getElementsByTagName('li')
    
    
    //克隆第一张li
    var clone_li = carousel_list.firstElementChild.cloneNode(true);
    //上树
    carousel_list.appendChild(clone_li);
    var idx = 0;
    // 节流锁
    var lock = true;
    
    //设置小圆点的current在谁身上，序号为idx的小圆点才有类名，其他的li都没有类名
    function setCircles() {
        //遍历
        for (var i = 0; i <= 4; i++){
            // 设置5%的目的是为了右按钮有一瞬间，idx会成为5,500毫秒之后才变成0
            if (i == idx % 5){
                circle_lis[i].className = 'current';
            } else {
                circle_lis[i].className = '';
            }
        }
    }
    
   
    //右按钮事件监听
    right_btn.onclick = right_btn_handler
    
    function right_btn_handler () {
        // 判断节流锁的状态
        if (!lock) return;
        // 关锁
        lock = false;
        //加上过渡
        carousel_list.style.transition = 'transform .5s ease 0s'
        idx++;
        //拉动
        carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
        
        if (idx > 4) {
            setTimeout(function() {
                //去掉过渡
                carousel_list.style.transition = 'none';
                //删除transform属性
                carousel_list.style.transform = 'none';
                //全局图片序号变为0
                idx = 0;
            }, 500);
        }
        //设置小圆点
        setCircles();

        // 开锁，动画结束之后开锁
        setTimeout(function() {
            lock = true;
        }, 500)
    }
    
    // 左按钮事件监听
    left_btn.onclick = function () {
        // 判断节流锁的状态
        if (!lock) return;
        // 关锁
        lock = false

        if (idx == 0) {
            //瞬间拉动到最后
            carousel_list.style.transition = 'none';
            //拉倒最后
            carousel_list.style.transform = 'translateX(' + -16.66 * 5 + '%)';
            //改变idx的值
            // 延时0毫秒，可以让瞬移发生之后，再把过渡加上
            setTimeout(function(){
                // 加上过渡
                carousel_list.style.transition = 'transform .5s ease 0s';
                // 动画
                carousel_list.style.transform = 'translateX(' + -16.66 * 4 + '%)';
                idx = 4;
            }, 0);
        } else {
            idx --;
            //拉动
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
        }
        setCircles();
        // 开锁，动画结束之后开锁
        setTimeout(function(){
            lock = true;
        }, 500);
    }
    
    //事件委托，小圆点的监听
    circle_ol.onclick = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            //得到li身上的data-n属性，就是n
            var n = Number(e.target.getAttribute('data-n'));
            //改变idx
            idx = n;
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
            //调用改变小圆点函数
            setCircles();
        }
    }
    
    // 自动轮播定时器
    var timer = setInterval (right_btn_handler, 2000)

    // 鼠标进入，自动轮播暂停
    banner.onmouseenter = function() {
        clearInterval(timer);
    }

    // 鼠标离开，自动轮播开始
    banner.onmouseleave = function () {
        // 设表现关
        clearInterval(timer);
        //设置定时器，这里不能加var, 加var就变成了局部变量
        timer = setInterval(right_btn_handler, 2000);
    }
    
})()