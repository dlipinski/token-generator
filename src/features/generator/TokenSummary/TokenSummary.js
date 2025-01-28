import { Text, Pane, Label } from 'evergreen-ui';
import emptyToken from '../../../assets/empty-token.png';

export const TokenDisplay = ({ details }) => (
	<Pane
		marginTop='1.5rem'
		background='#F3F6FF'
		borderRadius='4'
		padding='.5rem'
		display='flex'
		alignItems='center'
		gap='.5rem'>
		<img src={emptyToken} style={{ width: '1.5rem' }} alt='logo' />
		<div>
			<Text fontWeight={500} color={details.name ? 'default' : 'muted'} size={300}>
				{details.name ? details.name : 'My Awesome Token'}
			</Text>
			<Text fontWeight={500} color={details.symbol ? 'default' : 'muted'} size={300}>
				&nbsp;({details.symbol ? details.symbol : 'MAT'})
			</Text>
		</div>
	</Pane>
)

const TokenSummary = ({ details }) => {
	return (
		<Pane background='#fff' padding='1rem' borderRadius={4} className="token-summary" paddingBottom='2rem'>
			<Label>Summary</Label>
			<TokenDisplay details={details} />

			<Pane marginTop='.5rem' paddingLeft='.5rem' display='flex' gap='1rem'>
				<div>
					<Text fontWeight={500} size={300} paddingRight='.25rem'>
						Total supply
					</Text>
					<Text size={300} color='muted'>
						{details.totalSupply ? details.totalSupply : '1000000'}
					</Text>
				</div>

				<div>
					<Text fontWeight={500} size={300} paddingRight='.25rem'>
						Decimals
					</Text>
					<Text size={300} color='muted'>
						{details.decimals ? details.decimals : '18'}
					</Text>
				</div>
			</Pane>
		</Pane>
	);
};

export default TokenSummary;


