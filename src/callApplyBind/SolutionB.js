var pokemon = {
    firstname :  'Pika',
    lastname: 'Chu ',
    getPokeName: function (){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

//pokemonName.call(pokemon)
// creates new object and binds pokemon. 'this' of pokemon === pokemon now
var logPokemon = pokemonName.bind(pokemon); 
logPokemon(); 