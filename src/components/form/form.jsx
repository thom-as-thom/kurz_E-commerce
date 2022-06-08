import {React, useState} from "react";

function Form(handleChange, handleSubmit) {
    
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" onChange={handleChange}>
            </input><label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleChange}></input>
            <label htmlFor="phoneNumber"> Phone Number </label>
            <input type="text" name="phoneNumber" onChange={handleChange}></input>
        </form>
    )
}

export default Form;
