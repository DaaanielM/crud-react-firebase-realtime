import React, { useState, useEffect } from 'react';
import firebase from '../db/firebase';
import All from './All';
function List() {
	const [allList, setAllList] = useState();
	useEffect(() => {
		const cls = firebase.database().ref('Mensaje');
		cls.on('value', (snapshot) => {
			const all = snapshot.val();
			const allList = [];
			for (let id in all) {
				allList.push({ id, ...all[id] });
			}
			// console.log(allList);
			setAllList(allList);
		});
	}, []);
	return (
		<div
			style={{
				width: '800px',
				height: '700px',
				margin: 'auto',
				border: '1px solid black',
				marginTop: '20px',
				overflow: 'scroll',
			}}>
			{allList
				? allList.map((all, index) => <All all={all} key={index} />)
				: ''}
		</div>
	);
}

export default List;
