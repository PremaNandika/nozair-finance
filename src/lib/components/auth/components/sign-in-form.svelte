<script lang="ts">
	import { z } from 'zod';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { zodClient, zod } from 'sveltekit-superforms/adapters';
	// import authService from '../service';
	// import { goto } from '$app/navigation';
	// import { toast } from 'svelte-sonner';

	import * as Card from '$lib/components/shadcn/ui/card/index';
	import { Input } from '$lib/components/shadcn/ui/input/index';
	import * as Form from '$lib/components/shadcn/ui/form/index';
	import { cn } from '$lib/components/shadcn/utils';

	const initialData = {
		email: '',
		password: ''
	};

	const formSchema = z
		.object({
			email: z.string().min(2).max(50).email(),
			password: z.string().min(8).max(16)
		})
		.required();

	const form = superForm(defaults(initialData, zod(formSchema)), {
		SPA: true,
		validators: zodClient(formSchema),
		validationMethod: 'auto'
	});

	const { form: formData, errors, allErrors, validateForm } = form;

	async function handleSubmit() {
		// if ($formData.email === '' || $formData.password === '') {
		// 	return;
		// }
		// try {
		// 	await authService.signInWithEmail({
		// 		email: $formData.email,
		// 		password: $formData.password
		// 	});
		// 	toast('Signed in successfully.');
		// 	goto('/');
		// } catch (error) {
		// 	toast.error('Something went wrong. Please try again.');
		// }
	}
</script>

<Card.Root class="mx-auto w-full max-w-md">
	<Card.Header>
		<Card.Title class="text-2xl">Sign In</Card.Title>
		<Card.Description>Enter your email below to login to your account</Card.Description>
	</Card.Header>
	<Card.Content>
		<form
			class="flex flex-col space-y-3"
			onsubmit={async (e) => {
				e.preventDefault();
				const result = await validateForm({ update: true });
				if (result.valid) {
					handleSubmit();
				}
			}}
		>
			<Form.Field {form} name="email">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Email</Form.Label>
						<Input
							class={cn($errors.email && '!border-destructive')}
							{...props}
							bind:value={$formData.email}
						/>
					{/snippet}
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
			<div class="flex flex-col space-y-2">
				<Form.Field {form} name="password">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Password</Form.Label>
							<Input
								class={cn($errors.password && '!border-destructive')}
								type="password"
								{...props}
								bind:value={$formData.password}
							/>
						{/snippet}
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>
				<a href="/login" class="text-right text-xs transition hover:underline">Forgot Password?</a>
			</div>
			<div class="pt-10">
				<Form.FormButton class="w-full" disabled={$allErrors.length > 0}>Sign in</Form.FormButton>
				<div class="mt-4 text-center text-sm">
					Don't have an account?
					<a href="/sign-up" class="underline"> Sign up </a>
				</div>
			</div>
		</form>
	</Card.Content>
</Card.Root>
