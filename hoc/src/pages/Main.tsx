import withLoading from "../hoc/withLoading";

type MainProps = {
    data: Article[];
};

const Main = ({ data }: MainProps): JSX.Element => {
    return (
        <main>
            {data.map((x: Article, index: number) => (
                <p key={index}>{x.title}</p>
            ))}
        </main>
    );
};

export default withLoading(Main);
