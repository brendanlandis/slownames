import { useState, useEffect } from 'react';
const axios = require('axios');
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');
import { Band } from '@/app/types';
import GetAllBands from './GetAllBands';

export default function OtherBandsChecklist({ userId }) {
    const [bandArray, setBandArray] = useState<Band[]>([]);
    const { data: bands, isLoading, isError } = GetAllBands(userId);

    // setBandArray(bands);

    const checkboxList = bands.map((band) => (
        <div key={band.id} className="checkbox-wrapper">
            <input
                type="checkbox"
                id={'band-' + band.id}
                name={'band-' + band.id}
                checked={band.selected}
                onChange={() => {
                    const updatedBandArray = bandArray.map((b) =>
                        b.id === band.id ? { ...b, selected: !b.selected } : b
                    );
                    setBandArray(updatedBandArray);
                }}
            />
            <label htmlFor={'artist-' + band.id}>{band.bandname}</label>
        </div>
    ));

    return (
        <fieldset>
            <legend className="hidden">Check all the bands you're in:</legend>
            {checkboxList}
        </fieldset>
    );
}
