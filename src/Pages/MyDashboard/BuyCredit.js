import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const BuyCredit = () => {
   const {id} = useParams();
   const [user] = useAuthState(auth);
   const [credit, setCredit] = useState([]);
   const [customer, setCustomer] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
    fetch(`http://localhost:5000/profile?customerEmail=${user?.email}`)
      .then((res) => res.json())
      .then((info) => setCustomer(info));
  }, [user]);

 
  useEffect(() => {
    fetch(`http://localhost:5000/credit-package/${id}`)
      .then((res) => res.json())
      .then((info) => setCredit(info));
  }, []);

  const handleBuyCredit = (event) => {
    event.preventDefault();
    const credit = event.target.credit.value;

    const updateCredit = {
        credit
    };

    const url = `http://localhost:5000/profile/${customer._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCredit),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/my-account");
      });
  };

    return (
        <div>
            <form onSubmit={handleBuyCredit}>
                <input value={credit.packageValue} type='text' name='credit'></input>
                <input type='submit' value='Buy Now'></input>
            </form>
        </div>
    );
};

export default BuyCredit;