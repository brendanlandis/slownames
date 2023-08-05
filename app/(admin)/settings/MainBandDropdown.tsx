'use client';
import useAxios from 'axios-hooks';
import Cookies from 'js-cookie';

export default function MainBandDropdown() {
    const accessToken = Cookies.get('accessToken');

    const [{ data, loading, error }, refetch] = useAxios({
        url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/artists`,
        headers: { Authorization: `bearer ${accessToken}` },
    });

    if (loading) {
        return <>Loading data...</>;
    }
    if (error) {
        let message = error.response?.data.error.message;
        return (
            <>
                <div className="form-header">
                    <h2>Oh shit</h2>
                </div>
                <p>I couldn't get the data for your main band. The robot said: "{message}"</p>
            </>
        );
    }
    return (
        <div className="form-header">
            <h2>
                <span>Looks like your main band is</span>
                <span className="inbetween">
                    <label className="hidden" htmlFor="mainBand">
                        What is your main band?
                    </label>
                    <select defaultValue="0" id="mainBand">
                        {data.data.map((artist, index) => (
                            <option key={index} value={index}>
                                {artist.attributes.name}
                            </option>
                        ))}
                    </select>
                </span>
            </h2>
        </div>
    );
}
