import React,{useState} from 'react';
import '../style/pages/SignUpPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PROXY } from '../data/serverUrl';

const SignUpPage = () => {
    const [signUpData,setSignUpData] = useState({
        identification:'',
        password:'',
        password2:'',
        name:'',
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
        console.log(signUpData);
        //회원가입 통신
        axios.post(`${PROXY}/accounts/signup/`, signUpData)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    };

    return (
        <div id="signupDiv">
            <section id="signupLeft">
                <h1>Re:act</h1>
            </section>
            <section id="signupRight">
                
                <form id="signupForm">
                    <h2>회원가입</h2>
                    <article>이미 회원이신가요 ? <Link to='/login' id="goToLogin">로그인 하러 가기</Link></article>
                    <input type="text" onChange={handleChangeData} name='identification' placeholder='아이디를 입력하세요' /><br />
                    <input type="password" onChange={handleChangeData} name='password' placeholder='비밀번호를 입력하세요' /><br />
                    <input type="password" onChange={handleChangeData} name='password2' placeholder='비밀번호를 한번 더 입력하세요' /><br />
                    <input type="text" onChange={handleChangeData} name='name' placeholder='이름을 입력하세요' /><br />
                    <input type="text" onChange={handleChangeData} name='nickname' placeholder='닉네임을 입력하세요' /><br />
                    <input type="text" name='email' onChange={handleChangeData} placeholder='이메일' />
                    <input type="text" onChange={handleChangeData} name='birth' placeholder='생년월일을 입력하세요(0000-00-0 0)' /><br />
                    <input type="text" onChange={handleChangeData} name='job' placeholder='직업을 입력하세요' /><br />
                    <button type="button" onClick={clickSignUp} id="signupSubmit">가입하기</button>
                </form>
            </section>
        </div>
    );
};

export default SignUpPage;