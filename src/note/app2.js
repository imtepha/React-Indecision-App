class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    handleDeleteOption(){
        /*this.setState(()=>{
            return{
                options:[]
            };
        });*/

        //const num return object -> const num = ()=>({})
        this.setState(() => {options:[]} )
        
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

        //the short version of 
        /*this.setState((prevState)=>{
            return {
                options : prevState.options.concat([option])
            }
        });*/
        this.setState(
            (prevState)=>({options : prevState.options.concat([option])})
        )
        //console.log(option);
    }

    render() {
        const subtitle = "Here is the app for stupid who can't make decision";
        return (
            <div>
                <Header subtitle={subtitle} />
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

//set a default value to the state in the upper, but dont put the value in here cause it wont render so put it in below insode the render
IndecisionApp.defaultProps = {
    options:[]
}

// if there is subtitle it will be render if not it won't
const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
           {props.subtitle &&  <h2>{props.subtitle}</h2>} 
        </div>
    );
}

Header.defaultProps = {
    title:'Indecision'
}

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

const Option = (props) => {
    return (
        <div>
            {props.textOption}
        </div>
    );

}

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
    
        /*this.setState(()=>{
            return { error};
        });*/
        //returning object
        this.setState = (
            ()=>({error})
        )
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//ReactDOM.render(<IndecisionApp options={['option1','option2']}/>, document.getElementById('app'));