export default ((value) => (defaultValue = 0) => {
  return (value ?? defaultValue).toLocaleString("en-US", {
    style: "currency",
    currency: "EUR",
  });
})();
