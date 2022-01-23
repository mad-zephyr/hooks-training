import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };

    // Without Callback
    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withOutCallback.current += 1;
    }, [validateWithoutCallback]);

    // With Callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    });

    useEffect(() => {
        withCallback.current += 1;
    }, [validateWithCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render Without callback: {withOutCallback.current}</p>
            <p>Render With callback: {withCallback.current}</p>
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='email'
                className='form-control'
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
