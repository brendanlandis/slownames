export default function InputCheckbox({ id, keyNum, label, labeldisplay }) {
    return (
        <div key={keyNum} className="checkbox-wrapper">
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
