import { useState } from 'react';

// See : https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable

function Person() {
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');

    return (
        <>
            <h1>{firstName} {lastName}</h1>
            <label>
                First name:
                <input
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </label>
            <label>
                Last name:
                <input
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </label>
        </>
    );
}

export default Person;
