import React, { Component } from 'react'
//import all child components
import Container from '../../components1/Container'
import Title from '../../components1/Title'
import CompanyInfo from '../../views/Form/CompanyInfo'
import ContactForm from '../../views/Form/ContactForm'



class Main extends Component {
    render () {
        return (
            <Container>
                <Title text="CONTACT FORM" />
                <Container wrapper>
                    <CompanyInfo />
                    <ContactForm />
                </Container>
            </Container>
        )
    }
}

export default Main