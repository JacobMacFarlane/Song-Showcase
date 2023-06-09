import { getCleanData } from "./utilities";

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchArtistData = async (artistName: any) => {
	const encodedArtistName = encodeURIComponent(artistName);
	const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${encodedArtistName}`;
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
			"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
		  },
	}
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
		  throw new Error("Request failed");
		}
		const result = await response.json();
		const cleanedData = getCleanData(result.data);
		return cleanedData;
	  } catch (error) {
		throw new Error("Error fetching lana del rey data");
	  }
}



