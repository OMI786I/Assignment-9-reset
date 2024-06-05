const getStoredListedData = () => {
  const storedListedData = localStorage.getItem("listed-Data");
  if (storedListedData) {
    return JSON.parse(storedListedData);
  }
  return [];
};

const listedData = (id) => {
  const storedListedData = getStoredListedData();
  const exists = storedListedData.find((listId) => listId == id);
  if (!exists) {
    storedListedData.push(id);
    localStorage.setItem("listed-Data", JSON.stringify(storedListedData));
  }
};

const removeListedData = (id) => {
  const storedListedData = getStoredListedData();
  const updatedListedData = storedListedData.filter((listId) => listId != id);
  localStorage.setItem("listed-Data", JSON.stringify(updatedListedData));
};

export { getStoredListedData, listedData, removeListedData };
