import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_WINDOW_WIDTH } from '../actions/types';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const currentWidth = useSelector((state) => state.UI.width);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  if (width !== currentWidth) {
    dispatch({ type: SET_WINDOW_WIDTH, payload: width });
  }
  return width;
}
export default useWindowWidth;
