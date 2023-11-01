import { Button } from 'antd';
// import { useDispach } from 'react';
// import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateA } from '../store/actions/a'
// import { connect } from 'react-redux'
// const files = require.context('../', false, /\.jsx|.js$/)
// files.keys().forEach((key) => {
//   console.log(key)
// })
function Abc (props) {
  const dispatch = useDispatch()
  const on = useSelector((state) =>  {
    return state.a
  })
  console.log(on, 'abc')
  // const push = useNavigate()
  const pushA = () => {
    dispatch(updateA({
      abc: 123
    }))
    // push('/ffff')
  }
    return  (
      <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Button type="primary" onClick={pushA}>Button</Button>
      </header>
    )
}

// const mapStateToProps = (state) => {
//   return {
//     data: state.a
//   };
// };

// const mapDispatchToProps = () => {
//   return {}
// }

// export default  connect(mapStateToProps)(Abc)
export default  Abc