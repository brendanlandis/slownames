import InputSelect from './InputSelect';

export default function InputRelationship({
    id,
    label,
    values,
    secondarylabel,
    secondaryvalues,
}) {
    return (
        <>
            <div>
                <label htmlFor={id + '-type'}>{label}</label>
                <div className="join">
                    {values.map((value, index) => (
                        <input
                            className={'join-item btn grid-col-' + (index + 1)}
                            type="radio"
                            name={id + '-type'}
                            value={index}
                            aria-label={value}
                        />
                    ))}
                </div>
            </div>
            <div>
                <InputSelect
                    id={id}
                    label={secondarylabel}
                    options={secondaryvalues}
                />
            </div>
        </>
    );
}
