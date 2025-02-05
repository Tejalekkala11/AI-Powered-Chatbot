import React, { useState } from 'react';
import Auth from './Auth';
import Chatbot from './Chatbot';

const App = () => {
    const [userSession, setUserSession] = useState(null);

    return (
        <div>
            {!userSession ? <Auth onLogin={setUserSession} /> : <Chatbot />}
        </div>
    );
};

export default App;

