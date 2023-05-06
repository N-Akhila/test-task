import { FormControl, FormHelperText, InputLabel, Select } from "@material-ui/core";
import React, { useEffect,useState } from "react";
import { FormInputWrapper } from "../styles/styles";
import { getOptions } from "./getOptions";
/**
 * @param {{
 * label: string,
 * labelId: string,
 * formikValue: object,
 * formikChange: Function,
 * errors?: formik.errors.labelId,
 * touched?: formik.touched.labelId,
 * mandatory: Boolean,
 * dropdownData: Object '{optionLists,key,value}'
 * }}
 */
export const SelectInput = (props) => {
    const { label, labelId, formikValue, formikChange,errors, touched,dropdownData,mandatory} = props
    const [data, setData] = useState({key:"", value: '', optionlists: []})
    useEffect(()=>{
        if(dropdownData?.optionlists?.length > 0){
            const updatedData = dropdownData.optionlists.map((v,i)=>{
                if(v[dropdownData.key] === '' && Number(v[dropdownData.value])===0){
                    v[dropdownData.key] = '<Select One>'
                }
                return v
            })
            setData({
                ...data,
                key: dropdownData.key,
                value: dropdownData.value,
                optionlists: updatedData
            })
        }
        else{
            setData({
                ...data,
                key: '',
                value: '',
                optionlists: []
            })
        }

    },[dropdownData])
    return(
        <FormInputWrapper>
        <InputLabel style={{paddingRight:'190px'}} htmlFor={labelId}>{label}<span className={(mandatory) ? 'asterisk': ''}>{(mandatory)? '*' : ''}</span></InputLabel>
        <FormControl variant = "outlined" fullWidth>
            <Select
            error = {(errors && touched) ? true : false}
            id={labelId}
            name={labelId}
            value={formikValue}
            onChange={formikChange}
            >
                {getOptions(data)}
            </Select>
            {errors && touched && <FormHelperText classsName="helperText">{errors}</FormHelperText>}
        </FormControl>
        </FormInputWrapper>
    )
}