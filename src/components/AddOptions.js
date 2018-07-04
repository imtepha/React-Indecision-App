import React from 'react';

//it is valid to export default class
//class propertie
export default class AddOptions extends React.Component {
    state = {
        error:undefined
    }

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState (
            ()=>({error})
        );

        if (!error){
            e.target.elements.option.value= '';
        }

    }

    render() {
        return (
            <div className="add-option-error">
            {this.state.error && <p>{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}