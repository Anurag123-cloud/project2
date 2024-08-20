import Button from '../Button/Button'
import Img from '../Img/Img'
import React from './Contactbody.module.css'
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { useState } from 'react';

const Contactbody = () => {
    const[name ,setName]=useState("Enter your nmae");
    const[email ,setEmail]=useState("Enter your nmaeRGV");
    const[text ,setText]=useState("Enter your nmaeRFVGD");
    const onSubmit=(event)=>{
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
      
    }

  return (
    <section className={`${React.container}`}>
      <div className={`${React.left}`}>
     
      <div className={`${React.topButton}`}>
        <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px"/>}/>
        <Button text="VISA CALL" icon={<IoCall fontSize="24px"/>}/>
        </div>
        <Button  issingleButton={true} text="VIA EMAIL FORM" icon={<MdOutlineMessage fontSize="24px"/>}/>
       <div className={`${React.formbody}`}>
       <form onSubmit={onSubmit}>
        <label className={`${React.lebal}`}>Enter your name: </label>
        <input className={`${React.input}`} type="text" />
        <label className={`${React.lebal}`}>Enter your Email: </label>
        <input className={`${React.input}`} type="text" />
        <label className={`${React.lebal}`}>Reason: </label>
        <textarea className={`${React.input2}`}></textarea>
        <div>
        <button  className={`${React.button1}`}>Submit</button>
        </div>
        <div>
{name + " " + email + " " + text + " " }
        </div>
       
       
        </form>
        </div>
        
      </div>
      <div>
        <Img/>
      </div>
    </section>
  )
}

export default Contactbody
