import InputSelect from './InputSelect';

export default function InputRelationship({
    id,
    label,
    values,
    labeldisplay, 
    secondarylabel,
    secondaryvalues,
    secondarylabeldisplay
}) {
    return (
        <>
            <div>
                <label className={labeldisplay ? '' : 'hidden'} htmlFor={id + '-type'}>{label}</label>
                <div className="join">
                    {values.map((value, index) => (
                        <input
                            className={'join-item btn grid-col-' + (index + 1)}
                            type="radio"
                            name={id + '-type'}
                            value={index}
                            key={index}
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
                    labeldisplay={secondarylabeldisplay}
                />
            </div>
        </>
    );
}
