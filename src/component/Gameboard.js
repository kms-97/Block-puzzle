import React, { useContext, useEffect, useState } from "react";
import GameModeContext from "./context/GameMode"
import GameScoreContext from "./context/GameScore";
import "./BlockList.css"
import * as blockUtil from "./BlockUtil"
import "./Gameboard.css"

const Gameboard = () => {
    const GameMode = useContext(GameModeContext)
    const blockListLength = 3

    useEffect(() => {
        document.querySelectorAll('.square').forEach((node) => {
            node.className = 'square'
        })
    }, [GameMode.state.gamemode])
    
    const makeBlockList = (length) => {
        const blockList = []
        for (let i = 0; i < length; i++) {
            blockList.push(<Block key={i}/>)
        }
        return blockList
    }

    const makeBlankArray = (size) => {
        const blankArray = []
        for (let i = 0; i < size; i++) {
            blankArray.push([])
            for (let j = 0; j < size; j++) {
                blankArray[i].push(j)
            }
        }
        return blankArray
    }

    return (
        <div>
            <div className="top-gameboard-container">
                {
                    makeBlankArray(GameMode.state.gamemode).map((horizon, index) => {
                        return(
                            <Horizonboard horizon={horizon} line={index} key={'h' + index}/>
                        )
                    })
                }
            </div>
            <div id="block-list" className="alert alert-light rounded-3 border border-primary">
                {makeBlockList(blockListLength)}
            </div>
        </div>
    )
}

export default Gameboard

const Horizonboard = ({horizon, line}) => {

    return (
        <div className="horizon-gameboard">
            {
                horizon.map((order) => {
                    return(
                        <Eachboard order={order} line={line} key={line + String(order)}/>
                    )
                })
            }
        </div>
    )
}

const Eachboard = ({order, line}) => {

    return (
        <div className="square" id={line + String(order)}/>
    )
}

const Block = () => {
    
    return (
        <div className="block">
            <DisplayBlock/>
        </div>
    )
}

const DisplayBlock = () => {
    const GameMode = useContext(GameModeContext)
    const GameScore = useContext(GameScoreContext)
    const [blockState, setBlockState] = useState({
        blockShape: blockUtil.makeBlock()['blockArray'],
        color: blockUtil.makeBlock()['color']
    })

    useEffect(() => {
        const newState = blockUtil.makeBlock()
        setBlockState(blockState => ({...blockState, blockShape: newState.blockArray, color: newState.color}))
    }, [GameMode.state.gamemode])

    useEffect(() => {
        let filledLine = 0
        let filled = []
        const allSquare = document.querySelectorAll('.square')

        for (let i = 0; i < GameMode.state.gamemode; i++) {
            const rowStart = i*GameMode.state.gamemode
            const rowfilled = []
            const colfilled = []
            for (let j = 0; j < GameMode.state.gamemode; j ++) {
                if (allSquare[rowStart+j].classList.length === 1) continue
                rowfilled.push(allSquare[rowStart+j])
            }
            for (let j = 0; j < GameMode.state.gamemode; j ++) {
                if (allSquare[i+(j*GameMode.state.gamemode)].classList.length === 1) continue
                colfilled.push(allSquare[i+(j*GameMode.state.gamemode)])
            }

            if (rowfilled.length == GameMode.state.gamemode) {
                filled = filled.concat(rowfilled)
                filledLine++
            }
            if (colfilled.length == GameMode.state.gamemode) {
                filled = filled.concat(colfilled)
                filledLine++
            }
        }

        if (filledLine > 0) {
            filled.forEach((node) => {
                node.className = 'square'
            })
            GameScore.actions.setGameScore(GameMode.state.gamemode * filledLine + GameScore.state.gameScore)
        }
    })

    
    useEffect(() => {
        const allBlockContainer = document.getElementsByClassName('block-container')
        const board = getGameBoard()
        isItOver:
            try {
                for (let i = 0; i < allBlockContainer.length; i++) {
                    const blockContainer = allBlockContainer[i]
                    const block = blockContainer.getAttribute('data-shape').split('/').map((each) => (each.split(',').map((str) => (Number(str)))))
                    const row = block[0].length
                    const col = block.length

                    for (let i = 0; i <= board.length - col; i++) {
                        for (let j = 0; j <= board.length - row; j ++) {
                            if (isCanMerge(board, block, i, j, row, col) === 1) break isItOver
                        }
                    }
                }
                throw new Error('game over')
            } catch(error) {
                document.getElementById('game-over').style.display = 'block'
            }
    }, [blockState])

    const isCanMerge = (board, block, x, y, row, col) => {
        for (let i = 0; i < col; i++) {
            for (let j = 0; j < row; j++) {
                if (board[x + i][y + j] && block[i][j]) return 0
            }
        }
        return 1
    }

    const onmousedown = (event) => {
        const blockContainer = event.currentTarget  
        // 클릭 시 보드에 맞게 블록 크기 확장
        const childBlockList = blockContainer.querySelectorAll("div.block-child")
        const squareWidth = document.querySelector('.square').clientWidth
        childBlockList.forEach((childBlock) => {
            childBlock.style.width = squareWidth +'px'
            childBlock.style.height = squareWidth +'px'
        })

        let shiftX = event.clientX - blockContainer.getBoundingClientRect().left;
        let shiftY = event.clientY - blockContainer.getBoundingClientRect().top;

        // (1) absolute 속성과 zIndex 프로퍼티를 수정해 공이 제일 위에서 움직이기 위한 준비를 합니다.
        blockContainer.style.position = 'absolute';
        blockContainer.style.zIndex = 1000;

        // 현재 위치한 부모에서 body로 직접 이동하여
        // body를 기준으로 위치를 지정합니다.
        // 유효하지 않은 위치일 경우 원상복귀를 위한 부모 노드 저장
        const parentNode = blockContainer.parentNode
        document.body.append(blockContainer);

        // 공을 pageX, pageY 좌표 중앙에 위치하게 합니다.
        function moveAt(pageX, pageY) {
            blockContainer.style.left = pageX - shiftX + 'px';
            blockContainer.style.top = pageY - shiftY + 'px';
        }

        // 포인터 아래로 공을 이동시킵니다.
        moveAt(event.pageX, event.pageY);

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        // (2) mousemove로 공을 움직입니다.
        document.addEventListener('mousemove', onMouseMove);

        // (3) 공을 드롭하고, 불필요한 핸들러를 제거합니다.
        blockContainer.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);

            // 블럭이 유효한 위치인지 확인(.sqaure 위에 위치해있는지, 아니면 반환)
            const isValidPosition = (block) => {
                const blockList = block.querySelectorAll(".block-child")
                const targetSqaure = []
                const blockColor = []
                try {
                    for (let i = 0; i < blockList.length; i++) {
                        const childBlock = blockList.item(i)
                        if (childBlock.style["background-color"] === 'transparent') continue
                        blockColor.push(childBlock.style["background-color"])

                        const {x: presentX, y: presentY} = childBlock.getBoundingClientRect()
                        block.hidden = true
                        const objectBelow = document.elementFromPoint(presentX + squareWidth/2, presentY + squareWidth/2)
                        block.hidden = false

                        // 요소 중 하나라도 유효하지 않은 위치에 있으면 원위치
                        if (!(objectBelow && (objectBelow.className === 'square'))) {
                            return
                        }
                        targetSqaure.push(objectBelow)
                    }

                    targetSqaure.forEach((square) => {
                        square.className = `square ${blockColor[0]}`
                    })

                    const newState = blockUtil.makeBlock()
                    setBlockState({...blockState, blockShape: newState.blockArray, color: newState.color})
                    
                } finally {
                    parentNode.append(block)
                    block.style.position = ""
                    block.style.zIndex = ""
                    block.style.left = '';
                    block.style.top = '';
                    blockList.forEach((childBlock) => {
                        childBlock.style.width = '40px'
                        childBlock.style.height = '40px'
                    })
                }
            }
            
            isValidPosition(blockContainer)
        };
    }

    const getGameBoard = () => {
        const board = []
        document.getElementsByClassName('top-gameboard-container')[0].childNodes.forEach((horizon) => {
            let line = []
            horizon.childNodes.forEach((each) => {
                if (each.classList.length === 1) line.push(0)
                else line.push(1)
            })
            board.push(line)
        })

        return board
    }

    return (
        <div className="block-container" onDragStart={() => (false)} onMouseDown={onmousedown} data-shape={blockState.blockShape.join('/')}>
            {
                blockState.blockShape.map((line) => {
                    return(
                        <div className="sub-block-container">
                            {line.map((each) => {
                                return(
                                    each === 1?
                                    <div className="block-child fill" style={{backgroundColor: blockState.color}}></div>
                                    :<div className="block-child blank" style={{backgroundColor: "transparent"}}></div>
                                )
                            })}
                        </div>
                    )
                })
            }
        </div>
    )
}