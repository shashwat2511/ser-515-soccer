import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

export function useForm(initialFValues) {
    const [values, setValues] = useState(initialFValues);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value

        });
    }

    return {
        values,
        setValues,
        handleInputChange
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '0.25rem',
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1),
        }
    }
}))


export function Form(props) {
    const classes = useStyles();

    const { autoComplete } = props;
    return (
        <form className={classes.root} autoComplete={autoComplete}>
            {props.children}
        </form>
    )
}
