module.exports = rawRequest => {
  const [method, path] = rawRequest.toString().split(' ');
  const body = rawRequest.toString().split('\r\n\r\n')[1];
  return (body ? { method, path, body } : { method, path });
};
