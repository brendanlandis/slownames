import { Metadata } from 'next';
import TopicHeader from './TopicHeader';

export const metadata: Metadata = {
    title: 'Writing Topic',
};

export default function WritingPage() {
    return (
        <main id="writing-topic">
            <TopicHeader />
        </main>
    );
}
