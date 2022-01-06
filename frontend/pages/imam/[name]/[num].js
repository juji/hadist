import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Content from 'components/Layout/Content'
import data from 'lib/data.json'
import { NextSeo } from 'next-seo'

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

export default function ImamNum({
  number,
  slug,
  id,
  arab,
  source
}){

  return <>
    <NextSeo
      title={`Hadist: ${source}, ${number}`}
      description={id}
    />
    <Content>
      <Container itemscope itemtype ="https://schema.org/TextDigitalDocument">

        <div itemprop="mainEntity" inLanguage="ar-SA" className="arabic arab">
          {arab}
        </div>

        <div itemprop="mainEntity" inLanguage="id-ID" className="arabic id">
          {id}
        </div>

        <div className="source-number">
          ( <span itemprop="author">HR {source}</span>, {number} )
        </div>

      </Container>
    </Content>
  </>

}

export async function getStaticProps({ params }) {

  const { name, num } = params
  const doc = require(`lib/books/${name}.json`)[(num*1)-1]
  const { source } = data[name]

  return data[name] ? {
    props: {
      number: num,
      slug: name,
      id: doc.id,
      arab: doc.arab,
      source
    }
  } : {
    notFound: true
  }
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(data).reduce((a,name) => {



      return [
        ...a,
        ...([...(new Array(data[name].length).keys())].map( num => ({
          params: { name, num: ((num*1)+1)+'' }
        })))
      ]

    },[]),
    fallback: false
  };
}
