'use client';
import InputSelect from '../components/forms/InputSelect';
import NewOrOld from '../components/NewOrOld';
import InputDate from '../components/forms/InputDate';
import InputRelationship from '../components/forms/InputRelationship';
import InputRichText from '../components/forms/InputRichText';
import InputFile from '../components/forms/InputFile';
import InputText from '../components/forms/InputText';
import ButtonSubmit from '../components/forms/ButtonSubmit';

export default function press() {
    return (
        <main id="press">
            <div className="form-header">
                <h1>
                    Press for
                    <InputSelect
                        id="press-form-band"
                        label="what band is this for?"
                        options={['Star Card', 'Receive', 'Receiver']}
                    />
                </h1>
                <NewOrOld />
            </div>

            <div className="divider first">OK SO FIRST</div>

            <form id="press-form">
                <div className="press-form-row type-visibility-date">
                    <div className="form-input-box form-input-box-type">
                        <InputSelect
                            id="press-form-type"
                            label="what type of press is this?"
                            options={[
                                'what type of press is this?',
                                'a review',
                                'an interview',
                                'an article',
                            ]}
                        />
                    </div>
                    <div className="form-input-box form-input-box-visibility">
                        <InputSelect
                            id="press-form-visibility"
                            label="where should this be visible?"
                            options={[
                                'where should this be visible?',
                                'resume / CV',
                                "only next to the thing it's about",
                                'hidden entirely',
                            ]}
                        />
                    </div>
                    <div className="form-input-box form-input-box-date">
                        <InputDate id="press-form-date" label="date" />
                    </div>
                </div>

                <div className="divider">AND</div>

                <div className="form-input-box relationship-wrapper">
                    <InputRelationship
                        id="press-form-relationship"
                        label="Is this about an album, or a show, or what?"
                        values={['work', 'show(s)', 'a video', 'the band']}
                        secondarylabel="relationship"
                        secondaryvalues={[
                            'awesome, which one?',
                            'this one',
                            'no that one',
                            'no actually this other one',
                        ]}
                    />
                </div>

                <div className="divider">THEN</div>

                <div className="form-input-box">
                    <InputRichText
                        id="press-form-quote"
                        label="What's a really good quote to highlight?"
                        height="250"
                    />
                </div>

                <div className="divider">FINALLY</div>

                <div className="press-form-row url-pic">
                    <div className="form-input-box url-pic-wrapper">
                        <InputText
                            id="press-form-attachment-link-text"
                            label="link to the writeup"
                        />
                        <InputFile
                            id="press-form-attachments"
                            label="Or, if it's not online anywhere, you can attach a pic from the magazine. (This won't display anywhere, it's just for archival purposes.)"
                        />
                    </div>
                </div>
            </form>

            <ButtonSubmit id="press-form-submit" label="i get up" />
        </main>
    );
}
