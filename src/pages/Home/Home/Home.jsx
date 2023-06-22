import { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import FAQsection from '../FAQsection/FAQsection';

const Home = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={`bg-${theme === 'dark' ? 'black' : 'white'} text-${
                theme === 'dark' ? 'white' : 'black'
            }`}
        >
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <FAQsection></FAQsection>
        </div>
    );
};

export default Home;
