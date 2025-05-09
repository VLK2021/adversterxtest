import React from 'react';
import css from './UserComponent.module.css';


const UserComponent = ({user}) => {
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
        <div className={css.card}>
            <h2 className={css.name}>{name}</h2>
            <p><span>Username:</span> {username}</p>
            <p><span>Email:</span> {email}</p>
            <p><span>Phone:</span> {phone}</p>
            <p>
                <span>Website:</span>{' '}
                <a href={`http://${website}`} target="_blank" rel="noreferrer">
                    {website}
                </a>
            </p>

            <div className={css.section}>
                <h4>Address</h4>
                <p>{address.street}, {address.suite}</p>
                <p>{address.city}, {address.zipcode}</p>
                <p><span>Geo:</span> {address.geo.lat}, {address.geo.lng}</p>
            </div>

            <div className={css.section}>
                <h4>Company</h4>
                <p><span>Name:</span> {company.name}</p>
                <p><span>CatchPhrase:</span> "{company.catchPhrase}"</p>
                <p><span>BS:</span> {company.bs}</p>
            </div>
        </div>
    );
};

export {UserComponent};

