console.clear();
console.log("a");
setTimeout(function(){console.log("b");},1000);
console.log("c");
setTimeout(function(){console.log("d");},0);