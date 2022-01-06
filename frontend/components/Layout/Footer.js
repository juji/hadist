
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
        Open Hadist Search | <a href="https://github.com/juji/open-hadist-search"
        target="_blank"
        rel="noopener noreferrer">Github</a> | <a href="https://www.npmjs.com/package/open-hadist-search"
        target="_blank"
        rel="noopener noreferrer">NPM</a>
      </div>
      <div>
        <a
          href="https://github.com/sutanlab/hadith-api"
          target="_blank"
          rel="noopener noreferrer"
          >data source</a>
      </div>
    </Content>
  </Container>

}
