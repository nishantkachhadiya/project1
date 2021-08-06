import React, { useState } from 'react';
import './../CSS/information.css';

const Edit_information = (props) => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');

    const idChangehandler = (event) => {
        setId(event.target.value);
    };
    const nameChangehandler = (event) => {
        setName(event.target.value);
    };
    const surnameChangehandler = (event) => {
        setSurname(event.target.value);
    };
    const emailChangehandler = (event) => {
        setEmail(event.target.value);
    };
    const genderChangehandler = (event) => {
        setGender(event.target.value);
    };

    // const [userinput, setUserinput] = useState({
    //     id: '',
    //     name: '',
    //     surname: '',
    //     email: '',
    //     gender: '',  
    // });

    // const idChangehandler = (event) => {
    //     setUserinput((prevState) => {
    //         return {
    //             ...prevState,
    //             id : event.target.value
    //         }
    //     })
    // }

    // const nameChangehandler = (event) => { setUserinput((prevState) => { return {...prevState, name: event.target.value } }) }
    // const surnameChangehandler = (event) => { setUserinput((prevState) => { return {...prevState, surname: event.target.value } }) }
    // const emailChangehandler = (event) => { setUserinput((prevState) => { return {...prevState, email: event.target.value } }) }
    // const genderChangehandler = (event) => { setUserinput((prevState) => { return {...prevState, gender: event.target.value } }) }

    const tableSubmithandler = (event) => {
        event.preventDefault();

        const table_fill_data = {
            Id: id,
            Name: name,
            Surname: surname,
            Email: email,
            Gender: gender
        }
        
        props.onsaveTabledta(table_fill_data);

        setId('');
        setName('');
        setSurname('');
        setEmail('');
        setGender('');
    }

    return(
        <form onSubmit={tableSubmithandler}>
            <div className="main_form">
                <div className="form_label">
                    <label>id</label>
                    <input 
                        type="number" 
                        className="input_felid"
                        value={id} 
                        onChange={idChangehandler}
                    />
                </div>
                <div className="form_label">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="input_felid"
                        value={name} 
                        onChange={nameChangehandler}
                    />
                </div>
                <div className="form_label">
                    <label>Suename</label>
                    <input 
                        type="text" 
                        className="input_felid"
                        value={surname} 
                        onChange={surnameChangehandler}
                    />
                </div>
                <div className="form_label">
                    <label>Email Id</label>
                    <input 
                        type="text" 
                        className="input_felid"
                        value={email} 
                        onChange={emailChangehandler}
                    />
                </div>
                <div className="form_label">
                    <label>Gender</label>
                    <input 
                        type="text" 
                        className="input_felid"
                        value={gender} 
                        onChange={genderChangehandler}
                    />
                </div>
                <div className="form_label submit_btn">
                    <label>Submit</label>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Edit_information;