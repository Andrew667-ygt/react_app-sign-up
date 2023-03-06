import React,{useState,useEffect} from "react";
import AppInput from "./AppInput";
import '../styles/app.css';
import axios from 'axios';

export default function App() {


    const [id, setid] =useState();
    const [name, setname] =useState();
    const [phonenumber, setphonenumber] =useState();
    const [email, setemail] =useState();
    const [password, setpassword] =useState();
    const [userlist, setuserlist] =useState();


    // useEffect(()=>{
    //    fetch('http://localhost:3002/')
    //         .then(()=> response.json())
    //         .then((data)=>setid(data))
    //         .then((data)=>setname(data));
    // },[]);




    const buttonClickHandler=(e)=>{
        e.preventDefault()

        console.log(id);
        console.log(name);
        console.log(phonenumber);
        console.log(email);
        console.log(password);

       

        axios.post("http://localhost:3002/create",{
            id: id,
            name: name,
            phonenumber: phonenumber,
            email: email,
            password: password,
        }).then(()=>{
            console.log('successful create')
        });


    

    };


    

    const deletebuttonHandler=(e)=>{
        e.preventDefault()
        console.log(id);

        axios.delete('http://localhost:3002/delete/:id')
        .then(()=>console.log('response'))
        .catch((error) => console.log(error));

    };


    
    
    return (
    <>
    <div className="login-page">
        <div className="form">
            <img src="https://www.t-mobile.nl/Assets/static/t-mobile-logo.svg?h=f7be58be967f240197a822fbe121939e"></img>
            <form className="login-form">
                <AppInput 
                type='number' 
                placeholder="id" 
                onChange={(data)=> setid(data.target.value)}
                 />
                <AppInput 
                type='text' 
                placeholder="name" 
                onChange={(data)=> setname(data.target.value)} 
                 />   
                <AppInput 
                type='number' 
                placeholder="phone number"  
                onChange={(data)=> setphonenumber(data.target.value)} 
                 />
                 <AppInput 
                type='email' 
                placeholder="email"  
                onChange={(data)=> setemail(data.target.value)} 
                 />
                 <AppInput 
                type='password' 
                placeholder="password"  
                onChange={(data)=> setpassword(data.target.value)} 
                 />
                <button 
                type="submit"
                onClick={buttonClickHandler}>Create
                </button>
                <button 
                type="submit"
                onClick={deletebuttonHandler}>Delete
                </button>
                <p class="message">Not registered? <a href="#">Create an account</a></p>
                    
            </form>
        </div>
    </div>
    </>
    );
}




