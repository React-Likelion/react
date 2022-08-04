import React,{useState} from 'react';
import '../style/pages/SignUpPage.css';

const SignUpPage = () => {
    const [signUpData,setSignUpData] = useState({
        id:'',
        password:'',
        name:'',
        phone:'',
        email:'',
        birth:'',
        job:'',
    });
    const [emailData,setEmailData] = useState({
        emailId:'',
        emailAddress:'',
    });

    const handleChangeData = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value,
        });
    };
    const handleChangeEmail = (e)=>{
        setEmailData({
            ...emailData,
            [e.target.name]: e.target.value,
        });
    }

    const clickSignUp = (e)=>{
        e.preventDefault();
        console.log(signUpData);
        //회원가입 통신
    };
    const codeIssued = ()=>{
        console.log(emailData);
        const emailAdd = `${emailData.emailId}@${emailData.emailAddress}`; //이메일 총 주소
        console.log(emailAdd);
        //인증번호 통신 후 인증 성공시
        setSignUpData({
            ...signUpData,
            email:emailAdd,
        }); //이메일을 회원가입 정보에 추가
    };
      

    return (
        <div id="signupDiv">
            <section id="signupLeft">
                <h1>Re:act</h1>
            </section>
            <section id="signupRight">
                
                <form id="signupForm">
                    <h2>회원가입</h2>
                    <input type="text" onChange={handleChangeData} name='id' placeholder='아이디를 입력하세요' /><br />
                    <input type="password" onChange={handleChangeData} name='password' placeholder='비밀번호를 입력하세요' /><br />
                    <input type="password" placeholder='비밀번호를 한번 더 입력하세요' /><br />
                    <input type="text" onChange={handleChangeData} name='name' placeholder='이름을 입력하세요' /><br />
                    <input type="text" onChange={handleChangeData} name='phone' placeholder='전화번호를 입력하세요' /><br />
                    <div>
                        <input type="text" name='emailId' onChange={handleChangeEmail} id="emailInput" placeholder='이메일' />@
                        <input name='emailAddress' onChange={handleChangeEmail} id="emailAdressInput" type="text" />
                        <button type="button" onClick={codeIssued} style={{cursor:'pointer'}}>인증코드 받기</button>
                    </div>
                    <input type="text" name='confirmNum' placeholder='인증번호 입력' />
                    <input type="text" onChange={handleChangeData} name='birth' placeholder='생년월일을 입력하세요(8자)' /><br />
                    <input type="text" onChange={handleChangeData} name='job' placeholder='직업을 입력하세요' /><br />
                    <button type="button" onClick={clickSignUp} id="signupSubmit">가입하기</button>
                </form>
            </section>
        </div>
    );
};

export default SignUpPage;