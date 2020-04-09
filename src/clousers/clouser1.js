
function makeWorker() {
  let name = "Pete";

  return function() {
    //alert(name);
    console.log(name1)
  };
}

let name1 = "John";

// create a function
let work = makeWorker();

// call it
work(); // 