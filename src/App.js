import React from 'react'
import About from './views/About'
import Contact from './views/Contact'
import Home from './views/Home'
import Projects from './views/Projects'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  
function App() {
  return (
          <Router >
          <div className='Page'>
                
                    <Routes>
                    <Route exact path='/'        element={< Home />}>       </Route>
                    <Route exact path='/about'   element={< About />}>      </Route>
                    <Route exact path='/projects'element={< Projects />}>   </Route>
                    <Route exact path='/contact' element={< Contact />}>    </Route>
                    </Routes>

              <div className='Navbar'>
                  <Link className='navButton' to="/">Home</Link>
                  <Link className='navButton' to="/about">About</Link>
                  <Link className='navButton' to="/projects">Projects</Link>
                  <Link className='navButton' to="/contact">Contact</Link>
              </div>    

          </div>
          </Router>
  );
}

export default App;
