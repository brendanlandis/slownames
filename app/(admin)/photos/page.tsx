import InputFile from '../sharedcomponents/forms/InputFile';
import InputSelect from '../sharedcomponents/forms/InputSelect';
import InputText from '../sharedcomponents/forms/InputText';
import NewOrOld from '../sharedcomponents/NewOrOld';
import ButtonSubmit from '../sharedcomponents/forms/ButtonSubmit';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Photos',
};

export default function photos() {
    return (
        <main id="photos">
            <div className="form-header">
                <h1>
                    <span>
                        <InputSelect
                            id="show-form-show-or-tour"
                            label="Is this a show or a tour?"
                            options={['Shoot', 'Single Photo']}
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
            <form id="photo-form">
                <div className="divider first">ADD A NEW SHOOT</div>
                <div className="form-row one-one">
                    <div>
                        <InputText
                            id="photo-form-shoot-name"
                            label="name of shoot"
                            labeldisplay={false}
                        />
                    </div>
                    <div>
                        <InputText
                            id="photo-form-shoot-credit"
                            label="photographer credit"
                            labeldisplay={false}
                        />
                    </div>
                </div>
                <div className="side-by-side">
                    <InputFile
                        id="photo-form-shoot-files"
                        label="photos"
                        labeldisplay={true}
                    />
                </div>
                <div className="divider">OR A SINGLE PHOTO</div>
                <div className="form-row one-one">
                    <div>
                        <InputSelect
                            id="photo-form-photo-shoot"
                            label="to which shoot does this belong?"
                            labeldisplay={false}
                            options={[
                                'to which shoot does this belong?',
                                'the first one',
                                'the second one',
                            ]}
                        />
                    </div>
                    <div>
                        <InputText
                            id="photo-form-photo-credit"
                            label="credit (if not _______)"
                            labeldisplay={false}
                        />
                    </div>
                </div>
                <div className="form-row one-one">
                    <div className="side-by-side">
                        <InputFile
                            id="photo-form-photo-file"
                            label="photo"
                            labeldisplay={true}
                        />
                    </div>
                    <div>
                        <InputSelect
                            id="photo-form-photo-usability"
                            label="how usable is this pic?"
                            labeldisplay={false}
                            options={[
                                'how usable is this pic?',
                                "it's my new bio pic",
                                'already used it for album art',
                                'undecided',
                                "it's nice",
                                "it's usable",
                                'eh',
                                'undecided',
                            ]}
                        />
                    </div>
                </div>
            </form>
            <div className="submit-wrapper">
                <ButtonSubmit
                    id="photos-form-submit"
                    label="damn i look great wow"
                />
            </div>
        </main>
    );
}
