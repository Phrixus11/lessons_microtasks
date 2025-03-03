import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {RenderTasts} from "./components/HomeWork_1/RenderTasts.tsx";

createRoot(document.getElementById('root')!).render(
    <>
        <App/>
        <RenderTasts/>
    </>
)
