import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetchData from '../redux/Welcome/fetchApi';

const RandomMessage = () => {
  const [msg, setMsg] = useState('');
  const state = useSelector((state) => state.Random);
  const dispatch = useDispatch();

  useEffect(() => {
    // Ensure data is available before updating the local state
    if (state.data && state.data.message) {
      setMsg(state.data.message);
    } else {
      // If data is not available, dispatch the fetchData action
      dispatch(fetchData());
    }
  }, [dispatch, state.data]);

  return (
    <>
      <div className="row">
        <h2>{msg}</h2>
      </div>
    </>
  );
};

export default RandomMessage;
