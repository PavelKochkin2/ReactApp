let store = {
    _notifySubsrcribers(){ },
    
    _state: {
        dialogComponentData: {
            dialogsData: [
                { id: "1", name: "Alex" },
                { id: "2", name: "Miha" },
                { id: "3", name: "Toha" },
                { id: "4", name: "Kroshka" }
            ],

            messagesData: [
                { message: "Hi" },
                { message: "Hello" },
                { message: "Go sex" },
                { message: "WTF?!??!?" }
            ]
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
        debugger;
        return this._state;
    },

    _addPost (text){
        debugger;
        let post = { text: text };
        this._state.profileComponentData.posts.push(post);
        this._notifySubsrcribers(this._state);
    },

    subscribe(observer){
        this._notifySubsrcribers = observer;
    },

    dispatch(action){
        if(action.type === 'ADD-POST'){
                this._addPost(action.text);
        }

    }

}

window.store = store;
export default store;