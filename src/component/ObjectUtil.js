const blockShape = [
    [[1]],
    [[0,1],[1,1]],
    [[1,1],[1,1]],
    [[1,0,0],[1,1,1]],
    [[0,1,0],[1,1,1]],
    [[0,1,0],[0,1,0]],
    [[0,0,1],[1,1,1]],
    [[0,1,0],[0,1,0],[0,1,0]],
    [[0,0,1],[0,0,1],[1,1,1]],
    [[1,1,1],[1,1,1],[1,1,1]],
]

const blockColor = [
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
        shape: Math.floor(Math.random() * 10), 
        color: Math.floor(Math.random() * 5),
        rotate: Math.floor(Math.random() * 4)
    })
}

export const makeBlock = () => {
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