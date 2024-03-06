import { useState, useEffect } from 'react';
import { useSelectedBand } from '../../api/SelectedBandContext';
import { getRelatedReleases, getRelatedEditions } from '../../api/GetRelationships';

export default function InputRelationship({ id, values }) {
    const { selectedBand } = useSelectedBand();

    const [relType, setRelType] = useState(values[0]);
    const [relObjects, setRelObjects] = useState([[0, '']]);
    const [relObject, setRelObject] = useState(0);

    useEffect(() => {
        if (relType === 'the band') {
            setRelObjects([[0, '']]);
        } else if (relType === 'a release') {
            getRelatedReleases(selectedBand)
                .then((relatedReleases) => {
                    setRelObjects(relatedReleases);
                    // setRelObject(relatedReleases[0][0]);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else if (relType === 'an edition') {
            getRelatedEditions(selectedBand)
                .then((relatedEditions) => {
                    setRelObjects(relatedEditions);
                    // setRelObject(relatedEditions[0][0]);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        console.log('----------');
        console.log('relType: ' + relType);
        console.log('relObjects:');
        console.log(relObjects);
        console.log('relObject: ' + relObject);
        // console.log('relType: ' + relType);
        // console.log('relObject: ' + relObject);
    }, [relType, selectedBand]);

    const handleRelObjectChange = (e) => {
        if (relType === 'the band') {
            setRelObject(0);
        } else {
            // const newObject: number = relObjects[0][0] as number;
            // setRelObject(newObject);
            setRelObject(parseInt(e.target.value));
        }
        console.log('----------');
        console.log('relType: ' + relType);
        console.log('relObjects:');
        console.log(relObjects);
        console.log('relObject: ' + relObject);
    };

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
                    id={id + '-object'}
                    disabled={relType === 'the band'}
                    // onChange={(e) => setRelObject(parseInt(e.target.value))}
                    onChange={(e) => handleRelObjectChange(e)}
                    value={relObject}
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
