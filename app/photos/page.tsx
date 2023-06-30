export default function photos() {
    return (
        <main id="photos" className="container mx-auto prose">
            <h1>Photos</h1>
            <ul>
                <li>
                    add new single photo
                    <ul>
                        <li>shoot</li>
                        <li>photo</li>
                        <li>credit</li>
                        <li>
                            usability (undecided, nice, usable, nah, album art,
                            bio)
                        </li>
                    </ul>
                </li>
                <li>
                    add new shoot
                    <ul>
                        <li>artist</li>
                        <li>name of shoot</li>
                        <li>credit</li>
                        <li>artist</li>
                        <li>photos</li>
                    </ul>
                </li>
                <li>
                    list of shoots & their photos (view / edit / delete - should
                    be able to quickly assign usability to different photos at a
                    glance)
                </li>
            </ul>
        </main>
    );
}
