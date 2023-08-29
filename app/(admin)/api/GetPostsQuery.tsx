import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import Cookies from 'js-cookie';
const accessToken = Cookies.get('accessToken');
import { Post } from "@/app/types";

const fetchPosts = async () => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts`,
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

const filterPostsData = (data) => {
    const filteredPostsData: Post[] = data.data.map((post) => ({
        id: post.id,
        date: post.attributes.date,
        subject: post.attributes.subject,
        text: post.attributes.text,
    }));
    return filteredPostsData;
};

const GetPostsQuery = () => {
    const { data, ...rest } = useQuery(['posts'], fetchPosts);
    const filteredData = data ? filterPostsData(data) : [];
    return {
        data: filteredData,
        ...rest,
    };
};

export default GetPostsQuery;