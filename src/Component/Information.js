import React from 'react';
import './../CSS/information.css';

const Information = () => {

    return(
        <div className="top_bar">
            <ul className="top_list">
                <li>
                    <p>Id</p>
                </li>
                <li>
                    <p>Name</p>
                </li>
                <li>
                    <p>Surname</p>
                </li>
                <li>
                    <p>Email</p>
                </li>
                <li>
                    <p>Gender</p>
                </li>
            </ul>
        </div>
    );
}

export default Information;
