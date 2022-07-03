import React from 'react';
import MyRoutes from './routes/myRoutes';
import './App.css';
import { BrowserRouter } from 'react-router-dom'



function App() {
    return (
        <BrowserRouter>
        <div className="App" style={{ height: '100%' }}>
            
              <MyRoutes/>
           
        </div>
        </BrowserRouter>
    );
}

export default App;
