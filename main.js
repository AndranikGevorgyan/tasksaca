const data = {
    A: 1,
    B: 2,
    C: {
        Q: {
            Z: 7
        },
        E: 8
    },
    D: 4,
    L:{
        F: 23
    }
  }
let array ={};
function objSwap(obj,ret) {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
     ret[key] = {};
            objSwap(obj[key], ret[key])
        }else {
            ret[obj[key]] = key
        }
    }
    return ret
}
console.log(objSwap(data,array));
 
 
