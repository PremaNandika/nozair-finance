<script lang="ts">
	import * as FormPrimitive from 'formsnap';
	import type { WithoutChild } from 'bits-ui';
	import { cn } from '$lib/components/shadcn/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		errorClasses,
		children: childrenProp,
		...restProps
	}: WithoutChild<FormPrimitive.FieldErrorsProps> & {
		errorClasses?: string | undefined | null;
	} = $props();
</script>

<FormPrimitive.FieldErrors
	class={cn('text-[0.8rem] font-medium text-destructive', className)}
	{...restProps}
>
	{#snippet children({ errors, errorProps })}
		{#if childrenProp}
			<div class="flex items-center space-x-2">
				<div class="h-5 w-5">
					<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							class="fill-destructive stroke-destructive"
							d="M9.5 7.083c.228 0 .417.188.417.417v3a.419.419 0 0 1-.417.416.419.419 0 0 1-.417-.416v-3c0-.229.189-.417.417-.417ZM2.333 10.5c0-3.957 3.204-7.167 7.16-7.167a7.171 7.171 0 0 1 7.174 7.167 7.171 7.171 0 0 1-7.175 7.166c-3.955 0-7.159-3.21-7.159-7.166Zm.834 0c0 3.499 2.834 6.333 6.333 6.333 3.5 0 6.333-2.834 6.333-6.333C15.833 7 13 4.166 9.5 4.166A6.332 6.332 0 0 0 3.167 10.5Zm5.916 3.416v-.833h.834v.833h-.834Z"
							stroke-width=".667"
						/>
					</svg>
				</div>
				{@render childrenProp({ errors, errorProps })}
			</div>
		{:else}
			{#each errors as error}
				<div class="flex items-center space-x-2">
					<div class="h-5 w-5">
						<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.5 7.083c.228 0 .417.188.417.417v3a.419.419 0 0 1-.417.416.419.419 0 0 1-.417-.416v-3c0-.229.189-.417.417-.417ZM2.333 10.5c0-3.957 3.204-7.167 7.16-7.167a7.171 7.171 0 0 1 7.174 7.167 7.171 7.171 0 0 1-7.175 7.166c-3.955 0-7.159-3.21-7.159-7.166Zm.834 0c0 3.499 2.834 6.333 6.333 6.333 3.5 0 6.333-2.834 6.333-6.333C15.833 7 13 4.166 9.5 4.166A6.332 6.332 0 0 0 3.167 10.5Zm5.916 3.416v-.833h.834v.833h-.834Z"
								fill="#EF4444"
								stroke="#EF4444"
								stroke-width=".667"
							/>
						</svg>
					</div>
					<div {...errorProps} class={cn(errorClasses)}>{error}</div>
				</div>
			{/each}
		{/if}
	{/snippet}
</FormPrimitive.FieldErrors>
