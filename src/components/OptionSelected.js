import React from 'react';


const OptionSelected = (props) => {
    let element = ''

    if(props.object.category === 'book'){
        element = <div>
            <label htmlFor="weight">Weight(KG) </label>
            <input type="number" name="weight" id="weight" onChange={props.change} value={props.object.weight} placeholder='weight'/>
            <span>Provide the weight of the book in kilograms</span>
        </div>
    }
    else if(props.object.category === 'dvd'){
        element = <div>
            <label htmlFor="size">Size(MB) </label>
            <input type="number" name="size" id="size" onChange={props.change} value={props.object.size} placeholder='size'/>
            <span>Provide the size of the dvd file in megabytes</span>
        </div>
    }
    else if(props.object.category === 'furniture'){
        element = <div>
            <label htmlFor="width">Width(CM) </label>
            <input type="number" name="width" id="width" onChange={props.change} value={props.object.width} placeholder='width'/>
            <label htmlFor="height">Height(CM) </label>
            <input type="number" name="height" id="height" onChange={props.change} value={props.object.height} placeholder='height'/>
            <label htmlFor="length">Length(CM) </label>
            <input type="number" name="length" id="length" onChange={props.change} value={props.object.lengtth} placeholder='length'/>
            <span>Provide the dimention of the furniture in the format WxHxL</span>
        </div>
    }

    return ( 
        element
     );
}
 
export default OptionSelected;