import React from 'react';

//stateless functional components
const Option = (props) => (
    <div className="option">
    <p className="option__text">{props.count}. {props.textOption}</p>
        <button className="button button--link"
            onClick={
                (e) => {
                    props.handleDeleteOptionSingular(props.textOption)
                }
            }
        >Remove Singular</button>
    </div>
)

export default Option;