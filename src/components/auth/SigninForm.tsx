"use client"
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { Button, Flex, TextField, Text } from '@radix-ui/themes';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

function SigninForm() {

    const {control, handleSubmit, formState: {errors}} = useForm({
        values: {
            email: "",
            password: "",
        }
    });

    const onSubmit = handleSubmit ( data =>{
        console.log(data);
    })
    return (
        <form onSubmit={onSubmit}>
            <Flex direction="column" gap="2">
                <label htmlFor="email">Email</label>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: {
                            message: "Email is required",
                            value: true,
                        }
                    }}
                    render={({field}) =>{
                        return (
                            <TextField.Root
                            type="email"
                            placeholder="email@domain.com"
                            autoFocus
                            { ...field }
                            >
                                <TextField.Slot>
                                    <EnvelopeClosedIcon height="16" width="16"></EnvelopeClosedIcon>
                                </TextField.Slot>
                            </TextField.Root>
                        )}
                    }
                />

                {errors.email && <Text color="red" className="text-xs">{errors.email.message}</Text>}

                <label htmlFor="password">Password</label>
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: {
                            message: "Password is required",
                            value: true,
                        },
                        minLength: {
                            message: "Password min 6 char",
                            value: 6,
                        }
                    }}
                    render={({field}) =>{
                        return (
                            <TextField.Root
                            type='password'
                            placeholder='******'
                            { ...field }
                            >
                                <TextField.Slot>
                                    <LockClosedIcon height="16" width="16"></LockClosedIcon>
                                </TextField.Slot>
                            </TextField.Root>
                        )}
                    }
                />

                {errors.password && <Text color="red" className="text-xs">{errors.password.message}</Text>}


                <Button type="submit" mt="4">
                    Sign In
                </Button>
            </Flex>
        </form>

    )
}

export default SigninForm