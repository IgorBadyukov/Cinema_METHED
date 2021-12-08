const API_KEY = 'e87b0bb871638ba77adda82802de7ae2';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

// trending/all/day?api_key=<<api_key>>

const getData = url => fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw `Что пошло не так, ошибка ${response.status}`;
    })
    .catch(err => console.error(err));
  
    
export const getTrends = async (type = 'all', period = 'day', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
};