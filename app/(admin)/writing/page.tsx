import { Metadata } from 'next';
import WritingHeader from './WritingHeader';

export const metadata: Metadata = {
    title: 'Writing',
};

export default function WritingPage() {
    return (
        <main id="writing">
            <WritingHeader />
        </main>
    );
}
