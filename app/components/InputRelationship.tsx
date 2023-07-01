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
            <select className="select select-primary" disabled>
                <option disabled>cool, which one?</option>
                <option>one</option>
                <option>two</option>
                <option>three</option>
                <option>four</option>
            </select>
        </>
    );
}
