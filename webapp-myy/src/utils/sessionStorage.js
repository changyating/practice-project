/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-21 10:02:35
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-21 10:17:36
 */
const storage = window.sessionStorage;

// 设置
const set = (key, value) => {
    storage.setItem(key, JSON.stringify(value));
};

// 获取
const get = key => {
    return JSON.parse(storage.getItem(key));
};

// 删除
const remove = key => {
    storage.removeItem(key);
};

// 清空
const clear = () => {
    storage.clear();
}
export { set, get, remove, clear};