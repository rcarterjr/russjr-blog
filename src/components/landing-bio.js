import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Hello from '../components/hello'
import Socials from '../components/socials'

const Container = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 78vh;
`

const NameHeader = styled.span`
    margin-bottom: 0;
    font-family: MrRobot;
    color: red;
    font-size: calc(10px + 5vmin);
    display: flex;
`

const LandingBio = () => (
    <StaticQuery
        query={graphql`
            query LandingSiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        subtitle
                    }
                }
            }
        `}
        render={data => (
            <Container>
                <NameHeader>
                    <Hello />
                </NameHeader>
                <Socials />
            </Container>
        )}
    />
)

NameHeader.propTypes = {
    siteTitle: PropTypes.string,
    subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
    siteTitle: ``,
    subtitle: ``,
}

export default LandingBio
