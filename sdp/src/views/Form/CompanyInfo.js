import React from 'react'
import styled from 'styled-components'


const WrapperCompanyInfo=styled.div`
    background: skyblue;
`; 

const CompanyName = styled.h3`
    margin: 0 0 1rem 0;
    text-align: center;
    color: #fff; 
    @media (min-width: 700px) {
        text-align: left; 
    }
`;

const WrapperList = styled.ul`
    list-style: none;
    margin:0 0 1rem 0;
    padding:0;
    text-align: center;
    @media (min-width: 700px) {
        text-align: left; 
    }
`;


const CompanyInfo = () => (
    <WrapperCompanyInfo>
        <CompanyName>SURPRISE PLANNERS</CompanyName>
        <WrapperList>
            <h1>Address</h1>
            <li>Dorsoduro 948 30123, Venice, Italy</li>
            <h2>Phone Number</h2>
            <li>+39 041 5229907
</li>
            <h3>Email</h3>
            <li>info@venicefirst.com
</li>
        </WrapperList>
    </WrapperCompanyInfo>
)

export default CompanyInfo