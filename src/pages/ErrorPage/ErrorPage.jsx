import { Link, useRouteError } from "react-router-dom";
import errImg from '../../assets/err.jpg'


const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className="flex flex-col mt-10">
            <div className='lg:max-w-4xl mx-auto'>
                <img className="object-cover" src={errImg} alt="" />
            </div>
            <div className="text-center space-y-3">
                <h2 className="text-3xl font-bold">
                    <span>Error </span>
                    {status || 404}
                </h2>
                <p className="mb-4 text-red-700 font-semibold text-xl">
                    {error?.message}
                </p>
                <Link
                    to="/"
                    className="inline-block"
                >
                   <button>Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;