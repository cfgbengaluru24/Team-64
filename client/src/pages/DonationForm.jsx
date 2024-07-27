// src/components/DonationForm.jsx
import React, { useState } from 'react';

const DonationForm = () => {
    const [donorName, setDonorName] = useState('');
    const [amount, setAmount] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const handlePayment = (e) => {
        e.preventDefault();
        
        const options = {
            key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key ID
            amount: amount * 100, // Amount in paise
            currency: 'INR',
            name: 'Your Organization Name',
            description: 'Donation',
            handler: function (response) {
                alert('Payment successful!');
                console.log(response);
                // Here you can handle successful payment response
            },
            prefill: {
                name: donorName,
                contact: mobileNumber,
            },
            theme: {
                color: '#3399cc',
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Donate Now</h1>
            <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handlePayment}>
                <h2 className="text-2xl font-semibold mb-4">Donation Form</h2>
                <div className="mb-4">
                    <label htmlFor="donorName" className="block text-sm font-medium mb-1">Donor Name</label>
                    <input
                        type="text"
                        id="donorName"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium mb-1">Amount (INR)</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="mobileNumber" className="block text-sm font-medium mb-1">Mobile Number</label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded"
                >
                    Donate
                </button>
            </form>
        </div>
    );
};

export default DonationForm;