function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            {text}
        </button>
    );
}

export default function App() {
    const handleButtonClick = (url) => {
        window.location.href = url;
    };

    return (
        <div>
            <Button handleClick={() => handleButtonClick('https://www.theodinproject.com')} />
            <Button text='Does nothing' color='pink' />
            <Button text='Does nothing but in orange and larger font' color='orange' fontSize={25} />
        </div>
    );
}
