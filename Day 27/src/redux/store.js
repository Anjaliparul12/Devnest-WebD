import {createStore} from 'redux' 
import { userformReducer } from './userform/userformReducer'

const store = createStore(userformReducer)

export default store