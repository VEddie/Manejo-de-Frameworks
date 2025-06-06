import { useForm } from 'react-hook-form';
import { Button, Field, Input, Stack } from '@chakra-ui/react';
import User from '@/interfaces/User';

const NoteForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>();

    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <form onSubmit={onSubmit}>
            <Stack gap='4' align='flex-start' maxW='sm'>
                <Field.Root invalid={!!errors.username}>
                    <Field.Label>Username</Field.Label>
                    <Input {...register('username')} />
                    <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.password}>
                    <Field.Label>Last name</Field.Label>
                    <Input {...register('password')} type='password'/>
                    <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
                </Field.Root>

                <Button type='submit'>Entrar</Button>
            </Stack>
        </form>
    );
};

export default NoteForm;
