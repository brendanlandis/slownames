export default function InputFile({ id, name, label, labeldisplay }) {
    return (
        <>
            <label className={labeldisplay ? '' : 'hidden'} htmlFor={id}>
                {label}
            </label>
            <input
                type="file"
                id={id}
                name={name}
                multiple
                className="file-input file-input-bordered file-input-primary"
            />
        </>
    );
}
