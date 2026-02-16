import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cine from "./pages/Cine";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/cine' />} />
                <Route path='/cine' element={<Cine />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
