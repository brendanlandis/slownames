'use client';

export default async function YourBand() {
    return (
        <form id="primaryartist-form">
            <div className="primaryartist-form-input">
                <label htmlFor="primaryartist-form-artist">band name</label>
                <input
                    id="primaryartist-form-artist"
                    type="text"
                    placeholder="band name"
                />
            </div>
        </form>
    );
}
