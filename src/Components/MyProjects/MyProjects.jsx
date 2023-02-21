import React from 'react'
import { projectsData } from './Projects.jsx'
import * as S from './styled.js'

function MyProjects() {
  return (
    <S.MyProjects>
        {projectsData.map(set => {
                return(
                    <a href={set.link}>
                        <div className='divIcon divRGB'>
                            <div className='divAux'>
                                <img className='icon' src={set.thumb}/><h1>{set.title}</h1>
                                <p>{set.description}</p>
                            </div>
                        </div>
                    </a>
                )
            })}
    </S.MyProjects>
  )
}

export default MyProjects