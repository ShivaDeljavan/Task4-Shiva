// ********task41 javascript start*********
const getDataAsycrounous = async () => {
  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const title = data.title;
      const headerElement = document.getElementById("header");
      headerElement.innerText = title;
    })
    .catch((error) => {
      console.log(error);
    });
};

getDataAsycrounous();

// ********task41 javascript end*********

// ********task42 javascript start*********
const getDataWithPromise = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject("HTTP ERROR");
        } else {
          return response.json();
        }
      })
      .then((data) => resolve(data))
      .catch((error) => reject("network error: " + error));
  });
};

const getAllPosts = () => {
  const statusElement = document.getElementById("status");
  statusElement.innerText = "در حال آپدیت..."; // Show updating message

  getDataWithPromise("https://jsonplaceholder.typicode.com/posts")
    .then((data) => {
      console.log(data);

      const dataElement = document.getElementById("data");
      let output = "";
      for (let i = 0; i < data.length; i++) {
        const post = data[i];
        output += `
            <p>
              <strong>userId:</strong> ${post.userId} <br>
              <strong>id:</strong> ${post.id} <br>
              <strong>title:</strong> ${post.title} <br>
              <strong>body:</strong> ${post.body}
            </p>
            <hr>`;
      }
      dataElement.innerHTML = output;

      statusElement.innerText = "آپدیت شد";
    })
    .catch((error) => {
      console.log(error);
      //   alert("خطا در دریافت داده‌ها: " + error);
      statusElement.innerText = "خطا در آپدیت.";
    });
};

const fetchDataInterval = () => {
  getAllPosts(); //دریافت داده ها در ابتدا
  setInterval(() => {
    getAllPosts(); //آپدیت داده ها هر 5 ثانیه یکبار
  }, 5000);
};

window.onload = fetchDataInterval;

// ********task42 javascript end*********

// ********task43 javascript start*********
let intervalId = null;

const startRandomNumberGenerator = () => {
  if (intervalId) {
    clearInterval(intervalId); // Clear any existing interval
  }

  intervalId = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 10); // Generate random number between 0 and 9

    switch (true) {
      case randomNumber < 5:
        alert(`Number: ${randomNumber} - You succeeded!`);
        break;
      case randomNumber >= 5:
        alert(`Number: ${randomNumber} - Try again!`);
        break;
      default:
        console.log("Unexpected case");
    }
  }, 3000);
};

// ********task43 javascript end*********
