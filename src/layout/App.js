import React, { Component } from 'react';
import '../styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './Homepage';
import Addpage from './Addpage';
import axios from 'axios';


class App extends Component {
  state = {
    objects: [
        {
            id:1, sku:'JV2255', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
        },
        {
            id:2, sku:'JV2256', price: 15, name: 'GTA5', category: 'dvd', dimention: null, weight: null, size: 'Size: 1MB', checked: false
        },
        {
            id:3, sku:'JV2257', price: 80, name: 'Table', category: 'furniture', dimention: 'Dimention: 120x120x90', weight: null, size: null, checked: false
        },
        {
            id:4, sku:'JV2258', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
        },
        {
            id:5, sku:'JV2259', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
        },
        {
            id:6, sku:'JV2260', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
        },
        {
            id:7, sku:'JV2261', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
        },
        {
            id:8, sku:'JV2262', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
        },
        {
            id:9, sku:'JV2263', price: 1, name: 'Game of Thrones', category: 'book', dimention: null, weight: 'Weight: 1kg', size: null, checked: false
        },
        
        
    
    ], 
    object: 
        {
            id:'', sku:'', price: '', name: '', category: '', dimention: null, weight: null, size: null, checked: false
        },
    
  } 

  // componentDidMount(){
  //   axios.get('http://localhost:8888/api/index.php')
  //   .then(response => response.data)
  //   .then((data)=> {
  //     let i = 0;
  //     let table = []
  //     while(data[i]){
  //       table.push(data[i].object);
  //       i++
  //     }
  //     return table
  // })
  //   .then((data)=> {
  //       this.setState({
  //         objects: [...data]
  //       })
  //       console.log(this.state.objects[1].id)
  //   })

  //   // axios.get(url).then(response => response.data)
  //   // .then((data) => {
  //   //   this.setState({ contacts: data })
  //   //   console.log(this.state.contacts)
  //   //  })
  // }
  
  handleCheckboxChange = (id) => {
    console.log('checkbox checked')
    let objects = [...this.state.objects]
    objects = objects.map(object => {
        if(object.id===id){
            object.checked = !object.checked;
        }
        return object
    })
    this.setState({
        objects
    })
  }

  handleDeleteButton = () => {
    console.log('product deleted')

    let objects = [...this.state.objects]
    objects = objects.filter(object => !object.checked)
    this.setState({
      objects
    })
  }

  handleCancelButton = () => {
    alert('The form will be removed. Are you sure you want to leave?')
  }

  handleInputChange = (e) => {
    const object = this.state.object
        const event = e.target.name
        console.log(event, e.target.value)

        if(event === 'sku'){
            object.sku = e.target.value
        }
        else if(event === 'name'){
            object.name = e.target.value
        }
        else if(event === 'price'){
            object.price = e.target.value
        }
        else if(event === 'productType'){
            object.category = e.target.value
            if(object.category === 'default'){
              object.category = ''
            }
            object.size = '';
            object.width = '';
            object.length = '';
            object.height = '';
            object.weight = '';
        }
        else if(event === 'weight'){
          object.weight = e.target.value
        }
        else if(event === 'size'){
          object.size = e.target.value
        }
        else if(event === 'width'){
          object.width = e.target.value
        }
        else if(event === 'length'){
          object.length = e.target.value
        }
        else if(event === 'height'){
          object.height = e.target.value
        }
  

        this.setState({
            object
        })
  }
  
  handleAddButton = () => {
    console.log('add')
    // const params = [this.state.object];
    

    const index = this.state.objects.map((item) => item.id )
    const indexMax = Math.max(...index)
    console.log(indexMax)

    const object = this.state.object;
    const objects = [...this.state.objects]

    object.id = indexMax+1; 

    objects.push(object)

    console.log(objects)

    this.setState({
      objects
    })

  }

  render() { 
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <BrowserRouter> */}

        <Routes>
          <Route path='/' element={<Homepage objects={this.state.objects} change={this.handleCheckboxChange} delete={this.handleDeleteButton}/>}></Route>
          <Route path='addproduct' element={<Addpage object={this.state.object} inputChange={this.handleInputChange} cancel={this.handleCancelButton} save={this.handleAddButton}/>}></Route>

        </Routes>
      </BrowserRouter>

    );
  }
}
 
export default App;
