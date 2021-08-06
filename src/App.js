import React, { useState } from 'react';
import './CSS/information.css';
import Edit_information from './Component/Edit_information'
import Information from './Component/Information'
import Information_table from './Component/Information_table'

const dummy_data = [
    {
        key: "1",
        Id: "1",
        Name: "Nishant",
        Surname: "Kachhadiya",
        Email: "nk123@gmail.com",
        Gender: "male"
    },
    {
        key: "2",
        Id: "2",
        Name: "Kishan1",
        Surname: "Savaliya",
        Email: "ks123@gmail.com",
        Gender: "male"
    },
    {
        key: "3",
        Id: "3",
        Name: "ram1",
        Surname: "Ramavani",
        Email: "rr123@gmail.com",
        Gender: "male"
    }
]

const App = () => {

    const [data, setData] = useState(dummy_data);

    const addTableDatahandler = (prevStatedata) => {
        setData([prevStatedata, ...data])
    }

    const onsaveTabledtahandler = (enterTabledata) => {
        const enterAllTabledata = {
            ...enterTabledata
        }
    }
    return(
        <>
            <div className="main_center">
                <div>
                    <Edit_information   onsaveTabledta={onsaveTabledtahandler}/>
                    <Information />
                    <Information_table table_info = {data}/>
                </div>
            </div>
        </>
    );
}

export default App;
