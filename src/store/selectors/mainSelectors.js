export const main = (state) => state.getIn(['main'])

export const getStatus = (state) => state.getIn(['main', 'status'])
export const getData = (state) => state.getIn(['main', 'data'])
