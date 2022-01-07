import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


// определить автоматически тип всего объекта состояния
export type AppStateType = ReturnType<typeof rootReducer>

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

// непосредственно создаём store

// export const store: Store<AppStateType> = createStore(rootReducer, applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
//@ts-ignore
window.store = store;

export default store;

