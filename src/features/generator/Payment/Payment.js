import { Checkbox, InlineAlert, Pane, Label, Button, Text, Link, CubeIcon } from 'evergreen-ui';

import { featuresList } from '../TokenFeatures/featuresHelper';
import { additionsList } from '../TokenAdditions/additionsHelper';

const Row = ({ title, value, size }) => (
	<Pane display='grid' gridTemplateColumns='auto 1fr auto' alignItems='center' gap='.5rem'>
		<Text size={size} fontWeight={500}>
			{title}
		</Text>
		<Pane border='default' borderTop={false} height={0} />
		<Text size={size}>{value}</Text>
	</Pane>
);

const SmartRow = ({ item }) => {
	const value = item.free ? (
		<>
			<Text
				color='muted'
				textDecoration='line-through'
				whiteSpace='nowrap'
				marginRight='.5rem'
				size={300}>
				{item.price + ' BNB'}
			</Text>
			<Text color='#3366FF' size={300}>
				FREE
			</Text>
		</>
	) : (
		<Text whiteSpace='nowrap' size={300}>
			{item.price + ' BNB'}
		</Text>
	);

	return <Row title={item.name} value={value} size={300} />;
};

const Payment = ({ features, additions, gasPrice, toggleAccepted, accepted, account, onPayment }) => {
	const featuresFull = features.map(f => featuresList.find(x => x.name === f));
	const additionsFull = additions.map(f => additionsList.find(x => x.name === f));
	const featuresCost = featuresFull.filter(f => !f?.free).map(f => f.price).reduce((a, b) => a + b, 0);
	const additionsCost = additionsFull.filter(f => !f?.free).map(f => f.price).reduce((a, b) => a + b, 0);

	const total = gasPrice + featuresCost + additionsCost;

	const disabled = !accepted || !account;
	return (
		<Pane
			className="payment"
			background='#fff'
			padding='1rem'
			borderRadius={4}
			display='grid'
			gridTemplateRows='auto 1fr'>
			<Label>Payment</Label>
			<Pane display='flex' flexDirection='column' justifyContent='space-between'>
				<Pane


					marginTop='1rem'
					borderRadius={4}
					background='#F3F6FF'
					padding='.5rem'
					display='grid'
					gap='.25rem'>
					{featuresFull.map(f => (
						<SmartRow key={f.name} item={f} />
					))}
					{additionsFull.map(a => (
						<SmartRow key={a.name} item={a} />
					))}
					<Row title='Gas price' value={'~' + gasPrice + ' BNB'} size={300} />
				</Pane>
				<div>
					<div>
						<Text fontWeight={500}>
							Total:&nbsp;
						</Text>
						<Text color='#3366FF'>{total.toFixed(2)} BNB</Text>
					</div>
					<Pane display='flex' alignItems='center'>
						<Checkbox label='I have read and accept the' onChange={toggleAccepted} checked={accepted} />
						<Link href='#' size={300}>&nbsp;regulations.</Link>
					</Pane>
					<Button iconAfter={CubeIcon} size='large' appearance='primary' width='100%' disabled={disabled} onClick={() => onPayment(total)}>
						Confirm
					</Button>
					{!account && <InlineAlert marginTop='1rem' intent='warning' size={300}>
						To create token connect wallet.
					</InlineAlert>}
				</div>
			</Pane>
		</Pane>
	);
};

export default Payment;
