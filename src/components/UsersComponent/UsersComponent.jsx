import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './UsersComponent.module.css';
import {userActions} from "../../store/slices/userSlice.js";
import {UserComponent} from "../UserComponent/UserComponent.jsx";
import {UsersFilter} from "../UsersFilter/UsersFilter.jsx";


const UsersComponent = () => {
    const dispatch = useDispatch();
    const {filteredUsers} = useSelector(store => store.users);

    useEffect(() => {
        dispatch(userActions.getAllUsers());
    }, [dispatch]);


    return (
        <div className={css.pageWrap}>
            <UsersFilter/>
            <div className={css.cardGrid}>
                {filteredUsers.length > 0 && filteredUsers.map(user => (
                    <UserComponent key={user.id} user={user}/>
                ))}
            </div>
        </div>
    );
};

export {UsersComponent};
