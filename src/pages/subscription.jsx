
import CardSubscription from '../components/subscription/cardSubscription';
import CardSubscriptionLink from '../components/subscription/cardSubscriptionLink';
import HeroSubscription from '../components/subscription/heroSubscription';
export default function subscription() {
	return (
		<>
			<HeroSubscription />
			{/* <CardSubscription /> */}
			<CardSubscriptionLink />
		</>
	)
}
