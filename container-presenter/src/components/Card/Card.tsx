type CardProps = Article;

const Card = ({ author, title, description }: CardProps): JSX.Element => {
    return (
        <div>
            <h2>{title}</h2>
            <p>by {author}</p>
            <p>{description}</p>
        </div>
    );
};

export default Card;
