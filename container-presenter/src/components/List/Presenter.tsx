import Card from "../Card";

type ListPresenterProps = { data: Article[] };

const ListPresenter = ({ data }: ListPresenterProps): JSX.Element => {
    return (
        <div>
            {data.map((x: Article, i: number) => (
                <Card key={i} author={x.author} title={x.title} description={x.description} />
            ))}
        </div>
    );
};

export default ListPresenter;
