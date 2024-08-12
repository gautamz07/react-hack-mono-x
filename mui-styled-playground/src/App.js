import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
// import { styled  } from 'styled-components'
// import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import DataGridPremiumDemo from './components/Datagrid'
import UserApi from './generated/src/api/UserApi'

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import DisplayMyPage from './AppToDoList'

// const HeadingTxt = styled.h1`
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   color: #BF4F74;
// `;

// const TomatoHeading = styled(HeadingTxt)`
//   color: tomato;
// `

// const rows = [
//   { id: 1, col1: 'Hello', col2: 'World' },
//   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
//   { id: 3, col1: 'MUI', col2: 'is Amazing' },
// ];

// const columns = [
//   { field: 'col1', headerName: 'Column 1', width: 150 },
//   { field: 'col2', headerName: 'Column 2', width: 150 },
// ];

const MyLinkComponent = () => {
  return (
    <div>Sender ID matched</div>
  )
}


const userAPI = new UserApi()
function App() {

  useEffect(() => {
    // alert('Yo man uganda !')
    userAPI.createUser({
      body: {
        'id': 0,
        'username': 'string',
        'firstName': 'string',
        'lastName': 'string',
        'email': 'string',
        'password': 'string',
        'phone': 'string',
        'userStatus': 0
      }
    })
  }, [])


  return (
    <Router>
      <div className="App">
        <aside>
          <Link to='/'>Go to tables</Link>
          &nbsp; | &nbsp;
          <Link to='/sender/efhsjkailopoi'>View Sender Details</Link>
        </aside>
        <main>
          <DisplayMyPage />
          {/* <Route path='/' component={DataGridPremiumDemo} exact /> */}
          {/* <Route path='/' component={DataGridPremiumDemo} exact /> */}
          <Route path='/sender/:senderId' component={MyLinkComponent} />
        </main>
      </div>
    </Router>
  );
}

export default App;
