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

            <div className="divider first">WHEN & WHERE</div>

            <form id="show-form">
                <div className="show-form-row date-doors-sound">
                    <div className="form-input-box form-input-box-date">
                        <InputDate
                            id="show-form-date"
                            label="When's the show?"
                        />
                    </div>
                    <div className="form-input-box form-input-box-doors">
                        <InputTime
                            id="show-form-doors"
                            label="When are doors?"
                            hour="20"
                        />
                    </div>
                    <div className="form-input-box form-input-box-sound">
                        <InputTime
                            id="show-form-sound"
                            label="When does sound start?"
                            hour="21"
                        />
                    </div>
                </div>

                <div className="show-form-row city-venue-url">
                    <div className="form-input-box form-input-box-city">
                        <InputText
                            id="show-form-city"
                            label="city"
                        />
                    </div>
                    <div className="form-input-box form-input-box-venue">
                        <InputText
                            id="show-form-venue"
                            label="venue"
                        />
                    </div>
                    <div className="form-input-box form-input-box-url">
                        <InputText
                            id="show-form-url"
                            label="show link"
                        />
                    </div>
                </div>

                <div className="divider">THEN</div>

                <div className="show-form-row otherbands-notes">
                    <div className="form-input-box form-input-box-other-bands">
                        <InputText
                            id="show-form-other-bands"
                            label="Who else is playing?"
                        />
                    </div>
                    <div className="form-input-box form-input-box-venue">
                        <InputText
                            id="show-form-notes"
                            label="Any other details"
                        />
                    </div>
                </div>

                <div className="show-form-row flyers-tour-visibility">
                    <div className="form-input-box form-input-box-flyers">
                        <InputFile id="show-form-flyers" label="Flyers" />
                    </div>
                    <div className="form-input-box form-input-box-tour">
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

                    <div className="form-input-box form-input-box-visibility">
                        <InputSelect
                            id="show-form-visibility"
                            label="Once it's passed, where should it be visible?"
                            options={[
                                'CV / home page',
                                'only in the gig log',
                                'hidden (just archiving)',
                            ]}
                        />
                    </div>
                </div>

                <div className="divider">AFTERWARDS</div>

                <div className="show-form-row documentation">
                    <div className="form-input-box form-input-box-documentation">
                        <InputFile
                            id="show-form-documentation"
                            label="Pics or it didn't happen"
                        />
                    </div>
                    <div className="form-input-box form-input-box-videos">
                        <InputSelect
                            id="show-form-video-host"
                            label="host"
                            options={['youtube', 'vimeo']}
                        />

                        <InputText id="show-form-video-id" label="video ID" />

                        <InputText
                            id="show-form-video-credit"
                            label="credit"
                        />
                    </div>
                </div>
            </form>

            <ButtonSubmit id="show-form-submit" label="nothin' gets me down" />
        </main>
    );
}
