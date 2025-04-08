// General Stuff
import React, {useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';

// Components
import ColorPicker from "./components/ColorPicker/ColorPicker";

// Resources
import './styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const { t } = useTranslation();
    
    // Set page title
    useEffect(() => {
        document.title = t('title');
    }, [t]);
    
    return (
        <div className="App">
            <div className="Content">
                <ColorPicker/>
            </div>
            <ToastContainer
                position="bottom-right"
                limit={4}
                autoClose={1500}
                closeOnClick
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
            />
        </div>
    );
}

export default App;
