// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−2`31,  2`31 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。


var reverse = function(x) {
    x = x.toString();
    let i , sign;
    let res = "";
    if(x[0] == "-"){
        x = x.slice(1);
        sign = "-";
    }
    for(i = 0 ; i < x.length ; i ++){
        res = x[i] + res;
    }
    sign && (res = sign + res);

    if(res < - Math.pow(2 , 31) || res > Math.pow(2 , 31) - 1){
        return 0;
    }else{
        return Number(res);
    }
};