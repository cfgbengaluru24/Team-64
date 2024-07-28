import './addAttendance.css'
import React, { useState } from 'react'

const AddAttendance = () => {

    const [data, setData] = useState({
        email:"",
        present_absent:1
    });

    return (
        <div>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className="add-product-name flex-col">
                    <p>Email</p>
                    <input onChange={onChangeHandler} value={data.email} type="email" name="email" placeholder="Type here" required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Present or Absent</p>
                    <input onChange={onChangeHandler} value={data.present_absent} type="boolean" name="present_absent" placeholder="Type here" required />
                </div>
                <button type="submit" className='add-button'>ADD</button>
            </form>
        </div>
    )

        return (
            <div>
              
            </div>
          )
}

export default AddAttendance


