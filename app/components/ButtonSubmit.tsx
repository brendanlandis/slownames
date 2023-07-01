export default function ButtonSubmit({ id, label }) {
    return (
        <div className={id + '-wrapper'}>
            <button id={id} type="submit" value="submit">
                {label}
            </button>
        </div>
    );
}
