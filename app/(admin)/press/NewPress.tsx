import { useState } from 'react';
import { useSelectedBand } from '../api/SelectedBandContext';
import submitPress from '../api/SubmitPress';

import InputText from '../sharedcomponents/forms/InputText';
import InputSelect from '../sharedcomponents/forms/InputSelect';
import InputDate from '../sharedcomponents/forms/InputDate';
import InputRichText from '../sharedcomponents/forms/InputRichText';
import InputFile from '../sharedcomponents/forms/InputFile';
import InputRelationship from '../sharedcomponents/forms/InputRelationship';
import ButtonSubmit from '../sharedcomponents/forms/ButtonSubmit';

export default function NewPress() {
    const pressBandObj = useSelectedBand();

    const [formData, setFormData] = useState({
        headline: '',
        date: new Date(),
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const responseData = await submitPress(formData, pressBandObj);
            console.log(responseData);
        } catch (error) {
            console.error(error);
        }
    };

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, date });
    };

    const updateRichTextContent = (content) => {
        setFormData({ ...formData, headline: content });
    };

    return (
        <form id="press-form">
            <div className="divider first">FIRST</div>
            <div className="form-row one-one-one">
                <div>
                    <InputSelect
                        id="press-form-type"
                        label="What type of press is this?"
                        options={['a review', 'an interview', 'an article']}
                        labeldisplay={false}
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
                        labeldisplay={false}
                    />
                </div>
                <div>
                    <InputDate
                        id="press-form-date"
                        name="date"
                        label="When was it written?"
                        labeldisplay={false}
                        handleDateChange={handleDateChange}
                        selectedDate={formData.date}
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
                    values={[
                        'the band',
                        'a release',
                        'an edition',
                        'a show',
                        'a tour',
                        'a video',
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
                    name="quote"
                    height="250"
                    labeldisplay={false}
                    updateRichTextContent={updateRichTextContent}
                />
            </div>

            <div className="divider">FINALLY</div>

            <p className="explanation">
                Drop a link to the writeup. (Or, if it's not online anywhere,
                you can attach a pic or two from the magazine it's in.)
            </p>

            <div className="form-row one-one">
                <div>
                    <InputText
                        id="press-form-attachment-link-text"
                        label="link to writeup"
                        labeldisplay={false}
                        name="link"
                        required={false}
                        handleTextChange={handleTextChange}
                    />
                </div>
                <div>
                    <InputFile
                        id="press-form-attachments"
                        label="pic of writeup"
                        name="attachments"
                        labeldisplay={false}
                    />
                </div>
            </div>
            <div className="submit-wrapper">
                <ButtonSubmit id="press-form-submit" label="i get up" />
            </div>
        </form>
    );
}
