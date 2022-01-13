import React,{useState} from "react";
import daftarPic from "./assets/daftarPic.svg"
import { useForm } from "react-hook-form";
import { Link,useNavigate } from "react-router-dom";
import "./login.css"
import axios from "axios";
import GoogleLogin from "react-google-login";

export  default function Login(){
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [cekInput, setcekInput] = useState(false);
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);
        axios.post("http://localhost:5000/login",
                    data,
                    { headers: { 'Content-Type': 'application/json' }}
                   )
        .then(response => {console.log(response.data)
            localStorage.setItem("token",response.data.accessToken)
            if(response.data){
                navigate("/home")
            }
        })
        .catch(error => {console.log(error.data)
            setcekInput(true)
        });
    }
    
    const responseGoogle = async (authResult) => {
        try{
            if(authResult){
                console.log(authResult);
                const result = await axios.post("http://localhost:5000/auth/google",
                                                 authResult,
                                                 { headers: { 'Content-Type': 'application/json' }})
                console.log(result)
                console.log(authResult.accessToken)
                console.log(result.data)
                let res = {
                    "token" : authResult.accessToken,
                    "data" : result.data.result
                }
                if(result.data.message==='success'){
                    localStorage.setItem("result",JSON.stringify(res))
                    navigate("/home");
                }
                return result;
            } else{
                throw new Error(authResult)
            }
        } catch(e){
            console.log(e)
        }
    }
   
    return(
        <div className="container px-0 py-3">
            <div className="row my-5 py-5">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-12 order-12 order-lg-first order-xxl-first order-xl-first order-last my-5">
                {cekInput?(<><p className="alert bg-secondary-1 text-secondary-4" role="alert">Cek kembali email dan password anda!</p><br/></>):(<></>)}
                <form onSubmit={handleSubmit(onSubmit)} className="row g-3 border border-light px-3 py-3">
                    <h1 className="fs-display fw-bold text-primary">Masuk</h1>
                    <h3 className="fs-h3 text-active mb-5">Apakah kami mengenal Kamu?Ayo, Lanjutkan kegiatanmu</h3>
                    <div className="col-12 mb-3">
                        <label htmlFor="validationServer01" className="form-label fs-h3 text-active fw-semibold">Email</label>
                        <input  type="email" 
                                placeholder="e.g joko@gmail.com" 
                                className="form-control" 
                                {...register("email")}
                                required />
                    </div>
                    <div className="col-12 mb-4">
                        <label htmlFor="validationServer01" className="form-label fs-h3 text-active fw-semibold">Password</label>
                        <input  type="text" 
                                className="form-control" 
                                {...register("password")}
                                required />
                        <p className="my-2 fs-subtitle" style={{color:"#485860"}}>Lupa Password? 
                            <Link to={`/`}><span className="text-primary-3"> klik di sini</span></Link>
                        </p>
                    </div>
                    <div className="col-12">
                        {/* <Link to={`/`}> */}
                            <button className="btn btn-primary w-100" type="submit">Masuk</button>
                        {/* </Link> */}
                    </div>
                    <div className="col-12 justify-content-between divider text-center d-flex mt-5">
                        <table width="100%">
                            <tr>
                                <td><hr /></td>
                                <td className="fs-body" style={{width:"1px", padding: "0 10px", whiteSpace: "nowrap", color:"#485860"}}>atau masuk dengan</td>
                                <td><hr /></td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-12 my-5">
                            <center><GoogleLogin
                                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                buttonText="Login With Google"
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