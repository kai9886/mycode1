const snowfallContainer = document.getElementById("snowfall");
const giftBox = document.getElementById("gift-box");
const messageBox = document.getElementById("message");
const totalSnowflakes = 80;
// Hàm tạo tuyết
function createSnowflake() {
  const snowflake = document.createElement("div");
  //  lớp cơ bản
  snowflake.classList.add("snowflake");
  // Kích thước và tốc độ
  const sizeIndex = Math.floor(Math.random() * 3);
  let randomDuration;

  if (sizeIndex === 0) {
    // TUYẾT NHỎ
    snowflake.classList.add("snowflake-small");
    randomDuration = Math.random() * 8 + 10;
  } else if (sizeIndex === 1) {
    // TUYẾT VỪA (Sử dụng lớp)
    randomDuration = Math.random() * 6 + 10;
  } else {
    // TUYẾT LỚN
    snowflake.classList.add("snowflake-large");
    randomDuration = Math.random() * 5 + 8;
  }
  // Vị trí
  const randomX = Math.random() * window.innerWidth;
  snowflake.style.left = randomX + "px";
  // Áp dụng thời gian rơi ngẫu nhiên
  snowflake.style.animationDuration = `${randomDuration}s`;

  // Độ trễ ngẫu nhiên (để tuyết rơi từ đầu)
  const randomDelay = Math.random() * 15 * -1;
  snowflake.style.animationDelay = `${randomDelay}s`;

  snowfallContainer.appendChild(snowflake);

  // Xóa tuyết sau khi nó rơi hết
  setTimeout(() => {
    snowflake.remove();
  }, randomDuration * 1000 + 1000);
}

for (let i = 0; i < totalSnowflakes; i++) {
  createSnowflake();
}
// Duy trì luồng tuyết rơi
setInterval(createSnowflake, 200);
// Hàm Show message
function showMessage() {
  // (hiện/ẩn)
  giftBox.style.display = "none";
  messageBox.style.display = "block";

  setTimeout(() => {
    giftBox.style.display = "block";
    messageBox.style.display = "none";
  }, 5000);
}
