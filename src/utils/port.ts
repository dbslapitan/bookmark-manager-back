export const normalize = (port: string) => {
  const portNum = Number(port);
  return isNaN(portNum) ? 3000 : portNum;
};