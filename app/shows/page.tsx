export default function Shows() {
    return (
        <main id="shows" className="container mx-auto prose">
            <h1>Shows</h1>
            <ul>
                <li>
                    add new show
                    <ul>
                        <li>artist</li>
                        <li>date</li>
                        <li>doors / sound</li>
                        <li>venue</li>
                        <li>city</li>
                        <li>notes</li>
                        <li>url</li>
                        <li>other bands</li>
                        <li>flyers</li>
                        <li>documentation</li>
                        <li>part of a tour?</li>
                        <li>visibility (resume / deep cut / hidden)</li>
                    </ul>
                </li>
                <li>list of old shows (view / edit / delete)</li>
                <li>
                    add new tour
                    <ul>
                        <li>artist</li>
                        <li>which shows</li>
                    </ul>
                </li>
            </ul>
        </main>
    );
}
