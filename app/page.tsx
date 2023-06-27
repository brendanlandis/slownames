export default function News() {
  return (
      <main id="news" className="container mx-auto prose">
        <h1>News or Posts or Whatever</h1>
        <ul>
          <li>
            add new post
            <ul>
              <li>subject</li>
              <li>date</li>
              <li>text</li>
              <li>attachments</li>
              <li>what's this about? (artist, work, press, show, tour, video)</li>
            </ul>
          </li>
          <li>list of old posts (view / edit / delete)</li>
        </ul>
        {/* <form id="primaryartist-form">
          <div className='primaryartist-form-input'>
            <label htmlFor='primaryartist-form-artist'>band name</label>
            <input id="primaryartist-form-artist" type="text" placeholder="band name" />
          </div>
        </form>
        <div className='primaryartist-form-submit-wrapper'><button id="primaryartist-form-submit" type="submit" value="submit">sick</button></div> */}
      </main>
  )
}