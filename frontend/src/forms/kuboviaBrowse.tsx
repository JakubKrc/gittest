import { useEffect, useRef, useState } from 'react';
import { Kubovia } from '../model/kubovia.entity';
import classes from './kuboviaBrowse.module.css'
import ContextMenu from '../components/contextmenu/ContextMenu';

export default function KuboviaBrowse() {

    const [kubovia, setKubovia] = useState<Kubovia[]>([]);
    const [selectedRowKey, setSelectedRowKey] = useState(null);

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

        const handleClick = (id:number) =>{
            console.log(id);
            
    }

    const contextMenuRef = useRef(null)
    const [contextMenu, setContextMenu] = useState({
        position: {
            x:0,
            y:0
        },
        toggled: false
    })

    function handleOnContextMenu(e, rowKey){
        e.preventDefault();

        const contextMenuAttr = contextMenuRef.current.getBoundingClientRect();
        const isLeft = e.clientX < window?.innerWidth / 2;

        let x;
        let y = e.clientY;

        if(isLeft){
            x = e.clientX
        } else {
            x = e.clientX - contextMenuAttr.width
        }

        setSelectedRowKey(rowKey)

        setContextMenu({
            position: {
                x,
                y
            },
            toggled: true
        })

    }

    function resetContextMenu() {
        setSelectedRowKey(null)
        setContextMenu({...contextMenu, toggled: false})
    }

    useEffect(() => {
        function handler(e) {
            if (contextMenuRef.current){
                if (!contextMenuRef.current.contains(e.target))
                    resetContextMenu()
            }
        }

        document.addEventListener('click', handler)

        return () => {
            document.removeEventListener('click', handler)
        }
    })

    return (
        <div>
            <h3>kubovia table</h3>
            <table className={classes.table}>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {kubovia.map((item) => (
                <tr key={item.id} onContextMenu={(e)=> handleOnContextMenu(e, item.id)} 
                    onClick={()=>{handleClick(item.id)}} 
                    className={selectedRowKey==item.id ? classes.selectedRow : classes.table}
                >
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                </tr>
                ))}
            </tbody>
            </table>
            <ContextMenu
                contextMenuRef={contextMenuRef}
                isToggled={contextMenu.toggled}
                positionX={contextMenu.position.x}
                positionY={contextMenu.position.y}
                buttons={[
                    {
                        text:"Create new",
                        onClick: ()=> alert('create'),
                        isSpacer: false,
                    },
                    {
                        text:"Update",
                        onClick: ()=> alert('update'),
                        isSpacer: false,
                    },
                    {
                        text:"Delete",
                        onClick: ()=> alert('del'),
                        isSpacer: false,
                    },
                    {
                        text:"",
                        onClick: ()=> alert('nic'),
                        isSpacer: true,
                    },
                    {
                        text:"Do nothing",
                        onClick: ()=> alert('do nothing'),
                        isSpacer: false,
                    },
                ]}  
            />
        </div>
      )
}