import classes from './TokenFeatures.module.css';
import { featuresList } from './featuresHelper';
import { Text, Pane, Label, Switch } from 'evergreen-ui';

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
					<Text color='muted' size={300} textAlign='justify'>
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

<Text color='muted'>The quick brown fox jumps over the lazy dog</Text>;

const TokenFeatures = ({ features, toggleFeature }) => (
	<Pane background='#fff' display='grid' gridTemplateRows='auto 1fr' padding='1rem' borderRadius={4} className="token-features">
		<Pane display='grid' gap='.25rem'>
			<Label>Features</Label>
			<Text color='muted' size={300}>
				Choose features for your token.
			</Text>
		</Pane>

		<Pane display='grid' gap='.5rem' marginTop={8}>
			{featuresList.map(feature => (
				<TokenFeature
					key={feature.name}
					feature={feature}
					checked={features.includes(feature.name)}
					onClick={() => toggleFeature(feature.name)}
				/>
			))}
		</Pane>
	</Pane>
);

export default TokenFeatures;

