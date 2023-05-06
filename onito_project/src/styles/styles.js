import { makeStyles } from '@material-ui/styles'
import styled from 'styled-components'

export const FormInputWrapper = styled.div`{
    @media (max-width: 980px){
        width: "47%";
        margin-bottom: 10px;
    }
    position: relative;
    width: "49%"
    &:nth-child(4){
        margin: 0;
    }
    margin-right: 20px;
    label{
        margin-bottom: 5px;
        font-size; 12px;
        font-weight: 700;
        color: #5A5A5A
    }
    &.growDouble{
        flex-grow:0.5;
    }
    &.picker{
        @media only screen and (min-width; 768px) and (max-width:980px){
            margin-left: 0;
        }
    }
    @media(min-width: 1920px){
        label, span.MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1{
            font-size: 16px;
        }
    }
}`
export const FormGroup = styled.div`{
    &.jc-fs{
        justify-content: flex-start;
    }
    &.align-center{
        align-items: center;
    }
    &.jc-end{
        justify-content: end;
    }
    &.pb-0{
        padding-bottom:0;
    }
    @media (max-width: 980px){
        flex-wrap: wrap
    }
}`
export const useStyles = makeStyles((theme) => ({
    root:{
        '& .MuiCard-root':{
            borderRadius: '0',
            marginBottom: '25px'
        }
    }
}) )
