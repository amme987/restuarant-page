const contact = () => {
  const content = document.getElementById("content");
  const main = document.createElement("main");
  content.appendChild(main);

  const address = document.createElement("h3");
  main.appendChild(address).textContent = "Address";
  const addressInfo = document.createElement("p");
  main.appendChild(addressInfo).textContent =
    "1234 Fork Rd, Gainesville, GA 12345 ";
  main.appendChild(document.createElement("hr"));

  const phone = document.createElement("h3");
  main.appendChild(phone).textContent = "Phone";
  const phoneNumber = document.createElement("p");
  main.appendChild(phoneNumber).textContent = "123-456-7890";
  main.appendChild(document.createElement("hr"));

  const email = document.createElement("h3");
  main.appendChild(email).textContent = "Email";
  const emailAddress = document.createElement("p");
  main.appendChild(emailAddress).textContent = "contact@thehungryfork.com";
};

export default contact;
