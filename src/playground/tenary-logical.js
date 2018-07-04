//in here use object, we tend to use this method for DB
const user = {
    name: 'Andrew',
    age: '30',
    favFood: 'satay',
    gender: 'male'
};

const temp2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age = {user.age} </p>
        <p>Gender = {user.gender} </p>
        <p>Fav food = {user.favFood} </p>
    </div>
);

//in here using variable
/*var userName = 'LolaBunny';
var userAge = 30;
var userGender = 'female';
var favFood = 'mouse';

var temp3 = (
    <div>
        <h1>{userName}</h1>
        <p>Age = {userAge} </p>
        <p>Gender = {userGender} </p>
        <p>Fav food = {favFood} </p>
    </div>
);


//tenary function
var user = {
    name: 'Duke',
    age: 38,
    favFood: 'satay',
    gender: 'male'
};

function getGender(gender) {
    if (gender) {
        return <p>gender= {gender}</p>;
    }
    else {
        return undefined;
    }

}

var temp2 = (
    <div>
        <h1>{user.name ? user.name : 'anon'}</h1>
        {user.age >= 18 && <p> Age = {user.age} </p>}
        <p>Fav food = {user.favFood} </p>
        {getGender(user.gender)}
    </div>
);*/
