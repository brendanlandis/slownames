export default function NewOrOld({ isChecked, onToggle }) {
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
                checked={isChecked}
                onChange={onToggle}
            />

            <div className="old-stuff">
                mess with
                <br />
                old stuff
            </div>
        </div>
    );
}
