import React from 'react'

export default class Projects extends React.Component{
    render(){
        return(
            <div className='projects page'>
                <h4>As you may expect, most of the projects I took part are held by private companies.</h4>
                <h4>But here is a  sample of my work that is open to the public</h4>

                <div className='open-to-public'>
                    <h3>Projects open to the public</h3>

                    <span className='project'>
                        Moonscape's portifolio
                        <a href='https://moonscapegames.com'>https://moonscapegames.com</a>
                    </span>
                    
                    <span className='project'>
                        Contribution on the Loop Poing game
                        <a href='https://play.google.com/store/apps/details?id=com.Moonscape.LoopPoing'>Available on Playstore</a>
                    </span>

                </div>
                <div className='academic'>
                <h3>Academic Projects</h3>

                <span className='project'>
                        2nd place in HackingRio
                        <a href='https://www.infnet.edu.br/esti/faculdade-86-alunos-do-infnet-ficam-entre-os-finalistas-do-cluster-de-esportes-do-hackingrio'>Infnet's reference (in portuguese)</a>
                </span>
                <span className='project'>
                        Commendation from Instituto Infnet on Squair startup
                        <a href='https://www.infnet.edu.br/esti/empreendimentos-que-inspiram'>Infnet's reference (in portuguese)</a>
                </span>
                <span className='project'>
                        Robotics competition with Infoboto
                        <a href='https://www.infnet.edu.br/esti/faculdade-24-alunos-do-clube-de-robotica-do-instituto-infnet-participaram-do-24o-winter-challenge/'>Winter Challange: Infnet's reference (in portuguese)</a>
                        <a href='https://www.infnet.edu.br/esti/faculdade-127-infoboto-representou-o-infnet-no-1o-torneio-de-robotica-do-rj-e-ganhou-o-segundo-lugar/'>Infnet's reference (in portuguese)</a>
                </span>

                </div>
            </div>
        )}
}