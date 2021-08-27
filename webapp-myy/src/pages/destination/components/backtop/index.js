/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-21 10:53:52
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-21 11:24:09
 */
import Backtop  from "components/backtop";

const backtopEl = document.querySelector('.backtop')
const scrollContainer = document.getElementById('destination-content');

new Backtop(backtopEl, scrollContainer.offsetHeight, scrollContainer)