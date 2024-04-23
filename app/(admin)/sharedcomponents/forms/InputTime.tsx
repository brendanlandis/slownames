'use client';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePicker } from 'react-datepicker';
import { useState } from 'react';
import { setHours } from 'date-fns/setHours';
import { setMinutes } from 'date-fns/setMinutes';

export default function InputTime({ id, label, hour, labeldisplay }) {
    const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 0o0), hour));
    return (
        <>
            <label className={labeldisplay ? '' : 'hidden'} htmlFor="posts-form-date">
                {label}
            </label>
            <DatePicker
                selected={startDate}
                id={id}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
            />
        </>
    );
}
