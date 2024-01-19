import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetchData from '../redux/Welcome/fetchApi';

const RandomMessage = () => {
  const [msg, setMsg] = useState('');
  const state = useSelector((state) => state.Random);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (state.data) {
      setMsg(state.data.message);
    }
  }, [state.data]);

  return (
    <>
      <div className="row">
        <h2>{msg}</h2>
      </div>
    </>
  );
};

export default RandomMessage;
