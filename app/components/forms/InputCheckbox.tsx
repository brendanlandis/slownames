export default function InputCheckbox({ id, key, label }) {
    return (
        <div key={key} className="checkbox-wrapper">
            <input
                type="checkbox"
                id={id}
                name={id}
            />
            <label htmlFor={id}>
                {label}
            </label>
        </div>
    );
}
