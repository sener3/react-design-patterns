import { useQuery } from "react-query";
import { getNews } from "./api/news";

import Main from "./pages/Main";

const App = () => {
    const { isLoading, data } = useQuery("news", () => getNews("bitcoin"));

    return <Main isLoading={isLoading} data={data} />;
};

export default App;
