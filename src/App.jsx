import React, { useState } from "react";

const App = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        if (value === "C") {
            setInput("");
            setResult("");
        } else if (value === "=") {
            if (input.trim() === "") {
                setResult("Error");
            }
            const evalResult = eval(input);
            setResult(evalResult.toString());
        } else {
            setInput((prev) => prev + value);
        }
    };

    const buttons = [
        "7",
        "8",
        "9",
        "+",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "*",
        "C",
        "0",
        "=",
        "/",
    ];

    const buttonClass = "px-4 py-2 border rounded cursor-pointer";

    return (
        <main className="flex flex-col justify-center items-center h-screen gap-6">
            <h1 className="text-5xl">React Calculator</h1>
            <input className="border p-2" type="text" readOnly value={input} />
            <div className="h-4 text-2xl mb-4">{result}</div>
            <div className="grid grid-cols-4 gap-4">
                {buttons.map((btn) => (
                    <button
                        onClick={() => handleClick(btn)}
                        key={btn}
                        className={buttonClass}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </main>
    );
};

export default App;
