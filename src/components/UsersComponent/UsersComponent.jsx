import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './UsersComponent.module.css';
import {userActions} from "../../store/slices/userSlice.js";
import {UserComponent} from "../UserComponent/UserComponent.jsx";
import {UsersFilter} from "../UsersFilter/UsersFilter.jsx";


const UsersComponent = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(store => store.users);


    useEffect(() => {
        dispatch(userActions.getAllUsers());
    }, [dispatch]);


    return (
        <div className={css.wrap}>
            <div><UsersFilter/></div>

            <div>
                {users.length > 0 && users
                .map(obj => <UserComponent key={obj.id} user={obj}/>)}
            </div>
        </div>
    );
};

export {UsersComponent};