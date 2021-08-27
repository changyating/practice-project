/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-20 15:29:40
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-20 18:37:02
 */
import './content.css'
import render from './content.art'
import renderLoading from 'components/loading/loading.art'

class Content {
    constructor(el) {
        this.el = el;
    }
    set(data){
        this.el.innerHTML = render ({
            contents: data
        });
    }
    
    setLoading(){
        this.el.innerHTML = renderLoading ()
    }
}

export default Content;