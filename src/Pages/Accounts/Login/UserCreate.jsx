import React from 'react'
import Authform from '../../../Components/AuthForm';
import AccountServices from '../../../Services/AccountServices';

const UserCreate = () => {
    return (
        <Authform purpose={"userCreate"} authFormApin={AccountServices.UserCreate} />

    )
}

export default UserCreate;