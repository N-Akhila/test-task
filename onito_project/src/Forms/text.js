import React from "react" 
import { InputLabel,TextField,FormHelperText } from '@material-ui/core'
import { FormInputWrapper } from "../styles/styles"
/**
 * 
 * @param {{
 * label: string,
 * labelId: string,
 * formikValue: Object,
 * formikChange: Function,
 * errors?: formik.values.labelId,
 * touched?: formik.touched.labelId,
 * mandatory: Boolean
 * }
 * } props 
 */
export const TextInput = (props) =>{
    const { formik, label, labelId,type, formikValue, formikChange,errors,helperText,onBlur,touched,placeholder, adorment,mandatory} = props
    return(
        <FormInputWrapper>

        <InputLabel htmlFor={label}>{label ? label : <> &nbsp;</>}<span className={(mandatory)? 'asterisk': ''}>{(mandatory) ? '*':''}</span></InputLabel>
        <TextField
        data-testid = {'search-text-field'}
        errors = {(errors && touched) ? true : false}
        id={labelId}
        name={labelId}
        type={type ? type : 'text'}
        variant = "outlined"
        value={formikValue}
        onChange={
            (event)=>
            formikChange(event)
        }/>
        {(helperText) ? 
            errors && helperText && <FormHelperText className = "helpertext">{helperText}</FormHelperText>:
            errors && touched && <FormHelperText className = "helpertext">{errors}</FormHelperText>
        }
               </FormInputWrapper>

    )
}