export interface ToastItemProps {
    item: unknown
}

type ToastItem = React.FC<ToastItemProps>
export const ToastItem: ToastItem = ( { item } ) => {
    return (
        <li className="toast-item">
            { item }
        </li>
    )
}