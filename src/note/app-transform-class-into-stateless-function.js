//


//now we want to make the title subtitle options (props) into a state components
//class based component can use state
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }

    handleDeleteOption(){
        this.setState(()=>{
            return{
                options:[]
            };
        });
    }

    handlePick(){
        this.setState(()=>{
            const randNum = Math.floor(Math.random()*this.state.options.length);
            const option = this.state.options[randNum];
            alert(option);
        });
    }

    handleAddOption(option){
        // 1. in there we building an error prevention 
        if(!option){
            return "enter valid input";
        }
        //The first index of the element in the array; -1 if not found, if more than -1 find something that is the same
        else if (this.state.options.indexOf(option)>-1){
            return "you have an existed option";
        }

        this.setState((prevState)=>{
            return {
                options : prevState.options.concat([option])
            }
            /*prevState.options.push(option);
            return {
                option
            };*/
        });
        //console.log(option);
    }

    render() {
        const title = "Indecision app";
        const subtitle = "Here is the app for stupid who can't make decision"
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                {/*hasOption in here catch boolean value, so we can used it in option props*/}
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption} 
                />
                <AddOptions 
                    handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

//header class didnt really has alot movement in data thus we gonna transform it into stateless functiona
//class Header extends React.Component {
//    render() {
//        return (
//            <div>
//                <h1>{this.props.title}</h1>
//                <h2>{this.props.subtitle}</h2>
//            </div>
//        );
//    }
//}

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick} 
            /*if there is no val in props options it will not show the button*/ 
            disabled={!props.hasOptions}>What should i do ?</button>
        </div>
    );
}

//we transform Action into stateless function
//class Action extends React.Component {
//    render() {
//        return (
//           <div>
//                <button 
//                onClick={this.props.handlePick} 
                /*if there is no val in props options it will not show the button*/ 
//                disabled={!this.props.hasOptions}>What should i do ?</button>
//            </div>
//       );
//    }
//} 

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOption}>Remove all</button>
            {
                props.options.map((option) => <Option key={option} textOption={option} />)
            }
        </div>
    );

}

//class Options extends React.Component {
//    render() {
//        return (
//            <div>
//                <button onClick={this.props.handleDeleteOption}>Remove all</button>
//                {
//                   this.props.options.map((option) => <Option key={option} textOption={option} />)
//                }
//            </div>
//                    );
//            }
//    }

const Option = (props) => {
    return (
        <div>
            {props.textOption}
        </div>
    );

}

//class Option extends React.Component {
//    render() {
//        return (
//            <div>
//             {this.props.textOption}
//            </div>
//        );
//    }
//}

class AddOptions extends React.Component {
    //const needs to be build , and we keep the handleAddOption cause we still want the event things 
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
         //2.due to the error only happen in here , so we want to create a state component
         this.state = {
             error:undefined
         };
    }

    //this one is function that was built inside component
    handleAddOption(e) {
        e.preventDefault();
        //trim = removed whitespace.
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
    
        this.setState(()=>{
            return { error};
        });
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button >Add Option</button>
                </form>
            </div>
        );
    }
}

//in JSX lowercase is html while uppercase see as variable
//stateless function component, note that in here we cant use this this.props become props
/*const User = (props) => {
    return (
        <div>
        <p>Name : {props.name} </p>
        <p>Age:{props.age} </p>
        </div>
    );
};

ReactDOM.render(<User name = "tepha" age={13} />, document.getElementById('app'));*/

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));