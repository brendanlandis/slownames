'use client';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';
registerLocale('en-GB', enGB)

export default function InputDate({ id, label, labeldisplay }) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <label className={labeldisplay ? '' : 'hidden'} htmlFor="posts-form-date">{label}</label>
            <DatePicker
                selected={startDate}
                id={id}
                onChange={(date) => setStartDate(date)}
                locale="en-GB"
                placeholderText="Weeks start on Monday"
            />
        </>
    );
}
