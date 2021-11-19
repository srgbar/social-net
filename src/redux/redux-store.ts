import {combineReducers, createStore, Store, applyMiddleware} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware  from "redux-thunk"

// определить автоматически тип всего объекта состояния
export type AppStateType = ReturnType<typeof rootReducer>

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

// непосредственно создаём store
export const store: Store<AppStateType> = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
//@ts-ignore
window.store = store;

