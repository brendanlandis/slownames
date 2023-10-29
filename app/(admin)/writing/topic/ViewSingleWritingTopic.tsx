import { GetSingleWritingTool } from '../GetWritingTools';
import Markdown from 'react-markdown';
import Image from 'next/image';

export default function ViewSingleWritingTopic() {
    const { data: tool, isLoading, isError } = GetSingleWritingTool();
    if (isLoading) {
        return <>loading tool...</>;
    }

    if (isError) {
        return <>error fetching tools</>;
    }

    return (
        <>
            <div className="single-tool-header">
                <h1>{tool.description}</h1>
                <div className="top-buttons">
                    <button type="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                            />
                        </svg>
                    </button>
                    <button type="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="single-tool-body">
                <div className="tool-explanation">
                    <Markdown>{tool.explanation}</Markdown>
                </div>
                <div className="tool-links">
                    {tool.links?.map((link, i) => (
                        <div key={i}>
                            <a href={link.url}>{link.text}</a>
                        </div>
                    ))}
                </div>
                <div className="tool-images">
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
            </div>
        </>
    );
}
