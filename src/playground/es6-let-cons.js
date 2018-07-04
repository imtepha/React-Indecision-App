
//blockscope = cant be used if we used function cause first name in function is local var not global
//blockscope = in if we using global var is not defined in local thus we can access the var inside the if 
//but if we used const in we need to declare first name in out side
//let is equal as var , we cabt change const in order to change we need to siapin one place to hold the val we want to change 
//as for this example realname cant be change but we want to get the firstname insode the realname thus we siapin let firstname to save the val that we get from realname

const realName = 'Erwin Smith';
var realName2 = 'Mike Zacharias';
let firstName ;

/*function getFirstName (){
    var firstName = realName.split(' ')[0];
    return firstName
}*/

if (realName){
    firstName = realName.split(' ')[0];
    //console.log ('firstname',firstName);
}

if (realName2){
    var firstName2 = realName2.split(' ')[0];
   //console.log ('firstname',firstName2);
}

console.log ('firstname',firstName);
console.log ('firstname',firstName2);