
export type ItemType = {
    title: string
    value: any
}

type ControlledAccordionProps = {
    title:string
    collapsed:boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export const ControlledAccordion = (props:ControlledAccordionProps) => {
    const {title, collapsed, items, onChange, onClick } = props


    return (
        <div>
            <AccordionTitle title={title} onToggle={onChange} />
            {collapsed && <AccordionBody onClick={onClick} items={items}/>}
        </div>
    );
};

type AccordionTitleProps = {
    title: string
    onToggle: () => void
}

function AccordionTitle(props:AccordionTitleProps) {
    return <h2 style={{cursor: "pointer"}} onClick={props.onToggle}>{props.title}</h2>
}

type AccordionBodyProps = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props:AccordionBodyProps) {
    return (
        <ul>
            {props.items.map((item, index) => <li onClick={()=>props.onClick(item.value)} key={index}>{item.title}</li>)}
        </ul>
    )
}