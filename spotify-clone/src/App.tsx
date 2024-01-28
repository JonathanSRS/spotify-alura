import React from 'react';
import './App.css';
import Header from './componentes/Header/Header.tsx';
import Home from './componentes/Home/Home.tsx';
import Footer from './componentes/Footer/Footer.tsx';
import SidebarNavigation from './componentes/Sidebar/Sidebar_navigation/Sidebar_navigation.tsx';
import Section from './componentes/Sidebar/Library/Section/Section.tsx';
import LibraryContent from './componentes/Sidebar/Library/LibraryContent.tsx';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <div className="sidebar">
        <SidebarNavigation/>
        <div className="library">
          <LibraryContent/>
          <Section text="Criar playlist" title="Crie sua primeira playlist" subtitle="É facíl, vamos te ajudar."/>
          <Section text="Explore Podcast" title="Que tal seguir um podcast novo?" subtitle="Avisaremos você sobre novos episódios."/>
          <div className="cookies">
                <a href="coockies">Cookies</a>
          </div>
        </div>
      </div>
      <main className='main-container'>
        <Header />
        <Home/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;