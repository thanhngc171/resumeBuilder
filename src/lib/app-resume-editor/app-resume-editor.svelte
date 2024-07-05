<script lang="ts">
	import Grid, { GridItem } from 'svelte-grid-extended';
</script>

<div class="appResumeEditor" id="export-content">
	<Grid cols={10} rows={10}>
		<GridItem x={1} y={0} class="item">Hey</GridItem>
		<GridItem x={3} y={3} w={4} class="item">Hoy</GridItem>
	</Grid>
</div>

<style lang="scss">
	.appResumeEditor {
		display: flex;
		flex: 1;
	}
</style>
