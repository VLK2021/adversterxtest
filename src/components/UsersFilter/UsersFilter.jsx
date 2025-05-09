import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {userActions} from '../../store/slices/userSlice';
import css from './UsersFilter.module.css';


const UsersFilter = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = data => {
        dispatch(userActions.filterUsers(data));
    };

    const clearFilter = () => {
        reset();
        dispatch(userActions.filterUsers({}));
    };


    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} placeholder="Name"/>
            <input {...register('username')} placeholder="Username"/>
            <input {...register('email')} placeholder="Email"/>
            <input {...register('phone')} placeholder="Phone"/>
            <input {...register('website')} placeholder="Website"/>
            <div className={css.buttonGroup}>
                <button type="submit">Filter</button>
                <button type="button" onClick={clearFilter} className={css.clearBtn}>Clear</button>
            </div>
        </form>
    );
};

export {UsersFilter};

