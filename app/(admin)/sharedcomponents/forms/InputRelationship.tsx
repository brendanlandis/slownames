import InputSelect from './InputSelect';
import { useState } from 'react';

export default function InputRelationship({
    id,
    label,
    values,
    labeldisplay,
    secondarylabel,
    secondaryvalues,
    secondarylabeldisplay,
}) {
    const [relationshipValue, setRelationshipValue] = useState(values[0]);
    return (
        <>
            <div>
                <label
                    className={labeldisplay ? '' : 'hidden'}
                    htmlFor={id + '-type'}
                >
                    {label}
                </label>
                <div className="join">
                    {values.map((value, index) => (
                        <input
                            className={'join-item btn grid-col-' + (index + 1)}
                            type="radio"
                            name={id + '-type'}
                            value={value}
                            key={index}
                            aria-label={value}
                            checked={value === relationshipValue}
                            onChange={() => setRelationshipValue(value)}
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
