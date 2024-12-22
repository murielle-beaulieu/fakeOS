export const currTime = () => {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  console.log(`${hours}:${minutes}:${seconds}`);
  return `${hours}:${minutes}: ${seconds} `
}

// setInterval((currTime), 1000);

// now i need to work out how to display the clock and update it
