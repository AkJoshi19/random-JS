

var resverseString = (givenStr)=>{

    let testStr = '';
    for(let i = givenStr.length; i>0;  i--){

        testStr +=  givenStr[i];
    }

    console.log(testStr);
}


resverseString('Hello');