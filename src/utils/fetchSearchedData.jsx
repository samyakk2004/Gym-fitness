import axios from "axios";

export async function fetchSearchedData(url, limit = 10) {
    let response = await axios.get(url, {
        headers: {
            "X-RapidAPI-Key": "4322d47215msh8c2f9e1a85260acp1f5668jsn976d19a8d6c0",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
        params: {
            limit: limit,
        },
    });

    return response.data;
}
