//let say that we want to rest the init state into value 1
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //this state has turn into stateless function
        this.state = {
            count: props.count
        };
    }

    handlePlusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        })
    };


    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        })
    };
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        })
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        })

        //try to both of this code count: 0, and count:this.state.count+1
        //notice that the code wont run right way, it still will run but the val is increase by one not reset to default
        //thus we always user prevstate to prevent this happen
        //this called passing object to setState , but in future we wont used it anyway since it will be deprected
        //so it is better to passed a function rather than an object

        /* this.setState(()=>{
             return{
                 count: 0
             };   
           })
         this.setState(()=>{
             return{
                 count: this.state.count+1
             };   
           }) */
    };

    
    render() {
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

Counter.defaultProps = {
    count : 0
};
//if we want to changed the value simply change it in the dom
//ReactDOM.render(<Counter />, document.getElementById('app'));
ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));