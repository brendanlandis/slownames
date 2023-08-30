import GetBands from '../api/GetBands';

export default function BandSelector({ forPage }) {
    const { data: selectedBands, isLoading, isError } = GetBands();

    if (isLoading) {
        return <>loading...</>;
    }

    if (isError) {
        return <>error fetching data</>;
    }

    return (
        <>
            <label className="hidden" htmlFor={forPage + "-form-band"}>
                what band is this for?
            </label>
            <select defaultValue="0" id={forPage + "-form-band"}>
                {selectedBands.map((band) => (
                    <option key={band.id} value={band.id}>
                        {band.bandname}
                    </option>
                ))}
            </select>
        </>
    );
}
