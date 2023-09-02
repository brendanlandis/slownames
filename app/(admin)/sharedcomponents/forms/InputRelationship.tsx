import { useState, useEffect } from 'react';
import { useSelectedBand } from '../../api/SelectedBandContext';
import {
    getRelatedReleases,
    getRelatedEditions,
} from '../../api/GetRelationships';

export default function InputRelationship({
    id,
    values,
    handleRelationshipChange,
    selectedObject,
}) {
    const [relationshipType, setRelationshipType] = useState(values[0]);
    const [relationshipObjects, setRelationshipObjects] = useState([
        [0, 'ok cool'],
    ]);
    const [selectedValue, setSelectedValue] = useState('');

    const { selectedBand } = useSelectedBand();

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
    };

    useEffect(() => {
        if (relationshipType === 'the band') {
            setRelationshipObjects([[0, 'ok cool']]);
        } else if (relationshipType === 'a release') {
            getRelatedReleases(selectedBand)
                .then((releaseTitles) => {
                    setRelationshipObjects(releaseTitles);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else if (relationshipType === 'an edition') {
            getRelatedEditions(selectedBand)
                .then((editionTitles) => {
                    setRelationshipObjects(editionTitles);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [relationshipType, selectedBand]);

    useEffect(() => {
        handleRelationshipChange(relationshipType, selectedValue);
    }, [relationshipType, selectedValue, handleRelationshipChange]);

    useEffect(() => {
        if (relationshipObjects.length > 0) {
            setSelectedValue(String(relationshipObjects[0][0]));
        }
    }, [relationshipObjects]);

    return (
        <>
            <div>
                <label className="hidden" htmlFor={id + '-type'}>
                    What kind of thing is this about?
                </label>
                <div className="join" id={id + '-type-wrapper'}>
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
                <label className="hidden" htmlFor={id}>
                    And then, which one specifically is this about?
                </label>
                <select
                    defaultValue="0"
                    id={id + '-object'}
                    disabled={relationshipType === 'the band'}
                    onChange={handleSelectChange}
                >
                    {relationshipObjects.map((object, index) => (
                        <option key={index} value={object[0]}>
                            {object[1]}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}
