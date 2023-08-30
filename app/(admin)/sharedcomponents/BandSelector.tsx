import GetBands from '../api/GetBands';
import React from 'react';
import { useSelectedBand } from '../api/SelectedBandContext';

export default function BandSelector({ forPage }) {
    const { data: selectedBands, isLoading, isError } = GetBands();

    if (isLoading) {
        return <>loading...</>;
    }

    if (isError) {
        return <>error fetching data</>;
    }

    const { setSelectedBand } = useSelectedBand();

    const handleBandSelect = (event) => {
        const selectedBand = parseInt(event.target.value, 10);
        setSelectedBand(selectedBand);
    };

    return (
        <>
            <label className="hidden" htmlFor={forPage + '-form-band'}>
                what band is this for?
            </label>
            <select
                defaultValue="0"
                id={forPage + '-form-band'}
                onChange={handleBandSelect}
            >
                {selectedBands.map((band) => (
                    <option key={band.id} value={band.id}>
                        {band.bandname}
                    </option>
                ))}
            </select>
        </>
    );
}
