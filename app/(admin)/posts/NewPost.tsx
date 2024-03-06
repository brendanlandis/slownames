import { useState } from 'react';
import { useSelectedBand } from '../api/SelectedBandContext';
import submitPost from '../api/SubmitPost';

import InputText from '../sharedcomponents/forms/InputText';
import InputDate from '../sharedcomponents/forms/InputDate';
import InputRichText from '../sharedcomponents/forms/InputRichText';
import InputFile from '../sharedcomponents/forms/InputFile';
import InputRelationship from '../sharedcomponents/forms/InputRelationship';
import ButtonSubmit from '../sharedcomponents/forms/ButtonSubmit';

export default function NewPosts() {
    const postBandObj = useSelectedBand();
    const [relationshipType, setRelationshipType] = useState('');
    const [selectedObject, setSelectedObject] = useState('');

    const [formData, setFormData] = useState({
        headline: '',
        date: new Date(),
        text: '',
        attachmentlinktext: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const responseData = await submitPost(formData, postBandObj);
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
        setFormData({ ...formData, text: content });
    };

    const handleRelationshipChange = (type, object) => {
        console.log('type:' + type);
        console.log('object:' + object);
        setRelationshipType(type);
        setSelectedObject(object);
    };

    return (
        <form id="posts-form" onSubmit={handleSubmit}>
            <div className="divider first">FIRST</div>
            <p className="explanation">
                Write out the headline and content, plus the date you'd like this to go live on.
            </p>
            <div className="form-row four-one">
                <div className="wrapper-headline">
                    <InputText
                        id="posts-form-headline"
                        name="headline"
                        label="headline"
                        labeldisplay={false}
                        required={false}
                        handleTextChange={handleTextChange}
                    />
                </div>

                <div className="wrapper-date">
                    <InputDate
                        id="posts-form-date"
                        name="date"
                        label="date"
                        labeldisplay={false}
                        handleDateChange={handleDateChange}
                        selectedDate={formData.date}
                    />
                </div>
            </div>
            <div>
                <InputRichText
                    id="posts-form-text"
                    label="text"
                    name="text"
                    height="500"
                    labeldisplay={false}
                    updateRichTextContent={updateRichTextContent}
                />
            </div>
            <div className="divider">THEN</div>
            <p className="explanation">
                You can attach something to this post (like a PDF, or a ZIP file or something), and it'll be linked to
                at the bottom of the post. Mostly for nerd stuff - scores, max / puredata / vcv patches, MIDI files, MOD
                files, idk!
            </p>
            <div className="form-row one-one">
                <div>
                    <InputFile id="posts-form-attachments" name="attachments" label="attachment" labeldisplay={false} />
                </div>
                <div>
                    <InputText
                        id="posts-form-attachment-link-text"
                        name="attachmentlinktext"
                        label="link text (e.g. check out this score)"
                        labeldisplay={false}
                        required={false}
                        handleTextChange={handleTextChange}
                    />
                </div>
            </div>
            <div className="divider">LASTLY</div>
            <p className="explanation">Is this about the band generally, or a specific thing?</p>

            <div className="form-row one">
                <InputRelationship
                    id="posts-form-relationship"
                    values={['the band', 'a release', 'an edition', 'some press', 'a show', 'a tour', 'a video']}
                />
            </div>
            <div className="submit-wrapper">
                <ButtonSubmit id="posts-form-submit" label="save" />
            </div>
        </form>
    );
}
