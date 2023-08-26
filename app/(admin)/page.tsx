import { Metadata } from 'next';
import NewsHeader from './news/NewsHeader';

export const metadata: Metadata = {
    title: 'News',
};

export default function news() {
    return (
        <main id="news">
            <NewsHeader />
        </main>
    );
}
