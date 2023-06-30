
export default function news({content}) {
    return (
        <main id="news" className="container mx-auto prose">
            <h1>News or Posts or Whatever</h1>
            <ul>
                <li>
                    add new post
                    <ul>
                        <li>subject</li>
                        <li>date</li>
                        <li>text</li>
                        <li>attachments</li>
                        <li>
                            what's this about? (artist, work, press, show, tour,
                            video)
                        </li>
                    </ul>
                </li>
                <li>list of old posts (view / edit / delete)</li>
            </ul>
        </main>
    );
}
