import YourBand from './yourBand';
import OtherBands from './otherBands';

export default async function Bands() {
    return (
        <main id="yourband" className="container mx-auto smallcontainer">
            <h1>What's your band called?</h1>

            <YourBand />

            <h2>Plus are you in any other bands?</h2>

            <OtherBands />

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
    );
}
