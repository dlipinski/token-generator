import { Switch, Text, Pane, Label } from 'evergreen-ui';
import classes from '../TokenFeatures/TokenFeatures.module.css';
import { additionsList } from './additionsHelper';

const TokenFeature = ({ feature, checked, onClick }) => (
	<div
		className={[classes.Feature, checked ? classes.Checked : classes.Unchecked].join(' ')}
		onClick={onClick}>
		<div className={classes.Left}>
			<Switch checked={checked} />
			<div>
				<Text fontWeight='500' size={300}>
					{feature.name}
				</Text>
				<div>
					<Text color='muted' size={300}>
						{feature.description}
					</Text>
				</div>
			</div>
		</div>
		<div className={classes.Price}>
			{feature.free ? (
				<>
					<Text size={300} color='muted' textDecoration='line-through' whiteSpace='nowrap'>
						{feature.price + ' BNB'}
					</Text>
					<Text size={300} color='#3366FF'>
						FREE
					</Text>
				</>
			) : (
				<Text size={300} color='#3366FF' whiteSpace='nowrap'>
					{feature.price + ' BNB'}
				</Text>
			)}
		</div>
	</div>
);

const TokenAdditions = ({ additions, toggleAddition }) => (
	<Pane background='#fff' display='grid' gridTemplateRows='auto 1fr' padding='1rem' borderRadius={4} className="token-additions">
		<Pane display='grid' gap='.25rem'>
			<Label>Additions</Label>
			<Text color='muted' size={300}>
				Choose additions for your token.
			</Text>
		</Pane>
		<Pane display='grid' gap='.5rem' marginTop={8}>
			{additionsList.map(addition => (
				<TokenFeature
					key={addition.name}
					feature={addition}
					checked={additions.includes(addition.name)}
					onClick={() => toggleAddition(addition.name)}
				/>
			))}
		</Pane>
	</Pane>
);

export default TokenAdditions;
