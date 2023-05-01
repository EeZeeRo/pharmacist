import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
    const { user, loading, error, signInWithEmailAndPassword, signOut } =
        useContext(AuthContext);
    return { user, loading, error, signInWithEmailAndPassword, signOut };
}
