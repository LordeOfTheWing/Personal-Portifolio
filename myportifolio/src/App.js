import React from 'react';
//Importing the global style
import GlobalStyle from './components/GlobalStyle';

//Importing Pages
import AboutMe from '../src/pages/AboutMe';
import Nav from './components/Nav';
import ContactMe from '../src/pages/ContactMe';
import MyWork from '../src/pages/MyWork';
import ProjectDetail from './pages/ProjectDetail';
//Router
import {Switch, Route, useLocation} from 'react-router-dom';
//Animation
import {AnimatePresence} from 'framer-motion';



function App() {

  const location = useLocation();
  
  return (
    <div className="App">
        <GlobalStyle/>
        <Nav />
        <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutMe/>
        </Route>

        <Route path="/work" exact>
          <MyWork/>
        </Route>
          <Route path= "/work/:id">
            <ProjectDetail/>
          </Route>
        <Route path="/contact">
          <ContactMe/>
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
