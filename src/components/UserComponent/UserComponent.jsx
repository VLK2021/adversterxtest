import React from 'react';

import css from './UserComponent.module.css';


const UserComponent = ({ user }) => {
    const {
        name,
        username,
        email,
        phone,
        website,
        address,
        company
    } = user;

    return (
        <div className={css.wrap}>
            <h2 className={css.name}>{name}</h2>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noreferrer">{website}</a></p>

            <div className={css.section}>
                <h4>Address</h4>
                <p>{address.street}, {address.suite}</p>
                <p>{address.city}, {address.zipcode}</p>
                <p><strong>Geo:</strong> {address.geo.lat}, {address.geo.lng}</p>
            </div>

            <div className={css.section}>
                <h4>Company</h4>
                <p><strong>Name:</strong> {company.name}</p>
                <p><strong>CatchPhrase:</strong> "{company.catchPhrase}"</p>
                <p><strong>BS:</strong> {company.bs}</p>
            </div>
        </div>
    );
};

export { UserComponent };
