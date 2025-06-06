import { useForm } from 'react-hook-form';
import { Button, Field, Input, Stack } from '@chakra-ui/react';
import User from '@/interfaces/User';
import { getUserList, setCurrentUser } from '../utilities/storageFunctions';
import { useNavigate } from 'react-router-dom';

const NoteForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>();

    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        const userCount = getUserList().length + 1;
        setCurrentUser({ id: userCount, ...data });
        navigate('/note-app');
    });

    return (
        <form onSubmit={onSubmit}>
            <Stack
                gap='4'
                justifyContent='center'
                width={'xs'}
                height={250}
                border={'1px solid black'}
                borderRadius={10}
                padding={5}
            >
                <Field.Root invalid={!!errors.username}>
                    <Field.Label>Username</Field.Label>
                    <Input {...register('username')} />
                    <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.password}>
                    <Field.Label>Password</Field.Label>
                    <Input {...register('password')} type='password' />
                    <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
                </Field.Root>

                <Button type='submit' variant={'subtle'}>Entrar</Button>
            </Stack>
        </form>
    );
};

export default NoteForm;
