import axios from 'axios';

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async ()=>{
    try{
        const respose = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return respose.data;
    } catch(e){
        console.error(e)
    }
}

export const fetchNewAlbums = async ()=>{
    try{
        const respose = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return respose.data;
    } catch(e){
        console.error(e)
    }
}


export const fetchTopSongs = async ()=>{
    try{
        const respose = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        return respose.data;
    } catch(e){
        console.error(e)
    }
}


export const fetchFilters = async ()=>{
    try{
        const respose = await axios.get(`${BACKEND_ENDPOINT}/genres`);
        return respose.data;
    } catch(e){
        console.error(e)
    }
}