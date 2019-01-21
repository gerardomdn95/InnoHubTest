'use strict'

let string = '..0..\n..00.\n.000.';

function countIslands(string) {
    let elements = string.split('\n');
    let count;

    for (let i = 0; i <= elements.length; i++) {
        if(i <= 0) {
            for(let e = 0; elements[0].length; i++) {
                if(e <= 0) {
                    if (elements[i] === 0) {
                        if(elements [i + 1] === 0) {
                            
                        }
                    }
                }
            }
           console.log(elements[i]);
        } else if(i >= elements.length - 1) {
            console.log(elements[i]);
        }
    }
}

countIslands(string);