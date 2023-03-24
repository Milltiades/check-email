import { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import emailjs from "@emailjs/browser";
function App() {
  const {} = useForm();
 

  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qyn8n7d",
        "template_92xyabc",
        form.current,
        "FfhmiVaEjnViZtZ8C"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent")
        },
        (error) => {
          console.log(error.text);
        }
      );


  };

  return (
    <div className="App">
    

      <Form ref={form} onSubmit={sendEmail}>
        <Label>Full name
        <Input type="text" name="user_name"
            placeholder="name surname"/>
            
        </Label>
        <Label>Email
        <Input type="email" name="user_email"
            placeholder="example@gmail.com"/>
            
        </Label>
        <MessageLabel>Message
        <Textarea name="message" />
        <SubmitInput type="submit" value="Send" />
        </MessageLabel>
      </Form>
    </div>
  );
}

export default App;

const Textarea = styled.textarea`
  height: 100px;
  width: 100%;
`
const MessageLabel = styled.label`
  height: auto;
`

const P = styled.p`
  font-size: 15px;
  color: red;
  margin: 0 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  padding: 32px;
 
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 65px;
`;

const Input = styled.input`
  width: 100%;
  height: 25px;
  padding: 5px;
  border-radius: 5px;
`;
const SubmitInput = styled.input`
  width: 40%;
  height: 25px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 25px;
  height: 50px;
`