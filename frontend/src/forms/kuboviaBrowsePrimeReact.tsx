import { useEffect, useState } from 'react';

import { Kubovia } from '../model/kubovia.entity';

import './kuboviaBrowsePrimeReact.css'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function KuboviaBrowsePrimeReact() {

    const [kubovia, setKubovia] = useState<Kubovia[]>([]);

    useEffect(() => {
        fetchKubov();
    }, [])
    
    function fetchKubov(){
    
        fetch('http://localhost:5000/kubotest')
        .then((response) => response.json())
        .then((data) => {         
            setKubovia(data);
        })
        .catch((error) => console.error('Error:', error))
    }


    return (
        <DataTable value={kubovia} paginator rows={2} style={{ textAlign: 'center' }}>
            <Column field='id' header='ID' sortable/>
            <Column field='username' header='NAME' sortable />
            <Column field='email' header='EMAIL' headerStyle={{ display: 'block' }} sortable />
        </DataTable>
    );

}