// 给你一个字符串 s，找到 s 中最长的回文子串。

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 提示：
// 1 <= s.length <= 1000
// s 仅由数字和英文字母（大写和/或小写）组成

//https://leetcode-cn.com/problems/longest-palindromic-substring/

var longestPalindrome = function(s) {
    let i;
    let maxI;
    let max = 0;
    for(i = 0 ; i < s.length ; i++){
        let curMax = Math.max(check(i ,i , s) , check(i , i+1 ,s));
        if(curMax > max){
            max = curMax;
            maxI = i;
        }
    }
    if(max % 2 == 0){
        return s.substring(maxI - max / 2 + 1 , maxI - max / 2 + 1 + max);
    }else{
        return s.substring(maxI - Math.floor(max / 2) , maxI - Math.floor(max / 2) + max);
    }
    return 
}; 

var check = function(i , j , s){
    let l = 0;
    while(i >= 0 && j < s.length){
        if(s[i] == s[j]){
            if(i == j){
                l++;
            }else{
                l += 2;
            }
            i --;
            j ++;
        }else{
            break;
        }
    }
    return l;
}