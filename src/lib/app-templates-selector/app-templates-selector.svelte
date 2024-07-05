<script lang="ts">
	import { writable } from 'svelte/store';
	import { slide } from 'svelte/transition';
	const categories: any[] = [
		{
			name: 'Cat 1',
			templates: [
				{
					name: 'Template 1'
				}
			]
		},
		{
			name: 'Cat 2',
			templates: [
				{
					name: 'Template 2'
				}
			]
		},
		{
			name: 'Cat 3',
			templates: [
				{
					name: 'Template 3'
				}
			]
		},
		{
			name: 'Cat 4',
			templates: [
				{
					name: 'Template 4'
				}
			]
		}
	];

	const expandedCategories = writable<Record<string, boolean>>({});

	function expandCategory(categoryName: string): void {
		expandedCategories.update((categories: Record<string, boolean>) => ({
			...categories,
			[categoryName]: !categories[categoryName]
		}));

		console.log(categoryName);
	}
</script>

<div class="templatesSelector">
	<div class="templatesSelector__categories">
		{#each categories as category, index}
			<button
				class="templatesSelector__categories-category"
				on:click={() => expandCategory(category.name)}
				aria-expanded={$expandedCategories[category.name] || false}
			>
				<span class="templatesSelector__categories-category-title">{category.name}</span>
				<span
					class="chevron-icon {$expandedCategories[category.name] ? 'chevron-up' : 'chevron-down'}"
				></span>
			</button>
			{#if $expandedCategories[category.name]}
				<div class="templatesSelector__categories-templates" transition:slide>
					{#each category.templates as template}
						<div class="templatesSelector__categories-templates-template">
							{template.name}
						</div>
					{/each}
				</div>
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
	.templatesSelector {
		border-right: 1px solid var(--border-color);
		height: 100%;
		overflow-y: auto;
		&__categories {
			&-category {
				align-items: center;
				display: flex;
				justify-content: space-between;
				width: 100%;
				padding: 10px 15px;
				background: none;
				border: none;
				border-bottom: 1px solid var(--border-color);
				text-align: left;
				font-size: 16px;
				cursor: pointer;
			}

			&-templates {
				display: flex;
				flex-direction: column;
				padding: 10px;
				&-template {
					transition: transform 0.2s ease-in-out;
				}
			}
		}
	}

	.chevron-icon {
		border: solid #666;
		border-width: 0 2px 2px 0;
		display: inline-block;
		padding: 3px;
		transition: transform 0.2s ease-in-out;
	}

	.chevron-down {
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
	}

	.chevron-up {
		transform: rotate(-135deg);
		-webkit-transform: rotate(-135deg);
	}
</style>
