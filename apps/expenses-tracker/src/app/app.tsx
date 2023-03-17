import bg from '../assets/background.png';
import ExpenseInput from './components/expense-input/expense-input.component';
import List from './components/list/list.component';

import './app.styles.scss';
import { useSelector } from 'react-redux';
import { selectExpenseList } from './store/expense/expense-slice';

export function App() {
  const expenseList = useSelector(selectExpenseList);

  return (
    <div 
      className={`main_container`}
      style={{backgroundImage: `url(${bg})`}}
    >
      <div className='row header'>
        <div className={`col-3`}>
          Logo
        </div>
        <div className={`col-9 income_input`}>
          Income input
        </div>
      </div>
      <div className={`row workspace`}>
        <div className={`col-12  expense_input`}>
          <ExpenseInput />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 expense_list`}>
          <List items={
            expenseList.map((item) => {
              return item;
            })
          } />
          <div className={`col-12 expense_total`}>
            ExpenseTotal
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
