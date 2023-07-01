export default function InputSelect({ id, label }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select id={id}>
                <option selected>Star Card</option>
                <option>Soundgarden</option>
                <option>Receive</option>
                <option>Alice in Chains</option>
            </select>
        </>
    );
}
