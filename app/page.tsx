'use client';
import InputSelect from './components/forms/InputSelect';
import NewOrOld from './components/NewOrOld';
import InputText from './components/forms/InputText';
import InputDate from './components/forms/InputDate';
import InputRichText from './components/forms/InputRichText';
import InputFile from './components/forms/InputFile';
import InputRelationship from './components/forms/InputRelationship';
import ButtonSubmit from './components/forms/ButtonSubmit';

export default function news() {
    return (
        <main id="news">
            <div className="form-header">
                <h1>
                    News for
                    <InputSelect
                        id="news-form-band"
                        label="what band is this for?"
                        options={["Star Card", "Receive", "Receiver"]}
                    />
                </h1>
                <NewOrOld />
            </div>

            <div className="divider first">OK SO FIRST</div>

            <form id="news-form">
                <div className="news-form-row headline-date">
                    <div className="form-input-box form-input-box-headline">
                        <InputText id="news-form-headline" label="headline" />
                    </div>

                    <div className="form-input-box form-input-box-date">
                        <InputDate id="news-form-date" label="date" />
                    </div>
                </div>

                <div className="form-input-box">
                    <InputRichText id="news-form-text" label="text" height="500" />
                </div>

                <div className="divider">THEN</div>

                <div className="form-input-box attachments-wrapper">
                    <InputFile
                        id="news-form-attachments"
                        label="You can attach something to this post (like a PDF, or a ZIP file
                            or something), and it'll be linked to at the bottom of the post.
                            Mostly for nerd stuff - scores, max / puredata / vcv patches,
                            MIDI files, MOD files, idk!"
                    />
                    <InputText
                        id="news-form-attachment-link-text"
                        label="link text (e.g. check out this score)"
                    />
                </div>

                <div className="divider">LASTLY</div>

                <div className="form-input-box relationship-wrapper">
                    <InputRelationship
                        id="news-form-relationship"
                        label="Is this about the band generally, or a specific thing?"
                        values={["band", "recording", "press", "show(s)", "video"]}
                        secondarylabel="relationship"
                        secondaryvalues={[
                            'this one',
                            'no that one',
                            'no actually this other one',
                        ]}
                    />
                </div>
            </form>

            <ButtonSubmit id="news-form-submit" label="go ahead and jump" />
        </main>
    );
}
