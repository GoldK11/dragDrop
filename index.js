(function () {
  let dragged;

  document.addEventListener("drag", (e) => {
    //   console.log("drag");
  });

  document.addEventListener("dragstart", (e) => {
    dragged = e.target;
    dragged.style.opacity = 0.5;
  });
  document.addEventListener("dragend", (e) => {
    dragged.style.opacity = 1;
  });
  document.addEventListener("dragover", (e) => {
    e.preventDefault(); // 왜 드롭 허용은 이렇게 해줘야 할까?
  });
  document.addEventListener("dragenter", (e) => {
    if (e.target.className === "dropzone") {
      e.target.style.background = "#f9fddc";
    } else if (e.target.className === "disabled") {
      e.target.style.background = "red";
    }
  });
  document.addEventListener("dragleave", (e) => {
    if (e.target.className === "dropzone") {
      e.target.style.background = "";
    } else if (e.target.className === "disabled") {
      e.target.style.background = "";
    }
  });
  document.addEventListener("drop", (e) => {
    e.preventDefault(); // 기본 액션 방지(링크 클릭 등)
    if (e.target.className === "dropzone") {
      e.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      e.target.appendChild(dragged);
    } else if (e.target.className === "disabled") {
      e.target.style.background = "";
    }
  });
})();
