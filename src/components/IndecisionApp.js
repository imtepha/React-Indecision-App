import React from 'react';
import AddOptions from './AddOptions';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

//Stateful components
export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(
            () => ({ options: [] })
        );
    };

    handleDeleteOptionSingular = (optionToRemove) => {
        this.setState(
            (prevState) => ({
                options: prevState.options.filter(
                    (option) => {
                        return optionToRemove !== option;
                    }
                )
            })
        )
    };

    handleDeleteSelectedOption = () => {
        this.setState(
            () => ({
                selectedOption: undefined
            })
        )
    }

    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];

        this.setState(
            () => ({
                selectedOption: option
            })
        )
    };

    handleAddOption = (option) => {
        if (!option) {
            return "enter valid input";
        }

        else if (this.state.options.indexOf(option) > -1) {
            return "you have an existed option";
        }

        this.setState(
            (prevState) => ({ options: prevState.options.concat([option]) })
        )

    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(
                    () => ({ options })
                )
            }
        } catch (e) {
            //Do nothing at all
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    };

    componentWillUnmount() {
        console.log("unmount");
    };

    render() {
        const subtitle = "Here is the app for stupid who can't make decision";
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOptionSingular={this.handleDeleteOptionSingular}
                        />
                        <AddOptions
                            handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleDeleteSelectedOption={this.handleDeleteSelectedOption}
                />
            </div>
        );
    };
}
