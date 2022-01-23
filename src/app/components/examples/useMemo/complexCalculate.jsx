import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
};

const runFactorial = (n) => {
    console.log("RunFactorial");
    return factorial(n);
};

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);

    const btnColor = useMemo(() => ({ value: otherState ? "primary" : "secondary" }), [otherState]);

    useEffect(() => {
        console.log("Render BtnColor");
    }, [btnColor]);

    const fact = useMemo(() => runFactorial(value), [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {fact}</p>
                <p> {fact}</p>
                <button
                    onClick={() => setValue(prevValue => (prevValue -= 10))}
                    className="btn btn-primary">Dicrease
                </button>
                <button
                    onClick={() => setValue(prevValue => (prevValue += 10))}
                    className="btn btn-primary">Increase
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    onClick={() => setOtherState(prevValue => (!prevValue))}
                    className={`btn btn-${btnColor.value}`}>Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
