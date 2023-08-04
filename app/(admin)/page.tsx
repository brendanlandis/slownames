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
                    <span>
                        <InputSelect
                            id="news-form-band"
                            label="what band is this for?"
                            options={['Star Card', 'Receive', 'Receiver']}
                            labeldisplay={false}
                        />
                    </span>
                </h1>
                <NewOrOld />
            </div>

            <form id="news-form">
                <div className="divider first">FIRST</div>
                <p className="explanation">
                    Write out the headline and content, plus the date you'd like
                    this to go live on.
                </p>
                <div className="form-row four-one">
                    <div className="wrapper-headline">
                        <InputText
                            id="news-form-headline"
                            label="headline"
                            labeldisplay={false}
                        />
                    </div>

                    <div className="wrapper-date">
                        <InputDate
                            id="news-form-date"
                            label="date"
                            labeldisplay={false}
                        />
                    </div>
                </div>
                <div>
                    <InputRichText
                        id="news-form-text"
                        label="text"
                        height="500"
                        labeldisplay={false}
                    />
                </div>
                <div className="divider">THEN</div>
                <p className="explanation">
                    You can attach something to this post (like a PDF, or a ZIP
                    file or something), and it'll be linked to at the bottom of
                    the post. Mostly for nerd stuff - scores, max / puredata /
                    vcv patches, MIDI files, MOD files, idk!
                </p>
                <div className="form-row one-one">
                    <div>
                        <InputFile
                            id="news-form-attachments"
                            label="attachment"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputText
                            id="news-form-attachment-link-text"
                            label="link text (e.g. check out this score)"
                            labeldisplay={false}
                        />
                    </div>
                </div>
                <div className="divider">LASTLY</div>
                <p className="explanation">
                    Is this about the band generally, or a specific thing?
                </p>

                <div className="form-row two-one">
                    <InputRelationship
                        id="news-form-relationship"
                        label="subject of post"
                        values={['band', 'work', 'press', 'show', 'video']}
                        labeldisplay={false}
                        secondarylabeldisplay={false}
                        secondarylabel="relationship"
                        secondaryvalues={[
                            'which one?',
                            'this one',
                            'no that one',
                            'no actually this other one',
                        ]}
                    />
                </div>
            </form>

            <div className="submit-wrapper">
                <ButtonSubmit id="news-form-submit" label="go ahead and jump" />
            </div>
        </main>
    );
}
