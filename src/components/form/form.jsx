import { React } from "react";
import './form.css'

function Form({ handleSubmit, handleChange, GenerateBuyOrder, user }) {

   

    return (
        <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" onChange={handleChange}>
                </input><label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={handleChange}></input>
                <label htmlFor="phoneNumber"> Phone Number </label>
                <input type="text" name="phoneNumber" onChange={handleChange}></input>
            <button id="submit" className={!user.fullName||!user.email||!user.phoneNumber ? 'disabled': 'enabled'} disabled={!user.fullName||!user.email||!user.phoneNumber} onClick={GenerateBuyOrder}>FINALIZAR COMPRA</button>
            </form>
    )
}

export default Form;
