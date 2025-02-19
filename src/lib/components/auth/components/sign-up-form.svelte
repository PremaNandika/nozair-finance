<script lang="ts">
	import { z } from 'zod';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { zodClient, zod } from 'sveltekit-superforms/adapters';
	// import authService from '../service';
	// import { toast } from 'svelte-sonner';

	import * as Card from '$lib/components/shadcn/ui/card/index';
	import { Input } from '$lib/components/shadcn/ui/input/index';
	import * as Form from '$lib/components/shadcn/ui/form/index';
	import { cn } from '$lib/components/shadcn/utils';

	const initialData = {
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	const formSchema = z
		.object({
			username: z.string().min(2).nonempty(),
			email: z.string().min(2).max(50).email().nonempty(),
			password: z.string().min(8).max(16).nonempty(),
			confirmPassword: z.string().min(8).max(16).nonempty()
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: 'Passwords do not match'
		});

	const form = superForm(defaults(initialData, zod(formSchema)), {
		SPA: true,
		validators: zodClient(formSchema),
		validationMethod: 'auto'
	});

	const { form: formData, errors, allErrors, validateForm } = form;

	async function handleSubmit() {
		// if ($formData.email === '' || $formData.password === '' || $formData.username === '') {
		// 	return;
		// }
		// try {
		// 	await authService.signUpWithEmail({
		// 		email: $formData.email,
		// 		password: $formData.password,
		// 		username: $formData.username
		// 	});
		// 	toast('Account created successfully. Please check your email to verify your account.');
		// } catch (error) {
		// 	toast.error('Something went wrong. Please try again.');
		// }
	}
</script>

<Card.Root class="mx-auto w-full max-w-md">
	<Card.Header>
		<Card.Title class="text-2xl">Sign Up</Card.Title>
		<Card.Description>Create an account and take the first step toward success!</Card.Description>
	</Card.Header>
	<Card.Content>
		<form
			class="flex flex-col"
			onsubmit={async (e) => {
				e.preventDefault();
				const result = await validateForm({ update: true });
				if (result.valid) {
					console.log('Form is valid');
				}
			}}
		>
			<div class="grid grid-cols-2 gap-4">
				<Form.Field {form} class="col-span-2" name="username">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Username</Form.Label>
							<Input
								class={cn($errors.username && '!border-destructive')}
								{...props}
								bind:value={$formData.username}
							/>
						{/snippet}
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} class="col-span-2" name="email">
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
				<Form.Field {form} name="confirmPassword">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Confirm Password</Form.Label>
							<Input
								class={cn($errors.confirmPassword && '!border-destructive')}
								type="password"
								{...props}
								bind:value={$formData.confirmPassword}
							/>
						{/snippet}
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>
			</div>
			<div class="pt-10">
				<Form.FormButton class="w-full">Sign up</Form.FormButton>
				<div class="mt-4 text-center text-sm">
					have an account?
					<a href="/login" class="underline"> Login </a>
				</div>
			</div>
		</form>
	</Card.Content>
</Card.Root>
