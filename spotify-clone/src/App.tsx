import React from 'react';
import './App.css';
import Header from './componentes/Header/Header.tsx';
import Home from './componentes/Home/Home.tsx';
import Footer from './componentes/Footer/Footer.tsx';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <main className='main-container'>
        <Header />
        <Home/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;