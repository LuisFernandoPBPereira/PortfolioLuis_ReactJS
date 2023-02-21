import React from 'react'
import * as S from "./styled.js"
import Title from '../../Components/Title/Title.jsx'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Button from '../../Components/Button/Button.jsx'

function Curriculum() {
  return (
    <S.Curriculum>
        <Navbar/>
        
        <div className='introduction'>
            <Title title="Meu Currículo"/>
        </div>
        <br /><br />

        {/* ============================================================================== */}
        
        <div className='information'>
            <Title className="subtitle" title="Resumo Profissional" isSubtitle/>
            <br />
            <p>
                Tenho como especialidade a linguagem JavaScript e seus frameworks, sou Técnico 
                em Desenvolvimento de Sistemas e procuro elevar meu conhecimento na área e 
                buscar oportunidades para crescer no mercado.
                Além disso, tenho facilidade com trabalho em equipe e sempre estou disposto a 
                ajudar quem precise.
            </p>
            <br /><br />
            

            {/* ========================================================================== */}
            
            <Title className="subtitle" title="Educação" isSubtitle/>
            <br />
            <div className='education'>  
                <div>
                    <p>
                    Técnico em Desenvolvimento de Sistemas. <br />
                    Etec de Embu – Ensino Técnico completo. <br />
                    Término em julho de 2022.
                    </p>
                </div>
                <div>
                    <p>
                    Ensino Fundamental Completo. <br />
                    Escola Estadual Carlos Koch <br />
                    Término em dezembro de 2019.
                    </p>
                </div>
                <div>
                    <p>
                    Ensino Médio Completo <br />
                    Escola Estadual Maria Auxiliadora <br />
                    Término em dezembro de 2022
                    </p>
                </div>
            </div>
            <br />

            {/* ========================================================================== */}
            
            <div className='skills'>
                <Title className="subtitle" title="Competências" isSubtitle/>
                <br />
                <ul>
                    <p>
                        <li>
                            Conhecimento em JavaScript, HTML, CSS, ReactJS, React-Native e Node.JS.
                        </li>
                        <li>
                            Conhecimento básico em C#, C++, PHP e Xamarin.
                        </li>
                        <li>
                            Conhecimento básico em Hardware e instalação de Sistemas Operacionais Windows.
                        </li>
                    </p>
                </ul>
            </div>   
            <br /><br />

            {/* ========================================================================== */}

            <div className='moreAboutMe'>
                <Title className="subtitle" title="Experiências Anteriores" isSubtitle/>
                <br />
                <p>Assistente Técnico de Aparelhos Eletrônicos</p>
                <br /><br />
                
                <Title className="subtitle" title="Informações Complementares" isSubtitle/>
                <br />
                <p>
                    Inglês Intermediário (B1). <br />
                    EF SET Certificate.        <br />
                    Emitido em julho de 2022   <br />
                </p>
            </div>
            <div className='goToHome'>
                <Button label="Voltar à Home" location="/"/>
            </div>
        </div>
    </S.Curriculum>
  )
}

export default Curriculum