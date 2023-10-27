import { GetSingleWritingTool } from './GetWritingTools';
import Markdown from 'react-markdown';
import Image from 'next/image';

export default function ViewSingleWritingTool() {
    const { data: tool, isLoading, isError } = GetSingleWritingTool();

    if (isLoading) {
        return <>loading tool...</>;
    }

    if (isError) {
        return <>error fetching tools</>;
    }

    return (
        <>
            {/* <pre>{JSON.stringify(tool, null, 2)}</pre> */}
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
                    <tr key={tool.id}>
                        <td>{tool.id}</td>
                        <td>{tool.type}</td>
                        <td>{tool.usable}</td>
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
                                    <a href={link.url}>{link.text}</a>
                                </div>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
