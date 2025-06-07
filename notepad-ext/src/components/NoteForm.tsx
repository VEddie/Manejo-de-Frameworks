import { useForm } from 'react-hook-form';
import { Button, Field, Input, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { fetchUser, getUserList, setCurrentUser, setUserList, userExists } from '../utilities/storageFunctions';
import User from '../interfaces/User';

const NoteForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>();

    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        if(!userExists(data)) {
            setCurrentUser({...data, id: getUserList().length + 1});
            setUserList({...data, id: getUserList().length + 1});
        }

        else {
            const existingUser = fetchUser(data.username, data.password);
            setCurrentUser(existingUser);
        }

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
