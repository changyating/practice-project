/*
 * @Descripttion: 
 * @Author: Chang YaTing [2210993284@qq.com]
 * @Date: 2021-08-14 16:15:03
 * @LastEditors: Chang YingYing [2210993284@qq.com]
 * @LastEditTime: 2021-08-21 09:20:50
 */
import { SUCC_CODE, TIMEOUT } from "./config";
import { getJSON } from './ajax';


// 获取数据
const getData = (url, options = {}) => {
    const ajaxPromise = getJSON(url, { timeoutTime: TIMEOUT, ...options})
    const resultPromise = ajaxPromise.then(response => {
        if(response.code !== SUCC_CODE) throw new Error('出错了');
        return response.data;
    })
    .catch(err => console.log(err));
    
    resultPromise.xhr = ajaxPromise.xhr;
    return resultPromise
};

// 延时
const delay = ms => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
};

// 获取延迟的数据
const getDelayedData = (url, options) => {
    return delay(1000).then(() => {
        return getData(url, options);
    });
};

export { getData, getDelayedData };