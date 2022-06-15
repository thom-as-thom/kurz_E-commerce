import { React } from "react";
import './form.css'

function Form({ handleSubmit, handleChange, GenerateBuyOrder, user }) {

    return (
        <form onSubmit={handleSubmit}>
            <label
                htmlFor="fullName"> Nombre y Apellido
            </label>
            <input
                type="text" name="fullName" autoComplete="off"  onChange={handleChange}>
            </input>
            <label
                htmlFor="email">Email
            </label>
            <input
                type="email" name="email" autocomplete="off" onChange={handleChange}>
            </input>
                        <label
                htmlFor="emailValidation">Repetir Email
            </label>
            <input
                type="email" autocomplete="off" name="emailValidation" onChange={handleChange}>
            </input>

            <label
                htmlFor="phoneNumber"> Numero de telefono
            </label>
            <input
                type="text" autocomplete="off" name="phoneNumber" onChange={handleChange}>
            </input>
            <button id="submit"  className={!user.fullName || !user.email || !user.phoneNumber || !(user.email === user.emailValidation) ? 'disabled' : 'enabled'} disabled={!user.fullName || !(user.email===user.emailValidation) || !user.phoneNumber} onClick={GenerateBuyOrder}>
                FINALIZAR COMPRA
            </button>
        </form>
    )
}

export default Form;
