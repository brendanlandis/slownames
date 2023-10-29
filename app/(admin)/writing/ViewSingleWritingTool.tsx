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
        <div className="single-tool">
            <div className="top-buttons">
                <div>
                    <button type="button">how bout another one</button>
                </div>
            </div>
            <h3>{tool.description}</h3>
            <div>
                <Markdown>{tool.explanation}</Markdown>
            </div>
            <div>
                {tool.links?.map((link, i) => (
                    <div key={i}>
                        <a href={link.url}>{link.text}</a>
                    </div>
                ))}
            </div>
            <div>
                {tool.images?.map((image) => (
                    <a href={image.url} key={image.id}>
                        <Image
                            src={image.url}
                            alt="an extremely good image"
                            fill={true}
                            quality={100}
                        />
                    </a>
                ))}
            </div>
            <div className='bottom-buttons'>
                <button type="button">ok I did it</button>
            </div>
        </div>
    );
}
