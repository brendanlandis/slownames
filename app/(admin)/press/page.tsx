import InputSelect from '../sharedcomponents/forms/InputSelect';
import NewOrOld from '../sharedcomponents/NewOrOld';
import InputDate from '../sharedcomponents/forms/InputDate';
import InputRelationship from '../sharedcomponents/forms/InputRelationship';
import InputRichText from '../sharedcomponents/forms/InputRichText';
import InputFile from '../sharedcomponents/forms/InputFile';
import InputText from '../sharedcomponents/forms/InputText';
import ButtonSubmit from '../sharedcomponents/forms/ButtonSubmit';
import { Metadata } from 'next';
import PressHeader from './PressHeader';

export const metadata: Metadata = {
    title: 'Press',
};

export default function press() {
    return (
        <main id="press">
            <PressHeader />
        </main>
    );
}
