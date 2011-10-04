
var arabic2roman = function (a,s,r,c,i){
    var S='MCXIDLV',R='',v=1e3;
    for(i=0;s=S[i],i<4;i++,v/=10,a=r){// for symbols M, C ,X, then I and value = 1000, 100, 10 then 1
        r=a%v;                        // rest = arabic modulo value
        c=(a-r)/v;                    // c = a div v
        R+=c<4?                       // to the roman string, add
            Array(c+1).join(s)        // c times the current symbol (I, II, III, X, XX,... , MMM)
        :c==4?
            s+S[i+3]                  // IV, XL, CD
        :c==9?
            s+S[i-1]                  // IX, XC, CM
        :
            S[i+3]+Array(c-4).join(s) // VI, VII, ..., DCCC
        ;
    }
    return R;
};