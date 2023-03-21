import { useSelector } from 'react-redux';
import { selectExpensesList } from './store/expense/expense-slice';

import bg from '../assets/background.png';
import List from './components/list/list.component';
import IncomeInput from './components/income-input/income-input.component';
import ExpenseInput from './components/expense-input/expense-input.component';
import ExpenseTotal from './components/expense-total/expense-total.component';

import './app.styles.scss';

export function App() {
  const expenseList = useSelector(selectExpensesList);

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
          <IncomeInput />
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
            <ExpenseTotal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
