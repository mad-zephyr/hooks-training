import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";

const FormComponent = ({ children }) => {
    const [data, setdata] = useState({});
    const handleChange = (target) => {
        setdata((prevData) => ({ ...prevData, [target.name]: target.value }));
    };
    return React.Children.map(children, (child, index) => {
        const config = {
            ...child.props,
            onChange: handleChange,
            value: data[child.props.name] || ""
        };

        return React.cloneElement(child, config);
    });
};

const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider/>
            <FormComponent>
                <TextField name="email" label="email" />
                <TextField name="password" label="password" type="password"/>
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
