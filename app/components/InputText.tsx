export default function InputText({id, label}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                className="form-input"
                placeholder={label}
            />
        </>
    );
}