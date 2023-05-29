import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddPackages = () => {
    const navigate = useNavigate();

    const handleCreditPackage = (event) => {
        event.preventDefault();
        const packageName = event.target.packageName.value;
        const packageValue = event.target.packageValue.value;
        const packagePrice = event.target.packagePrice.value;
    
    
        const creditPackage = {
            packageName,
            packageValue,
            packagePrice,
            
        };
    
        const url = `http://localhost:5000/add-credit-package`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(creditPackage),
        })
          .then((res) => res.json())
          .then((result) => {
            navigate("/my-account");
          });
      };
    return (
        <div>
            <form onSubmit={handleCreditPackage}>
            <input type='text' className='input input-bordered input-primary w-full max-w-xs' name='packageName' placeholder='Package Name'></input> <br></br>
            <input type='number' className='input input-bordered input-primary w-full max-w-xs' name='packageValue' placeholder='Total Credit'></input><br></br>
            <input type='number' className='input input-bordered input-primary w-full max-w-xs' name='packagePrice' placeholder='Package Price'></input><br></br>
            <input className='btn btn-xs btn-primary' type='submit' value='Add'></input>
            </form>
        </div>
    );
};

export default AddPackages;