import Payment from '../Payment/Payment';
import classes from './RotatingPanel.module.css';



const RotatingPanel = ({ isRotated, onPayment, account, features, additions, gasPrice, accepted }, toggleAccepted) => (
    <div className={[classes.Card, false ? classes.Rotated : ''].join(' ')}>
        <div className={classes.Front}>
            <Payment
                onPayment={onPayment}
                account={account}
                features={features}
                additions={additions}
                gasPrice={gasPrice}
                accepted={accepted}
                toggleAccepted={toggleAccepted} />
        </div>
        <div className={classes.Back}>
            <Payment
                onPayment={onPayment}
                account={account}
                features={features}
                additions={additions}
                gasPrice={gasPrice}
                accepted={accepted}
                toggleAccepted={toggleAccepted} />
        </div>
    </div>
);


export default RotatingPanel;
