/*
 * @Descripttion: 返回顶部
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-11 17:22:05
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-11 17:43:18
 */
(function() {
    var backtotop = document.getElementById('backtotop');
    var timer;
    backtotop.onclick = function () {
        // 设表先关
        clearInterval(timer)
        timer = setInterval(function() {
            document.documentElement.scrollTop -= 100;
            if(document.documentElement.scrollTop <= 0) {
                clearInterval(timer);
            }
        }, 20)
    }
    
    // 监听页面滚动
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || window.scrollY;
        // 页面没有卷动，返回顶部按钮隐藏
        if (scrollTop == 0){
            backtotop.style.display = 'none';
        } else {
            backtotop.style.display = 'block';
        }
    }
})();