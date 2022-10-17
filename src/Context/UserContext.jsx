import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.config';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
	const [user, setUser] = useState('');

	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);

		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		setLoading(true);

		return signOut(auth);
	};

	const googleLogIn = () => {
		return signInWithPopup(auth, googleProvider);
	};

	useEffect(() => {
		let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = { createUser, signIn, user, logOut, loading,googleLogIn };

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
