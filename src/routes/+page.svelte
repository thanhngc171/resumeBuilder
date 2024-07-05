<script lang="ts">
	import AppHeader from '$lib/app-header/app-header.svelte';
	import AppResumeTemplates from '$lib/app-resume-templates/app-resume-templates.svelte';
	import AppResumeEditor from '$lib/app-resume-editor/app-resume-editor.svelte';
</script>

<div class="appResumeBuilder">
	<div class="appResumeBuilder__header">
		<AppHeader />
	</div>
	<div class="appResumeBuilder__content">
		<AppResumeTemplates />
		<AppResumeEditor />
	</div>
</div>

<style lang="scss">
	.appResumeBuilder {
		display: flex;
		flex-direction: column;
		height: 100%;
		&__header {
			flex-shrink: 0;
		}
		&__content {
			display: flex;
			flex: 1;
			overflow: hidden;
		}
	}
</style>
