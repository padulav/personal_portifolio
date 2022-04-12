import React from 'react'
import Background from '../assets/background.png'
import Email from '../assets/email.png'
import Github from '../assets/github.png'
import Instagram from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'
import Sketchfab from '../assets/sketchfab.png'

export default class Home extends React.Component{
    render(){
        return(
            <div className='flex'>

                <div className='mainDiv'>
                        <div className='Background' style={{ backgroundImage:`url(${Background})`}}>
                            <div className='txtBox'>
                                <br/>
                                <span className='name' >Vitória Padula</span>
                                <span className='subtitle' >Embedded Systems Developer</span>
                                <span className='subtitle' >Fullstack Developer</span>
                            </div>
                        </div>
                </div>

                <div className='iconBar'>
                    <a className='icon' href="https://github.com/padulav">   
                        <img src={Github}    alt="github"/>
                        <span>Linkedin</span>
                    </a>
                    <a className='icon' href="https://www.linkedin.com/in/padulavic/">               
                        <img src={Linkedin}  alt="linkedin"/>
                        <span>Github</span>
                    </a>
                    <a className='icon' href="https://sketchfab.com/tropikaaos">         
                        <img src={Sketchfab} alt="sketchfab"/>
                        <span>Sketchfab</span>
                    </a>
                    <a className='icon' href="https://www.instagram.com/sic_vic_but_3d/">
                        <img src={Instagram} alt="instagram"/>
                        <span>Instagram</span>
                    </a>
                    <a className='icon' href="mailto: padula.vitoria@gmail.com">         
                        <img src={Email}     alt="email"/>
                        <span>Email</span>
                    </a>
                </div>


                
            </div>
        )}
}