import "../App.css";
import * as React from 'react';
import TextField from '@mui/material/TextField';

const Personal = (props) => {
    const {handleChange} = props;
    return (
        <div className="personal-container">
                <div className="personal-information-title">Personal Information</div>
                <div className="text-field-container">
                    <TextField onChange={(e) => handleChange(e,'PersonalInfo','firstName')} sx={{ input: { color: "white" } }} InputLabelProps={{className: 'text-field-label'}} margin='normal' id="standard-basic" label="First Name" variant="standard" />
                    <TextField onChange={(e) => handleChange(e,'PersonalInfo','lastName')} sx={{ input: { color: "white" } }} InputLabelProps={{className: 'text-field-label'}} margin='normal' id="standard-basic" label="Last Name" variant="standard" />
                    <TextField onChange={(e) => handleChange(e,'PersonalInfo','title')} sx={{ input: { color: "white" } }} InputLabelProps={{className: 'text-field-label'}} margin='normal' id="standard-basic" label="Title" variant="standard" />
                    <TextField onChange={(e) => handleChange(e,'PersonalInfo','address')} sx={{ input: { color: "white" } }} InputLabelProps={{className: 'text-field-label'}} margin='normal' id="standard-basic" label="Address" variant="standard" />
                    <TextField onChange={(e) => handleChange(e,'PersonalInfo','phoneNo')} sx={{ input: { color: "white" } }} InputLabelProps={{className: 'text-field-label'}} margin='normal' id="standard-basic" label="Phone Number" variant="standard" />
                    <TextField onChange={(e) => handleChange(e,'PersonalInfo','email')} sx={{ input: { color: "white" } }} InputLabelProps={{className: 'text-field-label'}} margin='normal' id="standard-basic" label="Email" variant="standard" />
                    <TextField onChange={(e) => handleChange(e,'PersonalInfo','description')} sx={{ input: { color: "white" } }} InputLabelProps={{className: 'text-field-label'}} margin='normal' id="standard-basic" label="Description" variant="standard" multiline maxRows={4} />
                </div>
            </div>
    )
}
export default Personal;