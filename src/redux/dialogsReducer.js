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

        case updateNewMsgText:        
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        
        case addNewMsg:
            let id = (state.messagesData.length) + 1;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: id.toString(), message: state.newMessageText }],
                newMessageText : ''
            }
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