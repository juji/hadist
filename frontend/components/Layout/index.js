

import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Header from './Header'
import Footer from './Footer'

const Container = styled.div`

  display: flex;
  flex-direction: column;
  min-height: 100%;

  header, footer{
    flex: 0 0 auto;
  }

  main{
    flex: 1 0 auto;
    padding: 55px 0;
  }

`

export default function Layout({ children }){


  return <Container>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </Container>

}
