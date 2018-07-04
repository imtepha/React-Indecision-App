//Person class has different attributes 
//when we created class use big capital first , function in small preceeds by capital

class Person {
    //if the new instances didnt have any name passed to it, it will picked Anon as name (passed a default on it)
    constructor(name = 'Anon',age = 0){
        this.name = name;
        this.age=age;
    }
    //new method
    getGretting(){
        //old way 
        //return 'Hi '+this.name;
        //new , this method called template string
        return `Hi I am ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old `
    }

}

//subclass of person (student)
class Student extends Person {
    //set a default val for major
    constructor(name,age,major ){
        //super refer to parent class in here it access to person class
        super(name,age);
        this.major = major;
    }
    hasMajor (){
        //return a boolean (NOTNOT) we are going to used it in getDEscription
        //the reson why we want to return a boolean due to avoid undefined result
        return !!this.major;
    }
    //this call override, change the behveiour 
    getDescription(){
        //get the first behaviour
        let description = super.getDescription();
         //adding ad beheviour to existed behaviour, if only major existed if not i wont show
        if (this.hasMajor()){
            description += `major is ${this.major}`
        }
        return description;
    }
   
}

//subclass of person (traveler)
class Traveler extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHome (){
        return !!this.homeLocation;
    }

    getGretting (){
        let grettings = super.getGretting();
        if (this.hasHome()){
            grettings += `visiting from ${this.homeLocation}`
        }
        return grettings;
    }

    getDescription (){
        let description = super.getDescription();
        if(this.hasHome()){
            description += `home is located in ${this.homeLocation}`
        }
        return description;
    }
}

//new instances of person 
const me = new Traveler('Tepha',24); 
//console.log(me.getAll());
console.log(me.getDescription());
console.log(me.getGretting());

const other = new Traveler('Mike',38,'Atlanta'); 
console.log(other.getDescription());
console.log(other.getGretting());
//console.log(other.getDescription());