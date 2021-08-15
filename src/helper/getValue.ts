export default (object: Record<string, unknown>, path = ''): Record<string, unknown>|string =>
  path.split('.').reduce(reducer, object);

const reducer = (o, x)=> (o === undefined ? o : o[x]);
