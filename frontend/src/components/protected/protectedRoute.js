import React from 'react';
import { Navigate } from "react-router-dom";

function ProtectedRoute({ Component, LoggedIn, ...props }) {
    if (LoggedIn) {
        return (
            <Component {...props} />
        )
    } else {
        return < Navigate to="/" replace />
    }
}

export default ProtectedRoute;