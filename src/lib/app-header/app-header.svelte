<script>
	import { onMount } from 'svelte';
	let html2pdf;

	onMount(async () => {
		html2pdf = (await import('html2pdf.js')).default;
	});

	function exportToPDF() {
		if (html2pdf) {
			const element = document.getElementById('export-content');
			html2pdf().from(element).save();
		}
	}
</script>

<div class="appHeader">
	<div class="appHeader__title">Resume builder</div>
	<div class="appHeader__actions">
		<div class="appHeader__actions-export">
			<span class="mdi mdi-download"> </span>
			<button on:click={exportToPDF} type="button" class="export-button">Export</button>
		</div>
	</div>
</div>

<style lang="scss">
	.appHeader {
		display: flex;
		align-items: center;
		padding: 10px;
		height: 30px;
		font-family: var(--font-regular);
		background-color: var(--primary-color);
		font-size: var(--h3-font-size);
		&__title {
			color: var(--text-color-inverse);
		}
	}
</style>
