import {FETCH_DATA} from './ActionTypes'

const filter = {
  eventDateFrom: '2018-06-07',
  eventDateTo: '2018-06-09',
  sortedBy: 'eventName',
  sortDir: 'asc'
};

export const fetchData = () => {
  console.log("running");
  return (dispatch) => {
    fetch(`https://skybox.vividseats.com/services/events?limit=10&eventDateFrom=${filter.eventDateFrom}&eventeDateTo=${filter.eventDateTo}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Api-Token': 'c721c2a0-9674-4aaa-9318-555398c3f6ee'
      },
    }).then(res => res.json()).then((json) => {
      console.log(json);
      dispatch({type: FETCH_DATA,
      rows: json.rows});
    }
    )
  }
};
