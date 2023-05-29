import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SmallPlan = () => {
    const {id} = useParams();
    const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/profile/${id}`)
      .then((res) => res.json())
      .then((info) => setCustomer(info));
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
            Your Name : {customer.customerFullName}
            Your Current Credit : {customer.credit}
            You are buying 1,000 Credits for $10USD
            <form onSubmit={handleBuyCredit}>
                <input  type='text' value={parseFloat(customer.credit) + parseFloat(1000)} name='credit'></input>
                <input type='submit' value='Buy Now'></input>
            </form>
        </div>
    );
};

export default SmallPlan;