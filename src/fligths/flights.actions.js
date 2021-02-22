import { fetchFlightsData } from './flights.gateway';
import moment from 'moment';

export const SET_FLIGHTS_LIST = 'SET_FLIGHTS_LIST';

export const setFlightList = flightsData => {
  return {
    type: SET_FLIGHTS_LIST,
    payload: {
      flightsData,
    },
  };
};

export const getFlightList = () => {
  const newDate = moment(new Date()).format('DD-MM-YYYY');
  return dispatch => {
    fetchFlightsData(newDate).then(flightsData => dispatch(setFlightList(flightsData.body)));
  };
};
