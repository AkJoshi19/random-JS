
formalGreeting = () =>{
    console.log('Formal Greetings');
}

casualGreeting = () =>{
    console.log('Casual Greetings');
}


greet =(type, formal, casual)=>{

    if(type == 'formal'){
        formal()
    }else{
        casual();
    }
}


greet('formal',formalGreeting, casualGreeting );