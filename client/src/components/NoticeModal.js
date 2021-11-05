import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
/*
    This modal is shown when the user input error
    
    @author Eric
*/
function NoticeModal() {
    const { store } = useContext(GlobalStoreContext);
    let name = "";
    if (store.currentError) {
        name = store.currentError;
    }
    function handleDeleteList(event) {
        store.deleteMarkedList();
    }
    function handleCloseModal(event) {
        store.hideDeleteListModal();
    }
    return (
        <div
            className="modal"
            id="delete-modal"
            data-animation="slideInOutLeft">
            <div className="modal-dialog">
                <header className="dialog-header">
                    Delete the {name} Top 5 List?
                </header>
                <div id="confirm-cancel-container">
                    <button
                        id="dialog-yes-button"
                        className="modal-button"
                        onClick={handleDeleteList}
                    >Confirm</button>
                    <button
                        id="dialog-no-button"
                        className="modal-button"
                        onClick={handleCloseModal}
                    >Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default NoticeModal;
