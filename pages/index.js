import { Container, Button, Navbar, Image } from "react-bootstrap";
import getAuthCodeUrl from './api/util/getAuthCodeUrl'
import Head from 'next/head';

export default function Home() {
  const url = getAuthCodeUrl();
  return (
      <Container>
        <Head>
          <title>DynoPlay - Home</title>
          <meta name="description" content="Spotify listening statistics, recently played tracks, top artist and more!" />
        </Head>
        <Navbar>
          <Navbar.Brand>DynoPlay 🎵</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <p>Hello!</p>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

        <div>
          <h1>Spotify-you</h1>
          <p>
            Check out your listening stats on spotify!
          </p>
          <p>
            <Button href={url} variant="primary">Click here!</Button>
          </p>
        </div>
        <h2 className="text-center">Open Sourced at Github!</h2>
        <a target="_blank" href="https://github.com/Kvrnn/DynoPlay" rel="noreferrer">
          <Image className="mx-auto d-block" height={280} width={280} src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} alt="GitHub" />
        </a>
      </Container>
  );
}