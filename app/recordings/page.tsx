import InputSelect from '../components/forms/InputSelect';
import InputText from '../components/forms/InputText';
import NewOrOld from '../components/NewOrOld';
import InputFile from '../components/forms/InputFile';
import ButtonSubmit from '../components/forms/ButtonSubmit';
import InputRichText from '../components/forms/InputRichText';
import InputDate from '../components/forms/InputDate';
import InputTextArea from '../components/forms/InputTextArea';

export default function recordings() {
    return (
        <main id="recordings">
            <div className="form-header">
                <h1>
                    <InputSelect
                        id="show-form-show-or-tour"
                        label="Is this a show or a tour?"
                        options={['Recording', 'Edition']}
                        labeldisplay={false}
                    />
                    <span className="inbetween">for</span>
                    <InputSelect
                        id="show-form-band"
                        label="What band is this for?"
                        options={['Star Card', 'Receive', 'Receiver']}
                        labeldisplay={false}
                    />
                </h1>
                <NewOrOld />
            </div>
            <form id="recording-form">
                <div className="divider first">FIRST THE BASICS</div>
                <div className="form-row one-one">
                    <div>
                        <InputText
                            id="recording-form-title"
                            label="title"
                            labeldisplay={false}
                        />
                    </div>
                    <div className="side-by-side">
                        <InputFile
                            id="recording-form-cover"
                            label="cover art"
                            labeldisplay={true}
                        />
                    </div>
                </div>
                <div>
                    <InputRichText
                        id="recording-form-about"
                        label="about this recording"
                        height="400"
                        labeldisplay={false}
                    />
                </div>
                <div className="form-row one-one">
                    <div>
                        <InputTextArea
                            id="recording-form-tracklist"
                            label="tracklist (one track per line, no numbers)"
                            height="300"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputTextArea
                            id="recording-form-credits"
                            label="credits"
                            height="300"
                            labeldisplay={false}
                        />
                    </div>
                </div>
                <div className="divider">WHERE TO LISTEN</div>
                <div className="form-row one-one">
                    <div>
                        <InputText
                            id="recording-form-bandcamp-url"
                            label="bandcamp url"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputText
                            id="recording-form-bandcamp-id"
                            label="bandcamp embed ID"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputText
                            id="recording-form-spotify-url"
                            label="spotify url"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputText
                            id="recording-form-link"
                            label="link (if there's a label page or something)"
                            labeldisplay={false}
                        />
                    </div>
                </div>

                <div className="divider">MISCELLANY</div>
                <div className="form-row one-one-one">
                    <div>
                        <InputFile
                            id="recording-form-attachments"
                            label="attachments (bonus materials that might come with the download)"
                            labeldisplay={true}
                        />
                    </div>
                    <div>
                        <InputFile
                            id="recording-form-liner-notes"
                            label="liner notes (additional packaging designs)"
                            labeldisplay={true}
                        />
                    </div>
                    <div>
                        <InputSelect
                            id="recording-form-visibility"
                            label="Where should it be visible?"
                            labeldisplay={true}
                            options={[
                                'CV / selected works',
                                'only under the general discography',
                                'hidden (just archiving)',
                            ]}
                        />
                    </div>
                </div>
                <div className="divider">EDITIONS</div>
                <div className="form-row one-one-one">
                    <div>
                        <InputSelect
                            id="recording-form-edition-work"
                            label="which work"
                            labeldisplay={false}
                            options={[
                                'Freak World EP',
                                'New Abrasions',
                                'Eulogy for Land',
                            ]}
                        />
                    </div>
                    <div>
                        <InputText
                            id="recording-form-edition-num"
                            label="how many printed"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputSelect
                            id="recording-form-edition-type"
                            label="what medium"
                            labeldisplay={false}
                            options={[
                                'cassettes',
                                'records',
                                'CDs',
                                'objects',
                                'other',
                            ]}
                        />
                    </div>
                </div>
                <div className="form-row one-one-one">
                    <div>
                        <InputText
                            id="recording-form-edition-label"
                            label="label"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputText
                            id="recording-form-edition-catalog-num"
                            label="catalog number"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputDate
                            id="recording-form-edition-catalog"
                            label="release date"
                            labeldisplay={false}
                        />
                    </div>
                </div>
                <div className="side-by-side">
                    <InputFile
                        id="recording-form-edition-photos"
                        label="photos"
                        labeldisplay={true}
                    />
                </div>
            </form>
            <div className="submit-wrapper">
                <ButtonSubmit
                    id="recording-form-submit"
                    label="amazing hell ya"
                />
            </div>
        </main>
    );
}
