/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-19 13:24:19
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-21 09:56:19
 */
import './product.css'
import render from './items.art'
import {getData, getDelayedData} from 'api/getData'

getData('http://localhost:8080/src/api/product.json')
.then(data => {
    document.getElementById('product-list').innerHTML = render({
        items: data
    })
}) 
