/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-20 10:23:12
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-20 11:08:40
 */
import Backtop from "../../../../components/backtop"

const scrollContainer = document.getElementById('index-page');
const backtopEl = scrollContainer.querySelector('.backtop')

new Backtop(backtopEl, window.innerHeight, scrollContainer)