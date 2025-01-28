import { Dialog, Button, Pane, Label, TickCircleIcon, FullCircleIcon, Text, Spinner } from 'evergreen-ui';
import logo from '../../../assets/logo.svg';
import { TokenDisplay } from '../TokenSummary/TokenSummary';
import classes from './TokenDialog.module.css';
const TokenDialog = ({ isShown, setIsShown, details }) => <Dialog
    isShown={isShown}
    shouldCloseOnOverlayClick={false}
    shouldCloseOnEscapePress={false}
    hasFooter={false}
    hasHeader={false}
    zIndex={999999}
    left={0}
    width='30rem'
    title='Creating contract'
>
    <Pane paddingTop='2rem'
    >
        <Label size={700}>Creating your contract</Label>
    </Pane>
    <TokenDisplay details={details} />
    <Pane marginTop='1.5rem' display='grid' gap='1rem' padding='2rem' paddingTop='0' paddingLeft='.5rem'
    >
        <Pane display='flex' alignItems='center' gap='.5rem'>
            <TickCircleIcon size='1.35rem' color='#3366ff' />
            <Text size={500}>Compiling code.</Text>
        </Pane>
        <Pane display='flex' alignItems='center' gap='.4rem'>
            <TickCircleIcon size='1.35rem' color='#3366ff' />


            <Text size={500}>Deploying token.</Text>
        </Pane>
        <Pane display='flex' alignItems='center' gap='.4rem'>
            <Spinner width='1.4rem' height='1.4rem' color='#3366ff' />
            <Text size={500}>Veryfing contract.</Text>
        </Pane>
        <Pane display='flex' alignItems='center' gap='.4rem'>
            <Pane background='#F3F6FF' width='1.4rem' height='1.4rem' borderRadius='50%' />
            <Text size={500} color='muted'>Deploying contract.</Text>
        </Pane>

    </Pane>
    <Button size='large' marginBottom='2rem' width='100%' appearance='primary' iconAfter=''>What's next?</Button></Dialog>;

export default TokenDialog;

