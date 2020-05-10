import React from 'react';
import { Route, Router } from 'urban-bot';
import { Main } from './Pages/Main/Main';
import { initializeMockedDB } from './Common/api/requests/moked/DB';
import { UserProfilePage } from './Pages/UserProfilePage/ProfilePage';

initializeMockedDB();

export function App() {
    return (
        <Router>
            <Route path="/start">
                <Main />
            </Route>
            <Route path="/profile">
                <UserProfilePage />
            </Route>
        </Router>
    );
}
