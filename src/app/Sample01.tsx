import { useEffect, useState } from 'react';

import { Sample02 } from '@/app/Sample02';
import { Sample03 } from '@/app/Sample03';

type Person = {
  age: number;
  blood: 'A' | 'B' | 'AB' | 'O';
  hobby: string;
  home: string;
  name: string;
};

const p: Person = {
  name: 'Bob',
  age: 16,
  hobby: 'piano',
  home: 'Tokyo',
  blood: 'A',
};
const name2 = 'Bob';
const age = 16;

export function Sample01() {
  const [name, setName] = useState('');

  useEffect(() => {
    if (name === 'Bob') {
      setName('red');
    }
  }, [name]);

  return (
    <div>
      <div>{name2}</div>
      <div>{age}</div>
      <div>{p.name}</div>
      <div>{name}</div>
      <button
        onClick={() => {
          setName('orange');
        }}
      />
      <div>
        <h1>
          <p>
            <span>this is sample01</span>
          </p>
        </h1>
      </div>
      <Sample02>this is sample02</Sample02>
      <Sample03 age={16} name="Bob" />
    </div>
  );
}

export function Melon() {
  return <div>this is melon2</div>;
}
