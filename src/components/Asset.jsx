import React from "react";

function Asset() {
  return (
    <div className="" id="asset" role="tabpanel">
      <div className="card-img-top overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.565489235626!2d7.40626715979903!3d6.8621211261806145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd54ce237d432b523!2zNsKwNTEnNDQuMiJOIDfCsDI0JzIyLjUiRQ!5e1!3m2!1sen!2sng!4v1666089690838!5m2!1sen!2sng"
          width="400"
          height="250"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Asset;
