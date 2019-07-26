import React from 'react';
import './app.scss';
import Head from "./components/head/head";
import Main from "./pages/main/main";

function App() {
    return (
        <div className="app-container">
            <Head/>
            <Main />
        </div>
    );
}

export default App;
