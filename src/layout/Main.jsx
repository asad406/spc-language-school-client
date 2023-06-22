import { Outlet } from 'react-router-dom';
import NavBar from '../pages/shared/NavBar/NavBar';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-260px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
