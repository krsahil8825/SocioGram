const container = document.getElementById("posts-container");
const loader = document.getElementById("loader");

let images = [];
let start = 0;
let limit = 4;
let loading = false;

function createPosts() {
	images = Array.from({ length: 8 }, (_, i) => ({
		id: i + 1,
		src: `img/img${i + 1}.png`,
		alt: `Image ${i + 1}`,
	}));
	shuffleArray(images);
}

function shuffleArray(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}

function loadPosts() {
	if (loading) return;
	loading = true;
	loader.style.display = "block";

	setTimeout(() => {
		for (let i = 0; i < limit; i++) {
			if (start >= images.length) {
				start = 0;
				shuffleArray(images);
			}

			const post = images[start];
			const div = document.createElement("div");
			div.className = "post";

			const img = document.createElement("img");
			img.src = post.src;
			img.alt = post.alt;
			img.className = "post-img";

			div.appendChild(img);
			container.appendChild(div);
			start++;
		}

		loading = false;
		loader.style.display = "none";
	}, 500);
}

window.addEventListener("scroll", () => {
	if (
		window.innerHeight + window.scrollY >=
		document.body.offsetHeight - 50
	) {
		loadPosts();
	}
});

window.onload = () => {
	createPosts();
	loadPosts();
};
