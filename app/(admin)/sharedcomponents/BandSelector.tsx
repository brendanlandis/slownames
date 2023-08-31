import GetBands from '../api/GetBands';
import React, { useEffect, useState } from 'react';
import { useSelectedBand } from '../api/SelectedBandContext';

export default function BandSelector({ forPage }) {
    const { data: selectedBands, isLoading, isError } = GetBands();

    const { setSelectedBand } = useSelectedBand();

    const [selectedBandId, setSelectedBandId] = useState(0);

    const handleBandSelect = (event) => {
        const selectedBand = parseInt(event.target.value, 10);
        setSelectedBand(selectedBand);
    };

    useEffect(() => {
        if (selectedBands.length > 0) {
            setSelectedBandId(selectedBands[0].id);
            setSelectedBand(selectedBands[0].id);
        }
    }, [selectedBands]);

    if (isLoading) {
        return <>loading...</>;
    }

    if (isError) {
        return <>error fetching data</>;
    }

    return (
        <>
            <label className="hidden" htmlFor={forPage + '-form-band'}>
                what band is this for?
            </label>
            <select
                defaultValue={selectedBandId}
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
