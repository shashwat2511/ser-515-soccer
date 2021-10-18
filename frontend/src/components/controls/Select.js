import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import React from 'react';

function Select(props) {
    const { variant, name, label, value, onChange, options } = props;

    const mapHandler = option => {
        let key = Object.keys(option);
        return (<MenuItem key={option.id} value={option[key[1]]}>{option[key[1]]}</MenuItem>);
    }

    return (
        <FormControl
            variant={variant || "outlined"}
        >
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {
                    options.map(mapHandler)
                    // option => (<MenuItem key={option.id} value={option.state}>{option[keys[1]]}</MenuItem>)
                }
            </MuiSelect>
        </FormControl>
    )
}

export default Select
