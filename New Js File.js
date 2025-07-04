// 轮播图脚本
const slides = document.querySelectorAll('.slider img');
let currentSlide = 0;

function showSlide() {
	slides.forEach((slide, index) => {
		if (index === currentSlide) {
			slide.classList.add('active');
		} else {
			slide.classList.remove('active');
		}
	});
	currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 3000); // 每3秒切换一次图片

// 弹窗脚本
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');

loginBtn.onclick = function() {
	loginModal.style.display = "block";
}

registerBtn.onclick = function() {
	registerModal.style.display = "block";
}

closeLogin.onclick = function() {
	loginModal.style.display = "none";
}

closeRegister.onclick = function() {
	registerModal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target === loginModal) {
		loginModal.style.display = "none";
	}
	if (event.target === registerModal) {
		registerModal.style.display = "none";
	}
}
// 播放音乐
function playMusic() {
	var audio = new Audio('http://www.iyinren.com/song/17916/'); // 替换为你的音乐文件路径
	audio.play();
}