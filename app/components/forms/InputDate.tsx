'use client'
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
export default function InputDate({ id, label }) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <label htmlFor="news-form-date">{id}</label>
            <DatePicker
                selected={startDate}
                id={label}
                onChange={(date) => setStartDate(date)}
            />
        </>
    );
}
