<script lang="ts">
	import AppTemplatesSelector from '$lib/app-templates-selector/app-templates-selector.svelte';
</script>

<div class="appResumeTemplates">
	<div class="appResumeTemplates__header"></div>
	<div class="appResumeTemplates__templates">
		<AppTemplatesSelector />
	</div>
</div>

<style lang="scss">
	.appResumeTemplates {
		display: flex;
		flex-direction: column;
		height: 100%;
		flex: 0.4;
		background-color: var(--background-white);

		&__header {
			height: 40px;
			border: 1px solid var(--border-color);
		}

		&__templates {
			flex: 1;
		}
	}
</style>
