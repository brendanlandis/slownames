import InputSelect from '../components/forms/InputSelect';
import NewOrOld from '../components/NewOrOld';
import InputDate from '../components/forms/InputDate';
import InputTime from '../components/forms/InputTime';
import InputText from '../components/forms/InputText';
import InputFile from '../components/forms/InputFile';
import ButtonSubmit from '../components/forms/ButtonSubmit';

export default function shows() {
    return (
        <main id="shows">
            <div className="form-header">
                <h1>
                    <InputSelect
                        id="show-form-show-or-tour"
                        label="Is this a show or a tour?"
                        options={['Show', 'Tour']}
                    />
                    <span className="inbetween">for</span>
                    <InputSelect
                        id="show-form-band"
                        label="What band is this for?"
                        options={['Star Card', 'Receive', 'Receiver']}
                    />
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
                        />
                    </div>
                    <div>
                        <InputTime
                            id="show-form-doors"
                            label="When are doors?"
                            hour="20"
                        />
                    </div>
                    <div>
                        <InputTime
                            id="show-form-sound"
                            label="When does sound start?"
                            hour="21"
                        />
                    </div>
                </div>

                <div className="divider">WHERE</div>

                <div className="form-row one-one-one">
                    <div>
                        <InputText id="show-form-city" label="city" />
                    </div>
                    <div>
                        <InputText id="show-form-venue" label="venue" />
                    </div>
                    <div>
                        <InputText id="show-form-url" label="show link" />
                    </div>
                </div>

                <div className="divider">THEN WHAT ELSE</div>

                <div className="form-row one-one">
                    <div>
                        <InputText
                            id="show-form-other-bands"
                            label="Who else is playing?"
                        />
                    </div>
                    <div>
                        <InputText
                            id="show-form-notes"
                            label="Any other details"
                        />
                    </div>
                </div>

                <div className="form-row one-one-one">
                    <div>
                        <InputFile id="show-form-flyers" label="Flyers" />
                    </div>
                    <div>
                        <InputSelect
                            id="show-form-tour"
                            label="Is this part of a tour?"
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
                        />
                    </div>
                    <div>
                        <p className="explanation">Videos are cool too</p>
                        <div className="form-row one-one">
                            <div>
                                <InputText
                                    id="show-form-video-url"
                                    label="video link"
                                />
                            </div>

                            <div>
                                <InputText
                                    id="show-form-video-credit"
                                    label="video credit"
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
