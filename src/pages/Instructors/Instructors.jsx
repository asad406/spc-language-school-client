import { Slide } from 'react-awesome-reveal';
import useInstructors from '../../hooks/useInstructors';

const Instructors = () => {
    const [instructors] = useInstructors();
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center py-20">
                Meet our instructors
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {instructors.map((instructor) => (
                    <div
                        className="rounded-xl"
                        key={instructor._id}
                    >
                        <div className="relative">
                            <img
                                className="object-cover w-full"
                                src={instructor.photo}
                                alt=""
                            />
                            <div className="absolute z-10 bottom-0 pl-2 py-3 md:pl-4 bg-black w-full text-white bg-opacity-50 ">
                                <Slide direction="up">
                                    <h2 className="text-2xl font-semibold">
                                        {instructor?.name}
                                    </h2>
                                    <h4>{instructor?.email}</h4>
                                </Slide>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instructors;
