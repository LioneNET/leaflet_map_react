import { Col, Row } from "antd"
import { useState } from "react"
import MapPlace from "./components/map/MapPlace"
import OrderTable from './components/table/OrderTable'

const App = () => {

  const maxWidth = 300
  const showOverflowMax = 500

  const [movePointer, setMovePointer] = useState({
    move: false,
    onPointer: false,
    width: maxWidth
  })

  const handleMoveBlock = e => {
    if (movePointer.move) {
      const width = movePointer.width + e.movementX
      let posMove = {
        ...movePointer,
        width: width > maxWidth ? width : maxWidth,
        move: width > maxWidth,
        onPointer: width > maxWidth
      }
      setMovePointer(posMove)
    }
  }

  const mouseDownHandler = () => {
    if (movePointer.onPointer) {
      setMovePointer({ ...movePointer, move: true })
    }
  }

  const mouseUpHandler = (e) => {
    setMovePointer({ ...movePointer, move: false })
  }

  const mouseOnPointerHandler = status => {
    setMovePointer({ ...movePointer, onPointer: status })
  }

  return (
    <Row className='main'
      onMouseMove={handleMoveBlock}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}>

      <Col className="item-place" style={{
        width: movePointer.width,
        overflowX: movePointer.width > showOverflowMax ? 'hidden' : 'auto'
      }}>
        <div
          onMouseEnter={() => mouseOnPointerHandler(true)}
          onMouseLeave={() => mouseOnPointerHandler(false)}
          className="pointer"></div>
        <OrderTable style={{ minWidth: showOverflowMax }} />
      </Col>

      <Col className="map-place">
        <MapPlace />
      </Col>
    </Row>
  )
}

export default App