import React from 'react';

function MentoringChatDetail({chat}) {
    return (
        <div>
            <div className='chatDetailBox'>
                <div className='chatTileBox'>{chat.contents}</div>
                <hr/>
            </div>
        </div>
    );
}

export default MentoringChatDetail;