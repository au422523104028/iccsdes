import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/header";
import Aboutus from "../pages/aboutus";
import Footer from "../component/footer";
function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Aboutus/>} />
                    
               </Routes>
                <Footer />
            </BrowserRouter>

        </>
    )
}
export default Router;