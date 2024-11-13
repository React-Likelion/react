import { useState } from 'react';
import initializeVisibilityState from '../utils/initializeVisibilityState';

const useCategoryHandler = (infoArray, setCategoryData, setDetailCategoryData) => {
    const [visibilityState, setVisibilityState] = useState(initializeVisibilityState());

    const handleCategoryClick = (category, e, categoryData) => {
        // Reset visibility state except for the selected category
        setVisibilityState((prevState) => ({
            ...initializeVisibilityState(),
            [category]: !prevState[category],
        }));

        const selectedCategory = e.target.innerHTML.split('<')[0];
        const categoryDataBool = categoryData === '';
        let existenceBool = infoArray.includes(selectedCategory);

        if (categoryDataBool) {
            setCategoryData(selectedCategory);
        } else if (existenceBool) {
            const filteredInfoArray = infoArray.filter((value) => value !== selectedCategory);
            if (filteredInfoArray.includes(categoryData)) {
                setDetailCategoryData('');
                setCategoryData(selectedCategory);
            }
        }
    };

    return [visibilityState, handleCategoryClick];
};

export default useCategoryHandler;
