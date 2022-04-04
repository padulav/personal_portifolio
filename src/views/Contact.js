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
                    <a href='https://telegram.me/padulavic'>
                        <img  className='contactImg' src={Telegram} alt='Telegram' /> 
                        <span className='iconTitle'>Telegram</span> 
                        <span className='iconValue'>@padulavic</span>
                    </a>
                </div>
                <div className='flexCenter'>
                    <a href="https://wa.me/351913416112?text=Hello! I was Brought here by your site">
                        <img  className='contactImg' src={Whatsapp} alt='Whatsapp' /> 
                        <span className='iconTitle'>Whatsapp</span> 
                        <span className='iconValue'>+351 913416112</span>
                    </a>
                </div>
                <div className='flexCenter'>
                    <a href="mailto:padula.vitoria@gmail.com">
                        <img  className='contactImg' src={Email} alt='Email' />       
                        <span className='iconTitle'>Email</span> 
                        <span className='iconValue'>padula.vitoria@gmail.com</span>
                    </a>
                </div>
                <div className='flexCenter'>
                    <a href='https://www.linkedin.com/in/padulavic/'>
                        <img  className='contactImg' src={Linkedin} alt='linkedin' /> 
                        <span className='iconTitle'>Linkedin</span> 
                        <span className='iconValue'>/in/padulavic</span>
                    </a>
                </div>
                </div>
            </div>
        )}
}