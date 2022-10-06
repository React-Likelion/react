import { useRef , useState } from 'react';
import '../style/components/ImagePreview.css';

const ImagePreview = ({text, setImages, imgCnt}) => {

    const selectFile = useRef("");
    const [detailImgs,setDetailImgs] = useState([]); // 웹상에 보여지는 url 리스트

    // 업로드 하는 함수
    const handleImageUpload = (e) => {
        const fileArr = e.target.files;
        
        if(fileArr.length > imgCnt) {
            alert(`사진 첨부는 ${imgCnt}개 까지 가능합니다.`);
            return;
        }
        setImages(e.target.files);
        
        const fileUrls = [];
        let file; // file 객체 하나 저장
        // let filesLength = fileArr.length > 5 ? 5 : fileArr.length;
        
        for (let i = 0; i < imgCnt; i++) {
          file = fileArr[i];
        
          let reader = new FileReader();
          // 읽기가 성공적으로 완료되면 이미지 URL 저장
          reader.onload = () => {
            fileUrls.push(reader.result);
            setDetailImgs([...fileUrls]);
          };
          // 바이너리 파일을 Base64 Encode 문자열로 변환
          // readAsDataURL method : byte to string
          reader.readAsDataURL(file);
        }
      };

    const removeImage = (e) => {
        setDetailImgs(detailImgs.filter(ele => ele !== e.target.value));
    };

    return(
        <>
            <input type="file" style={{display:'none'}} multiple ref={selectFile} 
                accept="image/jpg,image/png,image/jpeg" onChange={handleImageUpload}/>
            <button className='picture-upload-btn' onClick={() => selectFile.current.click()}>
                {text}
            </button>
            { detailImgs.length !== 0 &&
            <div className='preview-box'>
                {
                    detailImgs.map((ele, idx)=>{
                        return <div key={idx}>
                            <div>
                                <div></div>
                                <button value={ele} onClick={removeImage}>X</button>
                            </div>
                            <img src={ele} alt="사진미리보기" />
                        </div>
                            
                    })
                }
            </div>
            }
        </>
    );
}

export default ImagePreview;