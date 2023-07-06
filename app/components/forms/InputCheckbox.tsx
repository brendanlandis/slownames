export default function InputCheckbox({ id, key, label, labeldisplay }) {
    return (
        <div key={key} className="checkbox-wrapper">
            <input
                type="checkbox"
                id={id}
                name={id}
            />
            <label htmlFor={id} className={labeldisplay ? '' : 'hidden'}>
                {label}
            </label>
        </div>
    );
}
