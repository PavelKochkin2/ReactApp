import { dialogsReducer } from './dialogsReducer'
import { profileReducer } from './profileReducer'

let store = {
    _notifySubsrcribers() { },

    _state: {
        dialogComponentData: {
            dialogsData: [
                { id: "1", name: "Alex" },
                { id: "2", name: "Miha" },
                { id: "3", name: "Toha" },
                { id: "4", name: "Kroshka" }
            ],

            messagesData: [
                { id: "1", message: "Hi" },
                { id: "2", message: "Hello" },
                { id: "3", message: "Go sex" },
                { id: "4", message: "WTF?!??!?" }
            ],
            newMessageText: ''
        },
        profileComponentData: {
            posts: [
                { text: "first post baby" },
                { text: "don't like" },
                { text: "how are you?" }
            ]
        }
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._notifySubsrcribers = observer;
    },

    dispatch(action) {
        debugger;

        dialogsReducer(this._state.dialogComponentData, action);
        profileReducer(this._state.profileComponentData, action);

        this._notifySubsrcribers(this._state);
    }

}

window.store = store;
export default store;