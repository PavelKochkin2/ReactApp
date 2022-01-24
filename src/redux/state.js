import {rerenderEntireApp} from '../render'


let state = {
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
}

export let addPost = (text) => {
    debugger;
    let post = { text: text };
    state.profileComponentData.posts.push(post);
    rerenderEntireApp(state);
}

export default state;