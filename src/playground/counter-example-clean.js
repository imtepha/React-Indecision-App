/*let count = 0;
const addOne = () => {
    count++;
    RenderCounterApp();
}

const minOne = () => {
    count--;
    RenderCounterApp();
}

const reset = () => {
    count = 0;
    RenderCounterApp();
}


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

RenderCounterApp();*/

//at first rendering will be val = 0, but it keeps rendering again again when we started to click the button
//function syntax = 
/*const myFunction = function(parameter){
    comamand
};*/

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        
        //1. this.state is a object, you can create object inside object 
        this.state = {
            /*put the state of the object */
            count : 0,
        };
    }

    handlePlusOne (){
        //this.state.count = this.state.count +1;
        //console.log(this.state.count);
        //2 (.setState) is a function so we want to have a function inside a function
        //3 prevState is a arg/parameter of this so inside it still can access count
        //4 setState only change the prevstate that we pointing like if there is a name field in this.state the name will still stay the same  
        //the only changing is the count state, setState can passed obj too, see setstate-obj
        this.setState((prevState)=>{
          return{
              count: prevState.count + 1
          };   
        })
    };

   
    handleMinusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count - 1
            };   
          })
    };
    handleReset(){
        this.setState(()=>{
            return{
                count: 0
            };   
          })
    };
    render (){
        return (
            <div>
            <h1>Count = {this.state.count}</h1>
            <button onClick={this.handlePlusOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>,document.getElementById('app'));