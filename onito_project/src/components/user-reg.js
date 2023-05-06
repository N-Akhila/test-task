import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

const MyComponent = () => {
    const schema = yup.object().shape({
        firstName: yup.string().required('Name is required'),
        age: yup.number().required('Age is required'),
        gender: yup.string().required('Gender is required'),
        email: yup.string().email('Invalid email'),
        emergencyContactNumber: yup.string()
            .matches(/^\d{10}$/, 'Invalid phone number'),
        pinCode: yup
            .string()
            .matches(/^\d{6}$/, "Pin Code must be 6 digits"),
        mobile: yup.string()
            .matches(/^\d{10}$/, 'Invalid phone number'),
        enterGovtId: yup.string().when('govtId', {
            is: 'Aadhar',
            then: () => yup.string().matches(/^\d{12}$/, 'Invalid Aadhar number'),
            otherwise: () => yup.string().matches(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/, 'Invalid PAN number'),
        }),
    });
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            fruit: '',
            gender: '',
            mobile: '',
            govtId: '',
            enterGovtId: '',
            guardianLabel: '',
            guardianName: '',
            email: '',
            emergencyContactNumber: '',
            enterAddress: '',
            state: '',
            city: '',
            country: '',
            pinCode: '',
            occupation: '',
            religion: '',
            martialStatus: '',
            bloodGroup: '',
            nationality: ''
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        axios.post('http://localhost:3000/users',data)
            .then(res => console.log(res.data));
        
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Personal Details</h4>
            <input {...register("firstName")} placeholder="First name" />
            {errors.firstName && <p>{errors.firstName.message}</p>}
            <input {...register("age")} placeholder="Age" />
            {errors.age && <p>{errors.age.message}</p>}
            <Controller
                name="gender"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <select style={{ height: '30px', width: '150px' }} {...field} id="gender" label='Fruit'>
                        <option value="">Select Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                )}
            />
            {errors.gender && <p>{errors.gender.message}</p>}
            <input style={{ marginLeft: '30px' }} {...register("mobile")} placeholder="Mobile" />
            {errors.mobile && <p>{errors.mobile.message}</p>}
            <Controller
                name="govtId"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <select style={{ height: '30px', width: '150px' }} {...field} id="govtId" label='Fruit'>
                        <option value="">Select Govt ID</option>
                        <option value="PAN">PAN</option>
                        <option value="Aadhar">Aadhar</option>
                    </select>
                )}
            />
            <input style={{ marginLeft: '20px' }} {...register("enterGovtId")} placeholder="Enter ID" />
            {errors.enterGovtId && <p>{errors.enterGovtId.message}</p>}
            <h4>Contact Details</h4>
            <Controller
                name="guardianLabel"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <select style={{ height: '30px', width: '150px' }} {...field} id="guardianLabel">
                        <option value="">Select Label</option>
                        <option value="mr">MR.</option>
                        <option value="ms">MS.</option>
                    </select>
                )}
            />
            <input style={{ marginLeft: '20px' }} {...register("guardianName")} placeholder="Guardian Name" />
            <input style={{ marginLeft: '20px' }} {...register("email")} placeholder="Email" />
            {errors.email && <p>{errors.email.message}</p>}
            <input style={{ marginLeft: '20px' }} {...register("emergencyContactNumber")} placeholder="Emergency Contact Number" />
            {errors.emergencyContactNumber && <p>{errors.emergencyContactNumber.message}</p>}
            <h4>Address Details</h4>
            <input {...register("enterAddress")} placeholder="Enter Address" />
            <Controller
                name="state"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <select style={{ height: '30px', width: '150px' }} {...field} id="state">
                        <option value="">Select State</option>
                        <option value="ap">AP</option>
                        <option value="ts">TS</option>
                    </select>
                )}
            />
            <Controller
                name="city"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <select style={{ height: '30px', width: '150px', marginLeft: '20px' }} {...field} id="city">
                        <option value="">Select City</option>
                        <option value="hyd">HYD</option>
                        <option value="gun">GUN</option>
                    </select>
                )}
            />
            <Controller
                name="country"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <select style={{ height: '30px', width: '150px', marginLeft: '20px' }} {...field} id="country">
                        <option value="">Select Country</option>
                        <option value="ind">India</option>
                        <option value="aus">Australia</option>
                    </select>
                )}
            />
            <input {...register("pinCode")} style={{ marginLeft: '20px' }} placeholder="Pin Code" />
            {errors.pinCode && <p>{errors.pinCode.message}</p>}
            <h4>Other Details</h4>
            <input {...register("occupation")} placeholder="Occupation" />
            <Controller
                name="religion"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <select style={{ height: '30px', width: '150px' }} {...field} id="religion" label='Fruit'>
                        <option value="">Select Religion</option>
                        <option value="a">A</option>
                        <option value="b">B</option>
                    </select>
                )}
            />
            <Controller
                name="martialStatus"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <select style={{ height: '30px', width: '150px', marginLeft: '20px' }} {...field} id="martialStatus" label='Fruit'>
                        <option value="">Select Martial Status</option>
                        <option value="married">Married</option>
                        <option value="single">Single</option>
                    </select>
                )}
            />
            <Controller
                name="bloodGroup"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <select style={{ height: '30px', width: '150px', marginLeft: '20px' }} {...field} id="bloodGroup" label='Fruit'>
                        <option value="">Select Blood Group</option>
                        <option value="oPosition">O+</option>
                        <option value="aPositive">A+</option>
                    </select>
                )}
            />
            <Controller
                name="nationality"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <select style={{ height: '30px', width: '150px', marginLeft: '20px' }} {...field} id="nationality">
                        <option value="">Select Nationality</option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                    </select>
                )}
            />
            <button type="submit" style={{ marginLeft: '30px', marginTop: '30px' }}>Submit</button>
        </form>
    );
}
export default MyComponent
