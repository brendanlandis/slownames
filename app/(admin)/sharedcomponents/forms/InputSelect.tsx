export default function InputSelect({ id, label, options, labeldisplay }) {
    return (
        <>
            <label className={labeldisplay ? '' : 'hidden'} htmlFor={id}>{label}</label>
            <select defaultValue="0" id={id}>
                {options.map((option, index) => (
                    <option key={index} value={index}>{option}</option>
                ))}
            </select>
        </>
    );
}
