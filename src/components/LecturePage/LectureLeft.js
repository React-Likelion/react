import React,{useState,useEffect} from 'react';
import '../../style/components/LecturePage/LectureLeft.css';
import LectureLeftEditor from './LectureLeftEditor';
import { PROXY } from '../../data/serverUrl';
import Parser from 'html-react-parser';

const LectureLeft = ({lectureId,lectureThumbNail,lectureImg2,lectureImg3,lectureImg4,lectureImg5,classModify,lectureYoutube,lectureTitle,lecturePrice,lectureDescription}) => {
    console.log(classModify);
    console.log(lectureId);

    const imgThumbNail = `<img src=${PROXY+lectureThumbNail} alt='강의내용이미지' />`;
    const imgSrc2 = `<img src=${PROXY+lectureImg2} alt='강의내용이미지' />`;
    const imgSrc3 = `<img src=${PROXY+lectureImg3} alt='강의내용이미지' />`;
    const imgSrc4 = `<img src=${PROXY+lectureImg4} alt='강의내용이미지' />`;
    const imgSrc5 = `<img src=${PROXY+lectureImg5} alt='강의내용이미지' />`;
    let [content,setContent] = useState([]);
    const [realDescription,setRealDescription] = useState(lectureDescription);
    // console.log(realDescription);
    // console.log(imgThumbNail.props);

    useEffect(()=>{
        if(imgThumbNail !== null){
            console.log(realDescription);
            setRealDescription(realDescription.replace('<figure class="image"><img></figure>',imgThumbNail));
            console.log(realDescription);
        }
        if(lectureImg2 !== null){
            console.log('test');
            setRealDescription(realDescription.replace('<figure class="image"><img></figure>',imgSrc2));
        }if(lectureImg3 !== null){
            console.log('test');
            setRealDescription(realDescription.replace('<figure class="image"><img></figure>',imgSrc3));
        }if(lectureImg4 !== null){
            console.log('test');
            setRealDescription(realDescription.replace('<figure class="image"><img></figure>',imgSrc4));
        }if(lectureImg5 !== null){
            console.log('test');
            setRealDescription(realDescription.replace('<figure class="image"><img></figure>',imgSrc5));
        }
        console.log(realDescription);
        // setContent(
        //     //꺽쇠로 태그 구분해서 넣기
        //     realDescription.split('<p>')
        // );
        // setContent(
        //     ...content,
        //     //꺽쇠로 태그 구분해서 넣기
        //     realDescription.split('<figure')
        // );
    },[]);

    console.log(content);
    return (
        <div id="LectureLeftDiv">
            {
                (classModify)?
                <LectureLeftEditor imgThumbNail={imgThumbNail} lectureThumbNail={PROXY+lectureThumbNail} lectureYoutube={lectureYoutube} lectureId={lectureId} titleLecture={lectureTitle} lecturePrice={lecturePrice} lectureDescription={lectureDescription}/>:
                <>
                    {Parser(realDescription)}
                </>
            }
            
        </div>
    );
};

export default LectureLeft;