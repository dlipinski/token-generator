import classes from './TokenDetails.module.css';
import { TextInputField, Button, Label, Text, Pane } from 'evergreen-ui';
import { useState } from 'react';

const TokenDetails = ({ isMainnet, toggleNet, details, setDetail }) => {
	const [choosingDecimals, setChoosingDecimals] = useState(false);

	return (
		<div className={classes.TokenDetails + ' token-details'}>
			<TextInputField
				label='Token name'
				description='Choose a name for your token.'
				placeholder='My Awesome Token'
				required
				value={details.name}
				onChange={e => setDetail('name', e.target.value)}
			/>
			<TextInputField
				label='Token symbol'
				description='Choose a symbol for your token (usually 3-5 chars).'
				placeholder='MAT'
				required
				value={details.symbol}
				onChange={e => setDetail('symbol', e.target.value)}
			/>
			<TextInputField
				label='Token decimals'
				description="Insert the decimal precision of your token. If you don't know what to insert, use 18."
				placeholder='18'
				required
				value={details.decimals}
				onChange={e => setDetail('decimals', e.target.value)}
			/>
			<div className={classes.CommonUsed}>
				<Button appearance='minimal' color={details.decimals == 9 ? '#3366ff' : 'default'} onClick={() => setDetail('decimals', 9)}>
					9
				</Button>
				<Button appearance='minimal' color={details.decimals == 12 ? '#3366ff' : 'default'} onClick={() => setDetail('decimals', 12)}>
					12
				</Button>
				<Button appearance='minimal' color={details.decimals == 16 ? '#3366ff' : 'default'} onClick={() => setDetail('decimals', 16)}>
					16
				</Button>
				<Button appearance='minimal' color={details.decimals == 18 ? '#3366ff' : 'default'} onClick={() => setDetail('decimals', 18)}>
					18
				</Button>
			</div>
			<br />
			<Label size={400}>Total supply *</Label><br />
			<Text color='muted' size={300}>Insert the maximum number of tokens available.</Text>
			<Pane borderColor={choosingDecimals ? '#3366ff' : 'default'} transition='.1s' paddingTop='.25rem' paddingBottom='.5rem' marginTop='.75rem' marginBottom='.5rem' border='default' paddingLeft='.5rem' borderRadius='4px'>
				<Text size={300} textAlign='center' fontWeight={500} >{details.totalSupply}</Text>
			</Pane>
			{/*<TextInputField
				label='Total supply'
				color='#3366FF'
				description='Insert the maximum number of tokens available.'
				placeholder='1000000'
				required
				value={details.totalSupply}
				onChange={e => setDetail('totalSupply', e.target.value)}
			/>*/}
			<div className={classes.CommonUsed} onMouseDown={() => setChoosingDecimals(o => !o)} onMouseUp={() => setChoosingDecimals(o => !o)}>
				<Button appearance='minimal' color={details.totalSupply == 10 ** 6 ? '#3366ff' : 'default'} onClick={() => setDetail('totalSupply', 10 ** 6)}>
					milion
					<br />
					1 000 000
				</Button>
				<Button appearance='minimal' color={details.totalSupply == 10 ** 9 ? '#3366ff' : 'default'} onClick={() => setDetail('totalSupply', 10 ** 9)}>
					bilion
					<br />
					1 000 000 000
				</Button>
				<Button appearance='minimal' color={details.totalSupply == 10 ** 12 ? '#3366ff' : 'default'} onClick={() => setDetail('totalSupply', 10 ** 12)}>
					trilion
					<br />
					<small>1 000 000 000 000</small>
				</Button>
			</div>
		</div >
	)

}

export default TokenDetails;
