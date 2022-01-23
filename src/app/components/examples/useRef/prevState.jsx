import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const PrevStateExample = () => {
    const currentState = useRef("");
    const [otherState, setOtherState] = useState("true");

    const handlerRender = () => {
        setOtherState(prevState => prevState === "false" ? "true" : "false");
    };

    useEffect(() => {
        currentState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
           {currentState.current && <p> Render count: {currentState.current} </p>}
            <p> Current state: {otherState} </p>
            <button onClick={handlerRender} className='btn btn-primary'>Button</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
