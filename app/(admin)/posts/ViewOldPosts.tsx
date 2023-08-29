import GetPostsQuery from '../api/GetPostsQuery';

export default function ViewOldPosts() {
    const { data: posts, isLoading, isError } = GetPostsQuery();

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
                        <th>subject</th>
                        <th>text</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.date}</td>
                            <td>{post.subject}</td>
                            <td>{post.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
