const addPost = 'ADD-POST';

//reducer takes state and action and returns modified state, based on the
//given action. Reducer is a pure function
export const profileReducer = (state, action) => {
    if (action.type === addPost) {
        let post = { text: text };
        state.posts.push(post);
    }
    return state;
}