

import styled from "styled-components";

export default function SabTextTextTitle() {

    return (
        <Mstyles>
            
                <p >Меня зовут Алеся Полякова. Когда я находилась на пике продолжительной
            и успешной карьеры в одном из крупнейших нефтехимических холдингов мира, 
            в моей жизни возник эриксоновский коучинг, обучение которому привело меня к Гуманистическому Гипнозу,
            что
            затем,  вместе с КОВИДом, полностью изменило
            мою профессиональную жизнь. Позже я занялась таким направлением
            как Арт-терапия.

            Но окончательная перемена рода занятия свершилась в 2023 году. На сегодняшний день я с большой радостью
            занимаюсь только помогающей профессиональной деятельностью, а также осваиваю новые направления:
            искусствоведение,
            юнгианский анализ...</p>
           
        </Mstyles>
    );
}


const Mstyles = styled.div`
  font-family: Jost, sans-serif;
    width: 58vw;
    margin-left: 7vw;
    font-size: 25px;
    margin-top: 6vh;
    border-left: 1px solid;
    padding-left: 3em;


@media (max-width: 1024px) {
        color: black;
        height: 31vh;
        padding-left: 1.5em;
        font-family: "Jost", sans-serif;
        margin-left: 4vw;
        width: 63vw;
        font-size: 22px;
        border: none;
        margin-top: 6vh;
    
}

@media (max-width: 769px) {
    height: 31vh;
    padding-left: 1.5em;
    font-family: "Jost", sans-serif;
    margin-left: 4vw;
    width: 63vw;
    font-size: 18px;
    border: none;
    margin-top: 0vh;
}

@media (max-width: 431px) {
    
   font-size:10px;
  
}

`;