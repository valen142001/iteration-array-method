let personData = [
    {
        "name": "John Smith",
        "nickname": "Johnny",
        "age": "19",
        "gender": "Male",
        "contact": "09119461154",
        "email": "johnsmith@gmail.com",
        "address": "New York",
        "country": "America",
        "status": "Single",
        "pet": "Dog"
    },
    {
        "name": "Anne Smith",
        "nickname": "Anne",
        "age": "22",
        "gender": "Female",
        "contact": "09879461154",
        "email": "annesmith@gmail.com",
        "address": "Manila",
        "country": "Philippines",
        "status": "Single",
        "pet": "Cat" 

    }
]

let sumAge = personData.reduce( function(acc, data){ return acc + data.age }, 0);
console.log(sumAge);

let petMapped = personData.map( function(data) { return `${data.pet} : ${data.name}`}); 
console.log(petMapped);

let personMale = personData.filter( function(data) { return data.gender == "Male" } );
console.log(personMale);

for ( let i of personData){
console.log(i);
}

for ( let i in personData){
console.log(i);
}

personData.forEach ( function (val, iterationarraymethod) {
console.log(val);
} )

let i = 0;
while( i < personData.length){
 console.log(personData[i]);
i++;
}

for (let i = 0; i < personData.length; i++){
console.log(personData[i])
}



