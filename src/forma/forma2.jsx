import { useState } from "react";
import styled from "styled-components";
import FormPopup from "./formPopUp";
export default function Forma() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [dialogIsOpen, setDialogIsOpen] = useState(false)

    const openDialog = () => setDialogIsOpen(true)
  
    const closeDialog = () => setDialogIsOpen(false)


    function sendFeedback(e) {
        e.preventDefault();


        const feedback = { name, phone, email, comment };

        fetch("http://localhost:3001/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(feedback),
        })
            .then((response) => response.json())
            .then((json) => {
            })
            .catch((error) => {
                console.log(error);
            });
    }





    return (
        <>
            <FormPopup open={dialogIsOpen} onClose={closeDialog} />
            <Form>

                <FlexContact className="flex_contact">
                    <HowToContact className="how_to_contact"><p>КАК СВЯЗАТЬСЯ</p></HowToContact>
                    <ContactText className="contact_text"><p>КОНТАКТЫ</p></ContactText>
                </FlexContact>

                <InfoFlex >
                    <FormBox onSubmit={sendFeedback} className="form_box" >
                        <Pismo width="24" height="18" viewBox="0 0 24 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.527344 5L11.9459 10.3333L23.3644 5M2.15856 1H21.7332C22.1658 1 22.5807 1.14048 22.8866 1.39052C23.1925 1.64057 23.3644 1.97971 23.3644 2.33333V15.6667C23.3644 16.0203 23.1925 16.3594 22.8866 16.6095C22.5807 16.8595 22.1658 17 21.7332 17H2.15856C1.72594 17 1.31103 16.8595 1.00512 16.6095C0.699204 16.3594 0.527344 16.0203 0.527344 15.6667V2.33333C0.527344 1.97971 0.699204 1.64057 1.00512 1.39052C1.31103 1.14048 1.72594 1 2.15856 1Z"
                                stroke="white" />
                        </Pismo>

                        <FormName>
                            <InputName type="text" name="name" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
                        </FormName>
                        <FormBoxFlex>
                            <FormPhone >
                                <InputPhone type="text" name="phone" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </FormPhone>
                            <FormEmail>
                                <InputEmail type="email" name="email" placeholder="Электронная почта" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </FormEmail>
                        </FormBoxFlex>
                        <FormComment>
                            <InputComment type="text" name="comment" placeholder="Ваш комментарий" value={comment} onChange={(e) => setComment(e.target.value)} />
                        </FormComment>
                        <ButtonZap onClick={openDialog} type="submit" className="button_zap">
                            <Otpr >Отправить</Otpr>
                        </ButtonZap>
                    </FormBox>
                    <Info >
                        <div  ></div>
                    </Info>
                </InfoFlex>
            </Form>
        </>

    );
}


const Form = styled.div`
 box-shadow: 5px 5px 15px grey;
    background-color: #8ba7d3;
    width: 80vw;
    margin-left: 10vw;
    border-radius: 26px;
    margin-top: 16vh;
    @media (max-width: 431px) {
    box-shadow: 5px 5px 15px grey;
    background-color: #8ba7d3;
    width: 94vw;
    margin-left: 3vw;
    border-radius: 26px;
    margin-top: 13vh;
    }
`;

const FlexContact = styled.div`
    display: flex;
    justify-content: space-between;
`;

const HowToContact = styled.div`
    font-family: 'Jost', sans-serif;
    font-size: 50px;
    color: white;
    margin-left: 8vw;
    padding-top: 4vh;
    @media (max-width: 769px) {
        font-size:31px
    }
    @media (max-width: 431px) {
        font-family: "Jost", sans-serif;
    font-size: 19px;
    color: white;
    margin-left: 8vw;
    padding-top: 4vh;
    }
`;

const ContactText = styled.div`
    color: white;
    margin-right: 8vw;
    padding-top: 4vh;
    font-family: 'Jost', sans-serif;
    font-size: 50px;
    @media (max-width: 769px) {
        font-size:31px
    }
    @media (max-width: 431px) {
        color: white;
    margin-right: 5vw;
    padding-top: 4vh;
    font-family: "Jost", sans-serif;
    font-size: 19px;
    }
`;

const FormBox = styled.form`
    width: 40vw;
    margin-left: 4vw;
    padding-top: 2vh;
`;

const ButtonZap = styled.button`
    margin-left: 11vw;
    margin-top: 7vh;
    border-radius: 27px;
    background-color: rgba(255, 255, 255, 0.31);
    border: none;
    @media (max-width: 431px) {
        margin-left: 22vw;
    margin-top: 5vh;
    }
`;


const Otpr = styled.p`
    font-size: 26px;
    color: white;
    font-family: 'Jost', sans-serif;
    padding: 0.5em;
    @media (max-width: 769px) {
        font-size: 19px;
    color: white;
    font-family: "Jost", sans-serif;
    padding: 0.5em;
    }
    @media (max-width: 431px) {
    font-size: 12px;
    color: white;
    font-family: "Jost", sans-serif;
    padding: 1em;
    }
`;

const FormBoxFlex = styled.div`
    display: flex;
    margin-top: 3vh;
    @media (max-width: 431px) {
    display: flex;
    margin-top: 11vh;
    } 
`;

const InfoFlex = styled.div`
    display: flex;
    height: 51vh;
`;

const Info = styled.div`
    background-color: #9bb6e0;
    width: 22vw;
    height: 42vh;
    margin-left: 6vw;
    margin-top: 3vh;
    border-radius: 20px;
    border: 1px solid white;
    @media (max-width: 431px) {
    background-color: #9bb6e0;
    width: 30vw;
    height: 32vh;
    margin-left: 16vw;
    margin-top: 7vh;
    border-radius: 20px;
    border: 1px solid white;
    } 
`;

const Pismo = styled.svg`
    margin-left: 36.5vw;
    @media (max-width: 431px) {
        margin-left: 45.5vw;
        width: 4vw;
    }
`

const FormName = styled.div`
    border-bottom: 2px solid white;
    width: 36vw;
    margin-left: 2vw;
    margin-top: 3vh;
    @media (max-width: 431px) {
    border-bottom: white 1px solid;
    width: 50vw;
    margin-left: 0vw;
    margin-top: 0vh;
    }
`;
const InputName = styled.input`
    width: 36vw;
`


const FormPhone = styled.div`
    border-bottom: 2px solid white;
    margin-left: 2vw;
    width: 17vw;
    @media (max-width: 431px) {
    border-bottom: white 1px solid;
    margin-left: 0vw;
    width: 20vw;
    }
`;

const InputPhone = styled.input`
    width:17vw;
    @media (max-width: 431px) {
        width:20vw;
    }
`

const FormEmail = styled.div`
    border-bottom: 2px solid white;
    margin-left: 2vw;
    width: 17vw;

    @media (max-width: 1024px) {
        width: 22vw;
    }
    @media (max-width: 769px) {
        width: 18vw;
    }

    @media (max-width: 431px) {
    border-bottom: white 1px solid;
    margin-left: 2vw;
    width: 32vw;
    }
`;

const InputEmail = styled.input`
    width: 17vw;

@media (max-width: 1024px) {
    width: 22vw;
}
@media (max-width: 769px) {
    width: 18vw;
}
@media (max-width: 431px) {
    width: 32vw;
    }
`;

const FormComment = styled.div`
    border-bottom: 2px solid white;
    width: 36vw;
    margin-left: 2vw;
    margin-top: 6vh;
    @media (max-width: 431px) {
    border-bottom: white 1px solid;
    width: 50vw;
    margin-left: 0vw;
    margin-top: 9vh;
    }
`;
const InputComment = styled.input`
    width: 36vw;
    @media (max-width: 431px) {
    width: 50vw;
    }
`;






