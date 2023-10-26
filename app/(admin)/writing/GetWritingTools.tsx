import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');
import { WritingTool } from '@/app/types';

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
        usable: tool.attributes.usable,
        used: tool.attributes.used,
        users: tool.attributes.users.data.map((user) => ({
            id: user.id,
        })),
        description: tool.attributes.description,
        explanation: tool.attributes.explanation,
        images: tool.attributes.images.data.map((image) => ({
            id: image.id,
            url: `${process.env.NEXT_PUBLIC_STRAPI_URL?.replace('.net/api', '.net')}${image.attributes.url}`,
        })),
        links: tool.attributes.links.map((link) => ({
            text: link.text,
            url: link.url,
        })),
    }));

    const filteredWritingToolsForTargetUser: WritingTool[] = filteredWritingToolsData.filter(
        (tool) => tool.users.some((user) => user.id === selectedUser)
    );

    return filteredWritingToolsForTargetUser;
};

const GetWritingTools = () => {
    const { data, ...rest } = useQuery({queryKey: ['writingtools'], queryFn: fetchWritingTools});
    const selectedUser = 1;
    const filteredData = data ? filterWritingToolsData(data, selectedUser) : [];
    return {
        data: filteredData,
        ...rest,
    };
};

export default GetWritingTools;
