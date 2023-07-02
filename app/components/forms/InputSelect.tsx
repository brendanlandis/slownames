export default function InputSelect({ id, label }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select defaultValue="1" id={id}>
                <option value="1">Star Card</option>
                <option value="2">Soundgarden</option>
                <option value="3">Receive</option>
                <option value="4">Alice in Chains</option>
            </select>
        </>
    );
}
