'use strict'

// function longest_consec(elements, k) {
//     const n = elements.length;
//     let count;

//     if (n === 0 || k > n || k <= 0) {
//         return '';
//     } else {
//         elements.forEach(function (element) {
//             elements = new String(element)
//             console.log(elements);

//             count[element] = 0;

//         });
//         // elements.forEach(function (string) {
//         //     count['hola'] = 0;
//         // });
//     }

//     console.log(`${elements} ${k} ${n}`);

//     return n;
// }

const longest_consec = (strings, count) => {
    let n = strings.length;
    if (!n || count <= 0 || count > strings.length)
        return '';

    let lengths = Array(n);

    let windowLen = 0;
    for (let i = 0; i < count - 1; i++) {
        let stringLen = strings[i].length;
        windowLen += stringLen;
        lengths[i] = stringLen;
    }

    let maxLen = 0;
    let maxLenAt = 0;
    for (let i = count - 1, windowStart = 0; i < n; i++, windowStart++) {
        let stringLen = strings[i].length;
        lengths[i] = stringLen;

        let thisLen = windowLen + stringLen;
        if (thisLen > maxLen) {
            maxLen = thisLen;
            maxLenAt = windowStart;
        }
        windowLen += stringLen - lengths[windowStart];
    }

    return strings.slice(maxLenAt, maxLenAt + count).join('');
}

const result = longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)

console.log(result);