import React from 'react';
import "../../style/components/ClubPage/ClubArticle.css"
const ClubArticle = () => {
    return (
        <section>
            <div className='clubArticle'>
                <div className='clubArticleTitle'>
                    <p className='clubArticleTitleNum'>1</p>
                    <p className='clubArticleTitleContentBox'>
                        <p className='clubArticleTitleContent'>안녕하세요 ! 제 이름은 뭐게요 ?</p>
                        <p className='clubArticleTitleComment'>[123]</p>
                    </p>
                </div>
                <p className='clubArticleWriter'>유리구슬</p>
                <p className='clubArticleDate'>08.10</p>
            </div>
        </section>
        // 페이지 네이션 구현해야함
    );
}

export default ClubArticle;