// to create a class:
var dog=Class.create();
dog.prototype={
  initialize: function(){
    this.dogName='';
    this.species='';
  }, // notice: there is a comma. Error if there is no comma here
  setDogName: function(str){
    this.dogName=str;
  },
  setDogSpecies: function(str){
    this.species=str;
  },
  showDog: function(){
    return this.species+': '+this.dogName;
  },
  type: dog
}
