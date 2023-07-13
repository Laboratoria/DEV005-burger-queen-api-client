const calculateTime = (entryTime, deliveryTime) => {
    const entryTimes = new Date(entryTime).getTime();
    const deliveryTimes = new Date(deliveryTime).getTime();
    const elapsedMilliseconds = deliveryTimes - entryTimes;
    const elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60));
    return `${elapsedMinutes} minutos`;
  };
  
  export default calculateTime;
  