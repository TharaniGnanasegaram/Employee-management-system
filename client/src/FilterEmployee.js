
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';



function EmployeeFilter({ customStyles, retirement }) {

    const navigate = useNavigate(); 

    const filterEmployee = async (e) => {

        e.preventDefault();

        let formName = document.forms.filterEmployees;
        let filterDepartment;
        let filterEmployeetype;
        let filterRole;
        let filterCurrentstatus;

        filterCurrentstatus = (!retirement) ? formName.employeestatus.value : "";

        const singleEmployee = {
            filterRole: formName.title.value,
            filterDepartment: formName.department.value,
            filterEmployeetype: formName.employeetype.value,
            filterCurrentstatus: filterCurrentstatus
        }

        filterDepartment = singleEmployee.filterDepartment;
        filterEmployeetype = singleEmployee.filterEmployeetype;
        filterRole = singleEmployee.filterRole;
        filterCurrentstatus = singleEmployee.filterCurrentstatus;

        
        let path;
        if(retirement){
            path = `/retirement/?employeetype=${filterEmployeetype}&department=${filterDepartment}&title=${filterRole}`; 
        }
        else{
            path = `/list/?employeetype=${filterEmployeetype}&department=${filterDepartment}&title=${filterRole}&currentstatus=${filterCurrentstatus}`; 
        }
        
        navigate(path);

    }

    const [titleValue, setTitleValue] = React.useState(''); 
    const handleTitleChange = (event) => {
        setTitleValue(event.target.value);
    };
    const handleClear = () => {
        setTitleValue(''); 
        setDepartmentValue(''); 
        setTypeValue(''); 
        setStatusValue(''); 
    };

    const [departmentValue, setDepartmentValue] = React.useState(''); 
    const handleDepartmentChange = (event) => {
        setDepartmentValue(event.target.value);
    };

    const [typeValue, setTypeValue] = React.useState(''); 
    const handleTypeChange = (event) => {
        setTypeValue(event.target.value);
    };

    const [statusValue, setStatusValue] = React.useState(''); 
    const handleStatusChange = (event) => {
        setStatusValue(event.target.value);
    };

    return (
        <div>
            <div>

            <Box component="form" id="filterEmployees" name="addEmployee" onSubmit={filterEmployee}  sx={{ '& .MuiTextField-root': { m: 1, width: '55ch' }, }}  noValidate autoComplete="off" >
                    
                    <TextField required id="title" name="title" value={titleValue} onChange={handleTitleChange} select label="Select Employee Title" defaultValue=""  >
                        <MenuItem value="Employee">Employee</MenuItem>
                        <MenuItem value="Manager">Manager</MenuItem>
                        <MenuItem value="Director">Director</MenuItem>
                        <MenuItem value="VP">VP</MenuItem>
                    </TextField>

                    <TextField required id="department" name="department" value={departmentValue} onChange={handleDepartmentChange} select label="Department" defaultValue=""  >
                        <MenuItem value="IT">IT</MenuItem>
                        <MenuItem value="Marketing">Marketing</MenuItem>
                        <MenuItem value="HR">HR</MenuItem>
                        <MenuItem value="Engineering">Engineering</MenuItem>
                    </TextField>

                    <TextField required id="employeetype" name="employeetype" value={typeValue} onChange={handleTypeChange} select label="Employee type" defaultValue=""  >
                        <MenuItem value="Full time">Full time</MenuItem>
                        <MenuItem value="Part time">Part time</MenuItem>
                        <MenuItem value="Contract">Contract</MenuItem>
                        <MenuItem value="Seasonal">Seasonal</MenuItem>
                    </TextField>

                    {!retirement ? 
                    <TextField id="employeestatus" name="employeestatus" value={statusValue} onChange={handleStatusChange} select label="Employee Status" defaultValue="" >
                        <MenuItem value="1">Working</MenuItem>
                        <MenuItem value="0">Retired</MenuItem>
                    </TextField>
                    : ""}

                    <div style={customStyles.buttonDiv}>
                        <Button variant="contained" type="submit">Search Employee</Button>
                    </div>

                    <div style={customStyles.buttonDiv}>
                        <Button variant="outlined" type="clear" onClick={handleClear}>Clear filter</Button>
                    </div>

            </Box>

            </div>

        </div>
    )
}

export default EmployeeFilter;