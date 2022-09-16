import { createContext, useReducer } from 'react';
import cookies from 'js-cookie';

export const userContext = createContext();
const initialState = {
	user: cookies.get('user') ? JSON.parse(cookies.get('user')) : null,
	userLoading: true,
	error: null,
};

const reducer = (state, action) => {
	if (action.type === 'LOGIN_REQUEST') {
		return state.userLoading;
	} else if (action.type === 'USER_LOGIN') {
		return {
			...state,
			user: state.user,
			userLoading: false,
		};
	} else if (action.type === 'USER_LOGOUT') {
		return { initialState, userLoading: false };
	} else {
		return { initialState, userLoading: false };
	}
};

export function UserProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };
	return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
