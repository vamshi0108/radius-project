const name = document.evaluate(
  "/html/body/div/table/tbody/tr[3]/td/table/tbody/tr[1]/td[1]/table/tbody/tr[8]/td[2]/font/strong",
  document,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null
).singleNodeValue.innerHTML;

const email = document.evaluate(
  "/html/body/div/table/tbody/tr[3]/td/table/tbody/tr[2]/td[2]/table/tbody/tr[4]/td/font/a",
  document,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null
).singleNodeValue.innerHTML;

const phone = document.evaluate(
  "/html/body/div/table/tbody/tr[3]/td/table/tbody/tr[2]/td[2]/table/tbody/tr[3]/td/font/a",
  document,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null
).singleNodeValue.innerHTML;

const beds = document.evaluate(
  "/html/body/div/table/tbody/tr[8]/td[2]/table/tbody/tr/td/table/tbody/tr[2]/td/font[3]/strong[1]",
  document,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null
).singleNodeValue.innerHTML;

const baths = document.evaluate(
  "/html/body/div/table/tbody/tr[8]/td[2]/table/tbody/tr/td/table/tbody/tr[2]/td/font[3]/strong[2]",
  document,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null
).singleNodeValue.innerHTML;

const address = document.evaluate(
  "/html/body/div/table/tbody/tr[8]/td[2]/table/tbody/tr/td/table/tbody/tr[2]/td/font[1]/strong/a",
  document,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null
).singleNodeValue.innerHTML;

// const type = document.evaluate(
//   "/html/body/div/table/tbody/tr[3]/td/table/tbody/tr[1]/td[1]/table/tbody/tr[8]/td[2]/font/strong",
//   document,
//   null,
//   XPathResult.FIRST_ORDERED_NODE_TYPE,
//   null
// ).singleNodeValue.innerHTML;

const userData = {
  name,
  email,
  phone,
  beds,
  baths,
  address,
};

const convertData = (userData) => {
  fetch("/parse?data=" + JSON.stringify(userData))
};

convertData(userData);
