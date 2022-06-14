import "../App.css";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Education = (props) => {
    const {handleChange, onAddEducation, onDeleteEducation, educationInfo} = props;
    return (
        <div className="education-container">
                <div className="education-title">Education</div>
                {educationInfo.map((education) => {
                    return (
                        <div className="text-field-container" id={'div'+education.id}>
                            <TextField defaultValue={education.schoolName} onChange={(e) => handleChange(e,'education','schoolName')} inputProps={{ 'id': education.id }} sx={{ input: { color: "white" } }} InputLabelProps={{className: 'text-field-label'}} margin='normal' id="standard-basic" label="University name" variant="standard" />
                            <TextField defaultValue={education.degree} onChange={(e) => handleChange(e,'education','degree')} inputProps={{ 'id': education.id }} sx={{ input: { color: "white" } }} InputLabelProps={{className: 'text-field-label'}} margin='normal' id="standard-basic" label="Degree" variant="standard" />
                            <TextField defaultValue={education.subject} onChange={(e) => handleChange(e,'education','subject')} inputProps={{ 'id': education.id }} sx={{ input: { color: "white" } }} InputLabelProps={{className: 'text-field-label'}} margin='normal' id="standard-basic" label="Subject" variant="standard" />
                            <TextField defaultValue={education.from} onChange={(e) => handleChange(e,'education','from')} inputProps={{ 'id': education.id }} sx={{ input: { color: "white" } }} InputLabelProps={{className: 'text-field-label'}} margin='normal' id="standard-basic" label="From" variant="standard" />
                            <TextField defaultValue={education.to} onChange={(e) => handleChange(e,'education','to')} inputProps={{ 'id': education.id }} sx={{ input: { color: "white" } }} InputLabelProps={{className: 'text-field-label'}} margin='normal' id="standard-basic" label="To" variant="standard" />
                            <Button onClick={(e) => onDeleteEducation(e)} variant="outlined" id={education.id} color="error">Delete</Button>
                        </div>
                    )
                })}
                <Button onClick={(e) => onAddEducation(e)} variant="outlined">Add</Button>

            </div>
    )
}

export default Education;