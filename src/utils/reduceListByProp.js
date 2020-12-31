export default (listToRemove, itemsToRemove, propObject) => {
  return listToRemove.reduce((acc, curr) => {
    const item = itemsToRemove.find(
      (stateItem) => stateItem[propObject] === curr[propObject]
    );
    if (!item) acc.push(curr);
    return acc;
  }, []);
};
