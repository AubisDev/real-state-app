import axios from "axios";

export const baseUrl:string = 'https://bayut.p.rapidapi.com/properties/list';

export const fetchApi = async(url: string) => {
    const { data } = await axios.get( (url) , {
        headers: {
            'X-RapidAPI-Key': '8001451066mshf4fefb6c81ef217p128dcejsnfc46ccf0433a',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
}

