import { useState } from 'react';
import initializeVisibilityState from '../utils/initializeVisibilityState';

const useVisibilityState = () => {
    const [visibilityState, setVisibilityState] = useState(initializeVisibilityState());

    const toggleVisibilityState = (category) => {
        setVisibilityState((prevState) => ({
            ...initializeVisibilityState(),
            [category]: !prevState[category],
        }));
    };

    return [visibilityState, toggleVisibilityState];
};

export default useVisibilityState;
