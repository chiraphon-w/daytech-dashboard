// import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
import Layout from '../components/Layouts/Layout';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
