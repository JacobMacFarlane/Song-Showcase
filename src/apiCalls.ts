import { getCleanData } from "./utilities";

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchLanaDelReyData = async () => {
  const url =
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=Lana%20del%20rey";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

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
};
export const fetchAsapRockyData = async () => {
  const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=Asap%20Rocky";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const result = await response.json();
    const cleanedData = getCleanData(result.data);
    return cleanedData;
  } catch (error) {
    throw new Error("Error fetching Asap Rocky data");
  }
};
export const fetchFrankOceanData = async () => {
  const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=Frank%20Ocean";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const result = await response.json();
    const cleanedData = getCleanData(result.data);
    return cleanedData;
  } catch (error) {
    throw new Error("Error Fetching Frank Ocean data");
  }
};

export const fetchRadioHeadData = async () => {
  const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=Radiohead";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Request failed");
    }

    const result = await response.json();
    const cleanedData = getCleanData(result.data);
    return cleanedData;
  } catch (error) {
    throw new Error("Error fetching Radiohead data");
  }
};

export const fetchPierreBourneData = async () => {
  const url =
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=Pierre%20Bourne";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Request failed");
    }

    const result = await response.json();

    const cleanedData = getCleanData(result.data);

    return cleanedData;
  } catch (error) {
    throw new Error("Error Fetching Pierre Bourne");
  }
};
export const fetchTheCureData = async () => {
  const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=The%20Cure";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const result = await response.json();
    const cleanedData = getCleanData(result.data);
    return cleanedData;
  } catch (error) {
    throw new Error("Error fetching the Cure data");
  }
};
export const fetchDestroyLonelyData = async () => {
  const url =
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=Destroy%20Lonely";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const cleanedData = getCleanData(result.data);
    return cleanedData;
  } catch (error) {
    throw new Error("Error fetching the Destroy Lonely data");
  }
};
export const fetchDeftonesData = async () => {
  const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=Deftones";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const result = await response.json();
    const cleanedData = getCleanData(result.data);
    return cleanedData;
  } catch (error) {
    throw new Error("Error fetching the Deftones data");
  }
};
export const fetchPlayboiCarti = async () => {
  const url =
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=Playboi%20Carti";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const result = await response.json();
    const cleanedData = getCleanData(result.data);
    return cleanedData;
  } catch (error) {
    throw new Error("Error fetching the Playboi Carti data");
  }
};
export const fetchKendrickLamarData = async () => {
  const url =
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=Kendrick%20Lamar";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const result = await response.json();
    const cleanedData = getCleanData(result.data);
    return cleanedData;
  } catch (error) {
    throw new Error("Error fetching the Kendrick Lamar data");
  }
};
