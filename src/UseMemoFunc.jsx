import React, { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';

const filter = (users, query) => {
   console.log('FILTER CHAMADO')
   return users.filter(user => user.name.toLowerCase().includes(query));
}

const UserList = ({ users, query }) => {
   // const filtered = filter(users, query);
   const filtered = useMemo(() => (
      filter(users, query)
   ), [users, query]);
   
   // useCallback(fn, dps)
   // useMemo(() => fn, deps)
   
   return filtered.map(user => <div key={user.id}>{user.name}</div>);
}

   function useCallbackFunc() {
   const [count, setCount] = useState(0);
   const [query, setQuery] = useState('');
   const [users, setUsers] = useState([]);

   const getUsers = useCallback(async () => { 
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
      setUsers(data);
   },[]);
      
      useEffect(() => {
         getUsers();
      },[getUsers])
      
   return (
      <div className="App">
         <h1>useCallback vs useMemo</h1>
         <div>
            <div>
               count: {count}
            </div>
            <button onClick={useCallback(() => setCount(prev => prev +1),[])}>Increment</button>
         </div>
         <hr/>
         <input type="text" onChange={event => setQuery(event.target.value)} />
         <UserList users={users} query={query} />
      </div>

   );
}

export default useCallbackFunc;
