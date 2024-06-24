import { useState } from "react";
import styled from "styled-components";
import FormPopup from "./formPopUp";
import { Grid } from "@mui/material";
import Telegram from "../svg/Telegram";
export default function Forma() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [dialogIsOpen, setDialogIsOpen] = useState(false)
    

    const closeDialog = () => setDialogIsOpen(false)


    function sendFeedback(e) {
        e.preventDefault();


        const feedback = { name, phone, email, comment };


        fetch("https://ap-artatelier.ru/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(feedback),
        })
            .then((response) => response.json())
            .then((json) => {
                setDialogIsOpen(true)
            })
            .catch((error) => {
                console.log(error);
            });
    }





    return (
        <>
            <FormPopup open={dialogIsOpen} onClose={closeDialog} />
            <Grid display={'flex'} justifyContent={'center'} >
            <Form  >

                <InfoFlex >


                    <PustoDiv>
                        <HowToContact className="how_to_contact"><p>СВЯЗАТЬСЯ</p></HowToContact>




                        <div style={{
                            display: 'grid',
                            justifyContent: 'center'
                            }}  className="form_box" >
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
                                    <InputEmail type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </FormEmail>
                            </FormBoxFlex>
                            <FormComment>
                                <InputComment type="text" name="comment" placeholder="Ваш запрос" value={comment} onChange={(e) => setComment(e.target.value)} />
                            </FormComment>
                            <ButtonZap onClick={sendFeedback} type="submit" className="button_zap">
                                <Otpr >Отправить</Otpr>
                            </ButtonZap>
                        </div>
                    </PustoDiv>
                    <PustoDiv>
                        <ContactText className="contact_text"><p>КОНТАКТЫ</p></ContactText>
                        <Info >
                            <div className="infoLogoContainer">
                                <div className="infoLogo" ></div>
                            </div>
                            <TextForm className="LinkTelegram">AP.artatelier.ru@mail.ru</TextForm>
                            <a className="LinkTelegram" href="https://t.me/arthypnosis">
                                <TextForm>
                                    <Telegram />
                                    @arthypnosis
                                </TextForm>
                            </a>
                        </Info>
                    </PustoDiv>

                </InfoFlex>
            </Form>
            </Grid>
        </>

    );
}


const Form = styled.div`
 box-shadow: 5px 5px 15px grey;
    background-color: #8ba7d3;
    width: 72vw;
    border-radius: 26px;
    margin-top: 16vh;
    @media (max-width: 820px) {
    width: 88vw;
    }
    @media (max-width: 550px) {
    box-shadow: 5px 5px 15px grey;
    background-color: #8ba7d3;
    width: 94vw;
    border-radius: 26px;
    margin-top: 13vh;
    }
`;



const PustoDiv = styled.div`
    padding: 2vh;
`;

const HowToContact = styled.div`
    font-family: 'Jost', sans-serif;
    font-size: 50px;
    color: white;
    display:flex;
    justify-content:center;
    @media (max-width: 1024px) {
        font-size:37px;
    }
    @media (max-width: 820px) {
        font-size:31px
    }
    @media (max-width: 550px) {
        font-family: "Jost", sans-serif;
    font-size: 19px;
    color: white;
    padding-top: 1vh;
    }
`;

const TextForm = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Jost', sans-serif;
    font-size: 14px;
    color: white;
    margin-top: 1vh;
`;

const ContactText = styled.div`
    color: white;
    font-family: 'Jost', sans-serif;
    font-size: 50px;
    display:flex;
    justify-content:center;
    @media (max-width: 1024px) {
        font-size:37px;
    }
    @media (max-width: 820px) {
        display: none;
    }
    @media (max-width: 550px) {
        display: none;
`;


const ButtonZap = styled.button`
    justify-self: center;
    width: 20vw;
    margin-top: 7vh;
    border-radius: 27px;
    background-color: rgba(255, 255, 255, 0.31);
    border: none;
    @media (max-width: 820px) {
    margin-top: 4vh;
    width: 40vw;
    }
`;


const Otpr = styled.p`
    font-size: 26px;
    color: white;
    font-family: 'Jost', sans-serif;
    padding: 0.5em;
    @media (max-width: 820px) {
        font-size: 19px;
    color: white;
    font-family: "Jost", sans-serif;
    padding: 0.5em;
    }
    @media (max-width: 820px) {
    font-size: 12px;
    color: white;
    font-family: "Jost", sans-serif;
    padding: 1em;
    }
`;

const FormBoxFlex = styled.div`
    display: flex;
    margin-top: 3vh;
    @media (max-width: 820px) {
    display: flex;
    margin-top: 11vh;
    } 
`;

const InfoFlex = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 820px) {
        flex-direction: column;
    } 
`;

const Info = styled.div`
    background-color: #9bb6e0;
    border-radius: 20px;
    border: 1px solid white;
    display:flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 820px) {
    background-color: #9bb6e0;
    border-radius: 20px;
    border: 1px solid white;
    } 
`;

const Pismo = styled.svg`
    margin-left: 36.5vw;
    @media (max-width: 820px) {
        margin-left: 82vw;
        width: 4vw;
    }
`

const FormName = styled.div`
    border-bottom: 2px solid white;
    margin-left: 2vw;
    margin-top: 3vh;
    @media (max-width: 820px) {
    border-bottom: white 1px solid;
    width: 82vw;
    }
`;
const InputName = styled.input`
    width: 36vw;
`


const FormPhone = styled.div`
    border-bottom: 2px solid white;
    margin-left: 2vw;
    width: 17vw;
    @media (max-width: 820px) {
    border-bottom: white 1px solid;
    width: 40vw;
    }
`;

const InputPhone = styled.input`
    width:17vw;
    @media (max-width: 820px) {
        width:20vw;
    }
`

const FormEmail = styled.div`
    border-bottom: 2px solid white;
    margin-left: 2vw;
    width: 17vw;


    @media (max-width: 820px) {
    border-bottom: white 1px solid;
    margin-left: 2vw;
    width: 40vw;
    }
`;

const InputEmail = styled.input`
    width: 17vw;


    @media (max-width: 820px) {
    width: 32vw;
    }
`;

const FormComment = styled.div`
    border-bottom: 2px solid white;
    width: 36vw;
    margin-left: 2vw;
    margin-top: 6vh;
    @media (max-width: 820px) {
        border-bottom: white 1px solid;
        margin-top: 9vh;
        width: 82vw;
    }
`;
const InputComment = styled.input`
    width: 36vw;
    @media (max-width: 820px) {
    width: 50vw;
    }
`;






