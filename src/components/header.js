import React, { Component } from 'react'
import { Link, withPrefix } from 'gatsby'

import Img from 'gatsby-image'
import Menu from './menu'

import styled, { keyframes } from 'styled-components'

import Container from './UI/container'

const enter = keyframes`
  from {
    height: 20vh
  } 
  to {
    height: 60vh
  }
`

const leave = keyframes`
  from {
    height: 60vh
  } 
  to {
    height: 20vh
  }
`

const HeaderWrapper = styled.div`
  background: #323232;
  position: relative;
  overflow: hidden;
  height: ${({ isIndexPage }) => (isIndexPage ? '60vh' : '20vh')};
  animation: ${({ isIndexPage }) => (isIndexPage ? enter : leave)} 0.3s ease;
`

const HeaderContainer = Container.extend`
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

class Header extends Component {
  render() {
    const {
      siteTitle,
      billboard,
      location: { pathname },
    } = this.props
    return (
      <HeaderWrapper isIndexPage={pathname === withPrefix('/')}>
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <Menu />
        </HeaderContainer>
        <Img
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          fluid={billboard}
        />
      </HeaderWrapper>
    )
  }
}

export default Header
