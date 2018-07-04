import React from 'react';
import Option from './Option'

//stateless functional components
const Options = (props) => (
    <div>
        <div
            className="widget-header">
            <h3 className="widget-header__margin">your option</h3>
        <button
            className="button button--link"
            onClick={props.handleDeleteOptions}
        >Remove all</button>
        </div>
        {props.options.length == 0 && <p className="widget__message">input options to get started</p>}
        {
            props.options.map((option, index) => (
                //THIS IS WHERE THE IMPORT GOING Option
                <Option
                    key={option}
                    textOption={option}
                    count = {index+1}
                    handleDeleteOptionSingular={props.handleDeleteOptionSingular}
                />
            ))
        }
    </div>
)

export default Options; 