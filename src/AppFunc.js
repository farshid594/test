import React, { useState, useEffect } from 'react'
function MainScreen({ title }) {

    const [loading, setLoading] = useState(false)


    const onBtnClick = () => {
        setLoading(false)
    }


    if (loading) {
        return (<div onClick={onBtnClick} >loading</div>)
    }

    return (
        <div style={{
            backgroundColor: "#f00", width: "100%",
            height: "100vh", display: 'flex', flexDirection: 'column'
        }} >
            <div style={{ backgroundColor: "#0f0", height: 70, display: 'flex', flexDirection: 'row-reverse' }} >
                <div style={{ backgroundColor: "#859", width: 140 }} ></div>
                <div style={{ backgroundColor: "#698", flex: 1 }} ></div>
                <div style={{ backgroundColor: "#745", width: 200 }} ></div>
            </div>
            <div style={{ backgroundColor: "#00f", flex: 7 }}></div>
            <div style={{ backgroundColor: "#0ff", flex: 2 }}></div>
        </div>
    )

}
export default MainScreen
