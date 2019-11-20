import React from 'react'
import Contact from './Contact'
import About from './About'
 import Team from './Team'
 import Section1 from './Section1'
import Portfolio from './Portfolio';
function Home (){
    return(
        <div>            
            <Section1 />
            <About />
            <Team /> 
            <Portfolio />
            <Contact /> 
        </div>
    )
}
export default Home