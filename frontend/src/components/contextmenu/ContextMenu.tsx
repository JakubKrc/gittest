import classes from './ContextMenu.module.css'

export default function({
    rightClickItem,
    positionX,
    positionY,
    isToggled,
    buttons,
    contextMenuRef
}){
    return (
        <div
            style={{
                top: positionY + 2 + 'px',
                left: positionX + 2 + 'px'
            }}
            //className={`${classes.contextMenu} ${isToggled ? classes.active : ''}`}
            //className={classes.contextMenu}
            //className={classes.active}
            className = {isToggled ? classes.contextMenuON : classes.contextMenuOFF}
            ref={contextMenuRef}
        >

            {buttons.map((button, index) => {

                function handleClick(e){
                    e.stopPropagation()
                    button.onClick(e,rightClickItem)
                }

                if (button.isSpacer) return <div key={index} className={classes.hr}></div>;

                return (
                    <button 
                        onClick={handleClick}
                        key={index}
                        className={classes.contextMenuButton}
                    >
                        <span>{button.text}</span>
                    </button>
                )

            })}
        </div>
    )
}