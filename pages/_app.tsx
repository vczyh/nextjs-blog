import '../styles/globals.css'
import {AppProps, AppType} from 'next/app';


const App = ({Component, pageProps}: AppProps) => {
    return <Component {...pageProps}/>;
};

export default App;