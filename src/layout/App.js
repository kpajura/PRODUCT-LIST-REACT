import React, { Component } from 'react';
import '../styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './Homepage';
import Addpage from './Addpage';


class App extends Component {
  state = {  } 

  handleAddButton = () => {
    return 0
  }

  render() { 
    return (
      <BrowserRouter>
        {/* <div className='App'>
          <Header add = {this.handleAddButton}/>
          <ProductList/>
          <Footer/>
        </div> */}
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='addproduct' element={<Addpage/>}></Route>

        </Routes>
      </BrowserRouter>

    );
  }
}
 
export default App;
