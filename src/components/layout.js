import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { Location } from '@reach/router'

import Header from './header'
import './layout.css'

import Container from './UI/container'

const ContentContainer = Container.extend`
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(id: { eq: "0d8dba97-7c4c-5ff7-9281-27f4e357571b" }) {
          name
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Location>
          {({ location }) => (
            <Header
              siteTitle={data.site.siteMetadata.title}
              billboard={data.file.childImageSharp.fluid}
              location={location}
            />
          )}
        </Location>

        <ContentContainer>{children}</ContentContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
