import React, { useState } from "react"

const ImageRotater: React.FC = () => {
    const [imgUrl, setImgUrl] = useState<string>("")

    const getNewImage = () => {
        setInterval(() => setImgUrl(""))
    }

    return <img src={imgUrl} className="img" />
}
