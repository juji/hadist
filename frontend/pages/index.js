
import Content from 'components/Layout/Content'
import data from 'lib/data.json'
import Link from 'next/link'

export default function Home() {
  return <div>
    <Content>
      <h1>Open Hadist Search</h1>

      <p>
        Cari hadist dengan mengisi kata kunci pada isian diatas
      </p>

      <br />
      <br />

      <h4>Hadist yang tersedia:</h4>
      { Object.keys(data).map(v => {

        return <div key={v} className="hadist">
          <Link href={`/imam/${v}`}><a>{data[v].source} ({data[v].length})</a></Link>
        </div>

      }) }
    </Content>
  </div>
}
