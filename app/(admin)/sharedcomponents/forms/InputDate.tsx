'use client'
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
registerLocale('en-GB', enGB);

export default function InputDate({
    id,
    name,
    label,
    labeldisplay,
    handleDateChange,
    selectedDate,
}) {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (date) => {
        setStartDate(date);
        handleDateChange(date);
    };
    return (
        <>
            <label
                className={labeldisplay ? '' : 'hidden'}
                htmlFor="posts-form-date"
            >
                {label}
            </label>
            <DatePicker
                selected={startDate}
                id={id}
                name={name}
                onChange={handleChange}
                locale="en-GB"
                placeholderText={label}
            />
        </>
    );
}
