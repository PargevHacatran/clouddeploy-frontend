interface ITableData {
    children: React.ReactNode;
    className: string;
}

export const TableData = ({ children, className }:ITableData) => {
    return (
        <p className={className}>{ children }</p>
    );
}