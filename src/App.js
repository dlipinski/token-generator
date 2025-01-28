import classes from './App.module.css';
import Generator from './features/generator/Generator';

import { UseWalletProvider } from 'use-wallet';
import Header from './features/header/Header';
import Footer from './features/header/Footer';
import mountain from './assets/mountain_light.png';

const App = () => <div className={classes.App}>


  {/*} <img style={{ position: 'absolute', left: 0, right: 0, zIndex: '0', bottom: '-5rem', width: '100vw' }} src={mountain} />*/}

  <UseWalletProvider chainId={97}>
    <Header />
    <Generator />
    <Footer />
  </UseWalletProvider>
</div>;

export default App;
