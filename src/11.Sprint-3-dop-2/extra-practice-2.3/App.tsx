import {Fragment} from 'react';
import {Task_3} from "./src/task_3/Task_3";
import {SlowComponent} from "./src/task_3/slowComponent/SlowComponent";


export const App_sprint3_dop2_3 = () => {
  return (
    <Fragment>
      <Task_3 > <SlowComponent /> </Task_3>

      {/* вынести компонент на уровень выше*/}
      {/*<SlowComponent />*/}
      <hr />
    </Fragment>
  );
};
