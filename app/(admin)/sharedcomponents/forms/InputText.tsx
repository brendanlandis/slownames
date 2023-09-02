export default function InputText({id, name, label, labeldisplay, required, handleTextChange}) {
    return (
        <>
            <label className={labeldisplay ? '' : 'hidden'} htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                name={name}
                className="form-input"
                placeholder={label}
                required={required}
                onChange={handleTextChange}
            />
        </>
    );
}
