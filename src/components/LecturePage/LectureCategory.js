import React from 'react';
import useCategoryHandler from '../../hooks/useCategoryHandler';
import '../../style/components/LecturePage/LectureCategory.css';

const LectureCategory = ({ setDetailCategoryData, setCategoryData, categoryData, handleClose }) => {
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

    const [visibilityState, handleCategoryClick] = useCategoryHandler(
        infoArray,
        setCategoryData,
        setDetailCategoryData
    );

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
                            onClick={(e) => handleCategoryClick(category, e, categoryData)}
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
