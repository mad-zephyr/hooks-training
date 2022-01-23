import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const mailRef = useRef(null);
    const handlerClick = () => {
        mailRef.current.style.transition = "0.4s all ease";
        mailRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor='email'>Email</label>
            <input ref={mailRef} id='email' type='email' className='form-control' />
            <button className='btn btn-primary' onClick={handlerClick} >Button </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
