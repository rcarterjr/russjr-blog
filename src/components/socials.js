import React from 'react'
import styled from '@emotion/styled'
import Linkedin from '../images/linkedin.png'
import Twitter from '../images/twitter.png'
import Github from '../images/github.png'

const Icon = styled.img`
    height: 52px;
    width: 52px;
    padding-left: 10px;
    padding-right: 10px;
`
const Container = styled.div`
    padding-top: 40px;
    width: 40vw;
    align-items: center;
    display: flex;
    justify-content: space-around;
`

const Socials = () => (
    <Container>
        <a
            href="https://linkedin.com/in/russellcarterjr"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div>
                <Icon src={Linkedin} />
            </div>
        </a>
        <a
            href="https://twitter.com/rvssjr"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div>
                <Icon src={Twitter} />
            </div>
        </a>
        <a
            href="https://github.com/rcarterjr"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div>
                <Icon src={Github} />
            </div>
        </a>
    </Container>
)

export default Socials
