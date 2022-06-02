import React, { useState } from 'react'
import styles from "./Form.module.css"
import Table from './Table';

const Form = () => {
    
    const [form, setForm] = useState({
    name:"",
    age:null,
    address:"",
    salary:null,
    department:"",
    Married: false
    });

    const [data, setdata] = useState([form])

    const handleOnChange = (e) => {
//console.log(e);
let {name,value,checked,type} = e.target;
if(type==="checkbox"){
    setForm({
        ...form,
        [name]:checked,
    })
}
else{
    setForm({
        ...form,
        [name]:value,
    })
}

    };

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        setdata(data => [...data,form]
            
        )
        console.log(data)
        } 
  return (
    <div className={styles.form}>
        <h1>Employee details</h1>

        <form onSubmit = {handleOnSubmit}>
            <div>
            <label>Name : </label>
                <input
                 type="text"
                 placeholder='Enter Name...'
                 name='name'
                 value={form.name}
                 onChange={handleOnChange}
                />
            </div>
            <div>
                <label>Age : </label>
                <input 
                type="number" 
                placeholder='Enter Age...' 
                name="age" 
                value={form.age}
                onChange={handleOnChange}/>
            </div>
            <div>
            <label>Address : </label>
                <input
                 type="text"
                 placeholder='Enter Address...'
                 name='address'
                 value={form.address}
                 onChange={handleOnChange}
                />
            </div>
            <div>
                <label>Department: </label>
                <select name='department' 
                 value={form.department} 
                 onChange={handleOnChange}>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Production">Production</option>
                </select>
            </div>
            <div>
            <label>Salary : </label>
                <input
                 type="number"
                 placeholder='Enter Salary...'
                 name='salary'
                 value={form.salary}
                 onChange={handleOnChange}
                />
            </div>
            <div>
                <input 
                type="checkbox" 
                name="Married"
              
                checked={form.Married}
                onChange={handleOnChange}/>
            <label> : Married </label>
            </div>
           
            <button type='submit'>Submit</button>
        </form>
         <Table data={data}/>

    </div>
  )
}

export default Form