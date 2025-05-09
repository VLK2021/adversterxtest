import React from 'react';

import css from './UsersPage.module.css';
import {UsersComponent} from "../../components/index.js";


const UsersPage = () => {

    return (
        <div className={css.wrap}>
            <UsersComponent/>
        </div>
    );
};

export {UsersPage};