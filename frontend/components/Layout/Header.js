
import { useEffect } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Content from './Content'
import Link from 'next/link'
import { useRouter } from 'next/router'
import getConfig from 'next/config'

const Container = styled.div`

  border-bottom: 1px solid ${p => p.theme.green};

  &>div{
    display: flex;
    align-items: center;

    &>div{
      flex: 1 1 auto;
      .gsc-control-cse{
        padding: 1em 0;
      }
    }

  }

`

const Nav = styled.nav`

  padding: 21px 0;

  &>div{
    &>span{
      flex: 0 0 auto;
      margin-right: 21px;
    }
  }

`


export default function Header(){

  const { publicRuntimeConfig } = getConfig()
  // console.log('publicRuntimeConfig', publicRuntimeConfig)

  useEffect(() => {

    if(!publicRuntimeConfig.GOOGLE_CSE) return;
    if(!process.browser) return;

    var cx = publicRuntimeConfig.GOOGLE_CSE;
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);

  },[ process.browser, publicRuntimeConfig.GOOGLE_CSE ])

  const router = useRouter()

  const back = () => router.back()

  return <><Container>
    <Content>
      <div className="gcse-search"></div>
    </Content>
  </Container>
  { router.pathname === '/' ? null : <Nav>
    <Content>
    <span>
      <a onClick={back}>◀ back</a>&nbsp;|&nbsp;
      <a href="/">Home</a>
    </span>
    </Content>
  </Nav>}
</>

}
