import alerter from './alerter';//导入 alerter js模块
alerter();//执行导入的 js模块
var b = document.createElement('b');
    b.innerHTML = "这是webpack里面js代码执行";
    document.body.append(b)