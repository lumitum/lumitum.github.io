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
  let mailtoLink = "mailto:" + atob('Y29udGFjdEBsdW1pdHVtLmNvbQ==');
  if (queryParams.length > 0) {
    mailtoLink += "?" + queryParams.join("&");
  }

  // Redirect user to it
  window.location.href = mailtoLink;
};


/**************************************************/
/* Animation to walk through the tiles when idleing */
/**************************************************/
const walkthroughAnimation = (tiles, index, prevTimer) => {
  if (index > -1) {
    clearTimeout(prevTimer);
    tiles.removeClass('tile-hover');
    tiles.eq(index).addClass('tile-hover');
  }
  index = (index + 1) % tiles.length;
  let timer = setTimeout(() => walkthroughAnimation(tiles, index, timer), 2000);
  
  tiles.on('mouseover', () => {
    tiles.removeClass('tile-hover');
    clearTimeout(timer);
  });
};

/**************************************************/
/* Document ready handler */
/**************************************************/
const onReady = () => {
  // Automatically update the year in footer
  $("#page-footer #footer-year").text(new Date().getFullYear());

  // Add mailto anchors to prevent spambots
  $("#mailtoAddress").html('<a class="hover:text-blue-600 hover:underline" href="mailto:'
    +atob('anVra2EucGFqYXJpbmVuQGx1bWl0dW0uY29t')+'">'+atob('anVra2EucGFqYXJpbmVuQGx1bWl0dW0uY29t')+'</a>');

  // Add phone numbers to prevent crawlers
  $("#phoneNumber").html('<a class="hover:text-blue-600 hover:underline" href="tel:'
    +atob('MDQwNzUyNjI2Mw==')+'">Puh. '+atob('MDQwNzUyNjI2Mw==')+'</a>');

  // Handle form submit button
  $("#contact-form").on("submit", (e) => handleFormSubmit(e));

  // Initiate tiles walk through animation
  walkthroughAnimation($(".tile"), -1);

  // Google Analytics consent banner
  $("#cookie-accept").on("click", () => {
    $("#cookie-banner").addClass("hidden");
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-QKVBSJPNM2";
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-QKVBSJPNM2');
    };
  });
  $("#cookie-decline").on("click", () => {
    $("#cookie-banner").addClass("hidden");
  });

  // Say hello to developer
  console.log("Hello Developer! 👋");
};

/**************************************************/
/* Initially call the onReady handler */
/**************************************************/
$(onReady);
