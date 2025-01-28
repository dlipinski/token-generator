import classes from './Generator.module.css';
import { useEffect, useState } from 'react';
import TokenDetails from './TokenDetails/TokenDetails';
import TokenFeatures from './TokenFeatures/TokenFeatures';
import TokenAdditions from './TokenAdditions/TokenAdditions';
import TokenSummary from './TokenSummary/TokenSummary';
import TokenDialog from './TokenDialog/TokenDialog';

import { Text, Pane, Label, Button, Alert, CubeIcon, ArrowTopRightIcon } from 'evergreen-ui';
import Payment from './Payment/Payment';
import { useWallet } from 'use-wallet';
import { runSymulator, stopSymulator } from './generatorHelper';
import axios from 'axios';
const myAddr = '0x0b8EA313Afd6fC11BC55FD20d487033803723eE9'


const toHex = (string) => {
	const s = unescape(encodeURIComponent(string))
	let h = ''
	for (let i = 0; i < s.length; i++) {
		h += s.charCodeAt(i).toString(16)
	}
	return h
}

const Generator = () => {
	const [isMainnet, setIsMainnet] = useState(true);
	const [details, setDetails] = useState({});
	const [features, setFeatures] = useState([]);
	const [additions, setAdditions] = useState([]);
	const [gasPrice] = useState(0.0);
	const [accepted, setAccepted] = useState(false);
	const { account, ethereum } = useWallet();
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (!active) {
			runSymulator(setDetails, setFeatures, setAdditions, setAccepted);
		} else {
			stopSymulator(setDetails, setFeatures, setAdditions, setAccepted);
		}
	}, [active]);

	const toggleAccepted = () => setAccepted(oldAccepted => !oldAccepted);

	const toggleNet = () => setIsMainnet(oldIsMainnet => !oldIsMainnet);

	const setDetail = (detailsName, detailValue) => {
		setDetails(oldDetails => ({ ...oldDetails, [detailsName]: detailValue }));
	};

	const toggleFeature = featureName => {
		if (features.includes(featureName)) {
			setFeatures(oldFeatures => oldFeatures.filter(f => f !== featureName));
		} else {
			setFeatures(oldFeatures => oldFeatures.concat(featureName));
		}
	};

	const toggleAddition = additionName => {
		if (additions.includes(additionName)) {
			setAdditions(oldAdditions => oldAdditions.filter(a => a !== additionName));
		} else {
			setAdditions(oldAdditions => oldAdditions.concat(additionName));
		}
	};

	const requestPayment = async price => {
		const params = {
			details,
			features,
			additions,
		}
		const hashedParams = toHex(JSON.stringify(params));
		const transactionParameters = {
			gas: (21000).toString(16),
			gasPrice: (10 * 10 ** 9).toString(16),
			to: myAddr,
			from: ethereum.selectedAddress,
			value: (price * 10 ** 18).toString(16),
			data: toHex('test')//hashedParams, // Optional, but used for defining smart contract creation and interaction.
		};
		const txHash = await ethereum.request({
			method: 'eth_sendTransaction',
			params: [transactionParameters],
		});
		axios.post('http://localhost:3001/', { transactionHash: txHash })
	};

	const onPayment = price => {
		(async () => {
			requestPayment(price);
		})();
	};

	return (
		<div>
			<div className='blue-rect'><div></div><div></div><div></div></div>
			{/*<TokenDialog isShown={active} details={details} />*/}
			<div className={classes.Container + ' ' + (active ? 'active' : '')}>
				<Pane
					transition='.5s'
					position='absolute'
					left='0'
					paddingTop='4rem'
					top='0'
					bottom='0'
					display='flex'
					flexDirection='column'
					width='30rem'
					paddingLeft='7rem'
					marginTop='-15rem'
					zIndex='1'
					justifyContent='center'>
					{/*<img style={{ width: '20rem', height: '20rem', marginLeft: '-2rem' }} src={logo} />*/}
					<Pane transform={`translateY(${active ? '-4.5rem' : 0}) translateX(${active ? '-1rem' : 0})`} transition='.5s' >
						<Label size={800} fontWeight={700}><Label size={800} fontWeight={700} color='#3366FF'>FREE </Label>TOKEN CREATOR</Label>

					</Pane>
					<br />
					<br />

					<Pane transition='.3s' opacity={active ? 0 : 1}

					>

						<Text fontWeight={600} size={600} textAlign='justify'>
							Create your own token for<Text size={600} color='#3366FF' fontWeight={800}>  free</Text>.
						</Text>
						<br />
						<Text fontWeight={600} size={600} textAlign='justify'>
							We put your<Text size={600} color='#000' fontWeight={800}> future</Text> into your hands in a professional, high-quality and affordable way.
						</Text>
						<br />
						<br />
						<Pane display='grid' gap='1rem'>

							<Pane>
								<Button
									size='large'
									appearance='primary'
									iconAfter={CubeIcon}
									onClick={() => setActive(oldActive => !oldActive)}>
									Create Your own token
								</Button>
							</Pane>
							<Pane>
								<Button
									transform='translateX(-.5rem)'
									size='small'
									iconAfter={ArrowTopRightIcon}
									appearance='minimal'>
									I already created token, go to Token Manager
								</Button>
							</Pane>
						</Pane>
					</Pane>
				</Pane>
				<div
					style={{
						marginBottom: '1rem',
						transition: '1s',
						paddingLeft: '5rem',
						opacity: active ? 1 : 0,
						transform: 'translate(0, -2rem)',
					}}>
					{/*<Label size={800} fontWeight={700}><Label size={800} fontWeight={700} color='#3366FF'>FREE </Label>TOKEN CREATOR</Label>
						<Alert intent='danger' marginLeft='1rem' width='75rem' marginBottom='-1rem' title='Payment attempt failed. Try again.' marginTop='.5rem' />*/ }
				</div>
				<div className={classes.Generator}>
					<TokenDetails
						details={details}
						setDetail={setDetail}
						isMainnet={isMainnet}
						toggleNet={toggleNet}
					/>
					<Pane display='grid' gap='1rem'>
						<TokenFeatures features={features} toggleFeature={toggleFeature} />
						<TokenAdditions additions={additions} toggleAddition={toggleAddition} />
					</Pane>
					<Pane display='grid' gap='1rem' gridTemplateRows='auto 1fr'>
						<TokenSummary details={details} />
						<Payment
							onPayment={onPayment}
							account={account}
							features={features}
							additions={additions}
							gasPrice={gasPrice}
							accepted={accepted}
							toggleAccepted={toggleAccepted}
						/>
					</Pane>
				</div>
				{!active && (
					<Pane
						position='absolute'
						top='0'
						bottom='0'
						right='0'
						width='60%'
						height='120%'
						zIndex='999'></Pane>
				)}
			</div>
		</div >
	);
};

export default Generator;


