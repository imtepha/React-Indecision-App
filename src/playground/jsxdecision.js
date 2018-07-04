console.log('app is running')
console.log('test');

//creating app object subtitle , title, item
//in subtitle we used logical operator if there is no subtitle it wont show up if there is it will show
//in option we used ternanry operator if there are option it will show here are the option if none you got no option

const appObject = {
    Title: 'Indecision App',
    SubTitle: 'An app for those who cant make decision',
    options: []
};

//if you need to access some details about the event that caused your function to be executed, you are going to need the e parameter to get them.
//The Event interface's preventDefault() method tells the computer that if the event does not get explicitly handled, its default action should not be taken as it normally would be
//There is a difference between $(this) and event.target, and quite a significant one. 
//While this (or event.currentTarget, see below) always refers to the DOM element the listener was attached to, event.target is the actual DOM element that was clicked.
const onFormSubmit = (e) => {
    e.preventDefault();
    //console.log("form submitted");
    //elements.option cause the name of input is option
    const option = e.target.elements.option.value;
    //if there is a string put in the input and user click button it will psuh the user input to array
    if (option) {
        appObject.options.push(option);
        //console.log();
        //call render function so that the value is being refresh with a new value
        RenderCounter();
        e.target.elements.option.value = ' ';
    }
};

//in here we dont use e arguments since we dont need any info about the event
/*
Events happen all the time, however you are not interested in all the events that happen. When you are interested in some event 
it's when you add an event listener to the element you know will create events[1]. 
For example you are interested in knowing when the user clicks on a 'Subscribe' button and you want to do something when this event happens.
*/
const onRemoveAll = () => {
    appObject.options = [];
    RenderCounter();
    console.log("array is clear");

};


const appRoot = document.getElementById('app');

const onMakeDecision = () =>{
    //since random()*appObject.options.length will give us a range between 0.0 - length of array.9999
    //we use floor to get the bilangan bulat , after got that bil bulat we define option array [bil bulad]
    //The alert() method displays an alert box with a specified message and an OK button, thus the alert box will always give a value in between the input we input 
    const randNum = Math.floor(Math.random()*appObject.options.length);
    const option = appObject.options[randNum];
    alert(option);
    //console.log(randNum);
}


const RenderCounter = () => {
    //object template, due to parameter e we dont need to call onFormSubmit(), all we need to do is just called the onFormSubmit
    //after we putting onFormSubmit() function it will not change the url it changed the event , 
    //if we dont called this function the button will still work but the url will change thus we dont want to do it since we only want one thing to change not the whole thing
    //div1, h1, p, ol everything inside template is element
    const template = (
        <div>
            <h1>{appObject.Title}</h1>
            {appObject.SubTitle && <p>{appObject.SubTitle}</p>}
            <p>{appObject.options.length > 0 ? 'here are the options' : 'you got no option'}</p>
            <p>{appObject.options.length}</p>
            <button onClick = {onRemoveAll} >Remove All</button>
            <button disabled = {appObject.options.length === 0} onClick = {onMakeDecision}>What should i do ?</button>
            <ol>
                {/*rendering array*/
                    //in here string boolen ,everything allowed except object
                    appObject.options.map((userOption)=>{
                        return <li key={userOption}>option : {userOption}</li>
                    })
                    /*short one 
                    appObject.options.map((userOption)=><li key={userOption}>option : {userOption}</li>*/
                }
            </ol>
            {/*form has elemnt of input button*/ }
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        
        </div>
    );
    ReactDOM.render(template, appRoot);
}

RenderCounter();