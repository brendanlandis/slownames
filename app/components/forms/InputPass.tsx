export default function InputPass({id, label, labeldisplay}) {
    return (
        <>
            <label className={labeldisplay ? '' : 'hidden'} htmlFor={id}>{label}</label>
            <input
                type="password"
                id={id}
                name={id}
                className='form-input'
                placeholder={label}
            />
        </>
    );
}
