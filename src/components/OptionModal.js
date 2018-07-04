import React from 'react';
import Modal from 'react-modal';

//stateless functional components
const OptionModal = (props) => (
    //1.both of isOpen and contentLabel are crucial to Modal component <must declare propeties>
    //2. of we put the boolean value straightly to isOpen it will cause a the module cant be opened forever or cant be close forever
    //  thus we need a dynamic
    //3.we want to show the module when the user already input some data and when the user clcik the what to do button
    //  thus we need to go to indecisionapp.js to do this by adding selectedOption: undefined to state
    //  after in the indecisionapp.js passed the selectedOption to the modal component
    //  <OptionModal selectedOption={this.state.selectedOption}/>
    //4.back to OptionModal.js now we passed the component that we create in indecisionapp.js by using props.selectedOption
    //5. {!!props.selectedOption} this is for converting undefined and string value into boolean
    //6 go back to Indecisionapp.js and in the handle pick modify the alert into setstate 
    //*the contentLabel only gonna show up to user who has the accesibility setting enable
    //the onRequestClose of function for escaping the modal when useer click smthg outside the box
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose = {props.handleDeleteSelectedOption}
        contentLabel="Selected Option"
        //closeTimeOUt is useful when we want to see the element when we click the okay 
        closeTimeoutMS={4000}
        className="modal"
        >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        {/* after that create a button that will clear the selected option */}
        <button className="button"onClick = {props.handleDeleteSelectedOption}>Okey</button>
    </Modal>
);

export default OptionModal;