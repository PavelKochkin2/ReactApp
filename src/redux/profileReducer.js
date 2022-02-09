let initialState = {
    posts: [
        { text: "first post baby" },
        { text: "don't like" },
        { text: "how are you?" }
    ]
};

//reducer takes state and action and returns modified state, based on the
//given action. Reducer is a pure function
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            let post = { text: action.text };
            stateCopy.posts.push(post);
            return stateCopy;
        default: return state;
    }
}

const addPost = 'ADD-POST';

export const createAddPostAction = (text) => {
    return ({ type: addPost, text: text })
}