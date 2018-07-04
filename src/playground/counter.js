
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
       
        this.state = {
            count: 0
        };
    }

    //2.crare did mount 
    componentDidMount(){
        const stringCounter = localStorage.getItem('count1');
        const count = parseInt(stringCounter, 10);


        if (!isNaN(count)){
            this.setState(
                ()=>({count})
            );
        }
        
    }

    //1.create did update 
    componentDidUpdate(prevProps, prevState){
        //only if the prev state diff it will stored in local, the key in setItem is sensitive
        if (prevState.count !== this.state.count){
            localStorage.setItem('count1',this.state.count);
        }
        
    }

    componentWillUnmount(){
        console.log("unmount");
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


ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));