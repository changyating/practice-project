/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-14 14:24:10
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-14 18:44:31
 */
import 'swiper/swiper-bundle.min.css';
import './slider.css';
import Swiper from 'swiper/swiper-bundle.min';

import config,{SWIPER_CONTAINER_CLASS,URL,LAYOUT_ID} from './config';

import render from './slider.art'
import { getData, getDelayedData } from 'api/getData';

getData(URL).then
(data => {
    document.getElementById(LAYOUT_ID).innerHTML = render({
        ...config,
        ...{
            imgs: data
        }
    });
    new Swiper(SWIPER_CONTAINER_CLASS,config);
});

