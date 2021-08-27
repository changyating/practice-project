/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-14 09:43:38
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-14 11:38:10
 */
import './header.css';

const CHANGED_CLASS_NAME = 'header-transition'
const INIT_STATE = 'init';
const CHANGED_STATE = 'changed';

/**
 * @name: Header
 * @param { number } critical_point
 * @return
 */
class Header{
    constructor(el, critical_point, scrollContainer, eventEl = scrollContainer){
        this.el = el;
        this.critical_point = critical_point;
        // 滚动条所在的容器
        this.scrollContainer = scrollContainer;
        
        // 监听滚动事件的元素
        this.eventEl = eventEl;

        this.setState(INIT_STATE);
        
        this.bindEvent();
    }
    setState(state){
        this.state = state;
    }
    bindEvent() {
        // 滚动条添加监听事件
        this.eventEl.addEventListener(
            'scroll', 
            () => {
                // 会多次添加,添加状态防止多次
                if(this.needChange()) {
                    this.setState(CHANGED_STATE);
                    this.change()
                } else if(this.needReset()) {
                    this.setState(INIT_STATE);
                    this.reset()
                }
            },
            false
        );
    }
    // 重置
    reset() {
        this.el.classList.remove(CHANGED_CLASS_NAME)
    }
    // 改变
    change() {
        this.el.classList.add(CHANGED_CLASS_NAME)
    }
    // 需要重置
    needChange() {
        return (this.state!==CHANGED_STATE && this.scrollContainer.scrollTop > this.critical_point);
    }
    // 需要改变
    needReset() {
        return (this.state!==INIT_STATE && this.scrollContainer.scrollTop <= this.critical_point);
    }
}
export default Header;



