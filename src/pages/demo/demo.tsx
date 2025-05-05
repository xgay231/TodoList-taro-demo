import { Button, Input, View } from '@tarojs/components'
import { useRef, useState } from 'react'
import './demo.scss'

// 1.需要有一个输入框 用来输入我们todoDesc
// 2.有一个确认按钮 点击按钮可以添加到todoList中
// 3.有一个列表 用来展示我们添加的todoList
// 4.列表item需要有一个删除按钮 点击可以删除当前的todoitem
export default ()=> {
  const[todoList, setTodoList] = useState([])
  const InputRef = useRef(null)

  const onsubmit = () => {
    console.log(InputRef.current.value)
    setTodoList([
      ...todoList,
      InputRef.current.value,
    ])
  }

  return <View>
    <Input type='text' placeholder='请输入待办事项' ref={InputRef} />
    <Button onClick={onsubmit}>确认添加</Button>
    {
      todoList.map((item, index) => {
        return <View key={index} className='todo-item'>
          <View>{item}</View>
          <View>删除</View>
        </View>
      })
    }
  </View>
}
