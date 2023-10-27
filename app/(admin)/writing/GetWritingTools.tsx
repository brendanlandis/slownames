import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');
import { WritingTool } from '@/app/types';
import GetUser from '../api/GetUser';

const fetchWritingTools = async () => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/writing-tools?populate=*&pagination[pageSize]=500`,
            {
                headers: {
                    Authorization: `bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const filterWritingToolsData = (data, selectedUser) => {
    const filteredWritingToolsData: WritingTool[] = data.data.map((tool) => ({
        id: tool.id,
        type: tool.attributes.type,
        singleUse: tool.attributes.singleUse,
        used: tool.attributes.used,
        users: tool.attributes.users.data.map((user) => ({
            id: user.id,
        })),
        description: tool.attributes.description,
        explanation: tool.attributes.explanation,
        images: tool.attributes.images?.data?.map((image) => ({
            id: image.id,
            url: `${process.env.NEXT_PUBLIC_STRAPI_URL?.replace(
                '.net/api',
                '.net'
            )}${image.attributes.url}`,
        })),
        links: tool.attributes.links.map((link) => ({
            text: link.text,
            url: link.url,
        })),
    }));

    const filteredWritingToolsForTargetUser: WritingTool[] =
        filteredWritingToolsData.filter((tool) =>
            tool.users.some((user) => user.id === selectedUser)
        );
    return filteredWritingToolsForTargetUser;
};

const GetWritingTools = () => {
    const { data, ...rest } = useQuery({
        queryKey: ['writingtools'],
        queryFn: fetchWritingTools,
    });
    const selectedUser = GetUser().data;
    const filteredData = data
        ? filterWritingToolsData(data, selectedUser.id)
        : [];
    return {
        data: filteredData,
        ...rest,
    };
};

export const GetSingleWritingTool = () => {
    const { data, ...rest } = useQuery({
        queryKey: ['writingtools'],
        queryFn: fetchWritingTools,
    });
    const selectedUser = GetUser().data;
    const filteredData = data
        ? filterWritingToolsData(data, selectedUser.id)
        : [];

    const getRandomRow = (array: any[]) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };

    const randomData = filteredData ? getRandomRow(filteredData) : null;
    // console.log(randomData);
    return {
        data: randomData,
        ...rest,
    };
};

export default GetWritingTools;
