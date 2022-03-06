import { Select, Table } from "antd"
import { useDispatch, useSelector } from "react-redux"
import actionTypes from './../../store/types/index'
import { useState } from 'react';

const OrderTable = ({ style = {} }) => {

  const { Option } = Select
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders.items)
  const locations = useSelector(state => state.locations.items)

  const [rowIndex, setRowIndex] = useState(null)

  const rowClickHandle = (item, index) => {
    const start = locations.find(i => i.id === item.addressStart)
    const end = locations.find(i => i.id === item.addressEnd)
    setRowIndex(index)
    dispatch({ type: actionTypes.SET_POSITION, data: { start, end } })
  }

  const setOrderLocations = (direction, orderId, locationId) => {
    const temp = [...orders].map(order => {
      if (orderId === order.id) {
        const newItem = { ...order }
        newItem[direction === 'start' ? 'addressStart' : 'addressEnd'] = locationId
        return newItem
      } else {
        return order
      }
    })
    return temp
  }

  const posStartChangeHandler = (orderId, locationId) => {
    const item = setOrderLocations('start', orderId, locationId)
    dispatch({ type: actionTypes.SET_ORDER_ITEMS, data: item })
  }

  const posEndChangeHandler = (orderId, locationId) => {
    const item = setOrderLocations('end', orderId, locationId)
    dispatch({ type: actionTypes.SET_ORDER_ITEMS, data: item })
  }

  const columns = [
    {
      title: 'Заказ',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Загрузка',
      key: 'addressStart',
      dataIndex: 'addressStart',
      render: (id, orderId) => (
        <Select defaultValue={id} style={{ width: 120 }}
          onChange={locationId => posStartChangeHandler(orderId.id, locationId)}
          onClick={e => e.stopPropagation()}>
          {locations.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
        </Select>
      )
    },
    {
      title: 'Выгрузка',
      key: 'addressEnd',
      dataIndex: 'addressEnd',
      render: (id, orderId) => (
        <Select defaultValue={id} style={{ width: 120 }}
          onChange={locationId => posEndChangeHandler(orderId.id, locationId)}
          onClick={e => e.stopPropagation()}>
          {locations.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
        </Select>
      )
    }
  ]

  return (
    <div style={style}>
      <Table columns={columns}
        rowClassName={(record, index) => index === rowIndex ? 'ant-table-row-selected' : ''}
        dataSource={orders}
        pagination={false}
        rowKey='id'
        onRow={(record, index) => {
          return {
            onClick: (e) => rowClickHandle(record, index)
          }
        }} />
    </div>
  )

}



export default OrderTable