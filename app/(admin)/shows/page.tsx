import InputSelect from '../sharedcomponents/forms/InputSelect';
import NewOrOld from '../sharedcomponents/NewOrOld';
import InputDate from '../sharedcomponents/forms/InputDate';
import InputTime from '../sharedcomponents/forms/InputTime';
import InputText from '../sharedcomponents/forms/InputText';
import InputFile from '../sharedcomponents/forms/InputFile';
import ButtonSubmit from '../sharedcomponents/forms/ButtonSubmit';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Shows',
};

export default function shows() {
    return (
        <main id="shows">
            <div className="form-header">
                <h1>
                    <span>
                        <InputSelect
                            id="show-form-show-or-tour"
                            label="Is this a show or a tour?"
                            options={['Show', 'Tour']}
                            labeldisplay={false}
                        />
                    </span>
                    <span className="inbetween">for</span>
                    <span>
                        <InputSelect
                            id="show-form-band"
                            label="What band is this for?"
                            options={['Star Card', 'Receive', 'Receiver']}
                            labeldisplay={false}
                        />
                    </span>
                </h1>
                <NewOrOld />
            </div>

            <form id="show-form">
                <div className="divider first">WHEN</div>

                <div className="form-row one-one-one">
                    <div>
                        <InputDate
                            id="show-form-date"
                            label="What day is the show?"
                            labeldisplay={true}
                        />
                    </div>
                    <div>
                        <InputTime
                            id="show-form-doors"
                            label="When are doors?"
                            hour="20"
                            labeldisplay={true}
                        />
                    </div>
                    <div>
                        <InputTime
                            id="show-form-sound"
                            label="When does sound start?"
                            hour="21"
                            labeldisplay={true}
                        />
                    </div>
                </div>

                <div className="divider">WHERE</div>

                <div className="form-row one-one-one">
                    <div>
                        <InputText
                            id="show-form-city"
                            label="city"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputText
                            id="show-form-venue"
                            label="venue"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputText
                            id="show-form-url"
                            label="show link"
                            labeldisplay={false}
                        />
                    </div>
                </div>

                <div className="divider">THEN WHAT ELSE</div>

                <div className="form-row one-one">
                    <div>
                        <InputText
                            id="show-form-other-bands"
                            label="Who else is playing?"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputText
                            id="show-form-notes"
                            label="Any other details"
                            labeldisplay={false}
                        />
                    </div>
                </div>

                <div className="form-row one-one-one">
                    <div>
                        <InputFile
                            id="show-form-flyers"
                            label="Flyers"
                            labeldisplay={true}
                        />
                    </div>
                    <div>
                        <InputSelect
                            id="show-form-tour"
                            label="Is this part of a tour?"
                            labeldisplay={true}
                            options={[
                                'world tour 2024',
                                'world tour 2025',
                                'world tour 2026',
                            ]}
                        />
                    </div>

                    <div>
                        <InputSelect
                            id="show-form-visibility"
                            label="After it's over, where should it be visible?"
                            labeldisplay={true}
                            options={[
                                'CV / home page',
                                'only in the gig log',
                                'hidden (just archiving)',
                            ]}
                        />
                    </div>
                </div>

                <div className="divider">AFTERWARDS</div>
                <p className="explanation">
                    Come back and put documentation here once it's over.
                </p>

                <div className="form-row one-one">
                    <div className="form-input-box-documentation">
                        <InputFile
                            id="show-form-documentation"
                            label="Pics or it didn't happen"
                            labeldisplay={true}
                        />
                    </div>
                    <div>
                        <p className="explanation">Videos are cool too</p>
                        <div className="form-row one-one">
                            <div>
                                <InputText
                                    id="show-form-video-url"
                                    label="video link"
                                    labeldisplay={false}
                                />
                            </div>

                            <div>
                                <InputText
                                    id="show-form-video-credit"
                                    label="video credit"
                                    labeldisplay={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="submit-wrapper">
                <ButtonSubmit
                    id="show-form-submit"
                    label="nothin' gets me down"
                />
            </div>
        </main>
    );
}
