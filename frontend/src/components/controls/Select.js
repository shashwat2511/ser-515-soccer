import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import React from 'react';

function Select(props) {
    const { variant, name, label, value, onChange, options, error = null, disabled } = props;

    const mapHandler = option => {
        let key = Object.keys(option);
        return (<MenuItem key={option.id} value={option.value}>{option.value}</MenuItem>);
    }

    return (
        <FormControl
            variant={variant || "outlined"}
            {...(error && { error: true })}
        >
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                disabled={disabled === undefined ? "false" : disabled}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {
                    options.map(mapHandler)
                    // option => (<MenuItem key={option.id} value={option.state}>{option[keys[1]]}</MenuItem>)
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}

export default Select
