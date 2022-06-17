import {React, useState} from "react";
import { RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import { authentication } from "../../firebase/config";





function Login() {

    const countryCode = "+54"
    const [phoneNumber, setPhoneNumber] = useState(countryCode);
    const [expandform, setExpandform] = useState(false);
    const [code, setCode] = useState('');
    
    
    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
            'size': 'invisible',
            'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
        }
        }, authentication);   
    }
    
    const requestCode = (e) => {
        e.preventDefault()
        if (phoneNumber.length >= 12) {
            setExpandform(true)
            generateRecaptcha()
            let appVerifier = window.recaptchaVerifier
            signInWithPhoneNumber(authentication, phoneNumber , appVerifier)
                .then(confirmationResult => {
                window.confirmationResult = confirmationResult
                })
            .catch ((error) => {
                console.log(error)
            })
        }
    }

    const verifyCode = (e) => {
        let sentCode = e.target.value
        setCode(sentCode)
        if (code.length === 6) {
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(code)
                .then((result) => {
                    const user = result.user
                    console.log(user)
            })
        }
    }
    
    return (
    <>
    <form onSubmit={requestCode}>
            <label htmlFor="phone number"></label>
                <input value={phoneNumber } type="tel" onChange={(e)=>setPhoneNumber(e.target.value)} />
            <div id="recaptcha"></div>
            {expandform === true ?
            <>
            <label htmlFor="enterCode">ingresa el codigo que recibiste por sms</label>
            <input type= "numer" onChange={verifyCode}/>
            </>
            :
            <button type="submit"> enviar el codigo </button>
            }
            </form>
    </>
    )
}

export default Login;
