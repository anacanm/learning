let restaurant = {
    name:"The Lair",
    guestCapacity:200,
    guestCount: 0,
    checkAvailability: function(partySize){
       
        return (restaurant.guestCapacity-this.guestCount)>=partySize; //this line shows the interchangability between the identifier and this keyword
    }
}

let change = function(object){
    object.func = function(){
        console.log("ye");
    }
}

console.log(restaurant.checkAvailability(200));
console.log(restaurant.func);
change(restaurant);
restaurant.func();
console.log(restaurant.func);