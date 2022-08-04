import React from 'react';
import '../../style/components/MentoringPage/MentoringItem.css'

function MentoringItem() {
    return (
        <div className='mentoringItem'>
            <div className='itemBox'>
                <section className='tagBox'>
                    <div className='tagItem'>사업</div>
                    <div className='tagItem'>기획</div>
                    <div className='tagItem'>창업</div>
                </section>
                <section className='showBox'>
                    <section className='imgBox'>
                        이미지
                    </section>
                    <section className='showDetail'>
                        <div className='showTitle'>
                            제목
                        </div>
                        <div className='showContent'>
                            내용1<br/>
                            내용2<br/>
                            내용3
                        </div>
                        <div className='showProfile'>
                            <div className='showNickName'>
                                이름
                            </div>
                            <div className='showMember'>
                                멤버
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default MentoringItem;