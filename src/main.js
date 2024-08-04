/**************************************************/
/* External libraries */
/**************************************************/
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["FiraSans", "sans-serif"],
      },
    },
  },
};

/**************************************************/
/* Helper to create the wanted address */
/**************************************************/
const createAddress = (i) => {
  let part1 = "tcatnoc".split("").reverse().join("")
  if (i === 1) part1 = "nenotsum.iruam".split("").reverse().join("");
  if (i === 2) part1 = "nenirajap.akkuj".split("").reverse().join("");
  const part2 = String.fromCharCode(Math.pow(2, 6));
  const part3 = "moc.mutimul".split("").reverse().join("");
  return part1 + part2 + part3;
};

/**************************************************/
/* Crawler and Mailto spambot prevention */
/**************************************************/
const createMailtoAnchor = (i) => {
  return `<a class="hover:text-blue-500" href="${
    "mai" + "lto" + ":" + createAddress(i)
  }">${createAddress(i)}</a>`;
};

const createPhoneNumber = (i) => {
  if (i !== 1 && i !== 2) return "";
  const part1 = ".huP".split("").reverse().join("");
  const part2 = (i === 1 ? "040 " : "040 ").split("").reverse().join("");
  const part3 = (i === 1 ? "875 " : "257 ").split("").reverse().join("");
  const part4 = (i === 1 ? "5859 " : "3626 ").split("").reverse().join("");
  return part1 + part2 + part3 + part4;
};

/**************************************************/
/* Form submit handler */
/**************************************************/
const handleFormSubmit = (e) => {
  e.preventDefault();

  // Get the form values
  const title = $("#title").val().trim();
  const message = $("#message").val().trim();
  const queryParams = [];

  // Format values to mailto parameters
  if (title) {
    queryParams.push("subject=" + encodeURIComponent(title));
  }
  if (message) {
    queryParams.push("body=" + encodeURIComponent(message));
  }

  // Construct mailto link
  let mailtoLink = "mailto:" + createAddress(0);
  if (queryParams.length > 0) {
    mailtoLink += "?" + queryParams.join("&");
  }

  // Redirect user to it
  window.location.href = mailtoLink;
};

/**************************************************/
/* Document ready handler */
/**************************************************/
const onReady = () => {
  // Automatically update the year in footer
  $("#page-footer #footer-year").text(new Date().getFullYear());

  // Add mailto anchors to prevent spambots
  $("#mailtoAddress1").html(createMailtoAnchor(1));
  $("#mailtoAddress2").html(createMailtoAnchor(2));

  // Add phone numbers to prevent crawlers
  $("#phoneNumber1").html(createPhoneNumber(1));
  $("#phoneNumber2").html(createPhoneNumber(2));

  // Handle form submit button
  $("#contact-form").on("submit", (e) => handleFormSubmit(e));
};

/**************************************************/
/* Initially call the onReady handler */
/**************************************************/
$(onReady);
