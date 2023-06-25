import Layout from '../layout';

export default function Page() {
  return (
    <Layout>
      <main id="videos" className="container mx-auto prose">
        <h1>Videos</h1>
        <ul>
          <li>
            add new video
            <ul>
              <li>artist & work</li>
              <li>name</li>
              <li>file</li>
              <li>youtube or vimeo ID</li>
              <li>credits</li>
              <li>visibility (resume / deep cut / hidden)</li>
            </ul>
          </li>
          <li>list of videos (view / edit / delete)</li>
        </ul>
        {/* <form id="primaryartist-form">
          <div className='primaryartist-form-input'>
            <label htmlFor='primaryartist-form-artist'>band name</label>
            <input id="primaryartist-form-artist" type="text" placeholder="band name" />
          </div>
        </form>
        <div className='primaryartist-form-submit-wrapper'><button id="primaryartist-form-submit" type="submit" value="submit">sick</button></div> */}
      </main>
    </Layout>
  )
}