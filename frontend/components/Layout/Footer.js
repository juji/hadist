
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import Content from './Content'

const Container = styled.div`

  padding: 21px 0;
  background: ${p => p.theme.green};
  color: white;

  &>div{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a{
    color: white;
  }

`

export default function Header(){

  return <Container>
    <Content>
      <div>
        &copy; {new Date().getFullYear()} <a
          href="https://jujiyangasli.com"
          target="_blank"
          rel="noopener noreferrer"
          >jujiyangasli.com</a>
      </div>
      <div>
        source: <a
          href="https://github.com/sutanlab/hadith-api"
          target="_blank"
          rel="noopener noreferrer"
          >
          https://github.com/sutanlab/hadith-api
        </a>
      </div>
    </Content>
  </Container>

}
