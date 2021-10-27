import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import "./Login.css"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [photoURL, setPhotoURL] = useState("")
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((userAuth) => {
            dispatch(
                login({
                    email: userAuth.user.email,
                       uid: userAuth.user.uid,
                       displayName: userAuth.user.displayName,
                       photoURL: userAuth.user.photoURL,

                }
        ))
        }).catch(err => {alert(err)})
    }
    const register = (e) => {
       e.preventDefault();
       if(!name){
           return alert("Please Enter First Name")
       }
       auth.createUserWithEmailAndPassword(email,password).then((userAuth)=> {
           userAuth.user.updateProfile({
               displayName: name,
               photoURL: photoURL
           }).then(()=>{
               dispatch(
                   login({
                       email: userAuth.user.email,
                       uid: userAuth.user.uid,
                       displayName: name,
                       photoURL: photoURL,


               }));
           })
       }).catch(err=> {alert (err)})
    }
    return (
        <div className="login">
            <img src="https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png" alt="" />
            <form >
                <input value={name} onChange={e=>{setName(e.target.value)}} placeholder="First Name (required if registering)" type="text" />
                <input value={photoURL} onChange={e=>{setPhotoURL(e.target.value)}}placeholder="Profile pic URL (optional)" type="text" />
                <input value={email} onChange={e=>{setEmail(e.target.value)}}placeholder="Email" type="email" />
                <input value={password} onChange={e=>{setPassword(e.target.value)}}placeholder="Password" type="password" />
                <button onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a Member {" "}
            <span onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
