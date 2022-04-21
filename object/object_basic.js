// basic operations of object

//create an object
const dog={
  name: "Cat", // I call my dog cat to bother him
  "leg": 4,
  "tail": "short",
  "enemies": ["cats", "shower"], // he doesn't like taking showers. That's one of the reason i call him cat
  "friends": ["dogfood", "bones"]
};
// between the properties, we use , but not ;
// to affect a value to a key, we use : but not =
// it's ok to not to put "" for keys (if there is no white spaces)

// get the value of a property, enemies
dog.enemies;
dog["enemies"];

//change a property
dog.name="Beibei"; //my dog's true name
dog.friends.push("gege");
dog.enemies.unshift('vet');

//add properties
dog.species="puddle";
dog['family']='small dog';

// delete properties
delete dog.family
delete dog['family']


console.log(dog);

