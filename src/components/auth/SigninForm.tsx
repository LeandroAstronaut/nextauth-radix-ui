"use client"
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons'
import { Button, Flex, TextField } from '@radix-ui/themes'
import React from 'react'

function SigninForm() {
  return (
    <Flex direction="column" gap="2">
        <label htmlFor="email">Email</label>
        <TextField.Root
        type='email'
        placeholder='email@domain.com'
        autoFocus
        >
            <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16"></EnvelopeClosedIcon>

            </TextField.Slot>
        </TextField.Root>

        <label htmlFor="email">Password</label>
        <TextField.Root
        type='password'
        placeholder='******'
        >
            <TextField.Slot>
                <LockClosedIcon height="16" width="16"></LockClosedIcon>
            </TextField.Slot>
        </TextField.Root>
        <Button>
            Sign In
        </Button>
    </Flex>
  )
}

export default SigninForm