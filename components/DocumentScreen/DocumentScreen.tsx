import './document-screen.css'

export const DocumentScreen = ({children}) => {
    return (
        <div className="document-container">
            <div className="document-title">
                <h1>ncn utils</h1>
                <h3>The best component library of all times - Arnold Schwarzenegger</h3>
                {children}
            </div>
        </div>
    )
}
