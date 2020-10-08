import React from 'react';
import './App.css';
import { Cards } from './components/Cards';
import { Nav } from './components/Nav';
import { Section } from './components/Section';
import { Footer } from './Footer';
import { About } from './components/About';
import {HashRouter as Router, Route } from 'react-router-dom';


const Home = ()=> {

  const title1 = <h1>Redes Sociales</h1>;
  const title2 = <h2>Fotos profesionales</h2>;
  const title3= <h3>Engagement</h3>;
  return(
    <>
    <Section className='border-left' title={title1} texto='Administramos tu redes sociales para que llegues al público correcto de manera orgánica.' img='./img/img1.svg' />
    <Section className='border-right' title={title2} texto='Realizamos sesiones profesionales de fotografía de tu producto/servicio' img = './img/img2.svg'/>
    <Section className='border-left' title={title3} texto='Nos encargamos de generar y administrar el feedback de tu audiencia.' img = './img/img3.svg'/>
    <Cards />
    <Footer />
    </>

  )
  


}

function App() {
  



  return (

    <Router>
    <div className='App'>
    <header>
      <Nav />
    </header>
      <Route exact path='/' component= {Home} />
      <Route exact path='/about' component={About}/>

      <Route exact path='/contact' component={Footer} />
    
  </div>
  </Router>
  );
}

export default App;
