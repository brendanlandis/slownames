import GetWritingTools from './GetWritingTools';
import Markdown from 'react-markdown';
import Image from 'next/image';

export default function ViewWritingTools() {
    const { data: tools, isLoading, isError } = GetWritingTools();

    if (isLoading) {
        return <>loading tools...</>;
    }

    if (isError) {
        return <>error fetching tools</>;
    }

    return (
        <>
            {/* <pre>{JSON.stringify(tools, null, 2)}</pre> */}
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>type</th>
                        <th>usable</th>
                        <th>used</th>
                        <th>users</th>
                        <th>description</th>
                        <th>explanation</th>
                        <th>images</th>
                        <th>links</th>
                    </tr>
                </thead>
                <tbody>
                    {tools.map((tool) => (
                        <tr key={tool.id}>
                            <td>{tool.id}</td>
                            <td>{tool.type}</td>
                            <td>{tool.usable.toString()}</td>
                            <td>{tool.used}</td>
                            <td>
                                {tool.users?.map((user) => (
                                    <div key={user.id}>{user.id}</div>
                                ))}
                            </td>
                            <td>{tool.description}</td>
                            <td>
                                <Markdown>{tool.explanation}</Markdown>
                            </td>
                            <td>
                                {tool.images?.map((image) => (
                                    <div key={image.id}>
                                        <Image
                                            src={image.url}
                                            alt="an extremely good image"
                                            fill={true}
                                            quality={100}
                                        />
                                    </div>
                                ))}
                            </td>
                            <td>
                                {tool.links?.map((link, i) => (
                                    <div key={i}>
                                        <a href={link.url}>
                                            {link.text}
                                        </a>
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
