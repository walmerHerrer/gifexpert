/* eslint-disable react/prop-types */
import { useState } from 'react';


export const Addcategoria = ({ onSetCategory} ) => {
    const [value, setValue] = useState('');
    const OnSetValue = (event) => {
        setValue(event.target.value);
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        if(value.trim().length <=1) return;
        onSetCategory(value)
        setValue('')
    }
    return (
        <div>
            <label > category</label>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={OnSetValue}
                >
                </input>
            </form>
        </div>
    )
}
