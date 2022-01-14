import React,{useState} from "react";
import daftarPic from "./assets/daftarPic.svg"
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./daftar.css"
import axios from "axios";
import GoogleLogin from "react-google-login";

export  default function Daftar(){
    const [passwordShown, setPasswordShown] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [emailExist, setemailExist] = useState(false);
    const navigate = useNavigate();
    const onSubmit = data => {
        axios.post(`${process.env.REACT_APP_URL}/register`, 
                    data,
                    { headers: { 'Content-Type': 'application/json' }}
                   )
        .then(response => {
            console.log(response.data)
            if(response.data.message==="Account Created"){
                localStorage.setItem("token", response.data.accessToken)
                navigate("/akunku/editprofil")
            }
        })
        .catch(error => {console.log(error.data)
            setemailExist(true)});
        // console.log()
    }

    const responseGoogle = async (authResult) => {
        // console.log(authResult);
        try{
            if(authResult){
                console.log(authResult);
                const result = await axios.post(`${process.env.REACT_APP_URL}/auth/google`,
                                                 authResult,
                                                 { headers: { 'Content-Type': 'application/json' }})
                console.log(result)
                console.log(authResult.accessToken)
                console.log(result.data)
                // let res = {
                //     "token" : authResult.accessToken,
                //     "data" : result.data.result
                // }
                if(result.data.message==='success'){
                    localStorage.setItem("token",authResult.accessToken)
                    navigate("/akunku/editprofil");
                }
                return result;
            } else{
                throw new Error(authResult)
            }
        } catch(e){
            console.log(e)
        }
    }
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };
    return(
        <div className="container px-0 py-3">
            <div className="row my-5 py-5">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-12 order-12 order-lg-first order-xxl-first order-xl-first order-last my-5">
                {emailExist?(<><p className="alert bg-secondary-1 text-secondary-4" role="alert">Email anda telah terdaftar, silahkan melakukan login</p><br/></>):(<></>)}
                <form onSubmit={handleSubmit(onSubmit)} className="row g-3 border border-light px-3 py-3">
                    <h1 className="fs-display fw-bold text-primary">Daftar</h1>
                    <h3 className="fs-h3 text-active mb-5">Buat akunmu untuk menelusuri fitur-fitur menarik dari VitQ</h3>
                    <div className="col-12 mb-3">
                        <label htmlFor="validationServer01" className="form-label fs-h3 text-active fw-semibold">Nama</label>
                        <input type="text" 
                               placeholder="e.g joko" 
                               className="form-control"                         
                               name="nama"
                               {...register("nama")}
                               required />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="validationServer01" className="form-label fs-h3 text-active fw-semibold">Email</label>
                        <input type="email" 
                               placeholder="e.g joko@gmail.com" 
                               className="form-control"                          
                               name="email"
                               {...register("email")}
                               
                               required />
                    </div>
                    <div className="col-12 mb-4">
                        <label htmlFor="validationServer01" className="form-label fs-h3 text-active fw-semibold">Password</label>
                        <input type={passwordShown ? "text" : "password"}
                               className="form-control" 
                               name="password"
                               {...register("password",{
                                   pattern:{
                                       value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                   }
                               })}
                               required />
                                 {errors.password && <p className="text-secondary-3 mt-2">*password minimal 8 karakter dengan kombinasi huruf dan angka.</p>}
                        <div className="d-flex mt-2 mb-4">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onClick={() => togglePassword()} />
                            <label htmlFor="inlineCheckbox1" className="ms-2"> Tampilkan Password</label>
                        </div>
                        <p className="my-2 text-disable fs-subtitle">Dengan mendaftar, saya menyetujui  <Link to={`/`}><span className="text-primary-3"> syarat dan ketentuan </span></Link>
                            syarat dan <Link to={`/`}><span className="text-primary-3"> ketentuan serta kebijakan privasi.</span></Link>
                        </p>
                    </div>
                    <div className="col-12"> 
                        <button className="btn btn-primary w-100" type="submit">Daftar</button>
                    </div>
                    <p className="text-inactive fs-body text-center">Sudah punya akun?
                         <Link to={`/masuk`}>
                            Masuk
                         </Link>
                    </p>
                    <div className="col-12 my-5">
                        <center>
                            <GoogleLogin
                                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                buttonText="Masuk dengan Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy="single_host_origin"
                            /></center>
                    </div>
                    </form>
                </div>
                <div className="col-9 col-xxl-7 col-xl-7 col-lg-7 m-auto my-5">
                    <img className="w-100" src={daftarPic} alt="loginpicture" />
                </div>
            </div>
        </div>
    )
}