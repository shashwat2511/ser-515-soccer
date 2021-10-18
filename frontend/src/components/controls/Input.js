import { TextField } from '@material-ui/core';
import React from 'react'

function Input(props) {
    const { variant, name, label, value, onChange, type } = props;
    return (
        <TextField
            variant={variant || "outlined"}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            type={type || "text"}
        />
    )
}

export default Input
