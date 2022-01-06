import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Content from 'components/Layout/Content'
import data from 'lib/data.json'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

const Container = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  ${breakpoint('tablet')`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  `}

  ${breakpoint('screen')`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  `}

`

export default function Imam({ name, slug, length }) {
  return <>
  <NextSeo
    title={`HR ${name}: ${length} hadist | OSFAH`}
    description={`${length} hadist dari HR ${name}`}
  />
  <div>
    <Content>

      <h1>HR {name}: {length} hadist</h1>

      <br /><br />
      <Container>
        { [ ...(new Array(length).keys()) ].map(idx => {

          return <Link
            key={`${slug}-${idx}`}
            href={`/imam/${slug}/${idx+1}`}>
              <a style={{ marginRight: 5 }}>[{idx+1}]</a>
            </Link>

        }) }
      </Container>

    </Content>
  </div>
  </>
}

export async function getStaticProps({ params }) {

  const { name } = params

  return data[name] ? {
    props: {
      slug: name,
      name: data[name].source,
      length: data[name].length
    }
  } : {
    notFound: true
  }
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(data).map(name => ({
      params: { name }
    })),
    fallback: false
  };
}
