import Fetch from '../../utils/fetch'

export const demo01 = (id) => {
  return Fetch(`/mybatis/user/selectByPrimaryKey/${id}`)
}
