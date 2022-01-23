import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(true);

    const handlerRender = () => {
        setOtherState(!otherState);
    };

    useEffect(() => {
        ++renderCount.current;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p> Render count: {renderCount.current} </p>
            <button onClick={handlerRender} className='btn btn-primary'>Button</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
