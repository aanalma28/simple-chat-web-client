// Home.js
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.title = "Homepage"
    }, [])

  return (
    <h3>Hello World</h3>
  );
}

export default Home;
