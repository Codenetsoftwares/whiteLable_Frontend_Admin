import React, { useEffect, useState } from "react";
import AccountServices from "../Services/AccountServices";
import { useParams } from "react-router";
import { useAuth } from "../Utils/Auth";

const PartnershipViewLog = () => {
    const auth = useAuth();
    const { userId } = useParams();
    const [partnershipData, setPartnershipData] = useState([]);
    console.log("first", userId)
    useEffect(() => {
        if (auth.user) {

            AccountServices.getPartnershipData(userId, auth.user)
                .then((res) => {
                    console.log("==========aaaaaaaaaMMMMMMM>", res.data);
                    setPartnershipData(res.data.user);
                })
                .catch((err) => setPartnershipData([]));
        }
    }, []);

    return <div>PartnershipViewLog</div>;
};

export default PartnershipViewLog;
