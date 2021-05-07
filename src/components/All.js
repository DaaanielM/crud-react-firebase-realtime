import React from 'react';
import firebase from '../db/firebase';
function All({ all }) {
	const deleteAll = () => {
		const allRef = firebase.database().ref('Mensaje').child(all.id);
		allRef.remove();
	};
	const completeAll = () => {
		const allRef = firebase.database().ref('Mensaje').child(all.id);
		allRef.update({
			complete: !all.complete,
		});
	};
	console.log(all);
	return (
		<div>
			<h1>{all.message}</h1>
			<button
				style={{
					padding: 12,
					margin: 10,
					width: '120px',
					border: 'none',
					borderRadius: '15px',
					background: 'red',
					color: 'white',
					textTransform: 'uppercase',
					fontWeight: 'bold',
					cursor: 'pointer',
				}}
				onClick={deleteAll}>
				Delete
			</button>
			<button
				style={{
					padding: 12,
					margin: 10,
					width: '120px',
					border: 'none',
					borderRadius: '15px',
					background: '#16A7D6',
					color: 'white',
					textTransform: 'uppercase',
					fontWeight: 'bold',
					cursor: 'pointer',
				}}
				onClick={completeAll}>
				Completado
			</button>
		</div>
	);
}

export default All;
