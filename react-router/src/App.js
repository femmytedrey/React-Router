import React from 'react';
import './App.css';
import { Home } from './Components/Home';
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar';
import { OrderAummary } from './Components/OrderAummary';
import { NoMatch } from './Components/noMatchRoute';
import { Products } from './Components/Products';
import { Featured } from './Components/Featured';
import { New } from './Components/New';
import { Users } from './Components/Users';
import { UserDetails } from './Components/UserDetails';
import { Admin } from './Components/Admin';
import { User1 } from './Components/User1';
import { User2 } from './Components/User2';
import { User3 } from './Components/User3';
import { Profile } from './Components/Profile';
import { AuthProvider } from './Components/auth';
import { Login } from './Components/Login';
const LazyAbout = React.lazy(() => import('./Components/About'))

function App() {
  return (
    <AuthProvider>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='about' element = {<React.Suspense fallback= 'Loading...'>
        <LazyAbout />
      </React.Suspense>} />
      <Route path='order-summary' element = { <OrderAummary /> } />
      <Route path='products' element = { <Products /> }>
        <Route index element = { <Featured /> }/>
        <Route path='feature' element = { <Featured /> } />
        <Route path='new' element = { <New /> } />
      </Route>
      <Route path='users' element = { <Users />}>
        <Route path=':userId' element = { <UserDetails /> } />
        <Route path='admin' element = { <Admin /> } />


        {/* <Route path='1' element = { <User1 />} />
        <Route path='2' element = { <User2 />} />
        <Route path='3' element = { <User3 />} /> */}


      </Route>
      <Route path='profile' element = {<Profile />} />
      <Route path='login' element = {<Login />} />
      <Route path='*' element = { <NoMatch /> } />
    </Routes>
    </AuthProvider>
    
  );
}

export default App;
