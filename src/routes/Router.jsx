import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Classes from '../pages/Classes/Classes';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Instructors from '../pages/Instructors/Instructors';
import Dashboard from '../layout/Dashboard';
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers';
import AddAClass from '../pages/Dashboard/AddAClass/AddAClass';
import MyClasses from '../pages/Dashboard/MyClasses/MyClasses';
import AllClasses from '../pages/Dashboard/AllClasses/AllClasses';
import PrivateRoute from './PrivateRoute';
import AdminPrivateRoute from './AdminPrivateRoute';
import InstructorPrivateRoute from './InstructorPrivateRoute';
import MySelectedClasses from '../pages/Dashboard/MySelectedClasses/MySelectedClasses';
import AdminHome from '../pages/Dashboard/AdminHome/AdminHome';
import InstructorHome from '../pages/Dashboard/InstructorHome/InstructorHome';
import StudentsHome from '../pages/Dashboard/StudentsHome/StudentsHome';
import AdminFeedback from '../pages/Dashboard/AdminFeedback/AdminFeedback';
import Payment from '../pages/Dashboard/Payment/Payment';
import EnrolledClasses from '../pages/Dashboard/EnrolledClasses/EnrolledClasses';
import PaymentHistory from '../pages/Dashboard/PaymentHistory/PaymentHistory';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>,
            },
            {
                path: 'classes',
                element: <Classes></Classes>,
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'register',
                element: <Register></Register>,
            },
        ],
    },
    {
        path: 'dashboard',
        element: (
            <PrivateRoute>
                <Dashboard></Dashboard>
            </PrivateRoute>
        ),
        children: [
            //admin route
            {
                path: 'adminhome',
                element: (
                    <AdminPrivateRoute>
                        <AdminHome></AdminHome>
                    </AdminPrivateRoute>
                ),
            },
            {
                path: 'manageclasses',
                element: (
                    <AdminPrivateRoute>
                        <AllClasses></AllClasses>
                    </AdminPrivateRoute>
                ),
            },
            {
                path: 'feedback/:id',
                element: (
                    <AdminPrivateRoute>
                        <AdminFeedback></AdminFeedback>
                    </AdminPrivateRoute>
                ),
            },
            {
                path: 'manageusers',
                element: (
                    <AdminPrivateRoute>
                        <AllUsers></AllUsers>
                    </AdminPrivateRoute>
                ),
            },
            //instructor route
            {
                path: 'instructorhome',
                element: (
                    <InstructorPrivateRoute>
                        <InstructorHome></InstructorHome>
                    </InstructorPrivateRoute>
                ),
            },
            {
                path: 'addaclass',
                element: (
                    <InstructorPrivateRoute>
                        <AddAClass></AddAClass>
                    </InstructorPrivateRoute>
                ),
            },
            {
                path: 'myclasses',
                element: (
                    <InstructorPrivateRoute>
                        <MyClasses></MyClasses>
                    </InstructorPrivateRoute>
                ),
            },
            //students route
            {
                path: 'studenthome',
                element: <StudentsHome></StudentsHome>
            },
            {
                path: 'myselectedclasses',
                element: <MySelectedClasses></MySelectedClasses>,
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
            },
            {
                path: 'enrolledclasses',
                element: <EnrolledClasses></EnrolledClasses>,
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory></PaymentHistory>,
            },
        ],
    },
]);

export default router;
