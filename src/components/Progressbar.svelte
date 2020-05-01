<script>
    export let value;
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	import{ afterUpdate } from 'svelte'

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	afterUpdate(()=>{
		progress.set(value)
	})
</script>

<style>
	.Progressbar {
		display: block;
		width: 100%;
		padding-top: 20px;
	}

	progress {
		display: block;
		width: 100%;
	}
</style>

{#if value > 0}
	<div class="Progressbar">
		<progress value={$progress} />
	</div>
	{#if value == 1}
		 Upload Completed!
	{/if}
{/if}
