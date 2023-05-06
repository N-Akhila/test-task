import { MenuItem } from "@material-ui/core"

/**
 * @param {{
 * optionLists: Object,
 * label: string,
 * value: string
 * }} props
 */
export const getOptions = (dropdownData) => {
    if(typeof(dropdownData)!== 'string'){
        const {key, value, optionLists} = dropdownData
        return
        optionLists.map((data,i) => <MenuItem key={i} value = {data[value]}>{data[key]}</MenuItem>)
    }
    else{
        return <MenuItem value = {0}>{dropdownData}</MenuItem>
    }
}