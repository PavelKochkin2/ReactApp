const updateNewMsgText = 'UPDATE_NEW_MESSAGE_TEXT'
const addNewMsg = 'ADD_NEW_MESSAGE'

export const dialogsReducer = (state, action) => {

    if (action.type === updateNewMsgText) {
        state.newMessageText = action.newMessageText;
    }
    else if (action.type === addNewMsg) {
        debugger;
        let messages = state.messagesData;
        let id = (messages.length) + 1;
        messages.push({id: id , message: msg });
    }

    return state;
}