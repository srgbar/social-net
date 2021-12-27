import profileReducer, {addPostAC, deletePostAC, InitialProfileStateType, PostsType} from "./profile-reducer";

let startState: InitialProfileStateType

beforeEach( () => {
    startState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It\'s my first post", likesCount: 11},
            {id: 3, message: "Awesome!", likesCount: 5}
        ] as Array<PostsType>,
        profile: {
            photos: {
                // small: "https://c.tenor.com/SwqQl1FnAGgAAAAi/owl-blinking.gif",
                small: "",
                large: ""
            },
            lookingForAJobDescription: "",
            lookingForAJob: false,
            aboutMe: "",
            fullName: "",
            contacts: {
                github: "",
                vk: "",
                facebook: "",
                instagram: "",
                twitter: "",
                website: "",
                youtube: "",
                mainLink: ""
            }
        },
        status: "",
    };
})

test('length of posts should be incremented ', () => {
    // 1. test data
    const action = addPostAC("it-kamasutra.com");
    // 2. action
    const newState = profileReducer(startState, action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

test('message of posts should be correct', () => {
    // 1. test data
    const action = addPostAC("it-kamasutra.com");
    // 2. action
    const newState = profileReducer(startState, action);
    // 3. expectation
    expect(newState.posts[3].message).toBe("it-kamasutra.com");
});

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    const action = deletePostAC(1);
    // 2. action
    const newState = profileReducer(startState, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    const action = deletePostAC(1000);
    // 2. action
    const newState = profileReducer(startState, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});


