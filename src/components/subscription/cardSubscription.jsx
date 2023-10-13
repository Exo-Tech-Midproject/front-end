import React from 'react'
// import Rating from '@mui/material/Rating';
import "./cardSubscription.css";




export default function cardSubscription() {

	const cardsData = [
		{
			id: 1,
			name: 'Hasan',
			bio: 'caring specialist with 3 years of experience. They prioritize patient well-being, advocate for preventive care, and contribute to medical research.',
			rating: 3.5
		},
		{
			id: 2,
			name: 'Anas',
			bio: 'caring specialist with 3 years of experience. They prioritize patient well-being, advocate for preventive care, and contribute to medical research.',
			rating: 3.5
		},
		{
			id: 3,
			name: 'Tasneem',
			bio: 'caring specialist with 3 years of experience. They prioritize patient well-being, advocate for preventive care, and contribute to medical research.',
			rating: 3.5
		},
		{
			id: 4,
			name: 'Abdullah',
			bio: 'caring specialist with 3 years of experience. They prioritize patient well-being, advocate for preventive care, and contribute to medical research.',
			rating: 3.5
		},
	];

	return (
		<div class='mainP'>


			{cardsData.map((card) => (
				<div class="card">

					<div class="card-text">
						<div class="portada">

						</div>
						<div class="title-total">
							<div class="title">Doctor</div>
							<h3>{card.name}</h3>

							<div class="desc">	{card.bio}</div>

							<div class="rating">
								{/* <button><i class="far fa-heart"></i></button>
								<button><i class="far fa-envelope"></i></button>
								<button><i class="fas fa-user-friends"></i></button> */}
								{/* <Rating
									sx={{
										height: "2px",
										width: "5px",
										fontSize: "15px"
									}} name="half-rating-read" defaultValue={card.rating} precision={0.5} readOnly /> */}

							</div>
						</div>

					</div>
				</div>
			))}

		</div>

	)
}