/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-20 15:19:07
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-21 10:33:43
 */
import './tab.css'
// setActiveItem(2)
// to(1)
// set(data)

import { getData, getDelayedData} from 'api/getData'
//https://www.imooc.com/api/mall-wepApp/destination/content/1
// [{url,text},{}]
const URL = 'https://www.imooc.com/api/mall-wepApp/destination/content'

class Tab{
    constructor(el) {
        this.itemEls = el.querySelectorAll('.tab-item');
    }
    setActiveItem(index) {
        for(const itemEl of this.itemEls) {
            itemEl.classList.remove
            ('tab-item-active')
        }
        this.itemEls[index].classList.add
        ('tab-item-active')
    }
    to(index){
        // 取消上一次的请求
        if(this.dataPromise && this.dataPromise.xhr){
            this.dataPromise.xhr.abort();
        }
        this.setActiveItem(index)
        this.dataPromise = getData(`${URL}/${this.itemEls[index].dataset.id}`)
        return this.dataPromise
    }
}

export default Tab;