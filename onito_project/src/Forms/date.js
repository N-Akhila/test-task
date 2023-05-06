import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { FormHelperText, InputLabel } from '@material-ui/core';
import { FormInputWrapper } from '../styles/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
/**
 * 
 * @param {{
* label: string,
* labelId: string,
* formik: Object,
* errors?: formik.values.labelId,
* touched?: formik.touched.labelId,
* mandatory: Boolean,
* defaultValue: date,
* }
* } props 
*/
export const DateInput = (props) =>{
    const {label,labelId,formik,errors,touched,mandatory,handleUpdate,maxDate,maxDateMessage,minDateMessage,defaultValue} = props;
    const [selectedDate, setSelectedDate] = useState(null)
    useEffect(()=>{
       if(defaultValue != undefined){
        setSelectedDate(new Date(defaultValue))
       }
       if(defaultValue===null){
        setSelectedDate(defaultValue)
       }
    },[defaultValue])
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    return(
        <FormInputWrapper>
        <MuiPickersUtilsProvider utils = {DateFnsUtils}>
            <InputLabel htmlFor={labelId}>{label}<span className={(mandatory)?'asterisk':''}>{(mandatory) ? '*' : ''}</span></InputLabel>
            <KeyboardDatePicker
            autoOk={true}
            variant="inline"
            inputVariant="outlined"
            format="MM/dd/yyyy"
            name={labelId}
            id={labelId}
            value={selectedDate}
            error={(errors && touched) ? true : false}
            onChange={(date) => {
                if(date){
                    let d = new Date();
                    const [hr, min, sec] = [d.getHours(), d.getMinutes(), d.getSeconds()]
                    date.setHours(hr,min,sec)
                    handleDateChange(date)
                }
                handleDateChange(undefined)  
            }}
            maxDate={maxDate}
            maxDateMessage = {(maxDateMessage) ? maxDateMessage : ''}
            minDateMessage = {(minDateMessage) ? minDateMessage : ''}
            autoComplete="off"/>
            {errors && touched && <FormHelperText className='helperText'>{errors}</FormHelperText>}
        </MuiPickersUtilsProvider>
        </FormInputWrapper>

    )      

}