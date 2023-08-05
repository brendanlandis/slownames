import InputText from '../components/forms/InputText';
import ButtonSubmit from '../components/forms/ButtonSubmit';
import MainBandDropdown from './MainBandDropdown';

export default function SettingsForm() {
    const humanNum = (Math.floor(Math.random() * 99999) + 10000);

    return (
        <>
            <div className="form-header">
                <h1>Settings for Registered Human #{humanNum}</h1>
            </div>
            <form id="band-form">
                {/* <button onClick={() => refetch()}>refetch</button> */}
                <MainBandDropdown />

                {/* <h2>Plus, you're in these other bands</h2>

                <fieldset>
                    <legend className="hidden">
                        Check all the bands you're in:
                    </legend>

                    {data.data.map((artist, index) => (
                        <InputCheckbox
                            key={index}
                            id={'artist-' + artist.id}
                            label={artist.attributes.name}
                            labeldisplay={true}
                        />
                    ))}
                </fieldset> */}

                <h2>Do you need to add any new bands?</h2>

                <div className="new-secondary-bands">
                    <div>
                        <InputText
                            id="band-form-new-secondary-band-1"
                            label="band name"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputText
                            id="band-form-new-secondary-band-2"
                            label="band name"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputText
                            id="band-form-new-secondary-band-3"
                            label="band name"
                            labeldisplay={false}
                        />
                    </div>
                </div>
                <div className="submit-wrapper">
                    <ButtonSubmit
                        id="primaryartist-form-submit"
                        label="that's sick"
                    />
                </div>
            </form>
        </>
    );
}
