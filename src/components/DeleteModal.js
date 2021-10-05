import React, { Component } from 'react';

export default class DeleteModal extends Component {


    handleClick= () => {
        this.props.removeListCallback(this.props.currentList);
    }

    render() {
        const { currentList, hideDeleteListModalCallback} = this.props;
        let name = "";
        if (currentList) {
            name = currentList.name;
        }
        return (
            <div
                className="modal"
                id="delete-modal"
                data-animation="slideInOutLeft">
                <div className="modal-dialog">
                    <header className="dialog-header">
                        Delete the Top 5 {name} List?
                    </header>
                    <div id="confirm-cancel-container">
                        <button
                            id="dialog-yes-button"
                            className="modal-button"
                            onClick={this.handleClick}
                        >Confirm</button>
                        <button
                            id="dialog-no-button"
                            className="modal-button"
                            onClick={hideDeleteListModalCallback}
                        >Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}