import React from 'react';
import { useParams } from 'react-router';

const BookingInfo = () => {
    const {information} = useParams()
    return (
        <div>
            <h3>Booking {information}</h3>
        </div>
    );
};

export default BookingInfo;