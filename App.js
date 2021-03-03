// In App.js in a new project

import * as React from 'react';
import { Provider as AuthProvider } from "./src/context/authContext"
import { Route } from './src/route';

function App() {
    return (
        <AuthProvider>
            <Route />
        </AuthProvider>
    );
}

export default App;