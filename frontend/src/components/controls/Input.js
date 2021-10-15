import { TextField } from '@material-ui/core';
import React from 'react'

function Input(props) {
    const { variant, name, label, value, onChange } = props;
    return (
        <TextField
            variant={variant || "outlined"}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input
