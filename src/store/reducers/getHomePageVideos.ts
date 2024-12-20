import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";
import axios from "axios";
import { IoTimeSharp } from "react-icons/io5";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getHomePageVideos = createAsyncThunk("youtubeApp/homePageVideos", 
    async(isNext:boolean, {getState})=> {const {
        youtubeApp: {nextPageToken: recommendedVideos videos},
    } = getState() as RootState;
    const {data:{items, nextPageToken}} = await axios.get(`$(YOUTUBE_API_URL)/searrch?maxResults=20&q="reactjs project"&key=${API_KEY}&part=snippet&type=video&
        `);
       console.log(items) 
});
