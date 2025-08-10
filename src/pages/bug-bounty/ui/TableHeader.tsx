interface ITableHeader {
    children: React.ReactNode;
    className: string;
}

export const TableHeader = ({ children, className }:ITableHeader) => {
    return (
        <div>
            <p className={className}>{ children }</p>
        </div>
    )
} 