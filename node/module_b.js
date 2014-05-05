module.exports = person;
function person(name){
	this.name = name;
}
person.prototype.words = function(){
	console.log('my name is',this.name);
}