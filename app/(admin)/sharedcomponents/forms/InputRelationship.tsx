import { useState, useEffect } from 'react';
import { useSelectedBand } from '../../api/SelectedBandContext';
import {
    getRelatedReleases,
    getRelatedEditions,
} from '../../api/GetRelationships';

export default function InputRelationship({ id, values }) {
    const { selectedBand } = useSelectedBand();

    const [relType, setRelType] = useState(values[0]);
    const [relObjects, setRelObjects] = useState([
        [0, ''],
    ]);


    useEffect(() => {
        if (relType === 'the band') {
            setRelObjects([[0, '']]);
        } else if (relType === 'a release') {
            getRelatedReleases(selectedBand)
                .then((relatedReleases) => {
                    setRelObjects(relatedReleases);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else if (relType === 'an edition') {
            getRelatedEditions(selectedBand)
                .then((relatedEditions) => {
                    setRelObjects(relatedEditions);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [relType, selectedBand]);

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
                            checked={value === relType}
                            onChange={() => setRelType(value)}
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
                    disabled={relType === 'the band'}
                >
                    {relObjects.map((object, index) => (
                        <option key={index} value={object[0]}>
                            {object[1]}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}
