import React, { Component } from 'react';
import '../styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './Homepage';
import Addpage from './Addpage';
import axios from 'axios';


class App extends Component {
  state = {

    object: 
        {
            id:'', sku:'', price: '', name: '', category: '', width: 0, height: 0, length: 0,  weight: 0, size: 0, checked: false
        },
    objects: [],
    errorMessage: ''
    
  } 

  componentDidMount(){
    axios.get('http://localhost:8888/api/index.php')
    .then(response => response.data)
    .then(data=>{
      this.setState({
        objects: data.map(element => {
          element.checked = false;
          return element
        })
      })
      }
    )
  }

  updateFunction = () => {
    axios.get('http://localhost:8888/api/index.php')
    .then(response => response.data)
    .then(data=>{
      this.setState({
        objects: data.map(element => {
          element.checked = false;
          return element
        })
      })
      }
    )
  }
  
  handleCheckboxChange = (id) => {
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
    let objects = [...this.state.objects]
    let objectsChecked = objects.filter(object => object.checked)

    if(objectsChecked.length>0){
    
      objectsChecked.forEach(object => {
        let id = object.id;

        axios({
              method: 'post',
              url: 'http://localhost:8888/api/index.php/?delete=' + id
          })
          .then(function (response) {
              //handle success
              console.log(response)
          })
          .catch(function (response) {
              //handle error
              console.log(response)
          });
      })
      this.setState({
        objects: objects.filter(object => !object.checked)
      })
    }
    
    
    
  }

  handleCancelButton = () => {
    console.log('The form will be removed.')
  }

  handleInputChange = (e) => {
   
    const object = this.state.object
        const event = e.target.name

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
            object,
            errorMessage: ''
        })
  }

  validateFunction = () => {
    let isValidated = true;
    const {sku, name, price, category, width, height, length, weight, size} = this.state.object;
    if(!sku || !name || !price || !category || (category === 'dvd' && !size) || (category === 'book' && !weight) || (category === 'furniture' && (!width || !height || !length ))){
      isValidated=false;
    }

    if(!isValidated){
      this.setState({
        errorMessage: 'Please, submit required data'
      })
    }

    return isValidated; 
  }
  
  handleAddButton = (e) => {
    console.log('add')
    

    const index = this.state.objects.map((item) => Number(item.id))
    console.log(index[index.length-1])

    const isValidated = this.validateFunction();



    
    if(isValidated){
    const object = this.state.object;
    const objects = [...this.state.objects]

    object.id = index[index.length-1]+1; 

    objects.push(object)

    this.setState({
      objects
    })

    let formData = new FormData();
      formData.append('sku', this.state.object.sku)
      formData.append('price', Number(this.state.object.price))
      formData.append('name', this.state.object.name)
      formData.append('category', this.state.object.category)
      formData.append('size', Number(this.state.object.size))
      formData.append('weight', Number(this.state.object.weight))
      formData.append('width', Number(this.state.object.width))
      formData.append('length', Number(this.state.object.length))
      formData.append('height', Number(this.state.object.height))
      formData.append('checked', Number(this.state.object.checked))

      console.log(typeof this.state.object.price)



 
      axios.post('http://localhost:8888/api/index.php/',formData)
      .then(function (response) {
          //handle success
          console.log(response)
          if(response.status === 200) {
            alert("Product added successfully.");
          }
      })
      .catch(function (response) {
          //handle error
          console.log(response)
      });

    }
    else{
      e.preventDefault()
    }

  }

  render() { 
    return (
      <BrowserRouter>
   
        <Routes>
          <Route path='/' element={<Homepage objects={this.state.objects} change={this.handleCheckboxChange} delete={this.handleDeleteButton}/>}></Route>
          <Route path='addproduct' element={<Addpage object={this.state.object} inputChange={this.handleInputChange} cancel={this.handleCancelButton} save={this.handleAddButton} error={this.state.errorMessage}/>}></Route>

        </Routes>
      </BrowserRouter>

    );
  }
}
 
export default App;
