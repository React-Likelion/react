import React, { useState } from 'react';
import '../../style/components/LecturePage/LectureCategory.css';

// Utility function to reset all categories' states
const initializeVisibilityState = () => ({
    프로그래밍: true,
    '금융/제테크': true,
    운동: true,
    '비즈니스/마케팅': true,
    미술: true,
    외국어: true,
    요리: true,
    '라이프 스타일': true,
    음악: true,
    '사진/영상': true,
    '창업/부업': true,
});

const LectureCategory = ({ setDetailCategoryData, setCategoryData, categoryData, handleClose }) => {
    const [visibilityState, setVisibilityState] = useState(initializeVisibilityState());
    const infoArray = [
        '프로그래밍',
        '금융/제테크',
        '사진/영상',
        '비즈니스/마케팅',
        '창업/부업',
        '미술',
        '외국어',
        '요리',
        '운동',
        '라이프 스타일',
        '음악',
    ];

    const handleCategoryClick = (category, e) => {
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

    const handleSubCategoryClick = (e) => {
        const lectureCategory = e.target.innerHTML;
        setDetailCategoryData(lectureCategory);
        handleClose();
    };

    return (
        <div id="lectureCategoryDiv">
            <h2>전체 강의</h2>
            <section id="lectureCategorySection">
                <ul>
                    {infoArray.map((category) => (
                        <li
                            key={category}
                            style={{ cursor: 'pointer' }}
                            onClick={(e) => handleCategoryClick(category, e)}
                        >
                            {category}
                            {!visibilityState[category] && (
                                <ul>
                                    {/* Add subcategories based on the category */}
                                    {category === '프로그래밍' && (
                                        <>
                                            <li onClick={handleSubCategoryClick}>웹/앱</li>
                                            <li onClick={handleSubCategoryClick}>IT교양</li>
                                        </>
                                    )}
                                    {category === '금융/제테크' && (
                                        <>
                                            <li onClick={handleSubCategoryClick}>주식</li>
                                            <li onClick={handleSubCategoryClick}>제테크</li>
                                            <li onClick={handleSubCategoryClick}>부동산</li>
                                        </>
                                    )}
                                    {/* Add similar subcategories for other main categories */}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default LectureCategory;
