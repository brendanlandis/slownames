import GetPress from './GetPress';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function ViewPress() {
    const { data: press, isLoading, isError } = GetPress();

    if (isLoading) {
        return <>loading press...</>;
    }

    if (isError) {
        return <>error fetching press</>;
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>type</th>
                        <th>quote</th>
                        <th>visibility</th>
                        <th>bands</th>
                    </tr>
                </thead>
                <tbody>
                    {press.map((press) => (
                        <tr key={press.id}>
                            <td>{press.date}</td>
                            <td>{press.type}</td>
                            <td><ReactMarkdown>{press.quote}</ReactMarkdown></td>
                            <td>{press.visibility}</td>
                            <td>
                                {press.bands.map((band) => (
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
