import InputFile from '../components/forms/InputFile';
import InputSelect from '../components/forms/InputSelect';
import InputText from '../components/forms/InputText';
import InputTextArea from '../components/forms/InputTextArea';
import NewOrOld from '../components/NewOrOld';
import ButtonSubmit from '../components/forms/ButtonSubmit';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Videos',
};

export default function videos() {
    return (
        <main id="videos">
            <div className="form-header">
                <h1>
                    Videos for
                    <span>
                        <InputSelect
                            id="video-form-band"
                            label="What band is this for?"
                            options={['Star Card', 'Receive', 'Receiver']}
                            labeldisplay={false}
                        />
                    </span>
                </h1>
                <NewOrOld />
            </div>
            <form id="videos-form">
                <div className="divider first">FIRST</div>
                <div className="form-row one-one">
                    <div>
                        <InputText
                            id="videos-form-title"
                            label="title"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputSelect
                            id="videos-form-work"
                            label="which work is this from?"
                            labeldisplay={false}
                            options={[
                                'which work is this from?',
                                'Freak World EP',
                                'Eulogy for Land',
                                'Superunknown',
                            ]}
                        />
                    </div>
                </div>

                <div className="divider">THEN</div>
                <div className="form-row one-one">
                    <div>
                        <InputText
                            id="video-form-video-url"
                            label="video link"
                            labeldisplay={false}
                        />
                    </div>

                    <div>
                        <InputFile
                            id="video-form-file"
                            label="or, upload the file"
                            labeldisplay={true}
                        />
                    </div>
                </div>

                <div className="divider">LASTLY</div>

                <div>
                    <InputTextArea
                        id="video-form-credits"
                        label="credits"
                        height="200"
                        labeldisplay={false}
                    />
                </div>
                <div>
                    <InputSelect
                        id="video-form-visibility"
                        label=""
                        labeldisplay={true}
                        options={[
                            'where should it be visible?',
                            'CV / home page',
                            'only in the gig log',
                            'hidden (just archiving)',
                        ]}
                    />
                </div>
            </form>
            <div className="submit-wrapper">
                <ButtonSubmit
                    id="video-form-submit"
                    label="roll with the punches & get to what's real"
                />
            </div>
        </main>
    );
}
