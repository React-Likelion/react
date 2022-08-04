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

    const handleChangeData = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value,
        });
    };
    const clickSignUp = (e)=>{
        e.preventDefault();
        //회원가입 통신
    };

    return (
        <div id="signupDiv">
            <section id="signupLeft">
                <h1>Re:act</h1>
            </section>
            <section id="signupRight">
                
                <form id="signupForm" onSubmit={clickSignUp}>
                    <h2>회원가입</h2>
                    <input type="text" onChange={handleChangeData} name='id' placeholder='아이디를 입력하세요' /><br />
                    <input type="text" onChange={handleChangeData} name='password' placeholder='비밀번호를 입력하세요' /><br />
                    <input type="text" onChange={handleChangeData} name='confirmPassword' placeholder='비밀번호를 한번 더 입력하세요' /><br />
                    <input type="text" onChange={handleChangeData} name='name' placeholder='이름을 입력하세요' /><br />
                    <input type="text" onChange={handleChangeData} name='phone' placeholder='전화번호를 입력하세요' /><br />
                    <div id='signup-email-box'>
                        <input type="text" onChange={handleChangeData} name='email' id="emailInput" placeholder='이메일' /><br/>@
                        <input id="emailAdressInput" type="text" />
                        <button type="button">인증코드 받기</button>
                    </div>
                    <input type="text" name='confirmNum' placeholder='인증번호 입력' />
                    <input type="text" onChange={handleChangeData} name='birth' placeholder='생년월일을 입력하세요(8자)' /><br />
                    <input type="text" onChange={handleChangeData} name='job' placeholder='직업을 입력하세요' /><br /><br />
                    <input type="submit" id="signupSubmit" value="가입하기" />
                </form>
            </section>
        </div>
    );
};

export default SignUpPage;