import React, { useState } from 'react'
import './AddStudent.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddStudent = ({ url }) => {

    const [data, setData] = useState({
        email: "",
        name: "",
        college: "",
        course: "",
        semester: "4",
        mentor: "1"
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("email", data.email)
        formData.append("name", data.name)
        formData.append("course", data.course)
        formData.append("semester", data.semester)
        formData.append("college", data.college)
        formData.append("mentor", data.mentor)
        const response = await axios.post(`${url}/student/addstudent`, formData);
        if (response) {
            setData({
                email: "",
                name: "",
                college: "",
                course: "",
                semester: "4",
                mentor: "Lead 1"
            })
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className="add-product-name flex-col">
                    <p>Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Type here" required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Email</p>
                    <input onChange={onChangeHandler} value={data.email} type="text" name="email" placeholder="Type here" required />
                </div>
                <div className="add-product-name flex-col">
                    <p>College</p>
                    <input onChange={onChangeHandler} value={data.college} type="text" name="college" placeholder="Type here" required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Course</p>
                    <input onChange={onChangeHandler} value={data.course} type="text" name="course" placeholder="Type here" required />
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Semester</p>
                        <select onChange={onChangeHandler} value={data.semester} name="semester">
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Team Lead</p>
                        <select onChange={onChangeHandler} value={data.mentor} name="mentor">
                            <option value="Lead 1">Lead 1</option>
                            <option value="Lead 2">Lead 2</option>
                            <option value="Lead 3">Lead 3</option>
                            <option value="Lead 4">Lead 4</option>
                            <option value="Lead 5">Lead 5</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className='add-button'>ADD</button>
            </form>
        </div>
    )
}
export default AddStudent