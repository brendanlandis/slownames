import Layout from '../layout';

async function getArtists() {
    const res = await fetch('https://api.slownames.net/api/artists');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Page() {
    const artists = await getArtists();

    return (
        <Layout>
            <main id="yourband" className="container mx-auto smallcontainer">
                <h1>What's your band called?</h1>
                <form id="primaryartist-form">
                    <div className="primaryartist-form-input">
                        <label htmlFor="primaryartist-form-artist">
                            band name
                        </label>
                        <input
                            id="primaryartist-form-artist"
                            type="text"
                            placeholder="band name"
                        />
                    </div>
                </form>
                <h2>Plus are you in any other bands?</h2>
                <ul>
                    {artists.data.map((artist) => {
                        return <li id={artist.id}>{artist.attributes.name}</li>;
                    })}
                </ul>
                <div className="primaryartist-form-submit-wrapper">
                    <button
                        id="primaryartist-form-submit"
                        type="submit"
                        value="submit"
                    >
                        sick
                    </button>
                </div>
            </main>
        </Layout>
    );
}
