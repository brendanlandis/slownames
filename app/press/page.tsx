import Layout from '../layout';

export default function Page() {
  return (
    <Layout>
      <main id="press" className="container mx-auto prose">
        <h1>Press</h1>
        <ul>
          <li>
            add new press
            <ul>
              <li>date</li>
              <li>type (review / interview / article)</li>
              <li>what's this about? (artist, work, show, tour, video)</li>
              <li>url</li>
              <li>quote</li>
              <li>attachments</li>
              <li>visibility (resume / deep cut / hidden)</li>
            </ul>
          </li>
          <li>list of old press (view / edit / delete)</li>
        </ul>
      </main>
    </Layout>
  )
}