import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes ,Route , Link } from 'react-router-dom';
import Home  from './Home';
import About from './About';
import Contact from './Contact';
export default function HelloReact() {
  return (
    <>
        <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About </Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            
            <Routes>
                <Route path='/' element= {<Home />}/>
                <Route path='/about' element= {<About />}/>
                <Route path='/contact' element= {<Contact />}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<HelloReact />);