import axios from '../../src/index'

axios({
  method: 'get',
  params: {
    a: 1,
    b: 2
  },
  url: '/simple/get',
})
