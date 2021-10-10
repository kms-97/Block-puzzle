const blockShape = [
    [[1]],
    [[0,1],[1,1]],
    [[1,1],[1,1]],
    [[1,0,0],[1,1,1]],
    [[0,1,0],[1,1,1]],
    [[1],[1]],
    [[0,0,1],[1,1,1]],
    [[1,1,1]],
    [[0,0,1],[0,0,1],[1,1,1]],
    [[1,1,1],[0,0,1],[0,0,1]],
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
        shape: Math.floor(Math.random() * 11), 
        color: Math.floor(Math.random() * 5),
        rotate: Math.floor(Math.random() * 4)
    })
}

const rotateShape = (shape, rotate) => {
    let rotated = []
    const row = shape[0].length
    const col = shape.length
    switch (rotate) {
        case 0:
            return shape
        case 90:
            for (let i = 0; i < row; i++) {
                let line = []
                for (let j = col - 1; j >= 0; j--) {
                    line.push(shape[j][i])
                }
                rotated.push(line)
            }
            break
        case 180:
            for (let i = col - 1; i >= 0; i--) {
                let line = []
                for (let j = row - 1; j >= 0; j--) {
                    line.push(shape[i][j])
                }
                rotated.push(line)
            }
            break
        case 270:
            for (let i = row - 1; i >= 0; i--) {
                let line = []
                for (let j = 0; j < col; j++) {
                    line.push(shape[j][i])
                }
                rotated.push(line)
            }
            break
    }
    return rotated
}

export const makeBlock = () => {
    const num = randomNumber()
    const blockArray = rotateShape(blockShape[num.shape], rotate[num.rotate])
    const color = blockColor[num.color]

    return {
        blockArray,
        color,
    }
}