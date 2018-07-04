console.log('app is running')
console.log('test');

//creating app object subtitle , title, item
//in subtitle we used logical operator if there is no subtitle it wont show up if there is it will show
//in option we used ternanry operator if there are option it will show here are the option if none you got no option

const appObject = {
    Title: 'Indecision App',
    SubTitle: 'An app for those who cant make decision',
    option: ['One', 'Two'],
};

//object template
const template = (
    <div>
        <h1>{appObject.Title}</h1>
        {appObject.SubTitle && <p>{appObject.SubTitle}</p>}
        <p>{appObject.option.length > 0 ? 'here are the options' : 'you got no option'}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    //count = count+1;
    count++;
   // console.log('addOne',count);//in here the var change but it didnt render the template
    RenderCounterApp();//thus in here we called the template to render it
}

const minOne = () => {
    count--;
    RenderCounterApp();
   // console.log('minusOne');
}

const reset = () => {
    count = 0;
    RenderCounterApp();
    //console.log('reseting');
}

/*const template2 = (
    <div>
    <h1>Count : {count}</h1>
    <button onClick = {addOne}>+1</button>
    <button onClick = {minOne}>-1</button>
    <button onClick = {reset}>reset</button>
    </div>
);*/

// <button onClick = {addOne}>+1</button> can be modified as this too
// <button onClick = {() => {console.log('addOne');} }> +1 </button> and it will function too just putting the function inside
  

const appRoot = document.getElementById('app');

//ReactDOM.render(template2, appRoot);

// <h1>Count : {count}</h1> count in here is a static which val = 0
const RenderCounterApp = ()=>{
    const template2 = (
        <div>
        <h1>Count : {count}</h1>
        <button onClick = {addOne}>+1</button>
        <button onClick = {minOne}>-1</button>
        <button onClick = {reset}>reset</button>
        </div>
    );
    ReactDOM.render(template2, appRoot);
};

RenderCounterApp();

//at first rendering will be val = 0, but it keeps rendering again again when we started to click the button