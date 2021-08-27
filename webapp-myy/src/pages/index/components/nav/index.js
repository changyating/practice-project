/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-19 10:49:05
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-19 13:16:26
 */
import './nav.css';
import render from './nav.art'
import {getData,getDelayedData} from 'api/getData'

getData('https://www.imooc.com/api/mall-wepApp/index/nav').then(
    data => {
        document.getElementById('index-nav').innerHTML = render({
            items: data
        });
    }
);