import GetPosts from './GetPosts';
import Markdown from 'react-markdown';

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
                            <td><Markdown>{post.text}</Markdown></td>
                            <td>
                                {post.bands.map((band) => (
                                    <div key={band.id}>
                                        {band.bandname}
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
