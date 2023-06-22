import { Slide } from "react-awesome-reveal";

const FAQsection = () => {
    return (
        <div className="py-5  md:w-1/2 mx-auto">
            <Slide>
                <h2 className="text-4xl font-semibold text-center py-8">
                    Frequently asked questions
                </h2>
            </Slide>

            <hr className="mb-4 " />
            <div className="collapse collapse-arrow bg-base-200">
                <input
                    type="radio"
                    name="my-accordion-2"
                />
                <div className="collapse-title text-xl font-medium">
                    What is a typical day like at the summer camps?
                </div>
                <div className="collapse-content">
                    <p>
                        Our summer camp programs include language courses and
                        all sorts of activities you didn´t know were possible.
                        Total immersion in a new country, with other students
                        from all around the world. You will certainly have the
                        adventure of a lifetime. Here is an example of a full
                        day during your summer camp with EF:
                    </p>
                </div>
            </div>
            <div className="collapse my-2 collapse-arrow bg-base-200">
                <input
                    type="radio"
                    name="my-accordion-2"
                />
                <div className="collapse-title text-xl font-medium">
                    Who will I travel with during my summer camp?
                </div>
                <div className="collapse-content">
                    <p>
                        A summer camp is a great place to get fresh ideas, make
                        new friends, and fill up on energy for the coming year.
                        Our summer camps abroad are designed to make the most of
                        your vacation, with a combined academic program,
                        tourism, and creative activities. Most of our summer
                        camps are very international, regardless of the
                        destination you choose, with students from 30 or more
                        countries all meeting at camp and spending several
                        exciting weeks together. Less experienced travelers can
                        also choose to attend summer camp with a group from
                        their own country, so they have the reassurance of their
                        own language when they need it.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input
                    type="radio"
                    name="my-accordion-2"
                />
                <div className="collapse-title text-xl font-medium">
                    Which languages can I learn during a summer camp?
                </div>
                <div className="collapse-content">
                    <p>
                        Going to camp is one of the highlights of many during
                        the holidays. Why not do two things at once by attending
                        a language camp? Our camps abroad teach language skills
                        as well as giving you an action-packed vacation. Camps
                        run during school holidays in over 14 destinations
                        around the world, including Spain, France, Portugal,
                        Italy, Costa Rica, China, Japan, Germany and more. An
                        immersion language camp is an effective way to improve
                        your foreign language skills by learning and applying
                        essential knowledge in a fun and relaxed environment. We
                        have a variety of options, including some camps
                        exclusively for children who are just getting started
                        learning foreign languages. All our camps include
                        innovative language instruction classes with experienced
                        teachers. Outside of class, campers participate in a
                        range of activities with their new friends from all
                        around the world.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQsection;
