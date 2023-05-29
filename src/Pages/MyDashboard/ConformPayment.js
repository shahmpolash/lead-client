import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const ConformPayment = () => {
    const {id} = useParams();
    const [user] = useAuthState(auth);
    const [credit, setCredit] = useState([]);
    const [customer, setCustomer] = useState([]);
 
    useEffect(() => {
     fetch(`http://localhost:5000/profile/${id}`)
       .then((res) => res.json())
       .then((info) => setCustomer(info));
   }, [id]);
 

    return (
        <div>
            Your Name {customer.customerFullName}
        </div>
    );
};

export default ConformPayment;