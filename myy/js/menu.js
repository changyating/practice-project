/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-11 18:12:07
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-11 18:57:51
 */
( function (){
    var bannerNavUl = document.getElementById('banner-nav-ul')
    var bannerNav = document.getElementById('banner-nav')
    var bannerLis = document.querySelectorAll('#banner-nav-ul li')
    console.log(bannerLis)
    // 寻找所有的menu
    var menus = document.querySelectorAll('.menus-box .menu');
    
    // 事件委托,必须使用onmouseover事件，而不是onmouseenter
    bannerNavUl.onmouseover = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            var t = e.target.getAttribute('data-t');
            // 排他操作，所有的li都去掉current
            for(var i = 0; i < bannerLis.length; i++) {
                bannerLis[i].className = bannerLis[i].getAttribute('data-t');
            }
            // 当前碰到的li，要加current类
            e.target.className += ' current'
            console.log(t);
            // 寻找匹配的menu
            var themenu = document.querySelector('.menus-box .menu[data-t=' + t + ']');
            

                     
            // 排他操作, 让其他的盒子都去掉current类名
            for (var i = 0; i < menus.length; i++) {
                menus[i].className = 'menu';
            }
            themenu.className = 'menu current';
        }
    }

    // 排他操作：当鼠标离开大盒子的时候，让菜单关闭
    bannerNav.onmouseleave = function () {
        for(var i = 0; i < bannerLis.length; i++) {
            bannerLis[i].className = bannerLis[i].getAttribute('data-t');
            menus[i].className = 'menu';
        }
    }
})();