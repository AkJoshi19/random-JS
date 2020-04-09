


function doFor(){

    let array_element  = [4,4,5,10,3,5,5,8,10];

    /* array_element.foreach(element =>{

        if(element == 5){

            console.log('5');
            break;
         }
        }); */


        for(var  i = 0 ; i<array_element.length ; i++){
          
            if(array_element[i] == 5){

                console.log(i);
                //break;
             }
        }
}


/* function makeid() {
    var length = 9;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;


    while (result.length < length) {

        let x = Math.floor(Date.now()+ Math.random());

        console.log(x);

        if (x < charactersLength) {

            result += characters.charAt(x);
        }
    }
    return result;
} */

console.log(doFor());