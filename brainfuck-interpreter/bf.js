
var bf = function(code, input){
    var code_ptr  = 0,
        mem_ptr   = 0,
        input_ptr = 0,
        mem = [],
        out = '';
        
    var matching = function(c){
        var dir = c === ']' ? +1 : -1,
            count = 0,
            ptr = code_ptr,
            oc = (c === ']' ? '[' : ']'),
            cc;
        
        while(true){
            ptr += dir;
            cc = code.charAt(ptr);
            if(cc === oc){
                count++;
            }
            if(cc === c){
                count--;
            }
            if(count === -1){
                break;
            }
        }
        return ptr;
    };
    
    while(code_ptr !== code.length){
        var op = code.charAt(code_ptr);
        switch(op){
            case '>':
                mem_ptr++;
                break;
            case '<':
                mem_ptr--;
                break;
            case '+':
                mem[mem_ptr] = (mem[mem_ptr] || 0) + 1;
                break;
            case '-':
                mem[mem_ptr] = (mem[mem_ptr] || 0) - 1;
                break;
            case '.':
                out += String.fromCharCode(mem[mem_ptr] || 0);
                break;
            case ',':
                mem[mem_ptr] = input.charCodeAt(input_ptr) || 0;
                input_ptr++;
                break;
            case '[':
                if((mem[mem_ptr] || 0) === 0){
                    code_ptr = matching(']');
                }
                break;
            case ']':
                if((mem[mem_ptr] || 0) !== 0){
                    code_ptr = matching('[');
                }
                break;
        }
        
        if(mem_ptr < 0){
            throw new Error();
        }
        //next instruction
        code_ptr++;
    }
    return out;
};

console.log(bf('++++++++++[>++++++++++>+++++++++++<<-]>++.>+..<----.-.>+++.'));
console.log(bf('>+[>,]<[<]>>[.>],[.[-],]', 'mirror'));
console.log(bf('+++++++++++[->+++>++++++>+<<<]>->>->>>++>+>+>++>+>+>++<<<<<<[-[<+<+>>-]<<[>>+<<-]+>[[-]<[<]>>....>.[>]<->]<[[<]>>.<...>.>.[>]<-]+>>[-]>]'));
