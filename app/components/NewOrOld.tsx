export default function NewOrOld() {
    return (
        <div className="new-or-old">
            <div className="new-stuff">
                add new
                <br />
                stuff
            </div>

            <input
                type="checkbox"
                id="new-or-old-toggle"
                // defaultChecked
            />

            <div className="old-stuff">
                fuck around
                <br />
                with old stuff
            </div>
        </div>
    );
}
