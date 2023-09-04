import { useState } from 'react';
import { Band } from '@/app/types';
import GetAllBands from './GetAllBands';

export default function OtherBandsChecklist({ userId }) {
    const [bandArray, setBandArray] = useState<Band[]>([]);
    const { data: bands, isLoading, isError } = GetAllBands(userId);

    const handleCheckNewBand = () => {
        console.log('what');
    }

    const checkboxList = bands.map((band) => (
        <div key={band.id} className="checkbox-wrapper">
            <input
                type="checkbox"
                id={'band-' + band.id}
                name={'band-' + band.id}
                checked={band.selected}
                onChange={handleCheckNewBand}
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
