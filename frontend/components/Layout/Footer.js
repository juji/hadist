
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import getConfig from 'next/config'
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

  const { publicRuntimeConfig } = getConfig()

  return <Container>
    <Content>
      <div>
        Open Hadist Search | <a href="https://github.com/juji/open-hadist-search"
        target="_blank"
        rel="noopener noreferrer">Github</a>
      </div>
      <div>
        <a
          href={publicRuntimeConfig.DATA_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          >Sumber data</a>
      </div>
    </Content>
  </Container>

}
