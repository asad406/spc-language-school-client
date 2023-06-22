import image1 from '../../../assets/languages/bangla.png';
import image2 from '../../../assets/languages/arabic.png';
import image3 from '../../../assets/languages/chinese.png';
import image4 from '../../../assets/languages/hindi.png';
import image5 from '../../../assets/languages/urdu.png';
import image6 from '../../../assets/languages/koria.png';
import { Slide } from 'react-awesome-reveal';

const PopularClasses = () => {
    return (
        <div className="py-5">
            <Slide>
                <h3 className="text-4xl font-semibold text-center py-8">
                    Popular Languages
                </h3>
            </Slide>

            <hr className="mb-4 " />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative">
                    <img
                        className="object-cover w-full"
                        src={image1}
                        alt=""
                    />
                    <button className="absolute top-3 right-0 z-10 btn btn-sm">
                        <div className="badge badge-secondary">+99</div>
                        Students
                    </button>
                </div>
                <div className="relative">
                    <img
                        className="object-cover w-full"
                        src={image2}
                        alt=""
                    />
                    <button className="absolute top-3 right-0 z-10 btn btn-sm">
                        <div className="badge badge-secondary">+88</div>
                        Students
                    </button>
                </div>
                <div className="relative">
                    <img
                        className="object-cover w-full"
                        src={image3}
                        alt=""
                    />
                    <button className="absolute top-3 right-0 z-10 btn btn-sm">
                        <div className="badge badge-secondary">+77</div>
                        Students
                    </button>
                </div>
                <div className="relative">
                    <img
                        className="object-cover w-full"
                        src={image4}
                        alt=""
                    />
                    <button className="absolute top-3 right-0 z-10 btn btn-sm">
                        <div className="badge badge-secondary">+66</div>
                        Students
                    </button>
                </div>
                <div className="relative">
                    <img
                        className="object-cover w-full"
                        src={image5}
                        alt=""
                    />
                    <button className="absolute top-3 right-0 z-10 btn btn-sm">
                        <div className="badge badge-secondary">+55</div>
                        Students
                    </button>
                </div>
                <div className="relative">
                    <img
                        className="object-cover w-full"
                        src={image6}
                        alt=""
                    />
                    <button className="absolute top-3 right-0 z-10 btn btn-sm">
                        <div className="badge badge-secondary">+44</div>
                        Students
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;
