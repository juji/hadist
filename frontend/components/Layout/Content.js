
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Container = styled.div`

  padding: 0 34px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

`

export default function Header({ children }){

  return <Container>
    { children }
  </Container>

}
