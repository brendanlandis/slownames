import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');

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

    useEffect(() => {
        if (relationshipType === 'the band') {
            setRelationshipOptions(secondaryvalues);
        } else if (relationshipType === 'a release') {
            axios
                .get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/releases`, {
                    headers: {
                        Authorization: `bearer ${accessToken}`,
                    },
                })
                .then((response) => {
                    const data = response.data.data;
                    const releaseTitles = data.map(
                        (release) => release.attributes.title
                    );
                    setRelationshipOptions(releaseTitles);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else if (relationshipType === 'an edition') {
            axios
                .get(
                    `${process.env.NEXT_PUBLIC_STRAPI_URL}/editions?populate=*`,
                    {
                        headers: {
                            Authorization: `bearer ${accessToken}`,
                        },
                    }
                )
                .then((response) => {
                    const data = response.data.data;
                    console.log(data);
                    const editionTitles = data.map(
                        (edition) =>
                            edition.attributes.releases.data[0].attributes.title +
                            ' - ' +
                            edition.attributes.catalogNumber + 
                            ' (' +
                            edition.attributes.label +
                            ')'
                    );
                    setRelationshipOptions(editionTitles);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [relationshipType]);

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
