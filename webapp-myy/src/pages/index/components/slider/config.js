/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-14 14:51:56
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-14 18:43:21
 */
// Swiper配置
export default {
    // 循环模式选项
    loop: true,
    // 是否需要分页器
    pagination: {
        el: '.swiper-pagination'
    },
    // 前进后退按钮
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     preEl: '.swiper-button-prev'
    // },
    // 滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar'
    // }
}

export const SWIPER_CONTAINER_CLASS = '.swiper-container';

export const URL = 'https://www.imooc.com/api/mall-wepApp/index/slider';
export const LAYOUT_ID = 'index-slider'