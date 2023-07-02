export default function InputRelationship({ id, label }) {
    return (
        <>
            <label htmlFor={id}>
                {label}
            </label>
            <div className="join">
                <input
                    className="join-item btn"
                    type="radio"
                    name={id}
                    aria-label="work"
                />
                <input
                    className="join-item btn"
                    type="radio"
                    name={id}
                    aria-label="press"
                />
                <input
                    className="join-item btn"
                    type="radio"
                    name={id}
                    aria-label="show(s)"
                />
                <input
                    className="join-item btn"
                    type="radio"
                    name={id}
                    aria-label="video"
                />
            </div>

            <label htmlFor="news-form-relationship">relationship</label>
            <select className="select select-primary" defaultValue="0" disabled>
                <option value="0" disabled>cool, which one?</option>
                <option value="1">one</option>
                <option value="2">two</option>
                <option value="3">three</option>
                <option value="4">four</option>
            </select>
        </>
    );
}
