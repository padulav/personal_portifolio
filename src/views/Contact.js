import React from 'react'
import Telegram from '../assets/telegram.png'
import Email from '../assets/email.png'
import Whatsapp from '../assets/whatsapp.png'
import Linkedin from '../assets/linkedin.png'


export default class Contact extends React.Component{
    render(){
        return(
            <div className='contact page flexCenter'>
                <div>
                <div className='flexCenter'>
                    <img  className='contactImg' src={Telegram} alt='Telegram' /> 
                    <span className='iconTitle'>Reach me through Telegram</span> 
                    <span className='iconValue'>@padulavic</span>
                    </div>
                <div className='flexCenter'>
                    <img  className='contactImg' src={Whatsapp} alt='Whatsapp' /> 
                    <span className='iconTitle'>Ping me on Whatsapp</span> 
                    <span className='iconValue'>+351 913416112</span>
                    </div>
                <div className='flexCenter'>
                    <img  className='contactImg' src={Email} alt='Email' />       
                    <span className='iconTitle'>Send me a Email</span> 
                    <span className='iconValue'>padula.vitoria@gmail.com</span>
                    </div>
                <div className='flexCenter'>
                    <img  className='contactImg' src={Linkedin} alt='linkedin' /> 
                    <span className='iconTitle'>Mesage me on Linkedin</span> 
                    <span className='iconValue'>/in/padulavic</span>
                </div>
                </div>
            </div>
        )}
}