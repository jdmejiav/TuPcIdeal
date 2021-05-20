import axios from 'axios';

const baseURL = 'http://tupcideal.tk:8000/api/';

const axiosInstance = axios.create({
	baseURL: baseURL,
	headers: {
		Authorization: localStorage.getItem('access_token')
			? 'JWT ' + localStorage.getItem('access_token')
			: null,
		'Content-Type': 'application/json',
		accept: 'application/json',
	}, 
});

export default axiosInstance;
