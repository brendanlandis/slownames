export default function InputPass({id, label}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type="password"
                id={id}
                className="form-input"
                placeholder={label}
            />
        </>
    );
}
