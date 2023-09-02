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
    const [relationshipType, setRelationshipType] = useState(values[0]);
    const [relationshipOptions, setRelationshipOptions] = useState(secondaryvalues);
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
                            checked={value === relationshipType}
                            onChange={() => setRelationshipType(value)}
                        />
                    ))}
                </div>
            </div>
            <div>
                <label
                    className={secondarylabeldisplay ? '' : 'hidden'}
                    htmlFor={id}
                >
                    {secondarylabel}
                </label>
                <select defaultValue="0" id={id} disabled={relationshipType === 'the band'}>
                    {relationshipOptions.map((option, index) => (
                        <option key={index} value={index}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}
