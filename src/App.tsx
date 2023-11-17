import { Link } from 'react-router-dom';
import './globalStyles.css';

import { useAppDispatch, useAppSelector } from './hooks';
import { RouterList } from './router/Router';
import { LeftBar } from './components/navigationBar/LeftBar';
import { TopBar } from './components/navigationBar/TopBar';
import { useEffect } from 'react';
import { TopBar2 } from './components/navigationBar/TopBar2';


function App() {
  const dispatch = useAppDispatch();
  const styles = useAppSelector(state => state.styleStory);
  useEffect(() => {
  

  }, [styles.navigationBar]);
  return (
    <div>
     <div className="App">
        {/* <StyleModal/> */}
          {/* {styles.navigationBar == "Left" ? (<div>
            <LeftBar/>
            </div>): (<div>
            <TopBar/>
            </div>)}         */}
            {/* <TopBar/> */}
            <TopBar2/>

            {/* <LeftBar/> */}

        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
