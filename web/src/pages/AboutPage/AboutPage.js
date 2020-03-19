import { Link, routes } from '@redwoodjs/router';

const AboutPage = () => {
  return (
    <>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          This site was created to demo my mastery of Redwood: Look on my works!
        </p>
        <Link to={routes.home()}>Return Home</Link>
      </main>
    </>
  )
}

export default AboutPage
