import image1 from '../../../assets/lan1.jpg'
import image3 from '../../../assets/lan3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div
                id="slide1"
                className="carousel-item relative w-full"
            >
                <img
                    src={image1}
                    className="w-full opacity-30"
                />
                <div className='absolute bg-black w-full h-full left-0 top-0 opacity-50 flex justify-center items-center'>
                <div>
                <p className=' font-bold text-white text-3xl md:text-7xl'>Learn <br /> More <br /> Language <br />
                 </p>
                 <p className='text-base text-white py-3 font-normal md:font-semibold'>Take more opportunities from all over the world</p>
                <button className='btn block btn-sm text-black mt-2 btn-info'>More Info</button>
                </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                        href="#slide4"
                        className="btn btn-circle"
                    >
                        ❮
                    </a>
                    <a
                        href="#slide2"
                        className="btn btn-circle"
                    >
                        ❯
                    </a>
                </div>
            </div>
            <div
                id="slide2"
                className="carousel-item relative w-full"
            >
                <img
                    src={image3}
                    className="w-full opacity-30"
                />
                <div className='absolute left-1/4 top-1/4'>
                <p className=' font-bold text-3xl md:text-7xl'>Learn <br /> More <br /> Language <br />
                 </p>
                 <p className='text-base py-3 font-normal md:font-semibold'>Take more opportunities from all over the world</p>
                <button className='btn block btn-sm text-white mt-2 btn-info'>More Info</button>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                        href="#slide1"
                        className="btn btn-circle"
                    >
                        ❮
                    </a>
                    <a
                        href="#slide3"
                        className="btn btn-circle"
                    >
                        ❯
                    </a>
                </div>
            </div>
            <div
                id="slide3"
                className="carousel-item relative w-full"
            >
                <img
                    src={image1}
                    className="w-full opacity-30"
                />
                <div className='absolute left-1/4 top-1/4'>
                <p className=' font-bold text-3xl md:text-7xl'>Learn <br /> More <br /> Language <br />
                 </p>
                 <p className='text-base py-3 font-normal md:font-semibold'>Take more opportunities from all over the world</p>
                <button className='btn block btn-sm text-white mt-2 btn-info'>More Info</button>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                        href="#slide2"
                        className="btn btn-circle"
                    >
                        ❮
                    </a>
                    <a
                        href="#slide4"
                        className="btn btn-circle"
                    >
                        ❯
                    </a>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;
