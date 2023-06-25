import Layout from '../layout';

export default function Page() {
  return (
    <Layout>
      <main id="yourband" className="container mx-auto smallcontainer">
        <h1>What's your band called?</h1>
        <form id="primaryartist-form">
          <div className='primaryartist-form-input'>
            <label htmlFor='primaryartist-form-artist'>band name</label>
            <input id="primaryartist-form-artist" type="text" placeholder="band name" />
          </div>
        </form>
        <div className='primaryartist-form-submit-wrapper'><button id="primaryartist-form-submit" type="submit" value="submit">sick</button></div>
      </main>
    </Layout>
  )
}