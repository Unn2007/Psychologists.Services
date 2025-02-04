import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPsychologists = createAsyncThunk(
  'psychologists/fetchAll',

  async (_, thunkAPI) => {
    try {
      const url =
        'https://psychologistsservices-e119b-default-rtdb.europe-west1.firebasedatabase.app/psychologists.json';
      const params = {
        orderBy: '"$key"',
        limitToFirst: 3,
      };
      const response = await axios.get(url, { params });
      // const response = await axios.get(url);

      const psychologists = Object.entries(response.data).map(([id, obj]) => ({
        id,
        ...obj,
      }));
      const lastKey = psychologists[psychologists.length - 1].id;

      const responseTotal = await axios.get(url,{shallow:true});
      const total = Object.keys(responseTotal.data).length;


      return { psychologists, lastKey,total };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchNextPage = createAsyncThunk(
  'psychologists/fetchNextPage',

  async (oldLastKey, thunkAPI) => {
    try {
      const url =
        'https://psychologistsservices-e119b-default-rtdb.europe-west1.firebasedatabase.app/psychologists.json';

      const params = {
        orderBy: '"$key"',
        startAt: `"${oldLastKey}"`,
        limitToFirst: 4,
      };
      const response = await axios.get(url, { params });

      const psychologists = Object.entries(response.data).map(([id, obj]) => ({
        id,
        ...obj,
      }));
      psychologists.shift();

      const lastKey = psychologists[psychologists.length - 1]?.id || null;

      return { psychologists, lastKey };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
