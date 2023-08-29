import GetOtherBandsQuery from '../api/GetOtherBandsQuery';

export default function WhichBand() {
    const { data: selectedBands, isLoading, isError } = GetOtherBandsQuery();

    if (isLoading) {
        return <>loading...</>;
    }

    if (isError) {
        return <>error fetching data</>
    }

    return (
        <>
            <label className="hidden" htmlFor="posts-form-band">
                what band is this for?
            </label>
            <select defaultValue="0" id="posts-form-band">
                {selectedBands.map((band) => (
                    <option key={band.id} value={band.id}>
                        {band.bandname}
                    </option>
                ))}
            </select>
        </>
    );
}
