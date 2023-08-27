export default function InputTextArea({id, label, height, labeldisplay}) {
    return (
        <>
            <label className={labeldisplay ? '' : 'hidden'} htmlFor={id}>{label}</label>
            <textarea
                id={id}
                className={"form-textarea height-" + height}
                placeholder={label}
            />
        </>
    );
}
