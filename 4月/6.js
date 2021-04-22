// Z 字形变换

// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R

// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。



// var convert = function(s, numRows) {
//     if(numRows == 1)
//         return s;

//     const len = Math.min(s.length, numRows);
//     const rows = [];
//     for(let i = 0; i< len; i++) rows[i] = "";
//     let loc = 0;
//     let down = false;

//     for(const c of s) {
//         rows[loc] += c;
//         if(loc == 0 || loc == numRows - 1)
//             down = !down;
//         loc += down ? 1 : -1;
//     }

//     let ans = "";
//     for(const row of rows) {
//         ans += row;
//     }
//     return ans;
// };


var convert = function(s, numRows) {
    let h = numRows;
    if(numRows == 1){
        return s;
    }
    let w = calW(s , numRows);
    let arr = new Array(h);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(w);
    }

    let indexI = 0 , indexJ = 0 , up = false;
    while(s.length > 0){
        let curS = s[0];
        s = s.slice(1);
        arr[indexI][indexJ] = curS;
        if(indexI == numRows - 1 && !up){
            indexI --;
            indexJ ++;
            up = true;
        }else if(indexI != 0 && up){
            indexI --;
            indexJ ++;
        }else if(indexI == 0){
            up = false;
            indexI ++;
        }
        else{
            indexI ++;
        }
    }

    let res = "";
    for(let i = 0; i < arr.length; i ++){
        for(let j = 0 ; j < arr[i].length ; j ++){
            res += arr[i][j] ? arr[i][j] : "";
        }
        
    }
    return res;
};

function calW(s , numRows){
    let w = 0;
    let temp = s;
    while(temp.length > 0){
        if(temp.slice(numRows).length > 0){
            temp = temp.slice(numRows);
            // console.log(temp)
            w++;
            for(let i = 0; i < numRows - 2;i++){
                if( temp.slice(1).length > 0){
                    temp = temp.slice(1);
                    // console.log("~~~~~~" , temp)
                    w++;
                }
            }
        }else{
            temp = "";
            w++;
        }
    }
    return w;

}




var convert = function(s, numRows) {
    
};