import React, { useState } from 'react';
import firebase from '../db/firebase';
function Form() {
	const [message, setMessage] = useState('');
	const handleChange = (e) => {
		setMessage(e.target.value);
	};
	const createMessage = () => {
		const cls = firebase.database().ref('Mensaje');
		const all = {
			message,
			complete: false,
		};
		cls.push(all);
	};
	return (
		<div style={{ width: '450px', margin: 'auto' }}>
			<input
				style={{
					padding: 12,
					width: '400px',
					borderRadius: '5px',
					borderColor: '#020202',
				}}
				type='text'
				onChange={handleChange}
				value={message}
			/>
			<button
				style={{
					padding: 12,
					margin: 10,
					width: '85px',
					border: 'none',
					borderRadius: '15px',
					background: 'green',
					color: 'white',
					textTransform: 'uppercase',
					fontWeight: 'bold',
					cursor: 'pointer',
				}}
				onClick={createMessage}>
				Crear
			</button>
		</div>
	);
}

export default Form;
