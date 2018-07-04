const father = {
    'name': 'Mike Zacharias',
    'city': 'NewYork',
    'children': ['Max', 'Miller', 'Tony'],

    printAnakName(){
        return this.children.map((anaks)=> this.name +' punya anak '+anaks);
    },

    //ES5
    /*printChildrenName: function () {
        //es6
        this.children.forEach((childs) => {
            console.log(this.name+' has a children '+childs);
        })

        //in the old es5 if we want to access 
        /*const that = this;
        this.children.forEach(function(childs) {
            console.log(that.name+' has a children '+childs);
        });*/

        //BUT IF WE USED ARROW FUNCTION IN THE FRONT IT WONT WORK
        //WHY IT WONT WORK BECAUSE WHEN WE PUT IN THERE IT ACCESS THE OUTER SCOPE NOT THE OBJECT 
        //THUS IT BECOME UNDEFINED
        /*printChildrenName:() => {
            //es6
            this.children.forEach((childs) => {
                console.log(this.name+' has a children '+childs);
            })
    
            //in the old es5 if we want to access 
            /*const that = this;
            this.children.forEach(function(childs) {
                console.log(that.name+' has a children '+childs);
            });*/


    //}--------------------------------------------------------------------------------------------------------------
    //ES6
    printChildrenName() {
        //ES6 FOREACH METHOD
        /*this.children.forEach((childs) => {
            console.log(this.name+' has a children '+childs);
        })*/
        //resulf of this will be mike has a children name xxxxx , mike has a children name yyy , mike has a children name zzz

        //ES6 MAP MATHOD 
        //childs in here is an arguments
        return childrenMess = this.children.map((childs)=>this.name +' has a children name '+childs);
         //resulf of this wilreturn childrenMess;
    }
};

console.log(father.printAnakName());

//------------------------challenge--------------------------------------------------------------------------------------
const multiplier = {
    'numbersArray':[1,2,3],
    'multiplyBy':2,

    multiply(){
        return this.numbersArray.map((number) => ' the result will be ' + number*this.multiplyBy );
    }
    //return something we want to modify.map(argv)=>
}
console.log(multiplier.multiply());