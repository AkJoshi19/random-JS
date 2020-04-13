var add = (a) =>{
    return (b)=>{
        return a +b;
    }
}

var addToNew = add(4);
console.log(addToNew(5));