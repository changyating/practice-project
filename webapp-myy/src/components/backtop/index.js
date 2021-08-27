/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-20 10:21:08
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-20 13:51:23
 */
import './backtop.css'
import 'icons/iconfont-up.css'

const CHANGED_CLASS_NAME = 'backtop-hidden'
const INIT_STATE = 'init';
const CHANGED_STATE = 'changed';

/**
 * @name: Backtop
 * @param { number } critical_point
 * @return
 */
class Backtop{
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
        this.el.addEventListener('click', () => {
            this.scrollTo();
        },false)
    }
    scrollTo(top = 0, left=0) {
        this.scrollContainer.scrollTo({
            top,
            left,
            behavior: 'smooth'
        });
    }
    // 重置
    reset() {
        this.el.classList.add(CHANGED_CLASS_NAME)
    }
    // 改变
    change() {
        this.el.classList.remove(CHANGED_CLASS_NAME)
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
 
export default Backtop;