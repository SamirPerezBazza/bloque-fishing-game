<div data-testid="loader" class="loader-container" style="--duration: 1.5s">
	<div class="loader-bar"></div>
</div>

<style>
	.loader-container {
		width: 100%;
		height: 4px;
		background-color: #e0e0e0;
		overflow: hidden;
		position: relative;
		border-radius: 2px;
	}

	.loader-bar {
		height: 100%;
		width: 30%;
		background-color: #007bff;
		position: absolute;
		animation: slide var(--duration) linear infinite;
		border-radius: 2px;
	}

	@keyframes slide {
		0% {
			left: -30%;
		}
		50% {
			left: 50%;
			width: 40%;
		}
		100% {
			left: 100%;
			width: 30%;
		}
	}
</style>
