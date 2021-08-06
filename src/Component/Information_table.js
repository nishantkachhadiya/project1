import React from 'react';
import './../CSS/information.css';


const Information_table = (props) => {

    return(
        <div className="top_bar">
            {
                props.table_info.map((table_val) => {
                return(
                    <>
                        <ul className="inner_table_list">
                            <li>
                                <p>{table_val.Id}</p>
                            </li>
                            <li>
                                <p>{table_val.Name}</p>
                            </li>
                            <li>
                                <p>{table_val.Surname}</p>
                            </li>
                            <li>
                                <p>{table_val.Email}</p>
                            </li>
                            <li>
                                <p>{table_val.Gender}</p>
                            </li>
                        </ul>
                    </>
                )
            })
            }
        </div>
    );
}

export default Information_table;
