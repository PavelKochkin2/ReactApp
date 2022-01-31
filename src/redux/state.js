const addPost = 'ADD-POST';
const updateNewMsgText = 'UPDATE_NEW_MESSAGE_TEXT'
const addNewMsg = 'ADD_NEW_MESSAGE'


export const createAddPostAction = (text) => {
    return ({ type: addPost, text: text })
}

export const createUpdateNewMsgTextAction = (newMsgText) => {
    return ({ type: updateNewMsgText, newMessageText: newMsgText })
}

export const createAddNewMessageAction = (msgText) => {
    return ({ type: addNewMsg, msgText: msgText })
}

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

    _addPost(text) {
        let post = { text: text };
        this._state.profileComponentData.posts.push(post);
        this._notifySubsrcribers(this._state);
    },

    _addNewMsg(msg) {
        debugger;
        let messages = this._state.dialogComponentData.messagesData;
        let id = (messages.length) + 1;
        messages.push({id: id , message: msg });
        this._notifySubsrcribers(this._state);
    },

    subscribe(observer) {
        this._notifySubsrcribers = observer;
    },

    dispatch(action) {
        debugger;
        if (action.type === addPost) {
            this._addPost(action.text);
        }
        else if (action.type === updateNewMsgText) {
            this._state.dialogComponentData.newMessageText = action.newMessageText;
            this._notifySubsrcribers(this._state);
        }
        else if (action.type === addNewMsg) {
            debugger;
            this._addNewMsg(action.msgText);
        }
    }

}

window.store = store;
export default store;