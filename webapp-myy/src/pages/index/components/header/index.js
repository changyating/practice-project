/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-14 09:49:45
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-14 11:48:29
 */
import '../../../../components/header'
import Header from '../../../../components/header'
import '../../../../components/searchbox'
 
const scrollContainer = document.getElementById('index-page');
const headerEl = scrollContainer.querySelector('.header');




new Header(headerEl,0,scrollContainer);