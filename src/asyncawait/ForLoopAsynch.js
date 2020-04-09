let user_list = [1, 2, 3, 4, 5];
let response_list = [];

async function asynchAPIcall() {

   /*  await initCall().then((callback) =>{

        console.log(callback);
    }); */


    await initCall2().then((callback) =>{

        console.log(callback);
    });


    var promise_que = [];

    for (let i = 0; i < user_list.length; i++) {

        let resultInfo = {};

        //console.log('Processing  Record : '+user_list[i] );
        promise_que.push(await makeAPIcall(user_list[i]).then((resultInfo)=>{

            console.log('Processing In then : ' + resultInfo);
         }));   
    }

    console.dir(promise_que);
    Promise.all(promise_que).then(()=>{
       
        console.log('All resolved');
    })
}

asynchAPIcall();

async function makeAPIcall(id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(id)
        }, 1000);
    });
}


async function initCall() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('I am done after  seconds')
            
        }, 5000);
    });
}

async function initCall2() {

    setTimeout(() => {
        Promise.resolve('I am done in initCall2')
        
    }, 5000);
}

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));

    /*  return new Promise((res) =>{
         setTimeout(res, ms)
     } ); */
}