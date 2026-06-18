function ListItem(props) {
    return <li>{props.animal}</li>
}

function List(props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return animal.startsWith(props.startsWith) && <li key={animal}>{animal}</li>;
            })}
        </ul>
    );
}

function AnimalsStarting() {
    const animals = ["Lion", "Cow", "Snake", "Mongoose", "Haggis", "Lemur", "Hippo"];
    const startsWith = 'H';

    return (
        <div>
            <h1>Animals whose name starts with '{startsWith}'</h1>
            <List animals={animals} startsWith={startsWith} />
        </div>
    );
}

export default AnimalsStarting;
