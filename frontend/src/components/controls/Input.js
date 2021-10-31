import { TextField } from '@material-ui/core';
import React from 'react'

function Input(props) {
    const { variant, name, label, value, onChange, type, error = null, fileRef = null } = props;
    return (
        <TextField
            variant={variant || "outlined"}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            type={type || "text"}
            InputProps={{ inputProps: { min: 8, ref: fileRef } }}
            {...(error && { error: true, helperText: error })}
        // {...(ref && { ref: ref })}
        />
    )
}

export default Input
