import { useState } from 'react';

// TODO: Add two separate input fields for the first name and the last name. 
// Either of these should be able to update the full name in the h1 element with every keystroke.

function Person() {
    const [person, setPerson] = useState({ firstName: "John", lastName: "Doe", age: 33 });

    const handleIncreaseAge = () => {
        // copy the existing person object into a new object
        // while updating the age property
        const newPerson = { ...person, age: person.age + 1 };
        setPerson(newPerson);
    };

    return (
        <>
            <h1>{person.firstName} {person.lastName}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Increase age by 1</button>
        </>
    );
}

export default Person;
