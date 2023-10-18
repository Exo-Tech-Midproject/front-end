
import CardSubscription from '../components/subscription/cardSubscription';
import HeroSubscription from '../components/subscription/heroSubscription';
import SubscriptionsLink from '../components/subscription/SubscriptionsLink';


export default function subscription() {
	return (
		<>
			<HeroSubscription />
			<CardSubscription />
			{/* <SubscriptionsLink /> */}
		</>
	)
}
