import { baseUrl } from "./constants";

export const getNews = async (keyword: string) => {
    try {
        const res = await fetch(baseUrl(keyword)).then((res) => res.json());
        const articles = res.articles.slice(0, 20);
        return articles;
    } catch (err) {
        return [];
    }
};
