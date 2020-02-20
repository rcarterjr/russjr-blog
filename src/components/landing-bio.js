import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Hello from '../components/hello'

const Container = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 78vh;
`

const Description = styled.p`
    padding: 0;
    margin-bottom: 1rem;
    font-family: MrRobot;
    font-size: 1.4rem;
    padding-top: 20px;
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
                <Description>{data.site.siteMetadata.subtitle}</Description>
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
