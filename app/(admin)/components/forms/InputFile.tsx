export default function InputFile({ id, label, labeldisplay }) {
    return (
        <>
            <label className={labeldisplay ? '' : 'hidden'} htmlFor={id}>{label}</label>
            <input
                type="file"
                id={id}
                multiple
                className='file-input file-input-bordered file-input-primary'
            />
        </>
    );
}
