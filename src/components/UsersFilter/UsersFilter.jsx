import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import css from './UsersFilter.module.css';
import { userActions } from '../../store/slices/userSlice';

const UsersFilter = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        dispatch(userActions.filterUsers(data));
    };

    const clearFilter = () => {
        reset();
        dispatch(userActions.filterUsers({}));
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.wrap}>
            <input {...register('name')} placeholder="Name" />
            <input {...register('username')} placeholder="Username" />
            <input {...register('email')} placeholder="Email" />
            <input {...register('phone')} placeholder="Phone" />
            <input {...register('website')} placeholder="Website" />
            <button type="submit">Filter</button>
            <button type="button" onClick={clearFilter}>Clear</button>
        </form>
    );
};

export {UsersFilter};
