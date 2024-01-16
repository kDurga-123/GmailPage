import React, { useState, useEffect } from "react";
import Select from 'react-select';
import './EmailSearch.css';
import { Users as InitialUsers } from './User.js';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const EmailSearch = () => {
    const [selectedEmails, setSelectedEmails] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const updatedUsers = InitialUsers.filter(user => !selectedEmails.includes(user.email));
        setOptions(updatedUsers.map(user => ({
            value: user.email,
            label: (
                <div className="SelectedEmail">
                    <div className="ProfileImage" style={{ backgroundColor: getRandomColor() }}>
                        {user.email.charAt(0)}
                    </div>
                    <div id="emailStyke">{user.email}</div>
                </div>
            ),
        })));
    }, [selectedEmails]);

   
    return (
        <div id="mainContainer">
            <h1>Pick Users</h1>
            <div>Search user Names</div>
            <div className="container">
            <Select
                isMulti
                options={options}
                placeholder="add users..."
                onChange={(selectedOptions) => {
                    setSelectedEmails(selectedOptions.map(option => option.value));
                }}
                components={{
                    DropdownIndicator: null,
                }}
                className="search"
            />
            </div>
        </div>
    );
}

export default EmailSearch;


