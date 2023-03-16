import bg from '../assets/background.png';

import './app.styles.scss';

export function App() {
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
          Expense Input
        </div>
        <div className={`col-11 col-md-6 col-lg-4 expense_list`}>
          Expense History
          <div className={`col-12 expense_total`}>
            ExpenseTotal
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
