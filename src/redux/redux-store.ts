import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {authReducer} from "./auth-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import {appReducer} from "./app-reducer";
import {sidebarReducer} from "./sidebar-reducer";


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
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
//@ts-ignore
window.store = store;
