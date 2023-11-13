import React from 'react'
import Authform from '../../../Components/AuthForm';
import AccountServices from '../../../Services/AccountServices';

const Create = () => {
    return (
        <Authform purpose={"create"} authFormApin={AccountServices.AllCreate} />
    )
}

export default Create;