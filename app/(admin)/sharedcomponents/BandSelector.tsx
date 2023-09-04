import GetUserBands from '../api/GetUserBands';
import React, { useEffect, useState } from 'react';
import { useSelectedBand } from '../api/SelectedBandContext';

export default function BandSelector({ forPage }) {
    const { data: selectedBands, isLoading, isError } = GetUserBands();

    const { selectedBand, setSelectedBand } = useSelectedBand();

    const [defaultBandId, setDefaultBandId] = useState(0);
    const [hasManuallySelected, setHasManuallySelected] = useState(false);

    const handleBandSelect = (event) => {
        const selectedBand = parseInt(event.target.value, 10);
        setSelectedBand(selectedBand);
        setHasManuallySelected(true);
    };

    useEffect(() => {
        if (selectedBands.length > 0) {
            setDefaultBandId(selectedBands[0].id);
            if (!hasManuallySelected) {
                setSelectedBand(selectedBands[0].id);
            }
        }
    }, [selectedBands, hasManuallySelected]);

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
                value={selectedBand}
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
