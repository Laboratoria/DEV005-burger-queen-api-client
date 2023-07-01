const calculateTime = (entryTime, deliveryTime) => {
    const entryTimestamp = new Date(entryTime).getTime();
    const deliveryTimestamp = new Date(deliveryTime).getTime();
    const elapsedMilliseconds = deliveryTimestamp - entryTimestamp;
    const elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60));
    return `${elapsedMinutes} minutos`;
  };
  
  export default calculateTime;
  