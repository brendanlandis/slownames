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

            <form id="press-form">
                <div className="divider first">FIRST</div>
                <div className="form-row one-one-one">
                    <div>
                        <InputSelect
                            id="press-form-type"
                            label="What type of press is this?"
                            options={['a review', 'an interview', 'an article']}
                        />
                    </div>
                    <div>
                        <InputSelect
                            id="press-form-visibility"
                            label="Where should it be visible?"
                            options={[
                                'CV / home page',
                                "only next to the thing it's about",
                                'hidden (just archiving)',
                            ]}
                        />
                    </div>
                    <div>
                        <InputDate
                            id="press-form-date"
                            label="When was it written?"
                        />
                    </div>
                </div>

                <div className="divider">AND</div>
                <p className="explanation">
                    Is this about an album, or a show, or what?
                </p>

                <div className="form-row two-one">
                    <InputRelationship
                        id="press-form-relationship"
                        label="subject of press"
                        values={['work', 'show', 'video', 'band']}
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
                <p className="explanation">
                    What's a really good quote to highlight?
                </p>

                <div>
                    <InputRichText
                        id="press-form-quote"
                        label="quote"
                        height="250"
                    />
                </div>

                <div className="divider">FINALLY</div>

                <p className="explanation">
                    Drop a link to the writeup. (Or, if it's not online
                    anywhere, you can attach a pic or two from the magazine it's in.)
                </p>

                <div className="form-row one-one">
                    <div>
                        <InputText
                            id="press-form-attachment-link-text"
                            label="link to writeup"
                        />
                    </div>
                    <div>
                        <InputFile id="press-form-attachments" label="pic of writeup" />
                    </div>
                </div>
            </form>
            <div className="submit-wrapper">
                <ButtonSubmit id="press-form-submit" label="i get up" />
            </div>
        </main>
    );
}
