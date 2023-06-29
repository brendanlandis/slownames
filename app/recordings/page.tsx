export default function Recordings() {
    return (
        <main id="recordings" className="container mx-auto prose">
            <h1>Recordings</h1>
            <ul>
                <li>
                    add new work
                    <ul>
                        <li>artist(s)</li>
                        <li>title</li>
                        <li>cover</li>
                        <li>tracklist</li>
                        <li>about this album</li>
                        <li>credits</li>
                        <li>bandcamp url</li>
                        <li>bandcamp embed ID</li>
                        <li>spotify URL</li>
                        <li>link, if it's offsite somewhere</li>
                        <li>visibility (resume / deep cut / hidden)</li>
                        <li>
                            liner notes (images of packaging, backcover.jpg or
                            something)
                        </li>
                        <li>
                            attachments (bonus stuff that might come with the
                            bandcamp download or something - scores or
                            something)
                        </li>
                        <li>editions</li>
                    </ul>
                </li>
                <li>
                    add new edition
                    <ul>
                        <li>work</li>
                        <li>
                            how many CDs / cassettes / records / objects / other
                        </li>
                        <li>what label</li>
                        <li>catalog number</li>
                        <li>release date</li>
                        <li>photos</li>
                    </ul>
                </li>
                <li>list of old work & editions (view / edit / delete)</li>
            </ul>
        </main>
    );
}
