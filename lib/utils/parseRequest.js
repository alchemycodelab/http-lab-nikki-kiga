module.exports = rawRequest => {
  const [method, path] = rawRequest.toString().split(' ');
  const body = rawRequest.toString().split('\n\n')[1];
  return (body ? { method, path, body } : { method, path });
};
