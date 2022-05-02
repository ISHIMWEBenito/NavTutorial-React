import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';

export default function Nav() {
  const [user, setUser] = useState('Benito');
  console.log(setUser);

  return (
    <main>
      <Header user={user} />
      <Body user={user} />
    </main>
  );
}
