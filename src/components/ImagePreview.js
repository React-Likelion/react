import { useRef , useState } from 'react';
import '../style/components/ImagePreview.css';

const ImagePreview = ({text}) => {

    const selectFile = useRef("");
    const [detailImgs,setDetailImgs] = useState([]); // 웹상에 보여지는 url 리스트
    
    const handleImageUpload = (e) => {
        const fileArr = e.target.files;
        let fileURLs = [];
       
        let file;
        let filesLength = fileArr.length > 5 ? 5 : fileArr.length;
    
        for (let i = 0; i < filesLength; i++) {
          file = fileArr[i];
        
          let reader = new FileReader();
          reader.onload = () => {
            console.log(reader.result);
            fileURLs[i] = reader.result;
            setDetailImgs([...fileURLs]);
          };
          reader.readAsDataURL(file);
        }
      };

    const removeImage = (e) => {
        setDetailImgs(detailImgs.filter(ele => ele != e.target.value));
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
                    detailImgs.map((ele)=>{
                        return <div>
                            <div><div></div><button value={ele} onClick={removeImage}>X</button></div>
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