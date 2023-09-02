import GetPosts from './GetPosts';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function ViewPosts() {
    const { data: posts, isLoading, isError } = GetPosts();

    if (isLoading) {
        return <>loading posts...</>;
    }

    if (isError) {
        return <>error fetching posts</>;
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>headline</th>
                        <th>text</th>
                        <th>bands</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.date}</td>
                            <td>{post.headline}</td>
                            <td><ReactMarkdown>{post.text}</ReactMarkdown></td>
                            <td>
                                {post.bands.map((band) => (
                                    <div key={band.id}>
                                        {band.id} - {band.bandname}
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
