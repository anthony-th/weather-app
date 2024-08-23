import { GEO_API_KEY } from "./api-keys";

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': GEO_API_KEY,
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
