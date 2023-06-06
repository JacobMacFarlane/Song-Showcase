import { getCleanData } from "./utilities";
import { SongDeets } from "./Component/App/App";
const apiKey = process.env.REACT_APP_API_KEY;
export const fetchLanaDelReyData = async () => {
const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=Lana%20del%20rey';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json()
    const cleanedData = getCleanData(result.data)
	return cleanedData;
} catch (error) {
	console.error(error);
}
}
  export const fetchAsapRockyData = async () => {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=Asap%20Rocky';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json()
      const cleanedData = getCleanData(result.data)
	    return cleanedData;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  export const fetchFrankOceanData = async () => {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=Frank%20Ocean';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	const cleanedData = getCleanData(result.data)
	return cleanedData;
} catch (error) {
	console.error(error);
}
  }

export const fetchRadioHeadData = async () => {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=Radiohead';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	const cleanedData = getCleanData(result.data)
	return cleanedData;
} catch (error) {
	console.error(error);
}
}

export const fetchPierreBourneData = async () => {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=Pierre%20Bourne';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json()
	const cleanedData = getCleanData(result.data)
	return cleanedData;
} catch (error) {
	console.error(error);
}
}
export const fetchTheCureData = async () => {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=The%20Cure';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json()
	const cleanedData = getCleanData(result.data)
	return cleanedData;
} catch (error) {
	console.error(error);
}
}
export const fetchDestroyLonelyData = async () => {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=Destroy%20Lonely';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json()
        const cleanedData = getCleanData(result.data)
	return cleanedData;
    } catch (error) {
        console.error(error);
    }
}
export const fetchDeftonesData = async () => {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=Deftones';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json()
	const cleanedData = getCleanData(result.data)
	return cleanedData;
} catch (error) {
	console.error(error);
}
}
export const fetchPlayboiCarti = async () => {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=Playboi%20Carti';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json()
	const cleanedData = getCleanData(result.data)
	return cleanedData;
} catch (error) {
	console.error(error);
}
}
export const fetchKendrickLamarData = async () => {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=Kendrick%20Lamar';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json()
	const cleanedData = getCleanData(result.data)
	return cleanedData;
} catch (error) {
	console.error(error);
}
}