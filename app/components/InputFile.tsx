export default function InputFile({ id, label }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type="file"
                id={id}
                className="file-input file-input-bordered file-input-primary"
            />
        </>
    );
}
