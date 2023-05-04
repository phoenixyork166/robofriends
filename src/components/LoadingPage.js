
export default function LoadingPage( {onLoad} ) {
    return (
        <div>
            <h1
                style={{color: 'rgba(220,247,10,0.8)',}}
            >
                    Page is loading up</h1>
            <br/>
            <button 
                style={{
                    color: "black",
                    backgroundColor: "rgba(247,10,243,0.7)",
                    borderRadius: 50,
                }}
                onClick={onLoad} 
            >Load this page</button>
        </div>
    )

}