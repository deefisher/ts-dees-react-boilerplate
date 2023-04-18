import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AppProvider } from './AppProvider';
import { WrongPage } from '../pages/WrongPage';

export const App = () => {
    return (
        <AppProvider>
            <Router>
                <Routes>
                    <Route path="*" element={<Navigate replace to={`/wrong-page`} />} />
                    <Route path={'/wrong-page'} element={<WrongPage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </AppProvider>
    );
};
