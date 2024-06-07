
import styled from "styled-components";

export default function Text_image_3() {
    return (
        <div className="conteiner_Text_title" >
            <Mstyles>
                <p className="Text_title">Но возможно ли проживать изменения сознательно, не травматично? С открытыми глазами, сердцем и
                    умом?<br />
                    <br />
                    Мне видится, что Человеку доступно многое, чтобы не только уметь задавать себе вопросы, но и находить на
                    них
                    ответы. Представьте, что все ответы находятся внутри каждого из нас!<br />
                    <br />
                    Но, к сожалению, не всегда мы себя слышим. Именно поэтому буду рада сопровождать Вас, как клиента, на
                    этом
                    пути к себе!</p>
            </Mstyles>
        </div>

    );
}



const Mstyles = styled.div`
   font-family: "Jost", sans-serif;
  width: 51vw;
  margin-left: 6vw;
  font-size: 26px;
  margin-right: 1vw;


@media (max-width: 769px) {
    font-family: "Jost", sans-serif;
    width: 51vw;
    margin-left: 6vw;
    font-size: 18px;
    margin-right: 1vw;
    
}
@media (max-width: 431px) {
    font-family: "Jost", sans-serif;
    width: 51vw;
    margin-left: 6vw;
    font-size: 10px;
}
`;