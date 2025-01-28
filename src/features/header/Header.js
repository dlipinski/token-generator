import { Button, Pane, Text } from 'evergreen-ui';
import { useEffect } from 'react';
import { useWallet } from 'use-wallet';
import logo from '../../assets/logo_with_name.svg';
import './Header.css';
let inited = false;
const Header = () => {
    const { account, balance, reset, connect } = useWallet();

    useEffect(() => {
        if (!connect || inited) return;
        connect();
        inited = true;
    }, [connect]);

    return (
        <Pane
            background='#fff'
            display='flex'
            border='muted'
            justifyContent='center'
            zIndex={1}
            style={{ boxShadow: '0 0 25px rgb(26 108 225 / 10%)' }}>
            <Pane
                maxWidth='1600px'
                width='100%'
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                height='4.25rem'
                padding='1rem'
                paddingLeft='2rem'
                paddingRight='2rem'>
                <img src={logo} height='50' alt='logo' />

                {!account || !balance ? (
                    <Button size='large' appearance='primary' onClick={() => connect()}>
                        Connect Wallet
                    </Button>
                ) : (
                    <Pane display='flex' alignItems='center' gap='1rem'>
                        <Pane display='grid'>
                            <Text color='muted' size={300}>
                                {account.substring(0, 6)}...{account.substring(account.length - 4)}
                            </Text>
                            <Text textAlign='right' color='#3366FF'>{(balance / 10 ** 18).toFixed(2)} BNB</Text>
                        </Pane>
                        <Button size='large' appearance='primary' onClick={() => reset()}>
                            Disconnect
                        </Button>
                    </Pane>
                )}
            </Pane>
        </Pane >
    );
};

export default Header;

