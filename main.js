const data = {
    A: 1,
    B: 2,
    C: {
        E: 8,
    },
    D: 4
  }
 const swapObj = (obj) => {
   let newObj;
   newObj = Object.entries(obj).reduce((a, [k, v]) => ((a[v] = k), a), {});
   for (let key in obj) {
     if (typeof obj[key] === "object") {
       newObj = Object.entries(obj).reduce((a, [k, v]) => ((a[k] = v), a), {});
       obj[key] = Object.entries(obj[key]).reduce(
         (a, [k, v]) => ((a[v] = k), a),
         {}
       );
       newObj = Object.entries(obj).reduce((a, [k, v]) => ((a[k] = v), a), {});
     }
   }
   console.log(newObj);
 };
 
 