// TODO add:
// required
// min length 8

export default function InputText({id, label, labeldisplay}) {
    return (
        <>
            <label className={labeldisplay ? '' : 'hidden'} htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                name={id}
                className="form-input"
                placeholder={label}
                required
            />
        </>
    );
}