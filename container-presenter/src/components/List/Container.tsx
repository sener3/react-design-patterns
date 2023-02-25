import { useQuery } from "react-query";
import { getNews } from "../../api/news";
import ListPresenter from "./Presenter";

const ListContainer = (): JSX.Element => {
    const { isLoading, error, data } = useQuery("news", () => getNews("bitcoin"));

    if (error) return <p>We got an error!</p>;

    if (isLoading) return <p>Loading...</p>;

    return <ListPresenter data={data} />;
};

export default ListContainer;
