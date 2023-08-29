import { Metadata } from 'next';
import PostsHeader from './posts/PostsHeader';

export const metadata: Metadata = {
    title: 'Posts',
};

export default function PostsPage() {
    return (
        <main id="posts">
            <PostsHeader />
        </main>
    );
}
