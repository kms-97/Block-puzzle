const blockShape = [
    [[1]],
    [[0,1],[1,1]],
    [[1,1],[1,1]],
    [[1,0,0],[1,1,1]],
    [[0,1,0],[1,1,1]],
    [[0,0,1],[1,1,1]],
    [[0,0,1],[0,0,1],[1,1,1]],
    [[1,1,1],[1,1,1],[1,1,1]],
]

const blockColor = [
    'black',
    'gray',
    'blue',
    'red',
    'purple',
    'yellowgreen'
]

const rotate = [
    0,
    90,
    180,
    270
]

const randomNumber = () => {
    return ({
        shape: Math.floor(Math.random() * 8), 
        color: Math.floor(Math.random() * 6),
        rotate: Math.floor(Math.random() * 4)
    })
}

const makeBlock = () => {
    const num = randomNumber()
    const blockArray = blockShape[num.shape]
    const color = blockColor[num.color]
    const blockRotate = rotate[num.rotate]

    return {
        blockArray,
        color,
        blockRotate
    }
}

export const displayBlock = () => {
    const {blockArray, color, blockRotate} = makeBlock()

    return (
        <div className="object-container" style={{transform: `rotate(${blockRotate}deg)`}}>
            {
                blockArray.map((line) => {
                    return(
                        <div>
                            {line.map((each) => {
                                return(
                                    each === 1?
                                    <div className="object-child block" style={{backgroundColor: color}}></div>
                                    :<div className="object-child"></div>
                                )
                            })}
                        </div>
                    )
                })
            }
        </div>
    )
}