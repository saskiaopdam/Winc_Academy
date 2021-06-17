async function awaitGetData() {
  try {
    const fetchedData = await getData();
    return fetchedData;
  } catch (error) {
    alert(error);
  }
}

awaitGetData().then(console.log);

alert("Succes");
