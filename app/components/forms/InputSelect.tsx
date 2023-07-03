export default function InputSelect({ id, label, options }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select defaultValue="0" id={id}>
                {options.map((option, index) => (
                    <option value={index}>{option}</option>
                ))}
            </select>
        </>
    );
}
