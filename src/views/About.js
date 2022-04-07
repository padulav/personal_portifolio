import React from 'react'
import cv from '../assets/cv_vitoria_padula.pdf'
import pdf from '../assets/pdf.png'

export default class Home extends React.Component{
    render(){
        return(
            <div className='about_wrapper'>

            <div className='about'>
                    <div className='aboutTextBox'>
                    <h1>ABOUT ME </h1>
                    As a child, I enjoyed opening my toys to see how they worked. This interest has led me to a technical high school in Eletronics to see if i could 
                    figure the world out, which made me discover the world was far more puzzling. And i loved it.

                    I started programing in 2011 in FAETEC's (State's Support Foundation of Technical Schooling program) robotics team,
                    alongside the eletronics course. Then decided to join the System analysis course on Instituto Infnet.

                    Began professionally as a backend developer. Fell in love with linux operational system. Due to my employment circumstances at the time,
                    I got the opportunity to perform as fullstack. After that, I went back to pursue my dream of working with low level proggraming 
                    developing firmware with several microcontrollers, while also performing as fullstack. Learned React. Kept Going. 
                    </div>

                    <div className='techStack'>
                        <h1>Tech Stack</h1>

                        <h2>3D Modeling</h2>
                        Blender<br/>
                        Substance Painter<br/>
                        <h2>Software Development </h2>
                        Nodejs<br/>
                        Python<br/>
                        Reactjs<br/>
                        Linux<br/>
                        Shellscript<br/>
                        <h2>Embedded Systems</h2>
                        C/C++<br/>
                        ESP family<br/>
                        Raspberry<br/>
                    </div>

            </div>                
            <div>
                <a href={cv} className='flex cv'>
                    <img className='pdfIcon' src={pdf} alt='pdf'/>
                        <div className='grid'>
                        <span>Looking for somenthing more official?</span>
                        <span>Take a look at my Curriculum Vitae</span>
                    </div>
                </a>
            </div>


            </div> 
        
        )}
}