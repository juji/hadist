
import Content from 'components/Layout/Content'
import data from 'lib/data.json'
import Link from 'next/link'

export default function Home() {
  return <div>
    <Content>
      <h1 style={{marginBottom: 0}}>OSFAH v0.0.1</h1>
      <p style={{marginTop: 0}}>Open Search For Al-Hadits v0.0.1</p>

      <p>
        <small>Cari hadits dengan mengisi kata kunci pada isian diatas</small>
      </p>
      <br />

      <h4>Hadits yang tersedia:</h4>
      { Object.keys(data).map(v => {

        return <div key={v} className="hadist">
          <Link href={`/imam/${v}`}><a>{data[v].source} ({data[v].length})</a></Link>
        </div>

      }) }
    </Content>
  </div>
}
