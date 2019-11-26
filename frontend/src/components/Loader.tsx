import React from 'react';
import ReactLoading from 'react-loading';
import './Spinner.css'

const Loader: React.FC = () => {

	return <ReactLoading className='loading' type={'bubbles'} color={'#339966'} height={'10%'} width={'10%'}/>;
};

export default Loader;
