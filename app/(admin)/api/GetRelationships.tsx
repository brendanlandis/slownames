import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');

export const getRelatedReleases = async (selectedBand) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/releases?populate=*`,
            {
                headers: {
                    Authorization: `bearer ${accessToken}`,
                },
            }
        );
        const data = response.data.data;
        const filteredReleases = data.filter((release) => {
            return release.attributes.bands.data.some(
                (band) => band.id === selectedBand
            );
        });
        const relatedReleases = filteredReleases.map((release) => {
            return [release.id, release.attributes.title];
        });
        return relatedReleases;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getRelatedEditions = async (selectedBand) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/editions?populate=*`,
            {
                headers: {
                    Authorization: `bearer ${accessToken}`,
                },
            }
        );
        const data = response.data.data;
        const filteredEditions = data.filter((release) => {
            return release.attributes.bands.data.some(
                (band) => band.id === selectedBand
            );
        });
        const relatedEditions = filteredEditions.map((edition) => {
            return [
                edition.id,
                edition.attributes.releases.data[0].attributes.title +
                    ' - ' +
                    edition.attributes.catalogNumber +
                    ' (' +
                    edition.attributes.label +
                    ')',
            ];
        });
        return relatedEditions;
    } catch (error) {
        console.error(error);
        return [];
    }
};
