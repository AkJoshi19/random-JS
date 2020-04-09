
const geocode = (address, callback) =>{

    setTimeout(()=>{

        const data = {

            latitude :0,
            longitude :0
        }
      callback(data) ;
    }, 2000)
}


geocode('Jaipur' ,(data)=>{

    console.log(data);
})

