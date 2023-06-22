import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleButton = () => {
    const { toggleTheme, theme } = useContext(ThemeContext);
    // console.log(theme);
    return (
        <div>
            <button
                className="text-2xl mr-5"
                onClick={toggleTheme}
            >
                {theme === 'light' ? <FaMoon></FaMoon> : <FaSun></FaSun>}
            </button>
        </div>
    );
};

export default ToggleButton;
