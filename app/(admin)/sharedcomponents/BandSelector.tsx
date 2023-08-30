import GetBands from '../api/GetBands';
import { useQueryClient } from '@tanstack/react-query';

export default function BandSelector({ forPage }) {
    const { data: selectedBands, isLoading, isError } = GetBands();

    if (isLoading) {
        return <>loading...</>;
    }

    if (isError) {
        return <>error fetching data</>;
    }

    const queryClient = useQueryClient();

    const handleBandSelect = (event) => {
        const selectedValue = event.target.value;
        queryClient.setQueryData(['selectedBand'], selectedValue);
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
