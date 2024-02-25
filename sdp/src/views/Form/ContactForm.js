import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import { css } from 'styled-components'


//import components
import Form from '../../components1/Form'
import Label from '../../components1/Label'
import StyledButton from '../../components1/Button'
import Input from '../../components1/Input'
import Textarea from '../../components1/Textarea'

const WrapperGrid = styled.div`
    ${props => props.full && css`
        grid-column: 1 / 3;
    `}
`;
function submit()
{
    alert("Your Response has been recorded");
}

const options = [
    { value: 'wedding', label: 'Wedding' },
    { value: 'Birthday', label: 'Birthday' },
    { value: 'Travel', label: 'Travel' },
    { value: 'Corporate', label: 'Corporate' }
  ]

const ContactForm = () => (
    <div>

        <h3>Email Us</h3>
        <Form>
            <WrapperGrid>
                <Label>Name</Label>
                <Input type="text" name="name" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Company</Label>
                <Input type="text" name="company" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>EMAIL</Label>
                <Input type="email" name="email" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>PHONE</Label>
                <Input type="text" name="phone" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>EVENT TYPE</Label>
                <Select options={options} />
            </WrapperGrid>
            <WrapperGrid full>
                <Label>TELL US  MORE ABOUT YOUR EVENT</Label>
                <Textarea name="message" rows="5"></Textarea>
            </WrapperGrid>
            <WrapperGrid full>
                <StyledButton onClick={submit}>Submit</StyledButton>
            </WrapperGrid>
        </Form>
    </div>
)

export default ContactForm