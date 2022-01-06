
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Content from 'components/Layout/Content'
import { NextSeo } from 'next-seo'

const data = {
  "number": '{{=it.number}}',
  "arab": '{{=it.arab}}',
  "id": '{{=it.id}}',
  "source": '{{=it.source}}'
}

const Container = styled.div`

  .arab{
    direction: rtl;
    margin-bottom: 34px;
    font-size: 34px;
    line-height: 2.7em;
  }

  .id{
    font-size: 21px;
    margin-bottom: 34px;
  }

`

export default function ExamplePage(){

  return <>
    <NextSeo
      title={`Hadist: ${data.source}, ${data.number}`}
      description={data.id}
    />
    <Content>
      <Container itemscope itemtype ="https://schema.org/TextDigitalDocument">

        <div itemprop="citation" inLanguage="ar-SA" className="arabic arab">
          {data.arab}
        </div>

        <div itemprop="citation" inLanguage="id-ID" className="arabic id">
          {data.id}
        </div>

        <div className="source-number">
          ( <span itemprop="publisher">HR {data.source}</span>, {data.number} )
        </div>

      </Container>
    </Content>
  </>

}
