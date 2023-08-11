import { useEffect, useState } from "react";

export function Users(url) {
  const [dataUsers, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return { dataUsers };
}

/* const url =  'http://localhost:8080/users'
fetch(url)
.then(response => response.json())
.then(data => mostrarData(data))
.catch(err => console.log(err))
const mostrarData = (data) => {
    console.log(data)
} */
