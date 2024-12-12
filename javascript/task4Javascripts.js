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

//-----------------------------------------------------------------

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
  statusElement.innerText = "در حال آپدیت...";

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

//-----------------------------------------------------------------

// ********task43 javascript start*********
let intervalId = null;

const startRandomNumberGenerator = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 10);

    switch (true) {
      case randomNumber < 5:
        alert(`عدد: ${randomNumber} - موفق شدید!`);
        break;
      case randomNumber >= 5:
        alert(`عدد: ${randomNumber} - دوباره تلاش کنید!`);
        break;
      default:
        console.log("خطایی رخ داده");
    }
  }, 3000);
};

// ********task43 javascript end*********

//-----------------------------------------------------------------

// ********task44 javascript start*********
const generateRandomArray = (size) => {
  const randomArray = [];
  for (let i = 0; i < size; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
  }
  return randomArray;
};
//مرتب سازی کوچک به بزرگ
const sortDescending = (array) => {
  return array.sort((a, b) => b - a);
};

const createAndSortArray = () => {
  //مرتب سازی بزرگ به کوچک
  const sortAscending = (array) => {
    return array.sort((a, b) => a - b);
  };

  //ایجاد و چاپ آرایه اصلی رندوم
  const randomArray = generateRandomArray(8);
  console.log("Original Array:", randomArray);

  //چاپ صعودی آرایه
  const ascendingArray = sortAscending(randomArray.slice());
  console.log("Sorted Ascending:", ascendingArray);

  //چاپ نزولی آرایه
  const descendingArray = sortDescending(randomArray.slice());
  console.log("Sorted Descending:", descendingArray);
};

// ********task44 javascript end*********

//-----------------------------------------------------------------

// ********task45 javascript start*********
const multiplythree = () => {
  const originalArray = [1, 2, 3, 4, 5, 6];
  console.log("Original Array:", originalArray);

  const multipliedArray = originalArray.map((num) => num * 3);
  console.log("Multiplied Array:", multipliedArray);
};
// ********task45 javascript end*********

//-----------------------------------------------------------------

// ********task46 javascript start*********

const defaultImage = "./images/defaultImg.jpg";
const hoverImage = "./images/hoveredImg3.jpg";

function changeImageToHover() {
  const imageElement = document.getElementById("hover-image");
  imageElement.src = hoverImage;
}

function changeImageToDefault() {
  const imageElement = document.getElementById("hover-image");
  imageElement.src = defaultImage;
}

// ********task46 javascript end*********
