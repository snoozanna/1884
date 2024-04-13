document.addEventListener("DOMContentLoaded", function () {
  const paragraph1 = document.getElementById("paragraph1");
  const paragraph2 = document.getElementById("paragraph2");
  const paragraph3 = document.getElementById("paragraph3");
  const paragraph4 = document.getElementById("paragraph4");
  gsap.from(paragraph1, { duration: 0.1, opacity: 0, delay: 0.2 });
  gsap.from(paragraph2, { duration: 0.1, opacity: 0, delay: 2 });
  gsap.from(paragraph3, { duration: 0.1, opacity: 0, delay: 4 });
  gsap.from(paragraph4, { duration: 0.1, opacity: 0, delay: 6 });

  console.log("hello");
});
