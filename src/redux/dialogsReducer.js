let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case updateNewMsgText:{
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        }
        case addNewMsg:
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.newMessageText = state.newMessageText;
            let messages = stateCopy.messagesData;
            let id = (messages.length) + 1;
            messages.push({ id: id.toString(), message: state.newMessageText });
            stateCopy.newMessageText = '';
            return stateCopy;

        default: return state;
    }


}

const updateNewMsgText = 'UPDATE_NEW_MESSAGE_TEXT'
const addNewMsg = 'ADD_NEW_MESSAGE'

export const createUpdateNewMsgTextAction = (newMsgText) => {
    return ({ type: updateNewMsgText, newMessageText: newMsgText })
}

export const createAddNewMessageAction = (msgText) => {
    return ({ type: addNewMsg, msgText: msgText })
}