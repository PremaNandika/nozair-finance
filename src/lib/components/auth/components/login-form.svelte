<script lang="ts">
	import { z } from 'zod';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { zodClient, zod } from 'sveltekit-superforms/adapters';

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

	$effect(() => {
		console.log($formData);
		console.log($errors);
	});
</script>

<Card.Root class="mx-auto max-w-sm">
	<Card.Header>
		<Card.Title class="text-2xl">Login</Card.Title>
		<Card.Description>Enter your email below to login to your account</Card.Description>
	</Card.Header>
	<Card.Content>
		<form
			class="flex flex-col space-y-3"
			onsubmit={async (e) => {
				e.preventDefault();
				const result = await validateForm({ update: true });
				if (result.valid) {
					console.log('Form is valid');
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
			<div class="pt-10">
				<Form.FormButton class="w-full">Submit</Form.FormButton>
				<div class="mt-4 text-center text-sm">
					Don't have an account?
					<a href="##" class="underline"> Sign up </a>
				</div>
			</div>
		</form>
	</Card.Content>
</Card.Root>
