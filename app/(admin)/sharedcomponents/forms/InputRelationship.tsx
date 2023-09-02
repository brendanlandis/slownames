import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');
import { useSelectedBand } from '../../api/SelectedBandContext';
import {
    getRelatedReleases,
    getRelatedEditions,
} from '../../api/GetRelationships';

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
    const [relationshipOptions, setRelationshipOptions] =
        useState(secondaryvalues);
    const { selectedBand } = useSelectedBand();

    useEffect(() => {
        if (relationshipType === 'the band') {
            setRelationshipOptions(secondaryvalues);
        } else if (relationshipType === 'a release') {
            getRelatedReleases(selectedBand)
                .then((releaseTitles) => {
                    setRelationshipOptions(releaseTitles);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else if (relationshipType === 'an edition') {
            getRelatedEditions(selectedBand)
                .then((editionTitles) => {
                    setRelationshipOptions(editionTitles);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [relationshipType, selectedBand]);

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
                <select
                    defaultValue="0"
                    id={id}
                    disabled={relationshipType === 'the band'}
                >
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
