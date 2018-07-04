class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(
                    ()=>({options})
                )
            }
        } catch(e) {
            //Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json)
        }
        
    }

    componentWillUnmount(){
        console.log("unmount");
    }

    handleDeleteOption(){
        this.setState(() => {options:[]} )
    }

    handleDeleteOptionSingular(optionToRemove){
        this.setState(
            (prevState) => ({
                options : prevState.options.filter(
                    (option)=>{
                        return optionToRemove !== option;
                    }
                )
            })
        )
    }

    handlePick(){
        this.setState(()=>{
            const randNum = Math.floor(Math.random()*this.state.options.length);
            const option = this.state.options[randNum];
            alert(option);
        });
    }

    handleAddOption(option){
        if(!option){
            return "enter valid input";
        }
        
        else if (this.state.options.indexOf(option)>-1){
            return "you have an existed option";
        }

        this.setState(
            (prevState)=>({options : prevState.options.concat([option])})
        )
        
    }

    render() {
        const subtitle = "Here is the app for stupid who can't make decision";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                    handleDeleteOptionSingular={this.handleDeleteOptionSingular} 
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
            disabled={!props.hasOptions}>What should i do ?</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOption}>Remove all</button>
            {props.options.length == 0 && <p>input options to get started</p>}
            {
                props.options.map((option) => (
                    <Option 
                    key={option} 
                    textOption={option}
                    handleDeleteOptionSingular={props.handleDeleteOptionSingular} 
                    />
                ))
            }
        </div>
    );

}

const Option = (props) => {
    return (
        <div>
            {props.textOption}
            <button 
            onClick={
                (e)=>{
                    props.handleDeleteOptionSingular(props.textOption)
                }
            }
            >Remove Singular</button>
        </div>
    );

}

class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
             error:undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
    
        this.setState = (
            ()=>({error})
        )

        if (!error){
            e.target.elements.option.value= '';
        }

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
