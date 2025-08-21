import ReactDOMClient from 'react-dom/client';
import { App } from './view/App'
import { GlobalStyle as ResetCSS } from './styles/reset.styles.ts';
import { BrowserRouter } from 'react-router-dom';
import { RoboProvider } from './state/robots.store.tsx';


const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(
    <>
        <ResetCSS />
        <BrowserRouter>
            <RoboProvider>
                <App />
            </RoboProvider>
        </BrowserRouter>
    </>
)