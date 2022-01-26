const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = '';
    let sub_string = '';
    let arr;
    let code_num;
    let code_morse;
    for(let i=0; i<expr.length; i+=10){
        sub_string = expr.substring(i, i+10);
        if( sub_string === '**********' ){
            str += ' ';
        }
        else {
            arr = sub_string.split('');
            code_morse = '';
            for(let j=0; j<arr.length; j+=2){
                if(arr[j]!== '0'){
                    if(arr[j+1] === '0'){
                        code_morse += '.';
                    }
                    else {
                        code_morse += '-';
                    }
                }

            }
            str += MORSE_TABLE[code_morse];
        }
    }
    return str;
}

module.exports = {
    decode
}