import React from 'react'
import Authform from '../../../Components/AuthForm';
import AccountServices from '../../../Services/AccountServices';

const Create = () => {
    return (
        <Authform purpose={"create"} authFormApin={AccountServices.AllCreate} userApi={AccountServices.UserCreate} />
    )
}

export default Create;