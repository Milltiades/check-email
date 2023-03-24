
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import './App.css'

function App() {
  const {register, handleSubmit, formState: { errors }} = useForm();
const onSubmit = () => {
  console.log("submited")
}
  return (
    <div className="App" >
    <Form 
    action="https://formspree.io/f/xpzejooa" method="POST"
    onSubmit={handleSubmit(onSubmit)}
    >
      <Label htmlFor="">
      Email
      <Input type="mail" {...register("email", { required: true})} placeholder="example@gmail.com"/>
      {errors.email?.type === 'required' && <P role="alert">Email is required</P>}
      </Label>
      <Label htmlFor="">
      Full name
        <Input type="text" {...register("fullName", { required: true})} placeholder="Name Surname"/>
        {errors.fullName?.type === 'required' && <P role="alert">Full name is required</P>}
        </Label>

        <button onClick={handleSubmit(onSubmit)}>Send</button>
    </Form>
    </div>
  )
}

export default App;

const P = styled.p`
  font-size: 15px;
  color: red;
  margin: 0 5px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Label = styled.label`
display: flex;
flex-direction: column;
align-items: flex-start;

position: relative;
height: 100px;
`

const Input = styled.input`
  width: 100%;
  height: 25px;
  padding: 5px ;
  border-radius: 5px;
  
`
