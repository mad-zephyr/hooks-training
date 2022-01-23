import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const cardRef = useRef();
    const handler = () => {
        cardRef.current.style.cssText = "width:80px; height:150px; white-space: pre; border: 1px solid blue";
        cardRef.current.innerHTML = "Изменится содержимое блока на Text";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <div ref={cardRef}>
                <p className="mt-3" >
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul >
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            </div>
            <button onClick={handler} className="btn btn-primary">Изменить</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
