
import KuboviaBrowse from './forms/kuboviaBrowse'
import KuboviaBrowsePrimeReact from './forms/kuboviaBrowsePrimeReact'


import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast'

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css'
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const [text, setText] = useState('');
  const toastRef = useRef();

  const onButtonClick = () => {
    if (text)
      toastRef.current.show({severity: 'ifo', summary: 'Success', detail: text});
    else
      toastRef.current.show({severity: 'error', summary: 'Error', detail: 'nemam nic'})
  };

  return (
    <>
      <Toast ref={toastRef} />

      <KuboviaBrowse />

      <br />

      <span className="p-float-label p-input-filled">
        <InputText id="inputT" value={text} onChange={e => setText(e.target.value)}/>
        <label htmlFor='inputT'>Name</label>
      </span>

      <br />

      <Button type='button' style={{ fontSize : '200%', fontWeight : 'bold', color : 'red'}} label='Stlac' icon='pi pi-check' onClick={onButtonClick}/>

      <KuboviaBrowsePrimeReact />
    </>
  )
}

export default App